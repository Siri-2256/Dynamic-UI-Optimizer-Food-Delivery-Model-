import { useApp } from "../context/AppContext";

export default function AnalyticsPanel() {
  const { analytics } = useApp();

  return (
    <div className="mt-8 p-4 border rounded-lg bg-gray-50">
      <h3 className="text-lg font-bold mb-3">📊 User Analytics</h3>

      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="bg-white p-3 rounded shadow">
          <p className="text-gray-500 text-sm">Clicks</p>
          <p className="text-xl font-bold">{analytics.clicks}</p>
        </div>

        <div className="bg-white p-3 rounded shadow">
          <p className="text-gray-500 text-sm">Rewards</p>
          <p className="text-xl font-bold">{analytics.reward}</p>
        </div>

        <div className="bg-white p-3 rounded shadow">
          <p className="text-gray-500 text-sm">Engagement</p>
          <p className="text-xl font-bold">
            {analytics.engagement || 0}s
          </p>
        </div>
      </div>
    </div>
  );
}
