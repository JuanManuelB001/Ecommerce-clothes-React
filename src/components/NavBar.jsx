import { Link } from "react-router-dom";
import "../css/navBar.css"

export function NavBar(){
    return(
        <div className="container">
            navBar
            <Link
            to={'/add-cart'}
            >
            Cart
            </Link>
        </div>
    );
}