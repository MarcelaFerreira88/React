import CardPokemon from "../../components/CardPokemon"
import axios from "axios";

const PokemonPage = () => {
const Pegar100Pokemos = () =>{
    try{
        const resposta = axios.get("https://pokeapi.co/api/v2/pokemon?limit=100")
    } catch(error){
        console.error("Erro ao buscar pokemon")}
}



    return
        <CardPokemon />;
    
};

export default PokemonPage;