import { useState, useEffect } from 'react';
import { useCartStore } from '../components/useCartStore';
import { CardElement } from '../components/CardElement';
import sytle from '../css/addCard.module.css'
export function AddCard() {
  const cart = useCartStore((state) => state.cart);
  const [isClient, setIsClient] = useState(false);
  const deleteCart = useCartStore((state)=> state.clearCart)
  const [total, setTotal] = useState([]);
  // Esto asegura que el carrito solo se renderice cuando el cliente esté listo
  useEffect(() => {
    setIsClient(true);
    
  }, []);
  //TOTALIZAR COMPRA
  useEffect(()=>{
    sumarTotal()
  },[cart])
const sumarTotal = ()=>{
    let total = 0;
      cart.map((item)=>{
       console.log(item.price)
       total += item.price
      })
      setTotal(total)
      
    };
  const handleDelete = ()=>{
    // LIMPIAR CARRITO
    console.log(cart)
    deleteCart()
  }
  if (!isClient) return null; // O un cargando...

  return (
    <div className={sytle.container}>
       <h2>Productos en carrito: {cart.length}</h2>
       <button onClick={handleDelete}>Clear Cart</button>
       {
        // VALIDAR SI HAY ALGO EN EL CARRITO,MOSTRAR ELEMENTOS
        cart.length>0 
        ?  <CardElement porps={cart}/>
        : <p>Nothing in Cart</p>
      }
      {
        cart.length>0
        ? <div className={sytle.total}>Total a Pagar: <span >{total}$</span></div>
        : ""
      }
      
    </div>
  );
}