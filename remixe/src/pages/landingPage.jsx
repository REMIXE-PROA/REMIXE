import React from 'react';
import styles from '../components/css/landingPage.module.css';
import remixAiImg from '../assets/remixAiImg.png';
import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';

function LandingPage() {
  return (
    <div className={styles.LandingPageContainer} style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
      <div className={styles.headerWrapper}>
        <Header />
      </div>

    <section 
      className={styles.heroSection} 
      style={{ backgroundImage: `url(${remixAiImg})` }}
    >
      
      {/* Camada escura para garantir a leitura perfeita de todos os textos */}
      <div className={styles.overlay}></div>

      {/* Container principal que fica por cima do fundo */}
      <div className={styles.contentContainer}>
        
        {/* Textos da parte de cima */}
        <div className={styles.topContent}>
          
          <h1 className={styles.title}>
            Acabe com o Desperdício em<br />
            Treinamentos Corporativos em<br />
            Tecnologia
          </h1>
          
          <p className={styles.subtitle}>
            A plataforma B2B impulsionada por IA que transforma cursos obsoletos em jornadas hiper-personalizadas. Converta qualquer conteúdo em PDF, slides, gamificação ou videoaulas — adaptando-se a como cada colaborador aprende melhor.
          </p>
          
          <div className={styles.buttonGroup}>
            <button className={styles.btnPrimary}>Agendar Demonstração</button>
            <button className={styles.btnSecondary}>Conhecer a Plataforma</button>
          </div>
        </div>

        {/* Textos da parte de baixo */}
        <div className={styles.bottomContent}>
          <p className={styles.overlaySubtitle}>EMPRESAS ACELERAM O APRENDIZADO COM A REMIXE</p>
        </div>

      </div>
    </section>
    {/* SEÇÃO: A DOR DO MERCADO */}
      <section className={styles.painSection}>
        <div className={styles.painHeader}>
          <h2 className={styles.painTitle}>
            O Custo Invisível dos Treinamentos<br />Tradicionais em Tech
          </h2>
          <p className={styles.painSubtitle}>
            Formatos estáticos e cursos longos geram frustração nos times e investimentos com ROI<br />
            praticamente nulo para o RH e Diretorias de Tecnologia.
          </p>
        </div>

        <div className={styles.cardsGrid}>
          {/* Card 1 */}
          <div className={styles.card}>
            <div className={styles.iconRed}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
            </div>
            <h3 className={styles.cardHighlightRed}>78% de Evasão</h3>
            <h4 className={styles.cardTitle}>Abandono nos Primeiros 30 Dias</h4>
            <p className={styles.cardText}>
              Colaboradores abandonam plataformas genéricas por tédio, conteúdos prolixos e falta de contextualização com as stacks reais da companhia.
            </p>
          </div>

          {/* Card 2 */}
          <div className={styles.card}>
            <div className={styles.iconOrange}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
            </div>
            <h3 className={styles.cardHighlightOrange}>R$ 4.2M / ano</h3>
            <h4 className={styles.cardTitle}>Desperdício em Licenças</h4>
            <p className={styles.cardText}>
              Custo médio desperdiçado por grandes corporações com contratos anuais de plataformas LMS tradicionais cujos assentos nunca são acessados.
            </p>
          </div>

          {/* Card 3 */}
          <div className={styles.card}>
            <div className={styles.iconRed}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
            </div>
            <h3 className={styles.cardHighlightRed}>92% Inaplicadas</h3>
            <h4 className={styles.cardTitle}>Hard Skills Esquecidas</h4>
            <p className={styles.cardText}>
              Sem prática interativa e personalização de ritmo, o conhecimento técnico evapora antes de ser aplicado em repositórios e projetos críticos.
            </p>
          </div>
        </div>
      </section>
      {/* SEÇÃO: COMO A REMIXE TRANSFORMA */}
      <section className={styles.transformSection}>
        <div className={styles.transformHeader}>
          <h2 className={styles.transformTitle}>
            Como a REMIXE Transforma a Educação<br />Corporativa
          </h2>
          <p className={styles.transformSubtitle}>
            Uma infraestrutura adaptativa de ponta a ponta que converte e molda o aprendizado no formato<br />
            exato e no ritmo ideal de cada desenvolvedor.
          </p>
        </div>

        <div className={styles.transformGrid}>
          {/* Card 1 */}
          <div className={styles.transformCard}>
            <div className={styles.iconBlue}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            </div>
            <h4 className={styles.transformCardTitle}>1. Diagnóstico Inteligente & Mapeamento Cognitivo</h4>
            <p className={styles.transformCardText}>
              A IA avalia o nível técnico inicial do time e identifica com precisão se o colaborador retém melhor através de texto conciso, áudio, desafios práticos de código ou sínteses visuais.
            </p>
          </div>

          {/* Card 2 */}
          <div className={styles.transformCard}>
            <div className={styles.iconGreen}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>
            </div>
            <h4 className={styles.transformCardTitle}>2. Conversão Multimodal em Tempo Real</h4>
            <p className={styles.transformCardText}>
              Converta instantaneamente videoaulas longas em PDFs, resumos de slides dinâmicos ou gamificações orientadas a problemas reais.
            </p>
          </div>

          {/* Card 3 */}
          <div className={styles.transformCard}>
            <div className={styles.iconBlue}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
            </div>
            <h4 className={styles.transformCardTitle}>3. Trilhas Adaptativas Hiper-Personalizadas</h4>
            <p className={styles.transformCardText}>
              A densidade do conteúdo e os projetos propostos se ajustam dinamicamente conforme a velocidade de entrega, tempo disponível da semana e proficiência em cada tecnologia.
            </p>
          </div>

          {/* Card 4 */}
          <div className={styles.transformCard}>
            <div className={styles.iconGreen}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
            </div>
            <h4 className={styles.transformCardTitle}>4. Prevenção Ativa de Evasão</h4>
            <p className={styles.transformCardText}>
              Algoritmos preditivos identificam sinais sutis de estagnação e disparam microlearning pontual no Slack/Teams ou reconfiguram o módulo antes que o colaborador desista.
            </p>
          </div>
        </div>

        <div className={styles.mockupContainer}>
          {/* Barra superior (Estilo janela do macOS) */}
          <div className={styles.mockupHeader}>
            <div className={styles.mockupDots}>
              <span className={styles.dotRed}></span>
              <span className={styles.dotYellow}></span>
              <span className={styles.dotGreen}></span>
              <span className={styles.mockupUrl}>remixe-engine://sandbox-v2</span>
            </div>
            <div className={styles.mockupTabs}>
              <span className={styles.tab}>PDF Executivo</span>
              <span className={styles.tab}>Slides</span>
              <span className={`${styles.tab} ${styles.tabActive}`}>Gamificação</span>
              <span className={styles.tab}>Videoaula</span>
            </div>
          </div>

          {/* Corpo do Mockup (Dividido em duas colunas) */}
          <div className={styles.mockupBody}>
            
            {/* Lado Esquerdo: Editor de Código */}
            <div className={styles.mockupCode}>
              <pre>
                <code>
                  <span className={styles.codeComment}>// REMIXE Dynamic Learning Route Orchestration</span><br/><br/>
                  <span className={styles.codeKeyword}>import</span> {'{ AdaptEngine, StudentProfile }'} <span className={styles.codeKeyword}>from</span> <span className={styles.codeString}>'@remixe/ai-core'</span>;<br/><br/>
                  <span className={styles.codeKeyword}>const</span> learner = <span className={styles.codeKeyword}>await</span> StudentProfile.get(<span className={styles.codeString}>'dev-ana-silva'</span>);<br/>
                  <span className={styles.codeKeyword}>const</span> learningMode = learner.detectedModality; <span className={styles.codeComment}>// Output: 'hands-on-gamified'</span><br/><br/>
                  <span className={styles.codeKeyword}>export default async function</span> <span className={styles.codeFunction}>buildSession</span>() {'{'}<br/>
                  {'  '}<span className={styles.codeKeyword}>return</span> AdaptEngine.synthesize({'{'}<br/>
                  {'    '}contentSource: <span className={styles.codeString}>'k8s-microservices-deepdive'</span>,<br/>
                  {'    '}outputMode: learningMode,<br/>
                  {'    '}frictionPills: <span className={styles.codeString}>'active-challenge'</span>,<br/>
                  {'    '}targetTimeMinutes: <span className={styles.codeNumber}>18</span><br/>
                  {'  }'});<br/>
                  {'}'}
                </code>
              </pre>
            </div>

            {/* Lado Direito: Dashboard de Status */}
            <div className={styles.mockupPanel}>
              <div className={styles.panelHeader}>
                <span className={styles.panelStatusTitle}>STATUS DA SESSÃO</span>
                <span className={styles.panelStatusAdherence}>Adaptando: +94% aderência</span>
              </div>
              
              <h4 className={styles.panelTitle}>Desafio: Cluster Resilience Test</h4>
              <p className={styles.panelDesc}>
                O módulo teórico de 55 minutos foi condensado em um desafio interativo de 3 etapas com correção automatizada em tempo real.
              </p>
              
              {/* Barra de Progresso */}
              <div className={styles.progressContainer}>
                <div className={styles.progressBarWrapper}>
                  <div className={styles.progressBar}></div>
                </div>
                <div className={styles.progressLabels}>
                  <span>Engajamento Previsto: 98%</span>
                  <span className={styles.labelGreen}>Risco de Evasão: Quase Nulo</span>
                </div>
              </div>

              {/* Rodapé do painel */}
              <div className={styles.panelFooter}>
                <span><span className={styles.dotGreenSmall}></span> IA Recompondo próximas 3 lições</span>
                <span className={styles.version}>v4.1.2</span>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* SEÇÃO: RESULTADOS COMPROVADOS */}
      <section className={styles.resultsSection}>
        <div className={styles.resultsHeader}>
          <h2 className={styles.resultsTitle}>
            O Retorno Real da Hiper-Personalização
          </h2>
          <p className={styles.resultsSubtitle}>
            Métricas consolidadas de times de engenharia, produto e dados que substituíram plataformas<br />
            legadas pela infraestrutura adaptativa da REMIXE.
          </p>
        </div>

        <div className={styles.metricsGrid}>
          {/* Card 1 */}
          <div className={styles.metricCard}>
            <h3 className={styles.metricValueGreen}>+84%</h3>
            <h4 className={styles.metricTitle}>Retenção de Conhecimento</h4>
            <p className={styles.metricText}>
              Medido após 90 dias em comparação a treinamentos técnicos corporativos tradicionais.
            </p>
          </div>

          {/* Card 2 */}
          <div className={styles.metricCard}>
            <h3 className={styles.metricValueBlue}>3.8x</h3>
            <h4 className={styles.metricTitle}>Mais Engajamento</h4>
            <p className={styles.metricText}>
              Aumento no volume de horas ativas e conclusão consistente de projetos práticos.
            </p>
          </div>

          {/* Card 3 */}
          <div className={styles.metricCard}>
            <h3 className={styles.metricValueGreen}>0%</h3>
            <h4 className={styles.metricTitle}>Evasão Crítica</h4>
            <p className={styles.metricText}>
              Em turmas com intervenção preditiva por IA ativa e reformatação contínua de trilhas.
            </p>
          </div>

          {/* Card 4 */}
          <div className={styles.metricCard}>
            <h3 className={styles.metricValueBlue}>-45%</h3>
            <h4 className={styles.metricTitle}>Tempo de Onboarding</h4>
            <p className={styles.metricText}>
              Aceleração no tempo até o primeiro pull request de novos desenvolvedores contratados.
            </p>
          </div>
        </div>
      </section>
      {/* SECÇÃO: PLANOS CORPORATIVOS */}
      <section className={styles.plansSection}>
        <div className={styles.plansHeader}>
          <h2 className={styles.plansTitle}>
            Planos Escaláveis para Cada Estágio da Sua<br />Empresa
          </h2>
          <p className={styles.plansSubtitle}>
            Flexibilidade total para equipes em crescimento até conglomerados globais de tecnologia.
          </p>
        </div>

        <div className={styles.plansGrid}>
          
          {/* Plano 1: Starter */}
          <div className={styles.planCard}>
            <p className={styles.planPreTitle}>PLANO STARTER</p>
            <h3 className={styles.planName}>PMEs em Crescimento</h3>
            <p className={styles.planDesc}>Ideal para squads que precisam capacitar seus desenvolvedores rapidamente.</p>
            <ul className={styles.planFeatures}>
              <li><span className={styles.checkGreen}>✓</span> Até 100 colaboradores</li>
              <li><span className={styles.checkGreen}>✓</span> Motor de conversão multimodal básica</li>
              <li><span className={styles.checkGreen}>✓</span> Relatórios semanais de conclusão</li>
              <li><span className={styles.checkGreen}>✓</span> Suporte via chat corporativo</li>
            </ul>
            <button className={styles.btnPlanOutline}>Começar Teste Gratuito</button>
          </div>

          {/* Plano 2: Corporate (Destaque) */}
          <div className={`${styles.planCard} ${styles.planCardHighlighted}`}>
            <div className={styles.popularBadge}>MAIS ESCOLHIDO</div>
            <p className={styles.planPreTitleGreen}>PLANO CORPORATE</p>
            <h3 className={styles.planName}>Médias Empresas</h3>
            <p className={styles.planDesc}>Controle preditivo completo de engajamento e personalização via IA.</p>
            <ul className={styles.planFeatures}>
              <li><span className={styles.checkGreen}>✓</span> Até 1.000 colaboradores</li>
              <li><span className={styles.checkGreen}>✓</span> Trilhas adaptativas completas com IA</li>
              <li><span className={styles.checkGreen}>✓</span> Dashboard preditivo de evasão</li>
              <li><span className={styles.checkGreen}>✓</span> Hospedagem de cursos internos proprietários</li>
              <li><span className={styles.checkGreen}>✓</span> Relatórios avançados para lideranças e RH</li>
            </ul>
            <button className={styles.btnPlanSolid}>Solicitar Demonstração VIP</button>
          </div>

          {/* Plano 3: Enterprise */}
          <div className={styles.planCard}>
            <p className={styles.planPreTitleBlue}>PLANO ENTERPRISE</p>
            <h3 className={styles.planName}>Grandes Corporações</h3>
            <p className={styles.planDesc}>Segurança rigorosa, escala ilimitada e governança customizada.</p>
            <ul className={styles.planFeatures}>
              <li><span className={styles.checkBlue}>✓</span> Colaboradores Ilimitados</li>
              <li><span className={styles.checkBlue}>✓</span> Integração completa RH/LMS via API dedicada</li>
              <li><span className={styles.checkBlue}>✓</span> Customização total White-Label</li>
              <li><span className={styles.checkBlue}>✓</span> IA calibrada com diretrizes internas</li>
              <li><span className={styles.checkBlue}>✓</span> Gerente de sucesso (CSM) & SLA 99.9%</li>
            </ul>
            <button className={styles.btnPlanOutline}>Falar com Especialista Enterprise</button>
          </div>

        </div>
      </section>
    <Footer />
    </div>
  );
}

export default LandingPage;