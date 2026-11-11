import Style from "../components/css/colabLogin.module.css";
import { Link } from "react-router-dom";

import background from "../assets/Background.png";
import iconePortal from "../assets/icone-portal.png";
import LoginHeader from "../components/loginHeader";
import FooterLogin from "../components/loginFooter";
 

function ColabLogin() {
    return(
        <div className={Style.colabLogingPage}>
            <LoginHeader/>
 
            <div className={Style.content}>
                <section className={Style.secaoPrincipal}>
                    <div className={Style.textRemixe}>
                        <p className={Style.tituloPrincipal}>
                            Sua jornada técnica <br />
                            adaptativa{" "}
                        <span className={Style.destaqueTitulo}>molda-se a</span>
                        <span className={Style.destaqueTitulo2}>o seu raciocínio.</span>
                        </p>
                        <p className={Style.subtituloPrincipal}>
                            A atmosfera de aprendizagem que converte qualquer conteúdo em tempo <br />
                            real:{" "}
                        <span className={Style.destaqueSubtitulo}>
                            alterne entre Slides, Vídeos Gerativos, <br />
                            Desafios Gamificados ou PDFs.
                        </span>
                        </p>
                    </div>
                </section>
                <section className={Style.secaoLogin}>
                    <div className={Style.cardLogin}>
                    <h1 className={Style.loginTitulo}>Acesse sua conta</h1>
                    <p className={Style.loginSubtitulo}>
                        Entre com seu e-mail corporativo ou credenciais da sua organização.
                    </p>
            
                    {/* onSubmit evita recarregar a página; troque pela autenticação depois */}
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className={Style.grupoFormulario}>
                        <label htmlFor="email" className={Style.labelFormulario}>
                            E-mail corporativo institucional
                        </label>
                        <div className={Style.formularioInput}>
                            <input
                            className={Style.inputEmail}
                            id="email"
                            type="email"
                            placeholder="nome@suaempresa.com.br"
                            autoComplete="email"
                            required
                            />
                        </div>
                        </div>
            
                        <div className={Style.grupoFormulario}>
                        <label htmlFor="senha" className={Style.labelFormulario}>
                            Senha de acesso
                        </label>
                        <div className={Style.formularioInput}>
                            <input
                            className={Style.inputSenha}
                            id="senha"
                            type="password"
                            placeholder="••••••••"
                            autoComplete="current-password"
                            required
                            />
                        </div>
                        </div>
            
                        <div className={Style.formBanco}>
                        <Link to="/recuperar-senha" className={Style.senhaEsquecida}>
                            Esqueceu a senha?
                        </Link>
                        </div>
            
                        <Link to="/selecaoCurso" >
                        <button type="submit" className={Style.acessarPlataforma}>
                            Acessar Plataforma
                        </button>
                        </Link>
                    </form>
                    </div>
                </section>
            
            </div>
            <FooterLogin/>
        </div>
    )
}

export default ColabLogin