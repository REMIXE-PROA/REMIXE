import { useState, useEffect } from "react";
import Quiz from "../components/quiz.jsx";
import Style from "../components/css/course.module.css";
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import pythonCover from "../assets/Placa-mãe gamer ROG Strix de alta tecnologia iluminada com circuitos integrados.png";

const URL_BACKEND = "http://localhost:3000";

function Course() {
    const [dadosAula, setDadosAula] = useState(null);

    // Assim que o funcionário abre a página, busca o material gerado no Node
    useEffect(() => {
        fetch(`${URL_BACKEND}/aula`)
            .then((res) => (res.ok ? res.json() : null))
            .then((dados) => {
                if (dados) setDadosAula(dados);
            })
            .catch((err) => console.log("Ainda sem aula no servidor:", err));
    }, []);

    // FUNÇÃO PARA MUDAR O CONTEÚDO
    function mudarConteudo(event) {
        const tipo = event.currentTarget.dataset.mode;
        const botoes = document.querySelectorAll("[data-mode]");
        const conteudos = document.querySelectorAll("[data-panel]");

        botoes.forEach((botao) => botao.classList.remove(Style.chipActive));
        event.currentTarget.classList.add(Style.chipActive);

        conteudos.forEach((conteudo) => {
            conteudo.hidden = conteudo.dataset.panel !== tipo;
        });
    }

    return (
        <div className={Style.course}>
            <Header />

            <div className={Style.coursePage}>
                {/* MENU LATERAL (Mantido igual ao original) */}
                <aside className={Style.courseSidebar}>
                    <div className={Style.sidebarHeader}>
                        <h2 className={Style.sidebarTitle}>Conteúdo do curso</h2>
                        <span className={Style.moduleCount}>3 Módulos</span>
                    </div>

                    <details className={Style.moduleCard} open>
                        <summary className={Style.moduleSummary}>
                            <span>Modulo 2: Python II</span>
                        </summary>
                        <ul className={Style.lessonList}>
                            <li className={`${Style.lesson} ${Style.lessonCurrent}`}>
                                <span className={`${Style.lessonStatus} ${Style.lessonStatusDone}`} />
                                <span className={Style.lessonName}>1.0 Aprofundamento sobre python</span>
                                <span className={`${Style.lessonProgress} ${Style.lessonProgressDone}`}>1/1</span>
                            </li>
                        </ul>
                    </details>
                </aside>

                {/* CONTEÚDO DA AULA */}
                <section className={Style.lessonContent}>
                    <h3 className={Style.customizeTitle}>Personalize seu conteúdo</h3>

                    <div className={Style.chips}>
                        <button type="button" data-mode="original" className={`${Style.chip} ${Style.chipActive}`} onClick={mudarConteudo}>
                            Original
                        </button>
                        <button type="button" data-mode="organizacao" className={Style.chip} onClick={mudarConteudo}>
                            Organização (Slides)
                        </button>
                        <button type="button" data-mode="revisao" className={Style.chip} onClick={mudarConteudo}>
                            Revisão (Resumo & Áudio)
                        </button>
                        <button type="button" data-mode="documentacao" className={Style.chip} onClick={mudarConteudo}>
                            Documentação (Texto/PDF)
                        </button>
                        <button type="button" data-mode="fixacao" className={Style.chip} onClick={mudarConteudo}>
                            Fixação (Quiz)
                        </button>
                    </div>

          {/* 1. CONTEÚDO ORIGINAL */}
                    <div data-panel="original">
                        <h1 className={Style.lessonTitle}>1.0 Material Original</h1>
                        
                        {dadosAula && dadosAula.arquivoOriginal?.toLowerCase().endsWith(".mp4") ? (
                            <video
                                controls
                                style={{ width: "100%", maxWidth: "700px", borderRadius: "8px" }}
                                src={`${URL_BACKEND}/download?arquivo=${dadosAula.arquivoOriginal}`}
                            />
                        ) : dadosAula && dadosAula.arquivoOriginal?.toLowerCase().endsWith(".pdf") ? (
                            <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                                <p className={Style.lessonDescription}>
                                    Leia o documento original abaixo ou faça o download para estudar offline.
                                </p>
                                
                                {/* IFRAME QUE LÊ O PDF NA TELA */}
                                <iframe
                                    src={`${URL_BACKEND}/download?arquivo=${dadosAula.arquivoOriginal}`}
                                    style={{ width: "100%", height: "600px", border: "1px solid #ccc", borderRadius: "8px" }}
                                    title="Leitor de PDF"
                                />
                                
                                <a
                                    href={`${URL_BACKEND}/download?arquivo=${dadosAula.arquivoOriginal}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ alignSelf: "flex-start", padding: "12px 20px", background: "#003366", color: "#fff", borderRadius: "6px", textDecoration: "none", fontWeight: "bold" }}
                                >
                                    📥 Baixar PDF Original
                                </a>
                            </div>
                        ) : dadosAula && dadosAula.arquivoOriginal?.toLowerCase().endsWith(".pptx") ? (
                            <div>
                                <p className={Style.lessonDescription}>
                                    Este módulo foi criado a partir de uma apresentação de slides ({dadosAula.arquivoOriginal}).
                                </p>
                                <a
                                    href={`${URL_BACKEND}/download?arquivo=${dadosAula.arquivoOriginal}`}
                                    style={{ display: "inline-block", padding: "12px 20px", background: "#d83b01", color: "#fff", borderRadius: "6px", textDecoration: "none", fontWeight: "bold" }}
                                >
                                    📥 Baixar Material Original (.pptx)
                                </a>
                            </div>
                        ) : (
                            <div className={Style.videoPlayer}>
                                <img className={Style.Thumb} src={pythonCover} alt="Capa da aula" />
                            </div>
                        )}
                    </div>
                    
                    {/* 2. CONTEÚDO ORGANIZAÇÃO (SLIDES PPTX) */}
                    <div data-panel="organizacao" hidden>
                        <h1 className={Style.lessonTitle}>Apresentação de Slides Gerada</h1>
                        {dadosAula ? (
                            <div>
                                <p className={Style.lessonDescription}>
                                    O conteúdo foi dividido em tópicos objetivos no formato PowerPoint (.pptx).
                                </p>
                                <a
                                    href={`${URL_BACKEND}/download?arquivo=${dadosAula.slides}`}
                                    style={{ display: "inline-block", padding: "12px 20px", background: "#d83b01", color: "#fff", borderRadius: "6px", textDecoration: "none", fontWeight: "bold" }}
                                >
                                    📥 Baixar Apresentação (.pptx)
                                </a>
                            </div>
                        ) : (
                            <p className={Style.lessonDescription}>Nenhum material processado ainda.</p>
                        )}
                    </div>

                    {/* 3. CONTEÚDO REVISÃO (RESUMO + ÁUDIO MP3 + PDF RESUMO) */}
                    <div data-panel="revisao" hidden>
                        <h1 className={Style.lessonTitle}>Resumo e Áudio-Aula</h1>
                        {dadosAula ? (
                            <div>
                                <h4>🎧 Ouvir Resumo Narrado:</h4>
                                <audio
                                    controls
                                    src={`${URL_BACKEND}/download?arquivo=${dadosAula.audioResumo}`}
                                    style={{ width: "100%", maxWidth: "450px", margin: "10px 0 20px 0" }}
                                />
                                <p className={Style.lessonDescription} style={{ whiteSpace: "pre-line" }}>
                                    {dadosAula.resumo}
                                </p>
                                <a
                                    href={`${URL_BACKEND}/download?arquivo=${dadosAula.pdfResumo}`}
                                    style={{ display: "inline-block", marginTop: "15px", padding: "10px 18px", background: "#003366", color: "#fff", borderRadius: "6px", textDecoration: "none" }}
                                >
                                    📄 Baixar Resumo em PDF
                                </a>
                            </div>
                        ) : (
                            <p className={Style.lessonDescription}>Nenhum resumo disponível ainda.</p>
                        )}
                    </div>

                    {/* 4. CONTEÚDO DOCUMENTAÇÃO (TRANSCRIÇÃO COMPLETA + PDF) */}
                    <div data-panel="documentacao" hidden>
                        <h1 className={Style.lessonTitle}>Transcrição / Texto Completo</h1>
                        {dadosAula ? (
                            <div>
                                <p className={Style.lessonDescription} style={{ whiteSpace: "pre-line" }}>
                                    {dadosAula.transcricao}
                                </p>
                                <a
                                    href={`${URL_BACKEND}/download?arquivo=${dadosAula.pdfTranscricao}`}
                                    style={{ display: "inline-block", marginTop: "15px", padding: "10px 18px", background: "#107c41", color: "#fff", borderRadius: "6px", textDecoration: "none" }}
                                >
                                    📄 Baixar Transcrição Completa (.pdf)
                                </a>
                            </div>
                        ) : (
                            <p className={Style.lessonDescription}>Nenhuma documentação disponível ainda.</p>
                        )}
                    </div>

                    {/* 5. CONTEÚDO FIXAÇÃO (QUIZ) */}
                    <div data-panel="fixacao" hidden>
                        <h1 className={Style.lessonTitle}>Exercícios de fixação</h1>
                        <Quiz resumoAutomatico={dadosAula?.resumo} />
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    );
}

export default Course;