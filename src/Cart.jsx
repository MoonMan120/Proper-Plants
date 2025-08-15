import CartItem from "./CartItem";
import { useCart } from "./CartContext";

export default function CartItems() {
  const { cart, addMoreToCart, removeFromCart } = useCart();

  return (
    <div className="cart-items">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              addMoreToCart={addMoreToCart}
              removeFromCart={removeFromCart}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
