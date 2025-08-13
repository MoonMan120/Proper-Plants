import { useState } from "react";
import PlantMenu from "./PlantMenu";
import CartItem from "./Cart.jsx";
import PLANTS from "./data.js";

export default function App() {
  const [cart, setCart] = useState([]);
  function addToCart(plant) {
    setCart((prev) => {
      const found = prev.find((item) => item.id === plant.id);
      if (found) {
        return prev.map((item) =>
          item.id === plant.id ? { item, quantity: item.quantity + 1 } : item
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
    <>
      <h1>Proper Plants</h1>
      <main>
        <div className="main">
          <PlantMenu plants={PLANTS} addToCart={addToCart} />
          <CartItem
            cart={cart}
            removeFromCart={removeFromCart}
            addMoreToCart={addMoreToCart}
          />
        </div>
      </main>
    </>
  );
}
