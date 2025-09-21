"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { RiSunLine, RiMoonLine } from "react-icons/ri";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <RiSunLine className="h-4 w-4" />
      ) : (
        <RiMoonLine className="h-4 w-4" />
      )}
    </button>
  );
}
