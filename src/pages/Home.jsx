import { useApp } from "../context/AppContext";
import RestaurantCard from "../components/RestaurantCard";
import FoodCard from "../components/FoodCard";
import CartDrawer from "../components/CartDrawer";
import { rlAgent } from "../utils/rlAgent";
import { getMealType } from "../utils/timeLogic";

export default function Home() {
  const {
    clicks,
    engagementTime,
    addToCart,
  } = useApp();

  const uiDecision = rlAgent({ clicks, engagementTime });
  const mealType = getMealType();

  const restaurants = [
    { name: "Spicy Hub", cuisine: "Indian", rating: 4.5, time: 30 },
    { name: "Burger Town", cuisine: "Fast Food", rating: 4.2, time: 25 },
    { name: "Pizza Palace", cuisine: "Italian", rating: 4.6, time: 28 },
  ];

  const foods = [
    { name: "Paneer Biryani", price: 220, type: "Veg" },
    { name: "Chicken Burger", price: 180, type: "Non-Veg" },
    { name: "Margherita Pizza", price: 250, type: "Veg" },
  ];

  return (
    <div style={{ padding: "20px", paddingBottom: "120px" }}>
      <h1>
        {uiDecision.priority === "quick-reorder"
          ? "🔁 Order Again"
          : `🍽️ ${mealType} Recommendations`}
      </h1>

      <p style={{ color: "#555" }}>
        Smart UI based on your activity & time
      </p>

      {/* Restaurants */}
      <h2 style={{ marginTop: "25px" }}>Popular Restaurants</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "15px",
        }}
      >
        {restaurants.map((r, i) => (
          <RestaurantCard key={i} restaurant={r} />
        ))}
      </div>

      {/* Foods */}
      <h2 style={{ marginTop: "30px" }}>Recommended Dishes</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "15px",
        }}
      >
        {foods.map((f, i) => (
          <div key={i}>
            <FoodCard food={f} />
            <button
              style={{ width: "100%", marginTop: "8px" }}
              onClick={() => addToCart(f)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <CartDrawer />
    </div>
  );
}
