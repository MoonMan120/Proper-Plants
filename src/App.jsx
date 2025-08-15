import PlantMenu from "./PlantMenu";
import CartItems from "./CartItem";

export default function App() {
  return (
    <>
      <h1>Proper Plants</h1>
      <main>
        <div className="main">
          <PlantMenu />
          <CartItems />
        </div>
      </main>
    </>
  );
}
