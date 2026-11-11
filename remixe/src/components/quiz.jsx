import Styles from './css/quiz.module.css'
import { Link, useLocation } from "react-router-dom";

let alternativas

function respostaCima1(event){

    let clicado = event.currentTarget

    let caixaCD = clicado.parentElement

    let fundoQuiz = caixaCD.parentElement

    let caixaAB = fundoQuiz.children[2]
    
    let C = caixaAB.children[0]
    let D = caixaAB.children[1]

    let A = caixaCD.children[0]
    let B = caixaCD.children[1]

    A.classList.toggle(Styles.certo)
    B.classList.toggle(Styles.errado)
    C.classList.toggle(Styles.errado)
    D.classList.toggle(Styles.errado)

     alternativas = fundoQuiz.querySelectorAll("." + Styles.alternativas)

        alternativas.forEach((alternativa) => {
        alternativa.style.pointerEvents = "none"
    })
    

}

function respostaBaixo1(event){

    let clicado = event.currentTarget

    let caixaCD = clicado.parentElement
    let fundoQuiz = caixaCD.parentElement

    let caixaAB = fundoQuiz.children[1]

    let A = caixaAB.children[0]
    let B = caixaAB.children[1]

    let C = caixaCD.children[0]
    let D = caixaCD.children[1]

    A.classList.add(Styles.certo)
    B.classList.add(Styles.errado)
    C.classList.add(Styles.errado)
    D.classList.add(Styles.errado)

    alternativas = fundoQuiz.querySelectorAll("." + Styles.alternativas)

        alternativas.forEach((alternativa) => {
        alternativa.style.pointerEvents = "none"
    })

}

function respostaCima2(event){

    let clicado = event.currentTarget

    let caixaCD = clicado.parentElement

    let fundoQuiz = caixaCD.parentElement

    let caixaAB = fundoQuiz.children[2]
    
    let C = caixaAB.children[0]
    let D = caixaAB.children[1]

    let A = caixaCD.children[0]
    let B = caixaCD.children[1]

    A.classList.toggle(Styles.errado)
    B.classList.toggle(Styles.certo)
    C.classList.toggle(Styles.errado)
    D.classList.toggle(Styles.errado)

    alternativas = fundoQuiz.querySelectorAll("." + Styles.alternativas)

        alternativas.forEach((alternativa) => {
        alternativa.style.pointerEvents = "none"
    })
}

function respostaBaixo2(event){

     let clicado = event.currentTarget

    let caixaCD = clicado.parentElement
    let fundoQuiz = caixaCD.parentElement

    let caixaAB = fundoQuiz.children[1]

    let A = caixaAB.children[0]
    let B = caixaAB.children[1]

    let C = caixaCD.children[0]
    let D = caixaCD.children[1]

    A.classList.add(Styles.errado)
    B.classList.add(Styles.certo)
    C.classList.add(Styles.errado)
    D.classList.add(Styles.errado)

    alternativas = fundoQuiz.querySelectorAll("." + Styles.alternativas)

        alternativas.forEach((alternativa) => {
        alternativa.style.pointerEvents = "none"
    })
}

function respostaCima3(event){

    let clicado = event.currentTarget

    let caixaCD = clicado.parentElement

    let fundoQuiz = caixaCD.parentElement

    let caixaAB = fundoQuiz.children[2]
    
    let C = caixaAB.children[0]
    let D = caixaAB.children[1]

    let A = caixaCD.children[0]
    let B = caixaCD.children[1]

    A.classList.toggle(Styles.errado)
    B.classList.toggle(Styles.errado)
    C.classList.toggle(Styles.certo)
    D.classList.toggle(Styles.errado)

    alternativas = fundoQuiz.querySelectorAll("." + Styles.alternativas)

        alternativas.forEach((alternativa) => {
        alternativa.style.pointerEvents = "none"
    })
}

function respostaBaixo3(event){

     let clicado = event.currentTarget

    let caixaCD = clicado.parentElement
    let fundoQuiz = caixaCD.parentElement

    let caixaAB = fundoQuiz.children[1]

    let A = caixaAB.children[0]
    let B = caixaAB.children[1]

    let C = caixaCD.children[0]
    let D = caixaCD.children[1]

    A.classList.add(Styles.errado)
    B.classList.add(Styles.errado)
    C.classList.add(Styles.certo)
    D.classList.add(Styles.errado)

    alternativas = fundoQuiz.querySelectorAll("." + Styles.alternativas)

        alternativas.forEach((alternativa) => {
        alternativa.style.pointerEvents = "none"
    })
}

function respostaCima4(event){

    let clicado = event.currentTarget

    let caixaCD = clicado.parentElement

    let fundoQuiz = caixaCD.parentElement

    let caixaAB = fundoQuiz.children[2]
    
    let C = caixaAB.children[0]
    let D = caixaAB.children[1]

    let A = caixaCD.children[0]
    let B = caixaCD.children[1]

    A.classList.toggle(Styles.errado)
    B.classList.toggle(Styles.errado)
    C.classList.toggle(Styles.errado)
    D.classList.toggle(Styles.certo)

    alternativas = fundoQuiz.querySelectorAll("." + Styles.alternativas)

        alternativas.forEach((alternativa) => {
        alternativa.style.pointerEvents = "none"
    })
}

