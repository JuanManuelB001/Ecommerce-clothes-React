import { useState, useEffect } from 'react';
import { useCartStore } from '../components/useCartStore';
import { CardElement } from '../components/CardElement';
import sytle from '../css/addCard.module.css'
import { NavBar } from '../components/NavBar';
export function AddCard() {
  const cart = useCartStore((state) => state.cart);
  const [isClient, setIsClient] = useState(false);
  const deleteCart = useCartStore((state)=> state.clearCart)
  const [total, setTotal] = useState(0);
  // Esto asegura que el carrito solo se renderice cuando el cliente esté listo
  useEffect(() => {
    setTotal(0)
    setIsClient(true);
    
  }, []);
  //TOTALIZAR COMPRA
  useEffect(()=>{
    sumarTotal()
  },[cart])
const sumarTotal = ()=>{
    let total = 0;
      cart.map((item)=>{
       total += item.price
      })
      console.log(total.toFixed(2))
      setTotal(total.toFixed(2))
      
    };
  const handleDelete = ()=>{
    // LIMPIAR CARRITO
    console.log(cart)
    deleteCart()
  }
  if (!isClient) return null; // O un cargando...

  return (
    
    <div className={`${sytle.container}  ${sytle.slideIn}`}>
        <NavBar/>
       <h2>Productos en carrito: {cart.length}</h2>
      <div className={sytle.containerCard}>
         {
        // VALIDAR SI HAY ALGO EN EL CARRITO,MOSTRAR ELEMENTOS
        cart.length>0 
        ?  <CardElement porps={cart}/>
        : <p>Nothing in Cart</p>
      }
      <div className={sytle.buttons}>
        <button onClick={handleDelete}>Clear Cart</button>
      </div>
      </div>
      {
        cart.length>0
        ? <div className={sytle.total}>Total a Pagar: <span >{total}$</span></div>
        : ""
      }
      
    </div>
  );
}