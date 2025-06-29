"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "grey";

const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
}>({
  theme: (window.localStorage.getItem("theme") as Theme) || "light",
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const storedTheme = localStorage.getItem("theme") as Theme;
  const [theme, setThemeState] = useState<Theme>(storedTheme);

  // Apply class and save to localStorage
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark", "grey");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
