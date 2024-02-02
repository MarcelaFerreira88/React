import Header from "./components/Header";
import Footer from "./components/Footer";
import ContadorPage from "./components/Contador";
import{Route,Routes} from "react-router-dom"
import EstudantesPage from "./pages/InicioPage";
import ErrorPage from "./pages/ErrorPage";
import SobrePage from "./pages/SobrePage";
import SobreMimPage from "./pages/SobrePage/SobreMimPage";
import SobrePretaLabPage from  "./pages/SobrePage/SobrePretaLabPage"
import PokemonPage from "./pages/PokemonPage";
import EnderecoPage from "./pages/EnderecoPage";

function App() {
 return (
  <>
  <Header/>

  <div style={{marginBottom:"130px"}}>

  <Routes>
    <Route path="/" element={<SobreMimPage/>}/>
    <Route path="/estudantes" element={<EstudantesPage/>}/>
    <Route path ="/contador" element={<ContadorPage/>}/>
    <Route path="/pokemons" element={<PokemonPage/>} />
    <Route path="/endereco" element={<EnderecoPage/>} />
    <Route path="/sobre">
      <Route index element={<SobrePage/>} />
      <Route path="mim" element={<SobreMimPage/>}/>
      <Route path="preta-lab" element={<SobrePretaLabPage/>}/>//
      </Route>
    <Route path ="*" element={<ErrorPage/>}/>
  </Routes>
  
  </div>
  
  <Footer mensagem="Feito com ❤️ por Marcela Ferreira" />
  </>
  );
};

export default App;


  