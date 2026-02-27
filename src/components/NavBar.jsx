import { Link } from "react-router-dom";
import "../css/navBar.css"

export function NavBar() {
  return (
    <div className="container-nav">
      <Link to="/" className="nav-button">
        Inicio
      </Link>

      <Link to="/add-cart" className="nav-button">
        Ver Carrito
      </Link>
    </div>
  );
}