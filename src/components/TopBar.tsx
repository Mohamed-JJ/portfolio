"use client";

import { ThemeToggle } from "./ThemeToggle";

export const TopBar = () => {
  return (
    <div className="fixed top-10 right-10 z-50">
      <div className="bg-white dark:bg-gray-900 backdrop-blur-md rounded-full p-2 shadow-2xl border-2 border-gray-300 dark:border-gray-600 hover:shadow-3xl hover:scale-105 transition-all duration-300 ring-2 ring-blue-500/20 dark:ring-blue-400/20">
        <ThemeToggle />
      </div>
    </div>
  );
};
