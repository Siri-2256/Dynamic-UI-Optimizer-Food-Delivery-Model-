import { useApp } from "../context/AppContext";

export default function Cart() {
  const { cart, track } = useApp();

  return (
    <div className="p-6">
      <h2 className="font-bold text-xl">Cart</h2>
      {cart.map((c, i) => (
        <p key={i}>
          {c.name} - ₹{c.price}
        </p>
      ))}
      {cart.length > 0 && (
        <button
          className="bg-green-500 text-white px-4 py-2 mt-4 rounded"
          onClick={() => track("order")}
        >
          Place Order
        </button>
      )}
    </div>
  );
}
