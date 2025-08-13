export default function PlantItem({ plant, addtoCart }) {
  return (
    <li className="planted">
      <figure>{plant.image}</figure>
      {plant.name}
      <button onClick={() => addtoCart(plant)}>Add to cart</button>
    </li>
  );
}
