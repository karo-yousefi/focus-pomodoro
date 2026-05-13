import { useState, useContext, createContext } from "react";
import type { ContextType, AvailableThemes } from "../types/types";


const ThemeContext = createContext<ContextType>({
  theme: "light1",
  changeTheme: () => { },
});


export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<AvailableThemes>("light1")

  const changeTheme = (theme: AvailableThemes) => {
    setTheme(theme);
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const ctx = useContext(ThemeContext);

  if (!ctx) throw new Error("Use useTheme only within ThemeProvider");

  return ctx;
}