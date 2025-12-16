import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [analytics, setAnalytics] = useState({
    clicks: 0,
    engagementTime: 0,
    reward: 0,
  });

  useEffect(() => {
    const saved = localStorage.getItem("app-data");
    if (saved) {
      const parsed = JSON.parse(saved);
      setUser(parsed.user);
      setCart(parsed.cart);
      setAnalytics(parsed.analytics);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "app-data",
      JSON.stringify({ user, cart, analytics })
    );
  }, [user, cart, analytics]);

  const trackClick = () => {
    setAnalytics((a) => ({ ...a, clicks: a.clicks + 1 }));
  };

  const rewardAction = (type) => {
    let reward = analytics.reward;
    if (type === "click") reward += 1;
    if (type === "add") reward += 3;
    if (type === "order") reward += 5;
    setAnalytics((a) => ({ ...a, reward }));
  };

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        cart,
        setCart,
        analytics,
        trackClick,
        rewardAction,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
