
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config({ path: "backend/.env" });

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

app.post("/api/gerar-questao", async (req, res) => {
    try {
        const { conteudo, numero } = req.body;

        if (!conteudo || ![1, 2, 3, 4].includes(numero)) {
            return res.status(400).json({
                erro: "Conteúdo ou número inválido"
            });
        }

        const prompt = `
Crie uma questão de múltipla escolha sobre:
${conteudo}

Gere quatro alternativas e apenas uma correta.
A posição da correta deve ser ${numero}.

Retorne exclusivamente JSON válido:
{
  "comando": "Pergunta",
  "alternativa1": "Alternativa A",
  "alternativa2": "Alternativa B",
  "alternativa3": "Alternativa C",
  "alternativa4": "Alternativa D"
}
`;

        const resposta = await fetch(
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-goog-api-key": process.env.GEMINI_API_KEY
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{ text: prompt }]
                    }]
                })
            }
        );

        const dados = await resposta.json();

        if (!resposta.ok) {
            return res.status(500).json(dados);
        }

        const texto = dados.candidates[0].content.parts[0].text;
        const objeto = JSON.parse(texto);

        res.json(objeto);

    } catch (erro) {
        console.error(erro);

        res.status(500).json({
            erro: "Erro ao gerar questão"
        });
    }
});

app.listen(3001, () => {
    console.log("Backend rodando na porta 3001");
});
