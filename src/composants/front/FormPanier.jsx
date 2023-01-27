import { useRef,useContext } from "react";
import axios from "axios"
import { panierContext } from "../../contexts/panierContext";
import { useNavigate } from "react-router-dom";
import { useAlerte } from "../../hook/useAlerte";
import Alert from "../Alert";
import { contactVerif } from "../../verif/liste";

const FormPanier = ({panier}) => {

    const nomRef = useRef();
    const mailRef = useRef();
    const adresseRef = useRef();
    const commentaireRef = useRef();
    const {removeAllArticle} = useContext(panierContext);
    const navigate = useNavigate();
    const [message,setMessage,getError] = useAlerte(contactVerif);

    const handleSubmit = (e,panier) => {
        e.preventDefault();
        const achat = {
            nom:nomRef.current.value,
            mail:mailRef.current.value,
            adresse:adresseRef.current.value,
            commentaire:commentaireRef.current.value,
            articles:panier.panier,
        }

        if(achat.articles.length == 0){
            return setMessage({type:"warning",liste:["Vous devez au mien séléctionner un article pour pouvoir éffectuer un achat"]})
        }else {
            if(getError(achat)) return;

            axios.post(`${import.meta.env.VITE_API}achats.json`,achat).then(reponse => {
                e.target.reset();
                setMessage({type:"success",liste:["l'achat a bien été effectué"]})
                removeAllArticle();
                navigate('/bon-code',{state:{achat:achat,id:reponse.data.name}});
                }).catch(ex => setMessage({type:"warning",liste:["erreur lors de l'enregistrement de l'achat"]}))
        }
    }

    return ( <>
    <form onSubmit={(e) => handleSubmit(e,panier)}>
        <input type="text" placeholder="votre nom" className="form-control mb-3" ref={nomRef}/>
        <input type="email" placeholder="votre email" className="form-control mb-3" ref={mailRef}/>
        <input type="text" placeholder="votre rue / code postale / ville" className="form-control mb-3" ref={adresseRef}/>
         <textarea className="form-control mb-3" placeholder="commentaires" ref={commentaireRef}/>
         <input type="submit" className="btn btn-warning" value="Commander"/>
    </form>
    <Alert alerte={message} />
    </> );
}
 
export default FormPanier;