function respostaBaixo4(event){

     let clicado = event.currentTarget

    let caixaCD = clicado.parentElement
    let fundoQuiz = caixaCD.parentElement

    let caixaAB = fundoQuiz.children[1]

    let A = caixaAB.children[0]
    let B = caixaAB.children[1]

    let C = caixaCD.children[0]
    let D = caixaCD.children[1]

    A.classList.add(Styles.errado)
    B.classList.add(Styles.errado)
    C.classList.add(Styles.errado)
    D.classList.add(Styles.certo)

    alternativas = fundoQuiz.querySelectorAll("." + Styles.alternativas)

        alternativas.forEach((alternativa) => {
        alternativa.style.pointerEvents = "none"
    })
}



let numero = 0
let funcaoCerto
let funcaoErrado

async function API(event){

    let clicado = event.currentTarget

    let divAtual = clicado.parentElement.parentElement

    let fundoQuiz = divAtual.querySelector("." + Styles.fundo_quiz)

    let alternativas = fundoQuiz.querySelectorAll("." + Styles.alternativas)

    alternativas.forEach((alternativa) => {

        alternativa.style.pointerEvents = "auto"

        alternativa.classList.remove(Styles.certo)
        alternativa.classList.remove(Styles.errado)

    })

    numero = Math.floor(Math.random() * 4) + 1

    if(numero === 1){
        funcaoCerto = respostaCima1
        funcaoErrado = respostaBaixo1
    }

    else if(numero === 2){
        funcaoCerto = respostaCima2
        funcaoErrado = respostaBaixo2
    }

    else if(numero === 3){
        funcaoCerto = respostaCima3
        funcaoErrado = respostaBaixo3

    }

    else if(numero === 4){
        funcaoCerto = respostaCima4
        funcaoErrado = respostaBaixo4

    }

    console.log(numero)
    let inputEnviar = document.querySelector("." + Styles.inputEnviar)
    
    let comando = document.querySelector("." + Styles.comando_texto)
    let alternativa1 = document.querySelector("." + Styles.alternativa1)
    let alternativa2 = document.querySelector("." + Styles.alternativa2)
    let alternativa3 = document.querySelector("." + Styles.alternativa3)
    let alternativa4 = document.querySelector("." + Styles.alternativa4)

        try {

        const resposta = await fetch(
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-goog-api-key": "AQ.Ab8RN6Ihscb_O0ETWpknzyMy4thon50vbYpW3hiqhi-2dKoBTw"
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

CONTEÚDO DO USUÁRIO: ${inputEnviar.value}

NÚMERO DA ALTERNATIVA CORRETA: ${numero}`
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

        console.log(dados.candidates[0].content.parts[0].text)
        let objeto = JSON.parse(dados.candidates[0].content.parts[0].text)

        console.log(objeto)
        
        comando.textContent = objeto.comando
        alternativa1.textContent = objeto.alternativa1
        alternativa2.textContent = objeto.alternativa2
        alternativa3.textContent = objeto.alternativa3
        alternativa4.textContent = objeto.alternativa4


    } catch (erro) {

        console.log("Erro na requisição:", erro)

    }
}

function Quiz(){
    return(
        <div className={Styles.fundo}>
            <div className={Styles.fundo_quiz}>
                <div className={Styles.comando}>
                    <p className={Styles.comando_texto}></p>
                </div>
                <div className={Styles.ajuste_alternativas}>
                    <div className={Styles.alternativas} onClick={(event) => funcaoCerto(event)}>             
                        <div className={Styles.ajuste_texto}>
                            <div className={Styles.quadrado}>
                                A
                            </div>
                            <p className={Styles.alternativa1}>
                                
                            </p>
                        </div>
                    </div>
                    <div className={Styles.alternativas} onClick={(event) => funcaoCerto(event)}>
                        <div className={Styles.ajuste_texto}>
                            <div className={Styles.quadrado}>
                                B
                            </div>
                            <p className={Styles.alternativa2}>
                                
                            </p>
                        </div>
                    </div>
                </div>
                <div className={Styles.ajuste_alternativas}>
                    <div className={Styles.alternativas} onClick={(event) => funcaoErrado(event)}>
                        <div className={Styles.ajuste_texto}>
                            <div className={Styles.quadrado}>
                                𝗖
                            </div>
                            <p className={Styles.alternativa3}>
                                
                            </p>
                        </div>
                    </div>
                    <div className={Styles.alternativas} onClick={(event) => funcaoErrado(event)}>
                        <div className={Styles.ajuste_texto}>
                            <div className={Styles.quadrado}>
                                D
                            </div>
                            <p className={Styles.alternativa4}>
                                
                            </p>
                        </div>
                    </div>
                </div>    
            </div>
            <div>
                <input className={Styles.inputEnviar} type="text"  />
                <button onClick={API}>enviar</button>
            </div>
        </div>
        
    )
}

export default Quiz