import { useState, useEffect } from 'react';
import { useCartStore } from '../components/useCartStore';
export function AddCard() {
  const cart = useCartStore((state) => state.cart);
  const [isClient, setIsClient] = useState(false);

  // Esto asegura que el carrito solo se renderice cuando el cliente esté listo
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // O un cargando...

  return (
    <div>
       <h2>Productos en carrito: {cart.length}</h2>
       {/* ... resto de tu lista */}
    </div>
  );
}