"use client";

import { ThemeContext } from "@/useContext/context";
import React from "react";

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeContext.Provider value={{ dark: false }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ContextProvider;
