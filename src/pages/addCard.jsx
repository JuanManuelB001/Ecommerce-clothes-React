import { useState, useEffect } from 'react';
import { useCartStore } from '../components/useCartStore';
import { CardElement } from '../components/CardElement';
import sytle from '../css/addCard.module.css'
import { NavBar } from '../components/NavBar';
import { ConfirmDelete } from '../components/ConfirmDelete';
import { style } from 'framer-motion/client';
export function AddCard() {
  const cart = useCartStore((state) => state.cart);
  const [isClient, setIsClient] = useState(false);
  const deleteCart = useCartStore((state)=> state.clearCart)
  const [total, setTotal] = useState(0);
  const [showConfirm, setShowConfirm] = useState(false);
  const handleConfirmDelete = () => {
  deleteCart();
  setShowConfirm(false);
};

const handleCancel = () => {
  setShowConfirm(false);
};
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
    setShowConfirm(true)
    console.log(cart)
    deleteCart()
  }
  if (!isClient) return null; // O un cargando...

  return (
    
    <div className={`${sytle.container}  ${sytle.slideIn}`}>
        <NavBar/>
       <h2>{cart.length > 0 ? `Productos en carrito: ${cart.length}` : "" }</h2>
      <div className={sytle.containerCard}>
         {
        // VALIDAR SI HAY ALGO EN EL CARRITO,MOSTRAR ELEMENTOS
        cart.length>0 
        ?  <CardElement porps={cart}/>
        : <p ><span className={sytle.nothingCart}>Nothing in Cart</span></p>
      }
      <div className={sytle.buttons}>
        {
          cart.length> 0 &&(<button onClick={() => (setShowConfirm(true))}>Clear Cart</button>)
        }
      </div>
      </div>
      {
        cart.length>0
        ? <div className={sytle.total}>Total a Pagar: <span >{total}$</span></div>
        : ""
      }
      {showConfirm && (
  <ConfirmDelete
    message="¿Seguro que quieres vaciar el carrito?"
    onConfirm={handleConfirmDelete}
    onCancel={handleCancel}
  />
)}
    </div>
  );
}