const TabPanier = ({panier, removeArticle}) => {

    return ( <>
    <div className="d-flex justify-content-between align-items-center mb-3">
            </div>
            <table className="table table-sm table-striped">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>nom</th>
                        <th>prix</th>
                        { removeArticle != "" && <th>actions</th> }
                    </tr>
                </thead>
                <tbody>
                    { panier.map(({article},panier) => {
                        return <tr key={panier}>
                            <td>{article.id}</td>
                            <td>{article.titre}</td>
                            <td>{article.prix} €</td>
                            { removeArticle != "" && 
                            <td>
                                <button onClick={() => removeArticle(panier)} className="btn btn-danger">supprimer</button>
                            </td>}
                        </tr>
                    }) }
                </tbody>
            </table>
            <hr/>
            </> );
}
 
export default TabPanier;