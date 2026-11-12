import Styles from '../components/css/informacoes.module.css'
import Header from '../components/header'
import Footer from '../components/footer'
import Seta from '../assets/seta.svg'
import Chain from '../assets/chain.svg'
import Aspas from '../assets/aspas.svg'
import { Link } from 'react-router-dom'

function Informacoes(){
    return(
        <div className={Styles.fundao}>
                <Header />
            <div className={Styles.fundo}>
                
                       
                <div className={Styles.conteudo}>
                    <div className={Styles.titulo_curso}>
                        <p>Cursos</p>
                        <img className={Styles.seta} src={Seta} alt="" />
                        <p className={Styles.texto_preto}>Novo Curso</p>

                    </div>
                    <div className={Styles.etapas}>
                        <div className={Styles.etapas_ajuste}>
                            <div className={Styles.circulo_verde}>
                                1
                            </div>
                            <p className={Styles.texto_preto}>informações</p>
                            <div className={Styles.linha1}></div>
                            <div className={Styles.circulo}>
                                2
                            </div>
                            <p>Conteúdo</p>
                            <div className={Styles.linha2}></div>
                            <div className={Styles.circulo}>
                                3
                            </div>
                            <p>Finalizar</p>
                        </div>
                    </div>
                    <div className={Styles.dados_curso}>
                        <div className={Styles.dados_caixa1}>
                            <div className={Styles.ajuste_caixa1}>
                                <p className={Styles.texto_preto}>Nome do Curso *</p>
                                <input className={Styles.input_subdescricao} type="text" name="" id="" placeholder="Ex: Lógica de programação & python I" />

                                <p className={Styles.texto_preto}>Sub-descrição | Resumo curto *</p>
                                <input className={Styles.input_subdescricao} type="text" name="" id="" placeholder="Ex: Domine python com nossos módulos de cursos." />

                                <p className={Styles.texto_preto}>Descrição Completa *</p>
                                <div className={Styles.editor}>
                                <div className={Styles.barra_ferramentas}>
                                <button type="button"><b>B</b></button>
                                <button type="button"><i>I</i></button>

                                <span className={Styles.divisor}></span>

                                <button type="button">☷</button>
                                <button type="button">☷</button>

                                <span className={Styles.divisor}></span>

                                <button type="button"><img src={Chain} alt="Link" /></button>
                                <button type="button"><img src={Aspas} alt="Aspas" /></button>
                                </div>

                                <textarea
                                placeholder="Descreva detalhadamente a ementa do treinamento, objetivos pedagógicos, pré-requisitos e competências desenvolvidas ao longo das aulas..."
                                ></textarea>
                            </div>
                            </div>
                        </div>
                        <div className={Styles.dados_caixa2}>
                            <div className={Styles.titulo_caixa2}>
                                <div className={Styles.verde_caixa2}>

                                </div>
                                <p className={Styles.texto_preto}> 
                                    Imagem de Capa
                                </p>
                            </div>
                            <div className={Styles.foto}></div>
                        </div>
                    </div>
                    <div className={Styles.finalizacao}>
                        <div className={Styles.ajuste}>
                             <Link to="/creator" className={Styles.botao_voltar}>Voltar para a página anterior</Link>
                             <Link to="/Modulo" className={Styles.botao_avancar}>Avançar</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Informacoes