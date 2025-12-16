import { useApp } from "../context/AppContext";
import { getMealType } from "../utils/timeLogic";

export default function Home() {
  const { trackClick } = useApp();
  const meal = getMealType();
  return (
    <div style={{ padding: "20px" }}>
      <h1>🍽️ {meal} Specials</h1>
      <p>Best Recommendations</p>

      <button onClick={trackClick}>
        Explore Restaurants
      </button>
    </div>
  );
}

