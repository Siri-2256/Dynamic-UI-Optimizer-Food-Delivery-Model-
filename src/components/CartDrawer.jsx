import { useApp } from "../context/AppContext";

export default function CartDrawer() {
  const { cart, removeFromCart } = useApp();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        background: "#fff",
        borderTop: "2px solid #eee",
        padding: "12px",
        boxShadow: "0 -2px 8px rgba(0,0,0,0.1)"
      }}
    >
      <h4>🛒 Cart ({cart.length})</h4>

      {cart.map((item, index) => (
        <div key={index} style={{ display: "flex", justifyContent: "space-between" }}>
          <span>{item.name}</span>
          <button onClick={() => removeFromCart(index)}>❌</button>
        </div>
      ))}

      <strong>Total: ₹{total}</strong>
    </div>
  );
}

