import PlantItem from "./PlantItem";

export default function PlantMenu({ plants, addToCart }) {
  return (
    <div className="plant-menu">
      <h2>Plant Selection</h2>
      <ul>
        {plants.map((plant) => (
          <PlantItem key={plant.id} plant={plant} addToCart={addToCart} />
        ))}
      </ul>
    </div>
  );
}
