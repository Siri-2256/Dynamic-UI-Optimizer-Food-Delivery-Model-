import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [clicks, setClicks] = useState(0);

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
    setClicks((prev) => prev + 1);
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        clicks,
        addToCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
