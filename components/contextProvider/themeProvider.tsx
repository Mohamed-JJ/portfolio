"use client";

import { NavExpandContext, ThemeContext } from "@/useContext/context";
import React from "react";

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <NavExpandContext.Provider value={false}>
      <ThemeContext.Provider value={{ dark: true }}>
        {children}
      </ThemeContext.Provider>
    </NavExpandContext.Provider>
  );
};

export default ContextProvider;
