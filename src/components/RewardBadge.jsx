import { useApp } from "../context/AppContext";

export default function RewardBadge() {
  const { analytics } = useApp();

  return (
    <div className="flex items-center gap-2 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
      🏆 Reward
      <span className="bg-yellow-400 text-white px-2 py-0.5 rounded-full">
        {analytics.reward}
      </span>
    </div>
  );
}
