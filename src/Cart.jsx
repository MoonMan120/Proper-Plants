import CartItem from "./CartItem";

export default function CartItems({ cart, addMoreToCart, removeFromCart }) {
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
