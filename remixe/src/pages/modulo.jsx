import Styles from '../components/css/modulo.module.css'
import Header from '../components/header'
import Footer from '../components/footer'
import Seta from '../assets/seta.svg'
import { Link } from 'react-router-dom'
import Exclude from '../assets/exclude.svg'
import Edicao from '../assets/edicao.svg'


function aparecer_input(event){
    
   const input = event.currentTarget.parentElement.querySelector("." + Styles.input_modulo)
   input.classList.toggle(Styles.aberto)
}
    
function inserir_modulo(){
    let input = document.querySelector("." + Styles.input_modulo_texto)
    let dados_caixa1 = document.querySelector("." + Styles.dados_caixa1)

    let fundo_modulo = document.createElement("div")
    dados_caixa1.appendChild(fundo_modulo)
    fundo_modulo.classList.add(Styles.fundo_modulo)

    let caixa_escondida = document.createElement("div")
    dados_caixa1.appendChild(caixa_escondida)
    caixa_escondida.classList.add(Styles.caixa_escondida)

    let titulo = document.createElement("p")
    fundo_modulo.appendChild(titulo)
    titulo.classList.add(Styles.titulo)
    titulo.textContent = input.value

    let caixa = document.createElement("div")
    fundo_modulo.appendChild(caixa)
    caixa.classList.add(Styles.caixa)

    let buttonExcluir = document.createElement("button")
    caixa.appendChild(buttonExcluir)
    buttonExcluir.classList.add(Styles.buttonExcluir)
    buttonExcluir.textContent = "✖"
    buttonExcluir.addEventListener('click', function(event){
        
        const excluir_caixa_escondida = event.currentTarget.parentElement.parentElement.nextElementSibling
        excluir_caixa_escondida.remove()
        
        const excluir = event.currentTarget.parentElement.parentElement
        excluir.remove()
        
    })

    let buttonAbrir = document.createElement("button")
    caixa.appendChild(buttonAbrir)
    buttonAbrir.classList.add(Styles.buttonAbrir)
    buttonAbrir.textContent = "▼"
    buttonAbrir.addEventListener('click', function(event){
        const abrir = event.currentTarget.parentElement.parentElement.nextElementSibling
        abrir.classList.toggle(Styles.abrir)

        const ajustar = event.currentTarget.parentElement.parentElement
        ajustar.classList.toggle(Styles.ajustarMargin)
    })

    let caixa_input = document.createElement("div")
    caixa_escondida.appendChild(caixa_input)
    caixa_input.classList.add(Styles.caixa_input)

    let caixa_texto = document.createElement("div")
    caixa_escondida.appendChild(caixa_texto)
    caixa_texto.classList.add(Styles.caixa_texto)

    let caixa_input_texto = document.createElement("input")
    caixa_texto.appendChild(caixa_input_texto)
    caixa_input_texto.classList.add(Styles.caixa_input_texto)
    caixa_input_texto.placeholder = "Digite o nome do tópico...";
    caixa_input_texto.maxLength = 50;

    let botao_input_texto_topico = document.createElement("button")
    caixa_texto.appendChild(botao_input_texto_topico)
    botao_input_texto_topico.classList.add(Styles.botao_input_texto_topico)
    botao_input_texto_topico.textContent = "inserir"

    botao_input_texto_topico.addEventListener('click', function(){
        let topico = document.createElement("div")
        caixa_input.appendChild(topico)
        topico.classList.add(Styles.topico)

        let titulo_topico = document.createElement("p")
        topico.appendChild(titulo_topico)
        titulo_topico.textContent = caixa_input_texto.value

        let botoes_esquerda = document.createElement("div")
        topico.appendChild(botoes_esquerda)
        botoes_esquerda.classList.add(Styles.botoes_esquerda)

        let botao_excluir_topico = document.createElement("button")
        botoes_esquerda.appendChild(botao_excluir_topico)
        botao_excluir_topico.classList.add(Styles.botao_excluir_topico)

        
        let imagem_excluir = document.createElement("img")
        imagem_excluir.src = Exclude
        imagem_excluir.alt = "Excluir"
        botao_excluir_topico.appendChild(imagem_excluir)
        botao_excluir_topico.addEventListener('click', function(event){
            const apagar_topico = event.currentTarget.parentElement.parentElement
            apagar_topico.remove()

        })

        let botao_editar_topico = document.createElement("a")
        botoes_esquerda.appendChild(botao_editar_topico)
        botao_editar_topico.classList.add(Styles.botao_editar_topico)
        botao_editar_topico.href = "/Edicao"

        let imagem_editar = document.createElement("img")
        imagem_editar.src = Edicao
        imagem_editar.alt = "Editar"
        botao_editar_topico.appendChild(imagem_editar)
        botao_editar_topico.addEventListener('click', functionevent(event){
    
        });
    })
}


function Modulo(){
    return(
        <div className={Styles.fundao}>
            <Header /> 
            <div className={Styles.fundo}>  
                <div className={Styles.conteudo}>
                    <div className={Styles.titulo_curso}>
                        <p>Cursos</p>
                        <img className={Styles.setao} src={Seta} alt="" />
                        <p className={Styles.texto_preto}>Novo Curso</p>

                    </div>
                    <div className={Styles.etapas}>
                        <div className={Styles.etapas_ajuste}>
                            <div className={Styles.circulo_verde}>
                                ✔
                            </div>
                            <p className={Styles.texto_preto}>informações</p>
                            <div className={Styles.linha1}></div>
                            <div className={Styles.circulo_verde}>
                                2
                            </div>
                            <p className={Styles.texto_preto}>Conteúdo</p>
                            <div className={Styles.linha2}></div>
                            <div className={Styles.circulo}>
                                3
                            </div>
                            <p>Finalizar</p>
                        </div>
                    </div>
                    <div className={Styles.dados_curso}>
                        <div className={Styles.dados_caixa1}>
                            
                        </div>
                        <div className={Styles.dados_caixa2}>
                            <div className={Styles.adicao_modulo}>
                                <div className={Styles.ajuste_modulo}>
                                    <button onClick={aparecer_input} className={Styles.botao_modulo}>
                                        <p className={Styles.mais}>+</p>
                                        <p className={Styles.titulo_botao}>Módulo</p>
                                    </button>

                                    <div className={Styles.linha_fina}></div>

                                    <div className={Styles.input_modulo}>
                                        <p>Nome do módulo</p>
                                        <input className={Styles.input_modulo_texto} maxLength={70} type="text" />
                                        <button onClick={inserir_modulo}>Enviar ➔</button>
                                    </div>                  
                                </div>
                                
                                <div className={Styles.linha_fina}></div>
                                
                            </div>
                            
                        </div>
                    </div>
                    <div className={Styles.finalizacao}>
                        <div className={Styles.ajuste}>
                            <Link to="/Informacoes" className={Styles.botao_voltar}>Voltar para a página anterior</Link>
                            <Link to="/Finalizacao" className={Styles.botao_avancar}>Avançar ➔</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Modulo