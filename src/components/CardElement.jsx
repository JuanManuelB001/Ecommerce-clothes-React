import { useCartStore } from "./useCartStore";
import "../css/cardElement.css";
import { Link, Links } from "react-router-dom";
import { GetImage } from "./GetImage";
import { ConfirmDelete } from "./ConfirmDelete";
import { use, useState } from "react";
export function CardElement() {
  const cart = useCartStore((state) => state.cart);
  const deleteElement = useCartStore((state) => state.removeItemCart);
const [showConfirm, setShowConfirm] = useState(false)
    const [clothId, setClothId] = useState();
const handleConfirmDelete = ()=>{
    deleteElement(clothId);
    console.log(`Producto ${clothId} Eliminado`);
    setShowConfirm(false)
}
const handleCancel = ()=>{
    setShowConfirm(false);
    
}
const deleteClothId = (id) =>{
    setClothId(id)
    setShowConfirm(true)

  }
  return (
    <div className="container-cart-product">
      {cart.map((cloth) => (
        <div key={cloth.id} className="cart-product">
          <Link className="card-img" to={`info-clothes/${cloth.id}`}></Link>
          <h3>{cloth.title}</h3>
          <GetImage name={cloth.id} png={cloth.img} />
          <div className="button-cart">
            <button onClick={() => deleteClothId(cloth.id)}>Delete</button>
          </div>
        </div>
      ))}
      {
        showConfirm && (<ConfirmDelete
        message="¿Seguro que quieres vaciar el carrito?"
        onConfirm={handleConfirmDelete}
        onCancel={handleCancel}
      />)
      }
    </div>
  );
}
