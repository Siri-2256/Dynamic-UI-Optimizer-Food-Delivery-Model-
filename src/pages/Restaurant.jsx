import { useParams } from "react-router-dom";
import FoodCard from "../components/FoodCard";

const foods = [
  {
    id: 1,
    name: "Chicken Biryani",
    price: 180,
    image: "https://source.unsplash.com/600x400/?biryani"
  },
  {
    id: 2,
    name: "Paneer Curry",
    price: 150,
    image: "https://source.unsplash.com/600x400/?paneer"
  }
];

export default function Restaurant() {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Restaurant {id}</h2>
      <div className="grid grid-cols-2 gap-4">
        {foods.map((f) => (
          <FoodCard key={f.id} food={f} />
        ))}
      </div>
    </div>
  );
}
