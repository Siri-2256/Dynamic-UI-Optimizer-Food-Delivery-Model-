import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";

export default function Navbar() {
  const { cart, analytics } = useApp();

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md px-6 py-3 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-orange-500">
        FoodNow
      </Link>

      <div className="flex gap-6 items-center">
        <Link to="/" className="hover:text-orange-500">
          Home
        </Link>
        <Link to="/orders" className="hover:text-orange-500">
          Orders
        </Link>
        <Link to="/analytics" className="hover:text-orange-500">
          Analytics
        </Link>

        <Link to="/cart" className="relative">
          🛒
          <span className="absolute -top-2 -right-3 bg-orange-500 text-white text-xs rounded-full px-2">
            {cart.length}
          </span>
        </Link>

        <span className="text-xs text-gray-500">
          ⭐ {analytics.reward}
        </span>
      </div>
    </nav>
  );
}
