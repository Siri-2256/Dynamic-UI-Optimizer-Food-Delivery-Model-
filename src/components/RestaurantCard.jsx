import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";

export default function RestaurantCard({ restaurant }) {
  const { track } = useApp();

  return (
    <Link
      to={`/restaurant/${restaurant.id}`}
      onClick={() => track("click")}
      className="border p-4 rounded shadow hover:scale-105 transition"
    >
      <img
        src={restaurant.image}
        alt={restaurant.name}
        className="h-40 w-full object-cover rounded"
      />
      <h3 className="font-bold mt-2">{restaurant.name}</h3>
      <p>{restaurant.cuisine}</p>
    </Link>
  );
}
