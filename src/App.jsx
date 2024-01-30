import Header from "./components/Header";
import Footer from "./components/Footer";
import ContadorPage from "../../hello-world/src/pages/ContadorPage";
import{Route,Routes} from "react-router-dom"
import InicioPage from "../../hello-world/src/pages/InicioPage";
import ErrorPage from "../../hello-world/src/pages/ErrorPage";
import SobrePage from "../../hello-world/src/pages/SobrePage";
import SobreMimPage from "../../hello-world/src/pages/SobrePage/SobreMimPage";
import SobrePretaLabPage from  "../../hello-world/src/pages/SobrePage/SobrePretaLabPage"
import PokemonPage from "../../hello-world/src/pages/PokemonPage";
import EnderecoPage from "./pages/EnderecoPage";

function App() {
 return (
  <>
  <Header/>

  <div style={{marginBottom:"130px"}}>

  <Routes>
    <Route path="/" element={<InicioPage/>}/>
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


  