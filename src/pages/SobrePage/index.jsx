import "./styles.css"
import { Link, matchRoutes } from "react-router-dom";

const SobrePage = () =>{
    return(
    <main className="center">   
        <Link className="link" to="/sobre/mim">Sobre Mim</Link>
        <Link className="link" to="/sobre/preta-lab">Sobre Preta Lab</Link>
    </main>
);
};


export default SobrePage;