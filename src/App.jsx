import CardEstudante from "./components/CardEstudante";
import Footer from "./components/Footer";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListaDeEstudantes from "./components/listaDeEstudante";

function App() {
  return (
  <>
  <div style={{marginBottom:"130px"}}/>
  <Header/>
  <Formulario/>
  <CardEstudante/>
  <ListaDeEstudantes/>
  <Footer/>
  </>
  )  
}

export default App;
