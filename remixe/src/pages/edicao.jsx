import Styles from '../components/css/edicao.module.css'
import Header from '../components/header'
import Footer from '../components/footer'
import Seta from '../assets/seta.svg'
import barras from '../assets/barras.svg'
import documento from '../assets/documento.svg'
import foto from '../assets/foto.svg'
import seta_youtube from '../assets/seta_youtube.svg'
import yes from '../assets/yes.svg'
import { Link } from 'react-router-dom'

function Edicao(){
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
                            <div className={Styles.ajuste_caixa1}>
                               
                            </div>
                        </div>
                        <div className={Styles.dados_caixa2}>
                            <div className={Styles.adicao_modulo}>
                                <div className={Styles.ajuste_adicao_modulo}>
                                    <h3 className={Styles.texto_preto}>Adicionar Elementos</h3>
                                    <p>Selecione o formato para inserir nesta aula</p>
                                    <button className={Styles.botoes}>
                                        <div className={Styles.botoes_ajuste}>
                                            <div className={Styles.imagens_ajuste}>
                                                <img className={Styles.imagens} src={barras} alt="" />
                                            </div>
                                            <p className={Styles.texto_preto}>Texto</p>
                                        </div>
                                        
                                    </button>

                                     <button className={Styles.botoes}>
                                        <div className={Styles.botoes_ajuste}>
                                            <div className={Styles.imagens_ajuste}>
                                                <img className={Styles.imagens} src={seta_youtube} alt="" />
                                            </div>
                                            <p className={Styles.texto_preto}>Video</p>
                                        </div>
                                        
                                    </button>

                                     <button className={Styles.botoes}>
                                        <div className={Styles.botoes_ajuste}>
                                            <div className={Styles.imagens_ajuste}>
                                                <img className={Styles.imagens} src={documento} alt="" />
                                            </div>
                                            <p className={Styles.texto_preto}>PDF</p>
                                        </div>
                                        
                                    </button>

                                     <button className={Styles.botoes}>
                                        <div className={Styles.botoes_ajuste}>
                                            <div className={Styles.imagens_ajuste}>
                                                <img className={Styles.imagens} src={foto} alt="" />
                                            </div>
                                            <p className={Styles.texto_preto}>Imagem</p>
                                        </div>
                                        
                                    </button>

                                     <button className={Styles.botoes}>
                                        <div className={Styles.botoes_ajuste}>
                                            <div className={Styles.imagens_ajuste}>
                                                <img className={Styles.imagens} src={yes} alt="" />
                                            </div>
                                            <p className={Styles.texto_preto}>Quiz</p>
                                        </div>
                                        
                                    </button>
                                </div>
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

export default Edicao