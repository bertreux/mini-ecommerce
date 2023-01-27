import { useEffect, useState, useContext } from "react";
import axios from "axios"
import { panierContext } from "../../contexts/panierContext";

const Accueil = () => {

    const [articles, setArticles] = useState([]);
    const {addArticle} = useContext(panierContext); 

    useEffect( () => {
        axios.get(`${import.meta.env.VITE_API}Articles.json`).then(reponse => {
            const resultat = [];
            for(const key in reponse.data){
                if(reponse.data[key]) resultat.push({...reponse.data[key], id : key})
            }
            setArticles(resultat);
        })
    }, []);

    return ( <div className="row">
        <h1>Catalogue</h1>
        {articles.map(article => {
            return <article className="col-4 mb-4" key={article.id}>
                <div className="card">
                    <h2 className="card-header">
                        {article.titre}
                    </h2>
                    <div className="card-body article_contenu">
                        {article.contenu}
                    </div>
                    <footer className="card-footer d-flex justify-content-between">
                        <button className="btn btn-dark " onClick={() => addArticle(article)}>Ajouter au panier</button>
                        <h5 className="mt-2">{article.prix} €</h5>
                    </footer>
                </div>
            </article>
        })}
    </div> );
}
 
export default Accueil;