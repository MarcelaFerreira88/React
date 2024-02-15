import "./styles.css";
import { useEffect, useState } from "react";
import CardPokemon from "../../components/CardPokemon"
import axios from "axios";
//import CircularProgress from '@mui/material/CircularProgress';




const PokemonPage = () => {
    
    const[referenciasPokemons,setReferenciasPokemons] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const[listaPokemons, setListaPokemons] = useState([]);
    
    


    const Pegar100ReferenciasPokemos = async() =>{
    try{
        const resposta = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100");
        setReferenciasPokemons(resposta.data.results);
        
        
    } catch(error){
        console.error("Erro ao buscar as referências dos pokemon", error)
        
    }
};

useEffect(() =>{

  
    Pegar100ReferenciasPokemos();
},[]);




const pegarListaDePokemons = async () => {
    const listaTemporaria = [];
    for (const referencia of referenciasPokemons){
        try{
            const resposta = await axios.get(referencia.url);
            listaTemporaria.push (resposta.data)
        } catch(error){
            console.error("Erro ao buscar o pokemon", error);
        }
    }
    setTimeout(() => {
    setListaPokemons(listaTemporaria);
    setCarregando(false);  }, 1000);
};


useEffect(() => {
    pegarListaDePokemons();
},[referenciasPokemons]);



    return(
        <div className="pokemon-container">
            {carregando?(
            <h1>Carregando...</h1>
            
        //<CircularProgress/>
      ) : (listaPokemons.map((pokemon) =>(
                <CardPokemon 
                key={pokemon.id}
                nome= {pokemon.name} 
                foto ={pokemon.sprites.front_default} 
                id={pokemon.id} 
                url={pokemon.forms[0].url}
                />
      ))
            )}

         </div>
        );
};



export default PokemonPage;