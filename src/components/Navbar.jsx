import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";

export default function Navbar() {
  const { reward } = useApp();

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 20px",
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
      }}
    >
      <h3 style={{ margin: 0, color: "#ff5200" }}>FoodNow</h3>

      <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
        <Link to="/">Home</Link>
        <Link to="/analytics">Analytics</Link>
        <span style={{ fontWeight: "bold" }}>🏆 {reward}</span>
      </div>
    </nav>
  );
}
