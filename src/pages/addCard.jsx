import { useState, useEffect } from 'react';
import { useCartStore } from '../components/useCartStore';
import { CardElement } from '../components/CardElement';

export function AddCard() {
  const cart = useCartStore((state) => state.cart);
  const [isClient, setIsClient] = useState(false);
  const deleteCart = useCartStore((state)=> state.clearCart)
  // Esto asegura que el carrito solo se renderice cuando el cliente esté listo
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleDelete = ()=>{
    // LIMPIAR CARRITO
    console.log(cart)
    deleteCart()
  }
  if (!isClient) return null; // O un cargando...

  return (
    <div>
       <h2>Productos en carrito: {cart.length}</h2>
       <button onClick={handleDelete}>Clear Cart</button>
       {
        // VALIDAR SI HAY ALGO EN EL CARRITO,MOSTRAR ELEMENTOS
        cart.length>0 
        ?  <CardElement porps={cart}/>
        : <p>Nothing in Cart</p>
       }
    </div>
  );
}