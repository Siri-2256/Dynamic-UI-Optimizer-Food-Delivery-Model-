import { useApp } from "../context/AppContext";

export default function Analytics() {
  const { clicks, reward, engagementTime } = useApp();

  return (
    <div style={{ padding: "20px" }}>
      <h2>📊 User Analytics</h2>

      <p><strong>Total Clicks:</strong> {clicks}</p>
      <p><strong>Reward Score:</strong> {reward}</p>
      <p><strong>Engagement Time:</strong> {engagementTime} seconds</p>
    </div>
  );
}

