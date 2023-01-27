import TabPanier from "./TabPanier";
import { useLocation } from "react-router-dom";

const BonCode = () => {

    const location = useLocation();

    return ( <>
    <h2>Bon de commande n°{location.state.id}</h2>
    <p>Merci pour votre commande !!!</p>
    <TabPanier panier={location.state.achat.articles} removeArticle=""/>
    <h2>Détail livraison</h2>
    <ul>
        <li>
            nom : {location.state.achat.nom}
        </li>
        <li>
            email : {location.state.achat.mail}
        </li>
        <li>
            adresse : {location.state.achat.adresse}
        </li>
        <li className="commande_commentaire">
            Commentaire : <br/>{location.state.achat.commentaire}
        </li>
    </ul>
    </> );
}
 
export default BonCode;