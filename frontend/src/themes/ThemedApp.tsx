import { createContext, useState } from "react";
import App from "../App";

type AppContextType = {
  mode: "light" | "dark";
  setMode: (mode: "dark" | "light") => void;
};

export const AppContext = createContext<AppContextType | null>(null);

const ThemedApp = () => {
  const [mode, setMode] = useState<"dark" | "light">("dark");
  return (
    <AppContext.Provider value={{ mode, setMode }}>
      <App />
    </AppContext.Provider>
  );
};

export default ThemedApp;
