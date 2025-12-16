import { useApp } from "../context/AppContext";

export default function FoodCard({ food }) {
  const { setCart, track } = useApp();

  return (
    <div className="border p-3 rounded">
      <img src={food.image} className="h-32 w-full object-cover rounded" />
      <h4 className="font-bold">{food.name}</h4>
      <p>₹{food.price}</p>
      <button
        className="bg-orange-500 text-white px-3 py-1 mt-2 rounded"
        onClick={() => {
          setCart((c) => [...c, food]);
          track("add");
        }}
      >
        Add
      </button>
    </div>
  );
}
