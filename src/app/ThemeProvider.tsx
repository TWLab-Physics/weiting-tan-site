"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "academic" | "engineering";

interface ThemeContextType {
  theme: Theme;
  setTheme: (t: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "academic",
  setTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("academic");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    if (saved === "academic" || saved === "engineering") {
      setTheme(saved);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("theme", theme);
      document.documentElement.classList.remove("theme-academic", "theme-engineering");
      document.documentElement.classList.add(`theme-${theme}`);
    }
  }, [theme, mounted]);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}