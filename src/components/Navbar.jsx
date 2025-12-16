import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";

export default function Navbar() {
  const { cart, analytics } = useApp();

  return (
    <nav className="flex justify-between p-4 shadow">
      <Link to="/" className="font-bold text-xl text-orange-500">
        FoodNow
      </Link>
      <div className="flex gap-4">
        <Link to="/orders">Orders</Link>
        <Link to="/analytics">Analytics</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
        <span>⭐ {analytics.reward}</span>
      </div>
    </nav>
  );
}
