import { useState,useEffect } from "react";
import Formulario from "../../components/Formulario";
import ListaDeEstudantes from "../../components/listaDeEstudante";
import { estudantes } from "../../data/estudantes";

const InicioPage = () =>{

    const listaStorage = localStorage.getItem("estudantes");
    const [lista, setLista] = useState(JSON.parse(listaStorage) || estudantes);
   
   
     useEffect(()=>{
      if(listaStorage){
         setLista(JSON.parse(listaStorage));
       } 
     },[]);
   
     useEffect (() => {
       
       localStorage.setItem('estudantes',JSON.stringify(lista));
   
   },[lista]);

    return(
     <>  
        <Formulario setLista={setLista} lista={lista}/>
        <ListaDeEstudantes lista={lista}/>
        
      </>
    )
};  

export default InicioPage ;