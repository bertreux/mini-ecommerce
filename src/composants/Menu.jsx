import { NavLink } from "react-router-dom";
import { useContext } from "react"; 
import { panierContext } from "../contexts/panierContext"; 

const Menu = () => {

    const {panier} = useContext(panierContext);

    return (<div className="bg-dark display-table">
    <nav className="navbar navbar-expand navbar-dark container">
        <span className="navbar-brand fs-3">
            <h5>Mini E commerce</h5>
        </span>
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink to="/" className="nav-link">Catalogue</NavLink>
            </li>
        </ul>
        <ul className="navbar-nav ms-auto">
                <li className="navbar-item ">
                <NavLink to="/panier" className="nav-link d-flex p-2">Panier</NavLink>
                </li>
                <li>
                    <h3 className="text-danger">{panier.length}</h3>
                </li>
            </ul>
    </nav>
</div>);
}
 
export default Menu;