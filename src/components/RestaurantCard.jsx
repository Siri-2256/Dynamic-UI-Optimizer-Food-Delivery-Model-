import { useApp } from "../context/AppContext";

export default function RestaurantCard({ restaurant }) {
  const { trackClick } = useApp();

  return (
    <div
      onClick={trackClick}
      style={{
        padding: "15px",
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        cursor: "pointer"
      }}
    >
      <h3>{restaurant.name}</h3>
      <p>{restaurant.cuisine}</p>
      <p>⭐ {restaurant.rating}</p>
      <p>⏱ {restaurant.time} mins</p>
    </div>
  );
}

