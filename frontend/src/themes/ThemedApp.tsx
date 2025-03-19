import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { createContext, useContext, useState } from "react";
import App from "../App";

type AppContextType = {
  showForm: boolean;
  setShowForm: (show: boolean) => void;
};

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const AppContext = createContext<AppContextType | null>(null);

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppContext.Provider");
  }
  return context;
};

export const ThemedApp = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={{ showForm, setShowForm }}>
        <App />
        <CssBaseline />
      </AppContext.Provider>
    </ThemeProvider>
  );
};
