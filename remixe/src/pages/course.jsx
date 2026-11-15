import Quiz from "../components/quiz.jsx";
import Style from "../components/css/course.module.css";
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import pythonCover from "../assets/Placa-mãe gamer ROG Strix de alta tecnologia iluminada com circuitos integrados.png";

function Course() {

    // FUNÇÃO PARA MUDAR O CONTEÚDO
    function mudarConteudo(event) {

        const tipo = event.currentTarget.dataset.mode

        const botoes = document.querySelectorAll('[data-mode]')
        const conteudos = document.querySelectorAll('[data-panel]')

        // Remove a seleção dos botões
        botoes.forEach((botao) => {
            botao.classList.remove(Style.chipActive)
        })

        // Adiciona a seleção ao botão clicado
        event.currentTarget.classList.add(Style.chipActive)

        // Exibe somente o conteúdo selecionado
        conteudos.forEach((conteudo) => {
            conteudo.hidden = conteudo.dataset.panel !== tipo
        })
    }

    return (
        <div className={Style.course}>

            <Header />

            <div className={Style.coursePage}>

                {/* MENU LATERAL */}
                <aside className={Style.courseSidebar}>

                    <div className={Style.sidebarHeader}>
                        <h2 className={Style.sidebarTitle}>
                            Conteúdo do curso
                        </h2>

                        <span className={Style.moduleCount}>
                            3 Módulos
                        </span>
                    </div>

                    {/* MÓDULO 1 */}
                    <details className={Style.moduleCard}>
                        <summary className={Style.moduleSummary}>
                            <span>Modulo 1: Python I</span>

                            <svg
                                className={Style.chevron}
                                viewBox="0 0 24 24"
                                width="18"
                                height="18"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M6 9l6 6 6-6" />
                            </svg>
                        </summary>
                    </details>

                    {/* MÓDULO 2 */}
                    <details className={Style.moduleCard} open>

                        <summary className={Style.moduleSummary}>
                            <span>Modulo 2: Python II</span>

                            <svg
                                className={Style.chevron}
                                viewBox="0 0 24 24"
                                width="18"
                                height="18"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M6 9l6 6 6-6" />
                            </svg>
                        </summary>

                        <ul className={Style.lessonList}>

                            <li className={`${Style.lesson} ${Style.lessonCurrent}`}>
                                <span className={`${Style.lessonStatus} ${Style.lessonStatusDone}`} />
                                <span className={Style.lessonName}>
                                    1.0 Aprofundamento sobre python
                                </span>
                                <span className={`${Style.lessonProgress} ${Style.lessonProgressDone}`}>
                                    1/1
                                </span>
                            </li>

                            <li className={Style.lesson}>
                                <span className={Style.lessonStatus} />
                                <span className={Style.lessonName}>
                                    1.0.1 Python para automoções
                                </span>
                                <span className={Style.lessonProgress}>
                                    0/1
                                </span>
                            </li>

                            <li className={Style.lesson}>
                                <span className={Style.lessonStatus} />
                                <span className={Style.lessonName}>
                                    1.0.2 Python para negócios
                                </span>
                                <span className={Style.lessonProgress}>
                                    0/2
                                </span>
                            </li>

                        </ul>
                    </details>

                    {/* MÓDULO 3 */}
                    <details className={Style.moduleCard}>
                        <summary className={Style.moduleSummary}>
                            <span>Modulo 3: Python III</span>

                            <svg
                                className={Style.chevron}
                                viewBox="0 0 24 24"
                                width="18"
                                height="18"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M6 9l6 6 6-6" />
                            </svg>
                        </summary>
                    </details>

                </aside>


                {/* CONTEÚDO DA AULA */}
                <section className={Style.lessonContent}>

                    <h3 className={Style.customizeTitle}>
                        Personalize seu conteúdo
                    </h3>

                    {/* BOTÕES DE PERSONALIZAÇÃO */}
                    <div className={Style.chips}>

                        <button
                            type="button"
                            data-mode="original"
                            className={`${Style.chip} ${Style.chipActive}`}
                            onClick={mudarConteudo}
                        >
                            Original
                        </button>

                        <button
                            type="button"
                            data-mode="organizacao"
                            className={Style.chip}
                            onClick={mudarConteudo}
                        >
                            Organização
                        </button>

                        <button
                            type="button"
                            data-mode="revisao"
                            className={Style.chip}
                            onClick={mudarConteudo}
                        >
                            Revisão
                        </button>

                        <button
                            type="button"
                            data-mode="documentacao"
                            className={Style.chip}
                            onClick={mudarConteudo}
                        >
                            Documentação
                        </button>

                        <button
                            type="button"
                            data-mode="fixacao"
                            className={Style.chip}
                            onClick={mudarConteudo}
                        >
                            Fixação
                        </button>

                    </div>


                    {/* CONTEÚDO ORIGINAL */}
                    <div data-panel="original">

                        <h1 className={Style.lessonTitle}>
                            1.0 Aprofundamento sobre python
                        </h1>

                        <p className={Style.lessonDescription}>
                            O aprofundamento em Python permite explorar recursos mais
                            avançados da linguagem, como funções, estruturas de dados,
                            orientação a objetos e bibliotecas especializadas.
                        </p>

                        <div className={Style.videoPlayer}>
                            <img
                                className={Style.Thumb}
                                src={pythonCover}
                                alt="Capa da aula: Python"
                            />

                            <span className={Style.videoDuration}>
                                08:42
                            </span>
                        </div>

                    </div>


                    {/* CONTEÚDO ORGANIZAÇÃO */}
                    <div data-panel="organizacao" hidden>

                        <h1 className={Style.lessonTitle}>
                            Python: Conteúdo organizado
                        </h1>

                        <p className={Style.lessonDescription}>
                            Aqui ficará o conteúdo reorganizado em etapas e tópicos.
                        </p>

                    </div>


                    {/* CONTEÚDO REVISÃO */}
                    <div data-panel="revisao" hidden>

                        <h1 className={Style.lessonTitle}>
                            Revisão de Python
                        </h1>

                        <p className={Style.lessonDescription}>
                            Aqui ficará o conteúdo resumido para revisão.
                        </p>

                    </div>


                    {/* CONTEÚDO DOCUMENTAÇÃO */}
                    <div data-panel="documentacao" hidden>

                        <h1 className={Style.lessonTitle}>
                            Documentação Python
                        </h1>

                        <p className={Style.lessonDescription}>
                            Aqui ficará a documentação técnica do conteúdo.
                        </p>

                    </div>


                   {/* CONTEÚDO FIXAÇÃO */}
                    <div data-panel="fixacao" hidden>

                        <h1 className={Style.lessonTitle}>
                         Exercícios de fixação
                        </h1>

                        <Quiz />

                    </div>

                </section>

            </div>

            <Footer />

        </div>
    );
}

export default Course;
