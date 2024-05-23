"use client";
import AboutDesktopPage from "@/components/about/aboutDesktopPage";
import { ThemeContext } from "@/useContext/context";
import { useWindowSize } from "@react-hook/window-size";
import { AnimatePresence, motion } from "framer-motion";
import { Poppins } from "next/font/google";
import React, { useContext } from "react";

const Page = () => {
  const [width, height] = useWindowSize();
  const theme = useContext(ThemeContext);
  return (
    <AnimatePresence>
      <motion.div
        className={`w-full h-[82%]`}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        <AboutDesktopPage dark={theme!.dark} />
      </motion.div>
    </AnimatePresence>
  );
};

export default Page;
