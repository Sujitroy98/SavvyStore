import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

function ContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  return (
    <GlobalContext.Provider value={{ loading, setLoading }}>
      {children}
    </GlobalContext.Provider>
  );
}

function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (context === undefined)
    throw new Error("GlobalContext was used outside ContextProvider");
  return context;
}

export { ContextProvider, useGlobalContext };
