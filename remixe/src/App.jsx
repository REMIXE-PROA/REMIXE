import './App.css'
import Quiz from './components/quiz.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/landingPage.jsx'
import Presentation from './pages/presentation.jsx'
import Informacoes from './pages/informacoes.jsx'
import Modulo from './pages/modulo.jsx'
import Edicao from './pages/edicao.jsx'
import Finalizacao from './pages/finalizacao.jsx'
import Course from './pages/course.jsx'
import SelecaoCurso from './pages/selecaoCurso.jsx'
import Creator from './pages/creator.jsx';
import ColabLogin from "./pages/colabLogin.jsx";
import GestorLogin from './pages/gestorLogin.jsx';
import RegisterCompany from './pages/cadastroEmpresa.jsx';


function App() {

  return (
    <main>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Login-collab" element={<ColabLogin />} />
        <Route path="/Login-gestor" element={<GestorLogin />} />
        <Route path="/selecaoCurso" element={<SelecaoCurso />} />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="/course" element={<Course />} />
        <Route path="/creator" element={<Creator />} />
        <Route path="/Informacoes" element={<Informacoes />} />
        <Route path="/Modulo" element={<Modulo />} />
        <Route path="/Edicao" element={<Edicao />} />
        <Route path="/Finalizacao" element={<Finalizacao />} />
        <Route path="/CadastroEmpresa" element={<RegisterCompany loginOption={false} />} />
      </Routes>
    </BrowserRouter>
    </main>
  )
}

export default App
