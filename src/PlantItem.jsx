export default function PlantItem({ plant, addToCart }) {
  return (
    <li className="planted">
      <p className="figures">{plant.image}</p>
      {plant.name}
      <button onClick={() => addToCart(plant)}>Add to cart</button>
    </li>
  );
}
