"use client";
import React from "react";

export const Footer = () => {
  return (
    <div className="p-4 text-center justify-center text-xs text-neutral-500 dark:text-gray-400 border-t border-neutral-100 dark:border-gray-700">
      <span className="font-semibold">{new Date().getFullYear()} </span>
      &#8212; Built by Mohamed Jarboua
    </div>
  );
};
