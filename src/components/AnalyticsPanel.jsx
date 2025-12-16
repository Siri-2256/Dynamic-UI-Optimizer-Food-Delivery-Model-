import { useApp } from "../context/AppContext";

export default function AnalyticsPanel() {
  const { clicks, reward, engagementTime } = useApp();

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "15px",
        borderRadius: "8px",
        backgroundColor: "#fff",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
      }}
    >
      <h4>📊 Live Analytics</h4>
      <p>Clicks: {clicks}</p>
      <p>Reward: {reward}</p>
      <p>Engagement: {engagementTime}s</p>
    </div>
  );
}

