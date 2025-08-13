export default function PlantItem({ plant, addToCart }) {
  return (
    <li className="planted">
      <figure>{plant.image}</figure>
      {plant.name}
      <button onClick={() => addToCart(plant)}>Add to cart</button>
    </li>
  );
}
