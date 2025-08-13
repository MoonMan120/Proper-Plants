import PlantItem from "./PlantItem";

export default function PlantMenu({ plants, addToCart }) {
  return (
    <div>
      <h2>Plant Selection</h2>
      <ul className="plant-menu">
        {plants.map((plant) => (
          <PlantItem key={plant.id} plant={plant} addToCart={addToCart} />
        ))}
      </ul>
    </div>
  );
}
