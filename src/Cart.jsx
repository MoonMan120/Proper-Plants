import CartItem from "./CartItem";

export default function CartItems({
  plants,
  cart,
  addMoreToCart,
  removeFromCart,
}) {
  if (!plants) {
    return <p>Your cart is empty</p>;
  }
  return (
    <div className="cart-items">
      <h2>Cart</h2>
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
    </div>
  );
}
