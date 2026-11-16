import Groq from "groq-sdk"; 
import fs from "fs";
import ffmpeg from "fluent-ffmpeg";
import ffmpegPath from "ffmpeg-static";
import PptxGenJS from "pptxgenjs"; // fazer slide (pptx)
import { extractText } from "unpdf"; // ler pdf 
import Officeparser from "officeparser"; // ler slide (pptx) 
import pdfmake from 'pdfmake'; // fazer pdf
import Roboto from "pdfmake/fonts/Roboto.js"; // pegar fonte 
pdfmake.addFonts(Roboto);

// Desativa downloads externos e restringe acessos desnecessários
pdfmake.setUrlAccessPolicy(() => false);
pdfmake.setLocalAccessPolicy(() => true);


// provisorio
import { MsEdgeTTS, OUTPUT_FORMAT } from "msedge-tts"; // TOMAR CUIDADO BIBLIOTECA NÃO OFICIAL, POSSUI RISCO......
// -----------------------------
ffmpeg.setFfmpegPath(ffmpegPath);

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const videoOriginal = "teste.mp4";  

const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Passo 1 original (preserva a qualidade original do áudio para o Whisper Turbo)
function extrairAudio(videoInput, audioOutput) {
  return new Promise((resolve, reject) => {
    console.log("1. Extraindo áudio do vídeo... 🎬 -> 🎵");
    ffmpeg(videoInput)
      .output(audioOutput)
      .noVideo()
      .audioCodec("libmp3lame")
      .audioBitrate("192k") // Bitrate alto para não comprimir a voz nas falas rápidas
      .on("end", () => resolve())
      .on("error", (err) => reject(err))
      .run(); 
  });
}

// Função para extrair texto de um PDF
export async function extrairTextoPDF(caminhoDoArquivo) {
    const bufferArquivo = await fs.promises.readFile(caminhoDoArquivo);
    const uint8 = new Uint8Array(bufferArquivo);
    
    const { text } = await extractText(uint8);
    
    // Se vier como array de páginas, junta tudo com quebra de linha.
    // Se já for string, mantém. Se for nulo/indefinido, entrega string vazia.
    if (Array.isArray(text)) {
        return text.join("\n");
    }
    
    return String(text || "");
}

// Função para extrair texto de um PPTX

export async function extrairTextoPPTX(caminhoDoArquivo) {
  // 1. Lê o arquivo no disco e extrai o texto de todos os slides
   //console.log("Conteúdo de officeparser:", Officeparser);
  console.log("Lendo conteúdo do PPTX... 📊");
  const documento = await Officeparser.parseOffice(caminhoDoArquivo);


  let textoFormatado = await documento.to("text");
  let resultado = String(textoFormatado.value || "").trim();

  if (!resultado) {
        throw new Error("Não foi possível encontrar texto nos slides. Verifique se o PPTX não contém apenas imagens.");
    }

    // 3. Devolve a string pronta para o serve.js mandar para a Groq
    return resultado;
}



// Função para gerar PDF

export async function gerarPDF(texto, caminhoDestino) {
  const textoTratado = (texto || "").normalize("NFKC");
  const docDefinition = {
        content: [
            textoTratado
        ]
    };
    await pdfmake.createPdf(docDefinition).write(caminhoDestino);
}



// Divide o texto APENAS no fim de frases (. ? !) para nunca cortar uma frase no meio
function dividirPorFrases(texto, tamanhoMaximo = 2200) {
  const frases = texto.match(/[^.!?]+[.!?]+|\s*[^.!?]+$/g) || [texto];
  const blocos = [];
  let blocoAtual = "";

  for (const frase of frases) {
    if ((blocoAtual + " " + frase).length > tamanhoMaximo && blocoAtual.length > 0) {
      blocos.push(blocoAtual.trim());
      blocoAtual = frase.trim();
    } else {
      blocoAtual += (blocoAtual ? " " : " ") + frase.trim();
    }
  }
  if (blocoAtual.trim().length > 0) {
    blocos.push(blocoAtual.trim());
  }
  return blocos;
}

