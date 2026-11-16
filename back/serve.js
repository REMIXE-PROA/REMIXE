import http from "http";
import fs from "fs";
import path from "path";
// Linha 4
import { iniciar, resumirTexto, gerarSlides, extrairTextoPDF, extrairTextoPPTX, gerarPDF, gerarQuestaoQuiz } from "./index.js"; // gerarAudioResumo

const server = http.createServer( async function (req, res){
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, x-nome-arquivo");

    if (req.method === "OPTIONS") { res.writeHead(204); res.end(); return; }

    // 1. Logo abaixo do if (req.method === "OPTIONS") no seu serve.js, adicione esta rota:
if (req.method === "GET" && req.url === "/aula") {
    if (fs.existsSync("banco_provisorio.json")) {
        const dadosSalvos = fs.readFileSync("banco_provisorio.json", "utf-8");
        res.setHeader("Content-Type", "application/json");
        res.end(dadosSalvos);
    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ erro: "Nenhuma aula cadastrada ainda." }));
    }
    return;
}


    // NOVA ROTA: Se o navegador pedir um arquivo para download
   // ROTA DE DOWNLOAD E STREAMING DE VÍDEO/ÁUDIO
    // ROTA DE DOWNLOAD E STREAMING DE VÍDEO/ÁUDIO/PDF
    if (req.method === "GET" && req.url.startsWith("/download?arquivo=")) {
        const nomeArquivo = decodeURIComponent(req.url.split("=")[1]);

        if (!fs.existsSync(nomeArquivo)) {
            res.statusCode = 404;
            res.end("Arquivo não encontrado.");
            return;
        }

        // Se for vídeo .mp4, faz streaming para o player <video> do React funcionar
        if (nomeArquivo.toLowerCase().endsWith(".mp4")) {
            const stat = fs.statSync(nomeArquivo);
            const fileSize = stat.size;
            const range = req.headers.range;

            if (range) {
                const parts = range.replace(/bytes=/, "").split("-");
                const start = parseInt(parts[0], 10);
                const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
                const chunksize = (end - start) + 1;
                const file = fs.createReadStream(nomeArquivo, { start, end });

                res.writeHead(206, {
                    "Content-Range": `bytes ${start}-${end}/${fileSize}`,
                    "Accept-Ranges": "bytes",
                    "Content-Length": chunksize,
                    "Content-Type": "video/mp4",
                });
                file.pipe(res);
            } else {
                res.writeHead(200, {
                    "Content-Length": fileSize,
                    "Content-Type": "video/mp4",
                });
                fs.createReadStream(nomeArquivo).pipe(res);
            }
            return;
        }

        // Se for áudio .mp3, envia direto para o player <audio>
        if (nomeArquivo.toLowerCase().endsWith(".mp3")) {
            res.setHeader("Content-Type", "audio/mpeg");
            fs.createReadStream(nomeArquivo).pipe(res);
            return;
        }

        // Se for PowerPoint (.pptx), força o download (navegador não abre pptx nativamente)
        if (nomeArquivo.toLowerCase().endsWith(".pptx")) {
            res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.presentationml.presentation");
            res.setHeader("Content-Disposition", `attachment; filename="${nomeArquivo}"`);
            fs.createReadStream(nomeArquivo).pipe(res);
            return;
        }

        // Se for PDF, manda como "inline" para o iframe do React conseguir ler na tela!
        if (nomeArquivo.toLowerCase().endsWith(".pdf")) {
            res.setHeader("Content-Type", "application/pdf");
            res.setHeader("Content-Disposition", `inline; filename="${nomeArquivo}"`);
            fs.createReadStream(nomeArquivo).pipe(res);
            return;
        }
        
        // Fallback para texto txt ou formatos genéricos
        res.setHeader("Content-Disposition", `attachment; filename="${nomeArquivo}"`);
        fs.createReadStream(nomeArquivo).pipe(res);
        return;
    }
    
    // NOVA ROTA: Gera pergunta do Quiz usando o resumo salvo no servidor
    if (req.method === "GET" && req.url.startsWith("/quiz?numero=")) {
        const numero = req.url.split("=")[1];

        if (!fs.existsSync("banco_provisorio.json")) {
            res.statusCode = 404;
            res.end(JSON.stringify({ erro: "Nenhuma aula foi enviada pela empresa ainda." }));
            return;
        }

        try {
            const dadosSalvos = JSON.parse(fs.readFileSync("banco_provisorio.json", "utf-8"));
            const questao = await gerarQuestaoQuiz(dadosSalvos.resumo, numero);
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(questao));
        } catch (erro) {
            console.error("Erro ao gerar quiz:", erro);
            res.statusCode = 500;
            res.end(JSON.stringify({ erro: "Falha ao gerar questão na IA." }));
        }
        return;
    }

    // Se não for download, mostra a página HTML normal
    if (req.method === "GET"){
        res.end(`<!DOCTYPE html>
<html>
<head>
    <title>Enviar Vídeo</title>
    <meta charset="UTF-8">
</head>
<body style="font-family: Arial, sans-serif; padding: 20px;">
    <h2>Envie seu vídeo .mp4</h2>
    <input type="file" id="conteudo" accept="video/mp4, .pdf, .pptx">
    <button onclick="enviar()">Enviar para o Servidor</button>

    <hr>
    
    <h3>Transcrição Completa</h3>
    <textarea id="caixaTexto" style="display: none; width: 100%; height: 100px;"></textarea>
    <button id="botaoBaixar" style="display: none;" onclick="baixarTexto('caixaTexto', 'transcricao.txt')">Baixar Transcrição (.txt)</button>
    <button id="botaoBaixarPdfTr" style="display: none;" onclick="baixarArquivoServidor(arquivoPdfTr)">Baixar Transcrição (.pdf)</button>

    <h3>Resumo</h3>
    <textarea id="caixaResumo" style="display: none; width: 100%; height: 100px;"></textarea>
    <button id="botaoBaixarResumo" style="display: none;" onclick="baixarTexto('caixaResumo', 'resumo.txt')">Baixar Resumo (.txt)</button>
    <button id="botaoBaixarPdfResumo" style="display: none;" onclick="baixarArquivoServidor(arquivoPdfResumo)">Baixar Resumo (.pdf)</button>
    
    <!-- Novo botão gigante para os Slides -->
    <h3 id="tituloSlides" style="display: none; color: #003366;">Apresentação de Slides</h3>
    <button id="botaoBaixarSlides" style="display: none; padding: 10px 20px; font-size: 16px; font-weight: bold; background-color: #d83b01; color: white; border: none; border-radius: 5px; cursor: pointer;" onclick="baixarSlides()">📥 Baixar Arquivo PowerPoint (.pptx)</button>

    <!-- NOVO: Player e Botão do Áudio Resumo -->
    <h3 id="tituloAudio" style="display: none; color: #107c41;">Ouvir Resumo Narrado</h3>
    <audio id="playerAudio" controls style="display: none; margin-bottom: 10px; width: 100%; max-width: 400px;"></audio>
    <br>
    <button id="botaoBaixarAudio" style="display: none; padding: 10px 20px; font-size: 16px; font-weight: bold; background-color: #107c41; color: white; border: none; border-radius: 5px; cursor: pointer;" onclick="baixarArquivoServidor(arquivoAudioResumo)">🎧 Baixar Áudio (.mp3)</button>

    <script>
        let arquivoPptxCriado = ""; 
        let arquivoPdfTr = "";
        let arquivoPdfResumo = "";
        let arquivoAudioResumo = ""; // 1. Nova variável global para o áudio

        async function enviar() {
            const input = document.getElementById('conteudo');
            const arquivo = input.files[0];

            if (!arquivo) {
                alert("Por favor, selecione um arquivo primeiro!");
                return;
            }

            const nome = arquivo.name.toLowerCase();   

            if (!nome.endsWith(".mp4") && !nome.endsWith(".pdf") && !nome.endsWith(".pptx")) {
                alert("Formato não suportado! Envie apenas .mp4, .pdf ou .pptx.");
                return;
            }

            const botaoEnviar = document.querySelector('button');
            botaoEnviar.innerText = "Processando Vídeo ➡️ Áudio ➡️ Texto ➡️ Resumo ➡️ Slides ➡️ Voz ⏳";

            const resposta = await fetch('http://localhost:3000', {
                method: 'POST', 
                headers: {
                    'x-nome-arquivo': encodeURIComponent(arquivo.name)
                },
                body: arquivo   
            });
            
            const dados = await resposta.json();
            
            // Preenche os textos na tela
            document.getElementById('caixaTexto').style.display = "block";
            document.getElementById('botaoBaixar').style.display = "inline-block";
            document.getElementById('caixaTexto').value = dados.transcricao;

            document.getElementById('caixaResumo').style.display = "block";
            document.getElementById('botaoBaixarResumo').style.display = "inline-block";
            document.getElementById('caixaResumo').value = dados.resumo;

            // Salva os nomes dos PDFs e exibe os botões de download
            arquivoPdfTr = dados.pdfTranscricao;
            arquivoPdfResumo = dados.pdfResumo;
            document.getElementById('botaoBaixarPdfTr').style.display = "inline-block";
            document.getElementById('botaoBaixarPdfResumo').style.display = "inline-block";

            // Ativa o botão de Slides
            arquivoPptxCriado = dados.slides;
            document.getElementById('tituloSlides').style.display = "block";
            document.getElementById('botaoBaixarSlides').style.display = "block";

            // 2. NOVO: Ativa o Player de Áudio e o botão de download .mp3
            arquivoAudioResumo = dados.audioResumo;
            const player = document.getElementById('playerAudio');
            player.src = "/download?arquivo=" + arquivoAudioResumo;
            player.style.display = "block";
            document.getElementById('tituloAudio').style.display = "block";
            document.getElementById('botaoBaixarAudio').style.display = "inline-block";

            botaoEnviar.innerText = "Enviar para o Servidor";
            alert("Mágica concluída! Tudo gerado com sucesso.");
        }

        function baixarTexto(idCaixa, nomeArquivo) { 
            const texto = document.getElementById(idCaixa).value;
            const arquivoVirtual = new Blob([texto], { type: 'text/plain' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(arquivoVirtual);
            link.download = nomeArquivo;
            link.click();
        }

        function baixarArquivoServidor(nomeArquivo) {
            window.location.href = "/download?arquivo=" + nomeArquivo;
        }

        function baixarSlides() {
            baixarArquivoServidor(arquivoPptxCriado);
        }
    </script>
</body>
</html>`)
    }
    const nomeCodificado = req.headers['x-nome-arquivo'];
    const nomeOriginal = decodeURIComponent(nomeCodificado);
    const extensao = path.extname(nomeOriginal);
    if (req.method === "POST") {
        let pedacos = [];
        req.on("data", function (pedaco) {
            pedacos.push(pedaco)
        })
        req.on("end", function(){
            const videoCompleto = Buffer.concat(pedacos);
            const nomeDoarquivo = "arquivo_" + Date.now() + Math.round(Math.random() * 1000000) + extensao;
            let textoParaResumo = "";
            
            fs.writeFile(nomeDoarquivo, videoCompleto, async function () {
                console.log("Video recebido. Iniciando a fábrica...");
                
                if (extensao === ".mp4") {
                    await iniciar(nomeDoarquivo);
                    const nomeDoarquivoText = nomeDoarquivo.replace(".mp4",".txt");
                    textoParaResumo = await fs.promises.readFile(nomeDoarquivoText, "utf-8");

                } else if (extensao === ".pdf") {
                     textoParaResumo = await extrairTextoPDF(nomeDoarquivo);
                }
                else if (extensao === ".pptx") {
                    textoParaResumo = await extrairTextoPPTX(nomeDoarquivo);
                }
                
                    
                    console.log("5. Gerando resumo... 🧠");
                    const textoResumido = await resumirTexto(textoParaResumo);
                    
                    
                    //Inicia a montagem dos slides!
                    const nomeDoArquivoPptx = await gerarSlides(textoResumido);

                    // --- GERA OS PDFs ---
                    const nomePdfTranscricao = "transcricao_" + Date.now() + ".pdf";
                    const nomePdfResumo = "resumo_" + Date.now() + ".pdf";

                    console.log("6. Gerando PDFs... 📄");
                    await gerarPDF(textoParaResumo, nomePdfTranscricao);
                    await gerarPDF(textoResumido, nomePdfResumo);

                    // --- NOVO: GERA O ÁUDIO DO RESUMO ---
                     // const nomeAudioResumo = await gerarAudioResumo(textoResumido);
                    
                    // Empacotamos as  coisas e mandamos de volta pro navegador
                                const pacoteFinal = {
                    arquivoOriginal: nomeDoarquivo,
                    transcricao: textoParaResumo,
                    resumo: textoResumido,
                    slides: nomeDoArquivoPptx,
                    pdfTranscricao: nomePdfTranscricao,
                    pdfResumo: nomePdfResumo,
                    audioResumo: null
                };

            // Salva como se fosse o Banco de Dados para o Colaborador acessar depois!
            fs.writeFileSync("banco_provisorio.json", JSON.stringify(pacoteFinal, null, 2), "utf-8");

            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(pacoteFinal));   
                
            })
        })
    }
});
server.listen(3000, () => console.log("Servidor Full-Stack rodando em http://localhost:3000"));