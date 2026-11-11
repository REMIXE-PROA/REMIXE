import styles from '../components/css/selecaoCurso.module.css';
import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';
import { useState } from "react";
import devImage from '../assets/devImg.png';
import DesenvolvimentoWeb from '../assets/desenvolvimentoWeb.png';
import PythonBasico from '../assets/pythonBasico.png';
import JavaScript from '../assets/javaScript.png';
import ReactImg from '../assets/react.png';
import GitHub from '../assets/gitHub.png';
import { Link } from 'react-router-dom';

function SelecaoCurso() {
  const [modalidade, setModalidade] = useState('revisao');

  return (
    <div className={styles.pageWrapper}>
      <Header />

      <section className={styles.container}>
        <div className={styles.mainCard}>
          
          <div className={styles.imageColumn}>
            <img 
              src={devImage} 
              alt="Desenvolvedor estudando" 
              className={styles.courseImage} 
            />
          </div>

          <div className={styles.contentColumn}>
            
            <div className={styles.continueBadge}> Continue de onde parou! </div>

            <h1 className={styles.courseTitle}>Desenvolvimento Web</h1>

            <div className={styles.moduleTag}>
              Módulo 1 • Fundamentos de HTML e CSS
            </div>

            <div className={styles.progressContainer}>
              <div className={styles.progressHeader}>
                <span className={styles.progressLabel}>Progresso geral</span>
                <span className={styles.progressValue}>75%</span>
              </div>
              <div className={styles.progressTrack}>
                <div className={styles.progressFill} style={{ width: '75%' }}></div>
              </div>
            </div>

            <div className={styles.modalitySection}>
              <p className={styles.modalityLabel}>ESCOLHA COMO QUER APRENDER ESTA AULA:</p>

              <div className={styles.modalityGrid}>
                
                {/* 1. Original */}
                <button
                  type="button"
                  className={`${styles.modalityCard} ${modalidade === 'original' ? styles.activeCard : ''}`}
                  onClick={() => setModalidade('original')}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                  <span>Original</span>
                </button>

                {/* 2. Mapa Mental */}
                <button
                  type="button"
                  className={`${styles.modalityCard} ${modalidade === 'mapa' ? styles.activeCard : ''}`}
                  onClick={() => setModalidade('mapa')}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3c0 1.25.77 2.32 1.86 2.76L9.5 12 6.86 9.36A3.001 3.001 0 1 0 4 11c1.25 0 2.32-.77 2.76-1.86L10.5 13l-1.36 3.14A3.001 3.001 0 1 0 12 18c0-1.25-.77-2.32-1.86-2.76L11.5 12l2.64 2.64c-.44 1.09-.33 2.36.42 3.11a3 3 0 1 0 4.24-4.24c-.75-.75-2.02-.86-3.11-.42L13 10.5l3.14-1.36A3.001 3.001 0 1 0 18 6c-1.25 0-2.32.77-2.76 1.86L12.5 5.5A2.99 2.99 0 0 0 12 2z"></path></svg>
                  <span>Mapa Mental</span>
                </button>

                {/* 3. Revisão Rápida */}
                <button
                  type="button"
                  className={`${styles.modalityCard} ${modalidade === 'revisao' ? styles.activeCard : ''}`}
                  onClick={() => setModalidade('revisao')}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>
                  <span>Revisão Rápida</span>
                </button>

                {/* 4. Doc Escrita */}
                <button
                  type="button"
                  className={`${styles.modalityCard} ${modalidade === 'doc' ? styles.activeCard : ''}`}
                  onClick={() => setModalidade('doc')}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                  <span>Doc Escrita</span>
                </button>

                {/* 5. Quiz Rápido */}
                <button
                  type="button"
                  className={`${styles.modalityCard} ${modalidade === 'quiz' ? styles.activeCard : ''}`}
                  onClick={() => setModalidade('quiz')}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                  <span>Quiz Rápido</span>
                </button>

              </div>
            </div>

            <div className={styles.actionRow}>
              <button type="button" className={styles.btnContinue}>
                <Link to="/course">Continuar aula</Link>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO: MEUS CURSOS EM ANDAMENTO */}
      <section className={styles.coursesSection}>
        <div className={styles.coursesHeader}>
          <h2 className={styles.sectionTitle}>Meus cursos em andamento</h2>
          <div className={styles.headerControls}>
            <a href="#" className={styles.viewAll}>Ver todos</a>
          </div>
        </div>

        <div className={styles.carouselWrapper}>
          <button type="button" className={styles.sideArrowLeft}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>

          <div className={styles.coursesGrid}>
            
            <div className={styles.courseCard}>
              <div className={styles.cardImageContainer}>
                <img src={PythonBasico} alt="Python básico I" className={styles.cardImg} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardCourseTitle}>Python básico I</h3>
                <p className={styles.instructorInfo}>
                  <span className={styles.instructorIcon}>👤</span> Instrutor: Maradona
                </p>
                <div className={styles.cardProgressHeader}>
                  <span>Progresso</span>
                  <span className={styles.progressPercent}>75%</span>
                </div>
                <div className={styles.cardProgressTrack}>
                  <div className={styles.cardProgressFill} style={{ width: '75%' }}></div>
                </div>
                <button type="button" className={styles.btnAccessCourse}>
                  <Link to="/course">Acessar Curso</Link>
                </button>
              </div>
            </div>

            <div className={styles.courseCard}>
              <div className={styles.cardImageContainer}>
                <img src={DesenvolvimentoWeb} alt="Desenvolvimento Web" className={styles.cardImg} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardCourseTitle}>Desenvolvimento Web</h3>
                <p className={styles.instructorInfo}>
                  <span className={styles.instructorIcon}>👤</span> Instrutora: Clara Silveira
                </p>
                <div className={styles.cardProgressHeader}>
                  <span>Concluído</span>
                  <span className={styles.progressPercentGreen}>100%</span>
                </div>
                <div className={styles.cardProgressTrack}>
                  <div className={styles.cardProgressFill} style={{ width: '100%' }}></div>
                </div>
                <button type="button" className={styles.btnAccessCourse}>
                  <Link to="/course">Acessar Curso</Link>
                </button>
              </div>
            </div>

            <div className={styles.courseCard}>
              <div className={styles.cardImageContainer}>
                <img src={JavaScript} alt="JavaScript do zero" className={styles.cardImg} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardCourseTitle}>JavaScript do zero</h3>
                <p className={styles.instructorInfo}>
                  <span className={styles.instructorIcon}>👤</span> Instrutor: Vitor Pietro
                </p>
                <div className={styles.cardProgressHeader}>
                  <span>Progresso</span>
                  <span className={styles.progressPercent}>50%</span>
                </div>
                <div className={styles.cardProgressTrack}>
                  <div className={styles.cardProgressFill} style={{ width: '50%' }}></div>
                </div>
                <button type="button" className={styles.btnAccessCourse}>
                  <Link to="/course">Acessar Curso</Link>
                </button>
              </div>
            </div>

          </div>

          <button type="button" className={styles.sideArrowRight}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
      </section>

      {/* SEÇÃO: EXPLORAR NOVOS CURSOS */}
      <section className={styles.coursesSection}>
        <div className={styles.coursesHeader}>
          <h2 className={styles.sectionTitle}>Explorar novos cursos</h2>
          <div className={styles.headerControls}>
            <a href="#" className={styles.viewAll}>Ver todos</a>
          </div>
        </div>

        <div className={styles.carouselWrapper}>
          <button type="button" className={styles.sideArrowLeft}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>

          <div className={styles.coursesGrid}>
            
            <div className={styles.courseCard}>
              <div className={styles.cardImageContainer}>
                <img src={devImage} alt="Java" className={styles.cardImg} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardCourseTitle}>Java</h3>
                <p className={styles.instructorInfo}>
                  <span className={styles.instructorIcon}>👤</span> Instrutor: Carlos Ramos
                </p>
                <div className={styles.statusNotStarted}>
                  <span className={styles.circleEmpty}></span> 0% Iniciado
                </div>
                <button type="button" className={styles.btnAccessCourse}>
                  <Link to="/course">Acessar Curso</Link>
                </button>
              </div>
            </div>

            <div className={styles.courseCard}>
              <div className={styles.cardImageContainer}>
                <img src={ReactImg} alt="React" className={styles.cardImg} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardCourseTitle}>React</h3>
                <p className={styles.instructorInfo}>
                  <span className={styles.instructorIcon}>👤</span> Instrutora: Renata Dias
                </p>
                <div className={styles.statusNotStarted}>
                  <span className={styles.circleEmpty}></span> 0% Iniciado
                </div>
                <button type="button" className={styles.btnAccessCourse}>
                  <Link to="/course">Acessar Curso</Link>
                </button>
              </div>
            </div>

            <div className={styles.courseCard}>
              <div className={styles.cardImageContainer}>
                <img src={GitHub} alt="Git e GitHub" className={styles.cardImg} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardCourseTitle}>Git e GitHub</h3>
                <p className={styles.instructorInfo}>
                  <span className={styles.instructorIcon}>👤</span> Instrutor: Davi Luís
                </p>
                <div className={styles.statusNotStarted}>
                  <span className={styles.circleEmpty}></span> 0% Iniciado
                </div>
                <button type="button" className={styles.btnAccessCourse}>
                  <Link to="/course">Acessar Curso</Link>
                </button>
              </div>
            </div>

          </div>

          <button type="button" className={styles.sideArrowRight}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default SelecaoCurso;