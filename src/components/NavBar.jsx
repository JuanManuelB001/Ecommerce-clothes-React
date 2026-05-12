import { Link } from "react-router-dom";
import "../css/navBar.css";
import { useCartStore } from "../components/useCartStore";
import { CartNotification } from "./CartNotification";
export function NavBar() {
  const addToCart = useCartStore((state) => state.updateCart);
  return (
    <div className="container-nav">
      <div className="nav-container">
        <Link to="/" className="nav-button">
          Store
        </Link>

        <Link to="/add-cart" className="nav-button">
          Cart
        </Link>
      </div>
      <div className="notification-position">
        <CartNotification />
      </div>
    </div>
  );
}
