import '../src/index.css';
import Header from "./components/Header.jsx"
import Arquitetura from "./components/Arquitetura.jsx"
import SectionImgDesign from "./components/SectionImgDesign.jsx"
import FaixaSeparandoConteudo from "./components/FaixaSeparandoConteudo.jsx"


function App() {
  return (
    <div className="App">

<Header />

<Arquitetura/>

  <SectionImgDesign />

  <FaixaSeparandoConteudo />

    </div>
  );
}

export default App;
