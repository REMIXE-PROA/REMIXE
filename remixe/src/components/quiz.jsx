
import Styles from './css/quiz.module.css'

function Quiz() {

    let numero = 0

    // FUNÇÃO PARA VERIFICAR A RESPOSTA
    function verificarResposta(event) {

        let clicado = event.currentTarget

        let fundoQuiz = clicado.closest("." + Styles.fundo)

        let alternativas = fundoQuiz.querySelectorAll(
            "." + Styles.alternativas
        )

        let respostaSelecionada = Number(clicado.dataset.resposta)

        if (numero === 0) return

        alternativas.forEach((alternativa) => {

            let numeroAlternativa = Number(alternativa.dataset.resposta)

            alternativa.classList.remove(Styles.certo)
            alternativa.classList.remove(Styles.errado)

            if (numeroAlternativa === numero) {
                alternativa.classList.add(Styles.certo)
            }
            else {
                alternativa.classList.add(Styles.errado)
            }

            alternativa.style.pointerEvents = "none"

        })

        console.log("Resposta selecionada:", respostaSelecionada)
        console.log("Resposta correta:", numero)

        if (respostaSelecionada === numero) {
            console.log("Você acertou!")
        }
        else {
            console.log("Você errou!")
        }

    }


    // FUNÇÃO PARA GERAR A QUESTÃO
    async function API(event) {

        let fundoQuiz = event.currentTarget.closest("." + Styles.fundo)

        let inputEnviar = fundoQuiz.querySelector("." + Styles.inputEnviar)

        let comando = fundoQuiz.querySelector("." + Styles.comando_texto)

        let alternativa1 = fundoQuiz.querySelector("." + Styles.alternativa1)
        let alternativa2 = fundoQuiz.querySelector("." + Styles.alternativa2)
        let alternativa3 = fundoQuiz.querySelector("." + Styles.alternativa3)
        let alternativa4 = fundoQuiz.querySelector("." + Styles.alternativa4)

        let alternativas = fundoQuiz.querySelectorAll(
            "." + Styles.alternativas
        )

        let conteudo = inputEnviar.value.trim()

        if (!conteudo) {
            alert("Digite um conteúdo para gerar a questão!")
            return
        }

        let numeroSorteado = Math.floor(Math.random() * 4) + 1

        try {

            const resposta = await fetch(
                "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",

                        "X-goog-api-key": "Coloque sua chave aqui!"
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

O usuário informará um número entre 1 e 4, que representa a posição da alternativa correta:

1 = Alternativa A correta.
2 = Alternativa B correta.
3 = Alternativa C correta.
4 = Alternativa D correta.

Respeite obrigatoriamente essa posição. Não altere a posição indicada.

FORMATO DE RESPOSTA:

Retorne exclusivamente um objeto JSON válido, seguindo exatamente esta estrutura:

{
    "comando": "Enunciado da questão",
    "alternativa1": "Texto da alternativa A",
    "alternativa2": "Texto da alternativa B",
    "alternativa3": "Texto da alternativa C",
    "alternativa4": "Texto da alternativa D"
}

IMPORTANTE:

Não utilize Markdown.
Não coloque o JSON dentro de blocos de código.
Não adicione comentários.
Não adicione campos extras.
Não coloque a resposta correta em nenhum campo adicional.

Garanta que a alternativa correta corresponda ao número solicitado.

CONTEÚDO DO USUÁRIO: ${conteudo}

NÚMERO DA ALTERNATIVA CORRETA: ${numeroSorteado}`
                                    }
                                ]
                            }
                        ]

                    })
                }
            )

            const dados = await resposta.json()

            if (!resposta.ok) {
                console.log("Erro na API:", dados)
                return
            }

            let texto = dados.candidates?.[0]?.content?.parts?.[0]?.text

            if (!texto) {
                console.log("A API não retornou uma questão válida:", dados)
                return
            }

            // REMOVE POSSÍVEIS BLOCOS MARKDOWN
            texto = texto.trim()
                .replace(/^```(?:json)?\s*/i, "")
                .replace(/\s*```$/, "")

            let objeto = JSON.parse(texto)

            // VERIFICA SE TODOS OS CAMPOS EXISTEM
            if (
                !objeto.comando ||
                !objeto.alternativa1 ||
                !objeto.alternativa2 ||
                !objeto.alternativa3 ||
                !objeto.alternativa4
            ) {
                console.log("JSON incompleto:", objeto)
                return
            }

            // ATUALIZA A QUESTÃO
            comando.textContent = objeto.comando

            alternativa1.textContent = objeto.alternativa1
            alternativa2.textContent = objeto.alternativa2
            alternativa3.textContent = objeto.alternativa3
            alternativa4.textContent = objeto.alternativa4

            // ATUALIZA O NÚMERO DA RESPOSTA CORRETA
            numero = numeroSorteado

            // REINICIA AS ALTERNATIVAS
            alternativas.forEach((alternativa) => {

                alternativa.classList.remove(Styles.certo)
                alternativa.classList.remove(Styles.errado)

                alternativa.style.pointerEvents = "auto"

            })

            console.log("Número sorteado:", numero)
            console.log("Questão gerada:", objeto)

        }

        catch (erro) {

            console.log("Erro na requisição:", erro)

        }

    }


    return (

        <div className={Styles.fundo}>

            <div className={Styles.fundo_quiz}>

                <div className={Styles.comando}>
                    <p className={Styles.comando_texto}></p>
                </div>


                <div className={Styles.ajuste_alternativas}>

                    <div
                        className={Styles.alternativas}
                        data-resposta="1"
                        onClick={verificarResposta}
                    >
                        <div className={Styles.ajuste_texto}>

                            <div className={Styles.quadrado}>
                                A
                            </div>

                            <p className={Styles.alternativa1}></p>

                        </div>
                    </div>


                    <div
                        className={Styles.alternativas}
                        data-resposta="2"
                        onClick={verificarResposta}
                    >
                        <div className={Styles.ajuste_texto}>

                            <div className={Styles.quadrado}>
                                B
                            </div>

                            <p className={Styles.alternativa2}></p>

                        </div>
                    </div>

                </div>


                <div className={Styles.ajuste_alternativas}>

                    <div
                        className={Styles.alternativas}
                        data-resposta="3"
                        onClick={verificarResposta}
                    >
                        <div className={Styles.ajuste_texto}>

                            <div className={Styles.quadrado}>
                                C
                            </div>

                            <p className={Styles.alternativa3}></p>

                        </div>
                    </div>


                    <div
                        className={Styles.alternativas}
                        data-resposta="4"
                        onClick={verificarResposta}
                    >
                        <div className={Styles.ajuste_texto}>

                            <div className={Styles.quadrado}>
                                D
                            </div>

                            <p className={Styles.alternativa4}></p>

                        </div>
                    </div>

                </div>

            </div>


            <div>

                <input
                    className={Styles.inputEnviar}
                    type="text"
                />

                <button onClick={API}>
                    enviar
                </button>

            </div>

        </div>

    )

}

export default Quiz