// Garante que cada parágrafo seja um bloco contínuo, sem quebras de linha soltas no meio
function normalizarParagrafos(texto) {
  return texto
    .replace(/\r\n/g, "\n")
    .split(/\n\s*\n/)
    .map((paragrafo) =>
      paragrafo
        .replace(/\s*\n\s*/g, " ")
        .replace(/\s{2,}/g, " ")
        .trim()
    )
    .filter(Boolean)
    .join("\n\n");
}

async function formatarBloco(trecho, tentativa = 1) {
  try {
    const formatacaoia = await groq.chat.completions.create({
      model: "openai/gpt-oss-20b",
      temperature: 0.2,
      reasoning_effort: "low",
      max_completion_tokens: 2048,
      messages: [
        {
          role: "system",
          content: `Você é um assistente especialista em transcrição e revisão de textos em português.
Sua função é pegar a transcrição bruta de um vídeo, corrigir erros claros de pontuação/ortografia da fala e organizar o texto em PARÁGRAFOS contínuos e legíveis (de 4 a 6 frases por parágrafo), separados por uma linha em branco.
Não resuma, não altere o sentido original e devolva APENAS o texto formatado.`
        },
        {
          role: "user",
          content: trecho
        }
      ]
    });

    return formatacaoia.choices?.[0]?.message?.content?.trim();
  } catch (err) {
    if ((err.status === 429 || err.status === 413) && tentativa <= 3) {
      console.log("⏳ Limite de tokens/minuto atingido. Aguardando 20s...");
      await esperar(20000);
      return formatarBloco(trecho, tentativa + 1);
    }
    throw err;
  }
}




export async function iniciar(video_recebido) { 
  try {
    const audioExtraido = video_recebido.replace(".mp4",".mp3");
    await extrairAudio(video_recebido, audioExtraido);
    const arquivoTextoFinal = video_recebido.replace(".mp4",".txt");

    // Passo 2 original com whisper-large-v3-turbo (muito mais fiel ao início e fim do áudio)
    console.log("2. Enviando para a Groq Whisper (Transcrição)... 🚀");
    const respostaWhisper = await groq.audio.transcriptions.create({
      file: fs.createReadStream(audioExtraido),
      model: "whisper-large-v3-turbo",
      language: "pt",
      response_format: "json",
    });

    const transcricaoBruta =
      typeof respostaWhisper === "string"
        ? respostaWhisper
        : respostaWhisper.text;

    if (!transcricaoBruta || !transcricaoBruta.trim()) {
      throw new Error("A transcrição retornou vazia.");
    }

    const blocos = dividirPorFrases(transcricaoBruta, 2200);
    const blocosFormatados = [];

    console.log(`3. IA organizando em parágrafos (${blocos.length} partes)... 🧠`);

    for (let i = 0; i < blocos.length; i++) {
      console.log(`   -> Formatando parte ${i + 1} de ${blocos.length}...`);
      const textoParte = await formatarBloco(blocos[i]);

      if (textoParte) {
        blocosFormatados.push(normalizarParagrafos(textoParte));
      } else {
        blocosFormatados.push(blocos[i]);
      }

      if (i < blocos.length - 1) await esperar(3000);
    }

    const textoFinal = blocosFormatados.join("\n\n");

    console.log(`4. Gravando o texto no arquivo "${arquivoTextoFinal}"... 💾`);
    fs.writeFileSync(arquivoTextoFinal, textoFinal, "utf-8");

    console.log("\n--- PRÉVIA DO TEXTO SALVO ---");
    console.log(textoFinal.substring(0, 500) + "\n...");
    console.log("----------------------------");

    console.log("\n✅ PROCESSO CONCLUÍDO COM SUCESSO!");
    if (fs.existsSync(audioExtraido)) fs.unlinkSync(audioExtraido);

  } catch (error) {
    console.error("\n❌ Erro no fluxo:", error.message);
    if (fs.existsSync(audioExtraido)) fs.unlinkSync(audioExtraido);
  }
}





