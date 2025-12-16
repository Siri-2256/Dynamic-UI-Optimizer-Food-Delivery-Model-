import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  // ---------- USER INTERACTION ----------
  const [clicks, setClicks] = useState(0);
  const [reward, setReward] = useState(0);
  const [engagementTime, setEngagementTime] = useState(0);

  // ---------- CART & ORDERS ----------
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  // ---------- TRACK ENGAGEMENT TIME ----------
  useEffect(() => {
    const timer = setInterval(() => {
      setEngagementTime((t) => t + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // ---------- TRACK CLICK ----------
  const trackClick = () => {
    setClicks((c) => c + 1);
    setReward((r) => r + 1);
  };

  // ---------- CART LOGIC ----------
  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
    trackClick();
  };

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  // ---------- ORDER LOGIC ----------
  const placeOrder = () => {
    if (cart.length === 0) return;
    setOrders((prev) => [...prev, ...cart]);
    setCart([]);
    setReward((r) => r + 10); // reward for ordering
  };

  return (
    <AppContext.Provider
      value={{
        clicks,
        reward,
        engagementTime,
        cart,
        orders,
        trackClick,
        addToCart,
        removeFromCart,
        placeOrder,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
