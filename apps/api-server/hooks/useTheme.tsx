import { useState, useEffect } from "react"

// Define the theme state type
export type ThemeState = "theme-light" | "dark" | "system"

export function useTheme() {
  const [theme, setThemeState] = useState<ThemeState>("theme-light")

  // Initialize theme state based on document class
  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setThemeState(isDarkMode ? "dark" : "theme-light");
  }, [])

  // Apply theme changes to document
  useEffect(() => {
    const isSystemDark = theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = theme === "dark" || isSystemDark;
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  }, [theme])

  return {
    theme,
    setTheme: setThemeState,
  }
}