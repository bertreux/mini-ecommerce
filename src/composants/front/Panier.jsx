import { useContext } from "react";
import { panierContext } from "../../contexts/panierContext";
import FormPanier from "./FormPanier";
import TabPanier from "./TabPanier";

const Panier = () => {

    const {panier,removeArticle} = useContext(panierContext);

    return ( <>
    
            <h2>Votre panier</h2>
            <TabPanier panier={panier} removeArticle={removeArticle}/>
            <FormPanier panier={{panier}}/>

    </> );
}
 
export default Panier;