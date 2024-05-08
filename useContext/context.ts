import { createContext } from "react";
import { Theme } from "@/types/theme";

export const ThemeContext = createContext<Theme | undefined>(undefined);
