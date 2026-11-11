
import Style from "../components/css/loginCompany.module.css";
import { Link } from "react-router-dom";
import FooterLogin from "../components/loginFooter";
import LoginHeader from "../components/loginHeader";
import mail from "../assets/mail.svg";



function GestorLogin() {
  return (
    <div className={Style.loginCompanyPage}>

    <LoginHeader/>
      

    
      <div className={Style.principal}>

       
        <section className={Style.conteudoEsquerda}>
          <h1 className={Style.tituloPrincipal}>
            Reduza o turnover <br />
            técnico a zero com{" "}
            <span className={Style.textoAzul}>IA <br /></span>{" "}
            <span className={Style.textoVerde}>Adaptativa</span>
          </h1>
          <p className={Style.descricaoPrincipal}>
            Painel de métricas com acessos por curso, usuários logados,
            porcentagem de conclusão geral e individual dos colaboradores,
            porcentagem de tempo de permanência em módulos e mais.
          </p>
        </section>

       
        <section className={Style.conteudoDireita}>
          <div className={Style.cartaoLogin}>

            <h2 className={Style.loginTitulo}>Login de Empresas</h2>

           

           <p className={Style.loginSubtitulo}>
              Entre com seu e-mail corporativo ou credenciais da sua organização.
            </p>

           
            <form className={Style.loginForm} onSubmit={(e) => e.preventDefault()}>
              <div className={Style.grupoInput}>
                <label htmlFor="email">E-mail corporativo institucional</label>
                <div className={Style.inputComIcone}>
                  <input
                    className={Style.inputEmail}
                    id="email"
                    type="email"
                    placeholder="diretoria.rh@empresa.com.br"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <div className={Style.grupoInput}>
                <div className={Style.labelComLink}>
                  <label htmlFor="senha">Senha de Administrador</label>
                </div>
                <div className={Style.inputComIcone}>
                  <input
                    className={Style.inputSenha}
                    id="senha"
                    type="password"
                    placeholder="••••••••••••••"
                    autoComplete="current-password"
                    required
                  />
              
                  <button type="button" className={Style.sufixoOlho} aria-label="Mostrar senha"></button>
                </div>
              </div>

              <div className={Style.linhaCheck}>
              
              </div>

              <Link to="/creator" >
                <button type="submit" className={Style.botaoEntrar}>
                  Entrar no Painel do Gestor 
                </button>
              </Link>
            </form>

            <div className={Style.loginRodapeLinks}>
              <div className={Style.linkLinha1}>
                <span>Sua empresa ainda não tem conta ?</span>
                <Link to="/CadastroEmpresa" className={Style.linkVerde}>Cadastrar empresa.</Link>
              </div>
            </div>
          </div>
        </section>
      </div>

     <FooterLogin/>

    </div>
  );
}

export default GestorLogin;