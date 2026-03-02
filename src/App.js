import '../src/index.css';
import Header from "./components/Header.jsx"
import Arquitetura from "./components/Arquitetura.jsx"
import SectionImgDesign from "./components/SectionImgDesign.jsx"
import FaixaSeparandoConteudo from "./components/FaixaSeparandoConteudo.jsx"
import FocoDaEmpresa from "./components/FocoDaEmpresa.jsx"
import FaixaSeparandoConteudo2 from "./components/FaixaSeparandoConteudo2.jsx"
import DesignrIdeas from "./components/DesignrIdeas.jsx"

import Footer from "./components/Footer.jsx"

function App() {
  return (
    <div className="App">

<Header />

<Arquitetura/>

  <SectionImgDesign />

  <FaixaSeparandoConteudo />

  <FocoDaEmpresa />

  <FaixaSeparandoConteudo2 />

  <DesignrIdeas />

  <Footer/>

    </div>
  );
}

export default App;
