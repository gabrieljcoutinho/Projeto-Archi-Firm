import '../src/index.css';
import Header from "./components/Header.jsx"
import Arquitetura from "./components/Arquitetura.jsx"
import SectionImgDesign from "./components/SectionImgDesign.jsx"
import FaixaSeparandoConteudo from "./components/FaixaSeparandoConteudo.jsx"
import FocoDaEmpresa from "./components/FocoDaEmpresa.jsx"

function App() {
  return (
    <div className="App">

<Header />

<Arquitetura/>

  <SectionImgDesign />

  <FaixaSeparandoConteudo />

  <FocoDaEmpresa />

    </div>
  );
}

export default App;
