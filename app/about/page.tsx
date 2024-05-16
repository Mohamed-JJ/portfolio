"use client";
import AboutDesktopPage from "@/components/about/aboutDesktopPage";
import { ThemeContext } from "@/useContext/context";
import { useWindowSize } from "@react-hook/window-size";
import React, { useContext } from "react";

const Page = () => {
  const [width, height] = useWindowSize();
  const theme = useContext(ThemeContext);
  return (
    <div className="h-full w-full">
      <AboutDesktopPage dark={theme!.dark} />;
    </div>
  );
};

export default Page;
