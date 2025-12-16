import { useApp } from "../context/AppContext";

export default function FoodCard({ food }) {
  const { trackClick } = useApp();

  return (
    <div
      onClick={trackClick}
      style={{
        padding: "12px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        cursor: "pointer"
      }}
    >
      <h4>{food.name}</h4>
      <p>₹{food.price}</p>
      <p>{food.type}</p>
    </div>
  );
}

