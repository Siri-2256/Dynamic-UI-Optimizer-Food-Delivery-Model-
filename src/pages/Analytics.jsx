import { useApp } from "../context/AppContext";

export default function Analytics() {
  const { analytics } = useApp();

  return (
    <div className="p-6">
      <h2 className="font-bold text-xl">Analytics</h2>
      <p>Clicks: {analytics.clicks}</p>
      <p>Rewards: {analytics.reward}</p>
    </div>
  );
}
