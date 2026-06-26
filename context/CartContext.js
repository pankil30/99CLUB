import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    // ✅ 1. CLEAR CHECKOUT DATA HERE
    // This ensures that anytime an item is added, previous checkout progress is wiped.
    // It is safer to remove specific keys rather than using .clear() so you don't accidentally delete user login tokens.
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("checkoutEmail");
      sessionStorage.removeItem("shippingDetails");
      localStorage.removeItem("checkoutEmail");
      localStorage.removeItem("shippingDetails");
      // Add any other specific keys you use for your checkout forms
    }

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prevCart, { ...product, quantity }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== productId)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}