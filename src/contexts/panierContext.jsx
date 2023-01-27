import { createContext, useState } from "react";
export const panierContext = createContext();
export const PanierContextProvider = ({children}) => {
    let data = [];
    if(localStorage.getItem("panier")) data = JSON.parse(localStorage.getItem("panier"))
    const [panier, setPanier] = useState(data);
    const addArticle = (article) => {
        const resultat = [];
        for(const key in panier){
            if(panier[key]) resultat.push({...panier[key]})
        }
        resultat.push({article});
        localStorage.setItem("panier",JSON.stringify(resultat));
        setPanier(resultat);
    }
    const removeArticle = (id) => {
        const resultat = [];
            for(const key in panier){
                if(key != id) resultat.push({...panier[key], id : key})
            }
            localStorage.setItem("panier",JSON.stringify(resultat));
            setPanier(resultat);
    }
    const removeAllArticle = () => {
        
        localStorage.setItem("panier",JSON.stringify([]));
        setPanier([])
    }
    return <panierContext.Provider value={{panier,addArticle,removeArticle,removeAllArticle}}>
        {children}
    </panierContext.Provider>
}