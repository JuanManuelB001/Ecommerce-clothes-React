import { useCartStore } from "./useCartStore";
import "../css/cardElement.css"

export function CardElement(){
    const cart = useCartStore((state)=> state.cart)
    console.log(cart)
    return(
        <div>
           {cart.map((d)=>(
            <div key={d.id} className="container-cart-product">
                <p>{d.title}</p>
            </div>
           ))}
            
        </div>
    );
}