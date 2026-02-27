import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set) => ({
      cart: [],
      notification: null,

      updateCart: (product) =>
        set((state) => {
          const existingProduct = state.cart.find(
            (item) => item.id === product.id
          );

          let updatedCart;

          if (existingProduct) {
            updatedCart = state.cart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: (item.quantity || 1) + 1 }
                : item
            );
          } else {
            updatedCart = [...state.cart, { ...product, quantity: 1 }];
          }

          return {
            cart: updatedCart,
            notification: `✅ ${product.title} añadido al carrito`,
          };
        }),

      removeItemCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        })),

      clearCart: () => set({ cart: [] }),

      clearNotification: () => set({ notification: null }),
    }),
    {
      name: "cart-storage",

      // 🔥 IMPORTANTE: no persistir la notificación
      partialize: (state) => ({ cart: state.cart }),
    }
  )
);