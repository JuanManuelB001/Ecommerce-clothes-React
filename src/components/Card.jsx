import { Link, Links } from "react-router-dom";
import "../css/card.css";
import { GetImage } from "./GetImage";
import { useCartStore } from "./useCartStore";


export function Card({ props }) {
  const addToCart = useCartStore((state)=> state.updateCart)

  const handleAddToCart = (e,product)=>{
    e.preventDefault(); // Evita acciones por defecto
  e.stopPropagation(); // Detiene la propagación hacia el Link padre
    addToCart(product)
    console.log("Producto Anadido al carrito: ", product)
  }
  return (
    <div className="card-container">
      {props?.map((product) => (
        <div key={product.id} className="card-info">
          <Link
            className="card-img"
            to={`info-clothes/${product.id}`}
            state={{ product }}
          >
            <h3 className="title">{product.title}</h3>
            <GetImage name={product.id} png={product.img} />
            <div>
              {product.sizeList?.map((size, index) => (
                <span key={index} className="size-list">
                  {size}
                </span>
              ))}
            </div>
          </Link>
          <div className="card">
            <link
              href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
              rel="stylesheet"
              
            ></link>
            <button 
              onClick={(e) => handleAddToCart(e, product)} 
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <span className="material-symbols-outlined card-icon">
                shopping_cart
              </span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
