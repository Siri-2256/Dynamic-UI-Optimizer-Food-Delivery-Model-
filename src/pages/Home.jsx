import RestaurantCard from "../components/RestaurantCard";
import { getMealType } from "../utils/timeLogic";

const restaurants = [
  {
    id: 1,
    name: "Spicy Hub",
    cuisine: "Indian",
    image: "https://source.unsplash.com/600x400/?biryani"
  },
  {
    id: 2,
    name: "Pizza World",
    cuisine: "Italian",
    image: "https://source.unsplash.com/600x400/?pizza"
  }
];

export default function Home() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">
        {getMealType()} Recommendations
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {restaurants.map((r) => (
          <RestaurantCard key={r.id} restaurant={r} />
        ))}
      </div>
    </div>
  );
}
