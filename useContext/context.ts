import { createContext } from "react";
import { Theme } from "@/types/theme";

export const ThemeContext = createContext<Theme | undefined>(undefined);
export const NavExpandContext = createContext<boolean | undefined>(undefined);
