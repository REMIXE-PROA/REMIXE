import Style from '../components/css/footer.module.css'
import logo from '../assets/Remixe_icon.png'
import linkedin from '../assets/linkedin.png'
import instagram from '../assets/instagram.png'


function Footer() {
    return (
        <div className={Style.footerContainer}>

            <footer className={Style.footer}>

                <div className={Style.identity}>

                    <div className={Style.brandContainer}>
                        <img src={logo} alt="REMIXE Logo" />
                        <p className={Style.brand}>REMIXE</p>
                    </div>
                    <p className={Style.frase}>Remixe seu jeito de aprender.</p>

                    <div className={Style.socialMedia}>

                        <div className={Style.ball}>
                            <img className={Style.linkedin} src={linkedin} alt="LinkedIn Logo" />
                        </div>

                        <div className={Style.ball}>
                            <img className={Style.instagram} src={instagram} alt="Instagram Logo" />
                        </div>

                    </div>

                    <p className={Style.copyright}>&copy; 2026 REMIXE Tecnologia Educacional S.A. Todos os direitos reservados.</p>

                </div>

                <div className={Style.links}>
                    
                    <div className={Style.plataforma}>
                        <p className={Style.footerTitle}>PLATAFORMA</p>
                        <ul className={Style.footerNavbar}>
                            <li><a href="#">O Problema</a></li>
                            <li><a href="#">Como Funciona</a></li>
                            <li><a href="#">Impacto & IA</a></li>
                            <li><a href="#">Planos</a></li>
                        </ul>
                    </div>

                    <div className={Style.empresas}></div>

                    <div className={Style.recursos}></div>

                </div>

            </footer>

        </div>
    )
}

export default Footer