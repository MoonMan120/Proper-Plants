export default function CartItem({ item, addMoreToCart, removeFromCart }) {
  return (
    <li className="inCart1">
      {item.image}
      {item.name}
      <div className="inCart2">
        <button onClick={() => removeFromCart(item.id)}>-</button>
        {item.quantity}
        <button onClick={() => addMoreToCart(item.id)}>+</button>
      </div>
    </li>
  );
}
