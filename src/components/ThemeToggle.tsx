"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { RiSunLine, RiMoonLine } from "react-icons/ri";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    
    // Check if user has visited before
    const hasVisited = localStorage.getItem("theme-tooltip-shown");
    
    if (!hasVisited) {
      // Show tooltip after a short delay for better UX
      const timer = setTimeout(() => {
        setShowTooltip(true);
        // Auto-hide tooltip after 4 seconds
        const hideTimer = setTimeout(() => {
          setShowTooltip(false);
          localStorage.setItem("theme-tooltip-shown", "true");
        }, 4000);
        
        return () => clearTimeout(hideTimer);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    // Hide tooltip when user interacts with the button
    if (showTooltip) {
      setShowTooltip(false);
      localStorage.setItem("theme-tooltip-shown", "true");
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        className="p-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 dark:from-yellow-400 dark:to-orange-500 text-white dark:text-gray-900 hover:from-blue-600 hover:to-purple-700 dark:hover:from-yellow-300 dark:hover:to-orange-400 hover:scale-110 transition-all duration-200 ease-in-out shadow-lg hover:shadow-xl"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          <RiSunLine className="h-5 w-5" />
        ) : (
          <RiMoonLine className="h-5 w-5" />
        )}
      </button>
      
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm px-4 py-2 rounded-lg shadow-xl whitespace-nowrap animate-bounce">
            Toggle theme here!
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-900 dark:border-b-gray-100"></div>
          </div>
        </div>
      )}
    </div>
  );
}
