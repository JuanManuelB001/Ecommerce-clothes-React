import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set) => ({
      cart: [],

      // Añadir o actualizar cantidad
      updateCart: (product) =>
        set((state) => {
          const existingProduct = state.cart.find((item) => item.id === product.id);

          if (existingProduct) {
            return {
              cart: state.cart.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: (item.quantity || 1) + 1 }
                  : item
              ),
            };
          }

          // Si es nuevo, lo añade con cantidad 1
          return {
            cart: [...state.cart, { ...product, quantity: 1 }],
          };
        }),

      // Eliminar por ID (más seguro que usar el índice)
      removeItemCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        })),

      // Limpiar todo el carrito
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart-storage", // Nombre de la llave en el LocalStorage
    }
  )
);