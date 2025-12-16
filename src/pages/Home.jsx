import { useApp } from "../context/AppContext";

export default function Home() {
  const { trackClick } = useApp();

  return (
    <div style={{ padding: "20px" }}>
      <h1>🍔 Food Delivery App</h1>
      <p>Order food from your favorite restaurants</p>

      <button onClick={trackClick}>
        Explore Restaurants
      </button>
    </div>
  );
}

