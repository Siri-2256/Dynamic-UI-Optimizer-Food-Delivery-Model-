import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [analytics, setAnalytics] = useState({
    clicks: 0,
    reward: 0,
    engagement: 0
  });

  useEffect(() => {
    const saved = localStorage.getItem("food-app");
    if (saved) {
      const parsed = JSON.parse(saved);
      setUser(parsed.user);
      setCart(parsed.cart);
      setAnalytics(parsed.analytics);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "food-app",
      JSON.stringify({ user, cart, analytics })
    );
  }, [user, cart, analytics]);

  const track = (type) => {
    setAnalytics((a) => ({
      ...a,
      clicks: a.clicks + (type === "click" ? 1 : 0),
      reward:
        a.reward +
        (type === "click" ? 1 : type === "add" ? 3 : type === "order" ? 5 : 0)
    }));
  };

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        cart,
        setCart,
        analytics,
        track
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
