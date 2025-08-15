import PlantItem from "./PlantItem";
import { useCart } from "./Context";
import PLANTS from "./data";

export default function PlantMenu() {
  const { addToCart } = useCart();
  return (
    <div>
      <h2>Plant Selection</h2>
      <ul className="plant-menu">
        {PLANTS.map((plant) => (
          <PlantItem key={plant.id} plant={plant} addToCart={addToCart} />
        ))}
      </ul>
    </div>
  );
}
