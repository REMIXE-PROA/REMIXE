import Style from "../components/css/loginHeader.module.css"
import logo from '../assets/REMIXE Logo.png'
import { Link, useLocation } from "react-router-dom";

function LoginHeader({ loginOption = true}) {
    const { pathname } = useLocation();
    return(
        <header className={Style.header}>
            <Link to="/"><div className={Style.headerMarca}>
                <img className={Style.logoimg} src={logo} alt="Logo REMIXE" />
                <span className={Style.logo}>REMIXE</span> 
            </div></Link>
              { loginOption && (
            <nav className={Style.navHeader}>
                <div className={Style.seletorPortais}>
                    <Link to="/Login-collab" className={location.pathname === "/Login-collab" ? Style.navitemAtivo : Style.navItem}>
                        Portal do Colaborador
                    </Link>
                </div>

                <Link to="/Login-gestor" className={location.pathname === "/Login-gestor" ? Style.navitemAtivo : Style.navItem}>
                    Portal da Empresa
                </Link>
            </nav>
              )}
        </header>
    );
}

export default LoginHeader;