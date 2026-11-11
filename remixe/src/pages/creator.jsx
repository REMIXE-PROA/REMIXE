import Style from "../components/css/creator.module.css";
import notebook from "../assets/image 16.png";
import { Link } from "react-router-dom";
import Header from "../components/header";


import coverHardware from "../assets/thumb1.png";
import coverAutomation from "../assets/thumb2.png";
import coverMarketing from "../assets/thumb3.png";
import coverPython from "../assets/thumb4.png";
import coverFinance from "../assets/thumb5.png";
import coverTyping from "../assets/thumb6.png";
import trash from "../assets/trash.svg";


function Creator() {
  return (
    <div className={Style.creatorPage}>
      <Header/>
      <section className={Style.heroBox}>
        <div className={Style.heroText}>
          <div className={Style.heroWelcome}>
            <span className={Style.heroMessage}>OLÁ, RENAN!</span>
            <h1 className={Style.welcomeMessage}>Bem-vindo de volta!</h1>
          </div>

          <p className={Style.heroLabel}>
            Gerencie seus cursos ativos, acompanhe o progresso das turmas e crie
            novas experiências de aprendizagem adaptativa potencializadas por
            Inteligência artificial.
          </p>

          <Link to="/Informacoes" className={Style.ctaButton}> Criar novo curso </Link>
        </div>

        <img src={notebook} alt="" className={Style.notebook} />
      </section>

      {/* FUTURO: <CourseSection title="Seus cursos" courses={...} /> */}
      <section className={Style.courseSection}>
        <div className={Style.sectionHeader}>
          <h2 className={`${Style.sectionTitle} ${Style.sectionTitleGreen}`}>Seus cursos</h2>
          <a href="" className={Style.seeAll}>Ver todos</a>
        </div>

        <div className={Style.carousel}>
            <button type="button" className={Style.sideArrowLeft}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>

          <div className={Style.courseGrid}>

            <article className={Style.courseCard}>
              <img src={coverHardware} alt="" className={Style.courseCover} />
              <div className={Style.courseBody}>
                <h3 className={Style.courseTitle}>Placa mãe</h3>
                <p className={Style.courseAuthor}>
                  <span className={Style.authorAvatar}>RF</span> Rafael Farias
                </p>
                <div className={Style.progressInfo}>
                  <span>Progresso da turma</span>
                  <span className={Style.progressValue}>75%</span>
                </div>
                <div className={Style.progressTrack}>
                  <div className={Style.progressFill} style={{ width: "75%" }} />
                </div>
                <div className={Style.courseActions}>
                   <Link to="/Edicao" className={Style.editButton}>Editar curso</Link>
                  <button type="button" className={Style.deleteButton} aria-label="Excluir curso"><img src={trash} alt="" /></button>
                </div>
              </div>
            </article>

            <article className={Style.courseCard}>
              <img src={coverAutomation} alt="" className={Style.courseCover} />
              <div className={Style.courseBody}>
                <h3 className={Style.courseTitle}>Automações</h3>
                <p className={Style.courseAuthor}>
                  <span className={Style.authorAvatar}>R</span> Rafael
                </p>
                <div className={Style.progressInfo}>
                  <span>Progresso da turma</span>
                  <span className={Style.progressValue}>100%</span>
                </div>
                <div className={Style.progressTrack}>
                  <div className={Style.progressFill} style={{ width: "100%" }} />
                </div>
                <div className={Style.courseActions}>
                   <Link to="/Edicao" className={Style.editButton}>Editar curso</Link>
                  <button type="button" className={Style.deleteButton} aria-label="Excluir curso"><img src={trash} alt="" /></button>
                </div>
              </div>
            </article>

            <article className={Style.courseCard}>
              <img src={coverMarketing} alt="" className={Style.courseCover} />
              <div className={Style.courseBody}>
                <h3 className={Style.courseTitle}>Curso de Marketing Digital</h3>
                <p className={Style.courseAuthor}>
                  <span className={Style.authorAvatar}>VP</span> Vitor Pietro
                </p>
                <div className={Style.progressInfo}>
                  <span>Progresso da turma</span>
                  <span className={Style.progressValue}>60%</span>
                </div>
                <div className={Style.progressTrack}>
                  <div className={Style.progressFill} style={{ width: "60%" }} />
                </div>
                <div className={Style.courseActions}>
                   <Link to="/Edicao" className={Style.editButton}>Editar curso</Link>
                  <button type="button" className={Style.deleteButton} aria-label="Excluir curso"><img src={trash} alt="" /></button>
                </div>
              </div>
            </article>

          </div>

            <button type="button" className={Style.sideArrowRight}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
        </div>
      </section>

      <section className={Style.courseSection}>
        <div className={Style.sectionHeader}>
          <h2 className={`${Style.sectionTitle} ${Style.sectionTitleBlue}`}>Cursos mais recentes criados</h2>
        </div>

        <div className={Style.carousel}>
            <button type="button" className={Style.sideArrowLeft}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>


          <div className={Style.courseGrid}>

            <article className={Style.courseCard}>
              <img src={coverPython} alt="" className={Style.courseCover} />
              <div className={Style.courseBody}>
                <h3 className={Style.courseTitle}>Python básico I</h3>
                <p className={Style.courseAuthor}>
                  <span className={Style.authorAvatar}>M</span> Maraiana
                </p>
                <div className={Style.progressInfo}>
                  <span>0% (iniciado)</span>
                </div>
                <div className={Style.progressTrack}>
                  <div className={Style.progressFill} style={{ width: "0%" }} />
                </div>
                <div className={Style.courseActions}>
                   <Link to="/Edicao" className={Style.editButton}>Editar curso</Link>
                  <button type="button" className={Style.deleteButton} aria-label="Excluir curso"><img src={trash} alt="" /></button>
                </div>
              </div>
            </article>

            <article className={Style.courseCard}>
              <img src={coverFinance} alt="" className={Style.courseCover} />
              <div className={Style.courseBody}>
                <h3 className={Style.courseTitle}>Gestão financeira</h3>
                <p className={Style.courseAuthor}>
                  <span className={Style.authorAvatar}>R</span> Rohan
                </p>
                <div className={Style.progressInfo}>
                  <span>0% (iniciado)</span>
                </div>
                <div className={Style.progressTrack}>
                  <div className={Style.progressFill} style={{ width: "0%" }} />
                </div>
                <div className={Style.courseActions}>
                  <Link to="/Edicao" className={Style.editButton}>Editar curso</Link>
                  <button type="button" className={Style.deleteButton} aria-label="Excluir curso"><img src={trash} alt="" /></button>
                </div>
              </div>
            </article>

            <article className={Style.courseCard}>
              <img src={coverTyping} alt="" className={Style.courseCover} />
              <div className={Style.courseBody}>
                <h3 className={Style.courseTitle}>Digitação para iniciantes</h3>
                <p className={Style.courseAuthor}>
                  <span className={Style.authorAvatar}>DL</span> Davi Luís
                </p>
                <div className={Style.progressInfo}>
                  <span>0% (iniciado)</span>
                </div>
                <div className={Style.progressTrack}>
                  <div className={Style.progressFill} style={{ width: "0%" }} />
                </div>
                <div className={Style.courseActions}>
                  <Link to="/Edicao" className={Style.editButton}>Editar curso</Link>
                  <button type="button" className={Style.deleteButton} aria-label="Excluir curso"><img src={trash} alt="" /></button>
                </div>
              </div>
            </article>
            
          </div>
          <button type="button" className={Style.sideArrowRight}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
            
        </div>
      </section>
    </div>
  );
}

export default Creator;