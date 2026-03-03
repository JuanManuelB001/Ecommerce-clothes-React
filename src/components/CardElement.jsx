import { useCartStore } from "./useCartStore";
import "../css/cardElement.css"
import { Link, Links } from "react-router-dom";
import { GetImage } from "./GetImage";
export function CardElement(){
    const cart = useCartStore((state)=> state.cart)
    //const deleteElement = useCartStore((state)=> state.removeItemCart())
    const handleDelete = ()=>{
        console.log("Producto Eliminado")
    }
    return(
        <div className="container-cart-product">
           {cart.map((cloth)=>(
            <div key={cloth.id} className="cart-product">
               <Link
               className="card-img"
               to={`info-clothes/${cloth.id}`}
               >
               </Link>
               <h3>{cloth.title}</h3>
               <GetImage name={cloth.id} png={cloth.img}/>
            <div className="button-cart">
                <button onClick={handleDelete}>Delete</button>
            </div>
            </div>
           ))}
            
        </div>
    );
}