import { createContext, useContext, useState } from "react";

const ContextCart = createContext();

export function useCart() {
  return useContext(ContextCart);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(plant) {
    setCart((prev) => {
      const found = prev.find((item) => item.id === plant.id);
      if (found) {
        return prev.map((item) =>
          item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...plant, quantity: 1 }];
    });
  }

  function addMoreToCart(id) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function removeFromCart(id) {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  return (
    <ContextCart.Provider
      value={{ cart, addToCart, addMoreToCart, removeFromCart }}
    >
      {children}
    </ContextCart.Provider>
  );
}
