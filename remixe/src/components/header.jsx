import Style from '../components/css/header.module.css'
import logo from '../assets/REMIXE Logo.png'
import { Link } from "react-router-dom";

function Header() { 
    return (
        <header className={Style.header}>
            <div className={Style.brandContainer}>
            <img src={logo} alt="REMIXE Logo" />
            <p className={Style.brand}><Link to="/">REMIXE</Link></p>
            </div>

            <ul className={Style.navbar}>
                <li><a href="#">O Problema</a></li>
                <li><a href="#">Como Funciona</a></li>
                <li><a href="#">Impacto & IA</a></li>
                <li><a href="#">Planos</a></li>
            </ul>

            <button className={Style.loginButton}><Link to="/Login-collab">Login</Link></button>

        </header>
    )}


export default Header