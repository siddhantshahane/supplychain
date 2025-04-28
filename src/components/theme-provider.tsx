"use client"
import { createContext, useContext, useEffect, useState } from "react";
import "../styles/modernize";
import { ThemeToggle } from "@/components/theme-toggle";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: "dark" | "light";
  isThemeLoaded: boolean;
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
  resolvedTheme: "light",
  isThemeLoaded: false,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "supply-chain-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [resolvedTheme, setResolvedTheme] = useState<"dark" | "light">("light");
  const [isThemeLoaded, setIsThemeLoaded] = useState(false);
  
  // Get initial theme from localStorage (client-side only)
  useEffect(() => {
    const savedTheme = localStorage.getItem(storageKey) as Theme;
    if (savedTheme && ["dark", "light", "system"].includes(savedTheme)) {
      setTheme(savedTheme);
    }
    setIsThemeLoaded(true);
  }, [storageKey]);

  // Watch for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    
    const handleChange = () => {
      if (theme === "system") {
        setResolvedTheme(mediaQuery.matches ? "dark" : "light");
      }
    };
    
    // Initial check
    handleChange();
    
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  // Apply theme to document
  useEffect(() => {
    if (!isThemeLoaded) return;
    
    const root = window.document.documentElement;
    
    // Always remove both theme classes first
    root.classList.remove("light", "dark");
    
    let resolvedThemeValue: "dark" | "light";
    
    if (theme === "system") {
      resolvedThemeValue = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      
      // For system preference, always add the class explicitly
      root.classList.add(resolvedThemeValue);
    } else {
      resolvedThemeValue = theme as "dark" | "light";
      root.classList.add(resolvedThemeValue);
    }
    
    // Set data attribute for CSS selector support
    root.setAttribute("data-theme", resolvedThemeValue);
    
    setResolvedTheme(resolvedThemeValue);
    
    // Apply transition class for smooth theme transitions
    root.classList.add("theme-transition");
    
    // Remove transition class after transition completes
    const transitionTimeout = setTimeout(() => {
      root.classList.remove("theme-transition");
    }, 400); // Match the transition duration in the CSS
    
    return () => clearTimeout(transitionTimeout);
  }, [theme, isThemeLoaded]);

  const value = {
    theme,
    resolvedTheme,
    isThemeLoaded,
    setTheme: (newTheme: Theme) => {
      localStorage.setItem(storageKey, newTheme);
      setTheme(newTheme);
    },
  };

  // Prevent flash of unstyled content with a better loading approach
  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  
  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");
  
  return context;
}; 