import { useApp } from "../context/AppContext";
import AnalyticsPanel from "../components/AnalyticsPanel";
import { rlAgent } from "../utils/rlAgent";

export default function Analytics() {
  const { clicks, reward, engagementTime } = useApp();

  const uiDecision = rlAgent({ clicks, engagementTime });

  return (
    <div style={{ padding: "20px" }}>
      <h1>📊 User Interaction Analytics</h1>

      <AnalyticsPanel />

      <div
        style={{
          marginTop: "25px",
          padding: "15px",
          background: "#fff",
          borderRadius: "10px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <h3>🧠 RL Agent Decision</h3>
        <p>
          <strong>UI Theme:</strong> {uiDecision.theme}
        </p>
        <p>
          <strong>UI Priority:</strong> {uiDecision.priority}
        </p>

        <p style={{ marginTop: "10px", color: "#555" }}>
          The system dynamically adapts the UI based on user engagement,
          click frequency, and session duration.
        </p>
      </div>

      <div
        style={{
          marginTop: "30px",
          fontSize: "14px",
          color: "#666",
        }}
      >
        <p>✔ Click-based optimization</p>
        <p>✔ Time-aware recommendations</p>
        <p>✔ Reward-driven UI adaptation</p>
      </div>
    </div>
  );
}