export async function resumirTexto(textoDaTranscricao) {
  if (!textoDaTranscricao || textoDaTranscricao.trim().length === 0) {
        throw new Error("O texto extraído está vazio. Verifique se o PDF contém texto selecionável.");
    }
    const resposta = await groq.chat.completions.create({
        messages: [
            {
                role: "system", 
                content: "Você é um especialista em resumir vídeos. Crie um resumo claro do texto e, logo abaixo, faça uma lista com os 'Tópicos Principais' abordados. Regra obrigatória: NÃO utilize formatação Markdown, nunca use asteriscos (*) nem negrito (**). Use apenas texto simples, hífens (-) para marcar listas e quebras de linha normais."},
            {
                role: "user",
                content: textoDaTranscricao
            }
        ],
        model: "openai/gpt-oss-20b", 
    });

    return resposta.choices[0].message.content;
}


// alto nivel 

// Função para transformar o resumo em Slides
export async function gerarSlides(resumoTexto) {
    console.log("6. Pedindo para a IA estruturar os slides... 🧠");
    
    // 1. Prompt com limite explícito de 3 a 4 tópicos por slide para evitar estouro de tela
    const resposta = await groq.chat.completions.create({
        messages: [
            {
                role: "system",
                content: `Você é um criador de apresentações profissionais. Transforme o texto fornecido em uma estrutura de slides.
      REGRAS OBRIGATÓRIAS:
      - Retorne ESTRITAMENTE um objeto JSON válido, sem nenhuma formatação Markdown e sem texto extra.
      - Crie um título principal curto e impactante para a capa da apresentação.
      - Divida o conteúdo em múltiplos slides.
      - CADA SLIDE DEVE TER NO MÁXIMO 3 A 4 PONTOS/TÓPICOS.
      - Mantenha cada ponto conciso e direto.

      Exemplo de formato esperado:
      {
        "tituloCapa": "Título Principal do Tema",
        "slides": [
          { "titulo": "Visão Geral", "pontos": ["Ponto principal A", "Ponto principal B"] },
          { "titulo": "Principais Desafios", "pontos": ["Desafio 1", "Desafio 2", "Desafio 3"] }
        ]
      }`
            },
            {
                role: "user",
                content: resumoTexto
            }
        ],
        model: "openai/gpt-oss-20b",
        temperature: 0.1,
        response_format: { type: "json_object" }
    });

    // Limpeza de blocos Markdown residuais da resposta
    let conteudoIA = resposta.choices[0].message.content.trim();
    conteudoIA = conteudoIA.replace(/^```json/i, "").replace(/^```/i, "").replace(/```$/i, "").trim();
    
    const dadosApresentacao = JSON.parse(conteudoIA);

    console.log("7. Montando o arquivo do PowerPoint (.pptx)... 📊");
    const pres = new PptxGenJS();

    // 2. Slide de Capa
    const slideCapa = pres.addSlide();
    slideCapa.addText(dadosApresentacao.tituloCapa, {
        x: "10%",
        y: "35%",
        w: "80%",
        h: 1.5,
        fontSize: 40,
        bold: true,
        align: "center",
        color: "003366",
        shrinkText: true
    });

    // 3. Slides de Conteúdo baseados no retorno da IA
    dadosApresentacao.slides.forEach(item => {
        const slide = pres.addSlide();

        // Título fixo no topo com margem adequada
        slide.addText(item.titulo, {
          x: 0.8,
          y: 0.6,
          w: "85%",
          h: 0.6,
          fontSize: 28,
          bold: true,
          color: "003366"
    });
        
        // Mapeamento dos bullets com opções individuais
        const bullets = item.pontos.map(ponto => ({
            text: ponto,
            options: { bullet: true, breakLine: true }
        }));

        // Caixa de texto com shrinkText ativado para auto-ajuste de fonte
        slide.addText(bullets, {
          x: 0.8,
          y: 1.4,             // Inicia logo abaixo do título
          w: "85%",
          h: 5.0,
          fontSize: 22,       // Tamanho de leitura confortável
          color: "363636",
          valign: "top",      // 👈 Força o texto a colar no topo da caixa
          shrinkText: true    // Encolhe se o texto for muito extenso
      });
    });

    // 4. Gravação do arquivo
    const nomeArquivoPptx = "apresentacao_" + Date.now() + ".pptx";
    await pres.writeFile({ fileName: nomeArquivoPptx });
    console.log("✅ Slides criados com sucesso: " + nomeArquivoPptx);
    return nomeArquivoPptx;
}


// ALERTA COD PROVISÒRIO>>>>>>>>>>
// USO DE BIBLIOTECA NÂO OFICIAL POSSUI RISCO.......





// ⚠️ PROVISÓRIO (Apenas localhost): Trocar pelo SDK Oficial da Azure antes de ir para produção
// --- [INICIO PROVISORIO-AUDIO] ---
// export async function gerarAudioResumo(textoResumo) {
//     console.log("8. Gerando narração em áudio com voz neural... 🎙️");
    
//     const tts = new MsEdgeTTS();
//     await tts.setMetadata("pt-BR-AntonioNeural", OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3);

//     const nomeArquivoMp3 = "resumo_audio_" + Date.now() + ".mp3";
//     const textoLimpo = (textoResumo || "").replaceAll("*", "").normalize("NFKC");

//     // Passamos "." (pasta atual). O msedge-tts cria "audio.mp3" e devolve o caminho em audioFilePath
//     const { audioFilePath } = await tts.toFile(".", textoLimpo);
    
//     // Renomeamos de "audio.mp3" para o nosso nome único com Date.now()
//     await fs.promises.rename(audioFilePath, nomeArquivoMp3);

//     console.log("✅ Áudio criado com sucesso: " + nomeArquivoMp3);
    
//     return nomeArquivoMp3;
// }
// // --- [FIM PROVISORIO-AUDIO] ---



export async function gerarQuestaoQuiz(resumo, numero) {
    console.log(`Gerando questão do Quiz no Gemini (Alternativa correta: ${numero})... 🧠`);

    const resposta = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-goog-api-key": process.env.GEMINI_API_KEY
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            {
                                text: `Você é um gerador de questões educacionais para uma plataforma de estudos.
Sua tarefa é receber um conteúdo ou tema informado pelo usuário e criar uma questão de múltipla escolha para testar o conhecimento sobre esse assunto.
REGRAS PARA CRIAR A QUESTÃO:
Crie uma pergunta objetiva e coerente com o conteúdo informado.
Gere exatamente quatro alternativas.
As alternativas devem ser identificadas pelas letras A, B, C e D.
Somente uma alternativa pode estar correta.
As três alternativas incorretas devem ser plausíveis, mas conter informações erradas.
Evite alternativas muito óbvias ou absurdas.
Não crie alternativas repetidas.
Utilize uma linguagem clara e adequada ao nível do conteúdo apresentado.
Não forneça explicações antes ou depois do JSON.
DISTRIBUIÇÃO DA RESPOSTA CORRETA:
1 = Alternativa A correta.
2 = Alternativa B correta.
3 = Alternativa C correta.
4 = Alternativa D correta.
Respeite obrigatoriamente essa posição.
FORMATO DE RESPOSTA:
{
"comando": "Enunciado da questão",
"alternativa1": "Texto da alternativa A",
"alternativa2": "Texto da alternativa B",
"alternativa3": "Texto da alternativa C",
"alternativa4": "Texto da alternativa D"
}
IMPORTANTE: Não utilize Markdown. Não coloque o JSON dentro de blocos de código.
CONTEÚDO DO USUÁRIO: ${resumo}
NÚMERO DA ALTERNATIVA CORRETA: ${numero}`
                            }
                        ]
                    }
                ]
            })
        }
    );

    const dados = await resposta.json();

    if (!resposta.ok) {
        throw new Error(JSON.stringify(dados));
    }

    let textoLimpo = dados.candidates[0].content.parts[0].text
        .replace(/^```json/i, "")
        .replace(/^```/i, "")
        .replace(/```$/i, "")
        .trim();

    return JSON.parse(textoLimpo);
}