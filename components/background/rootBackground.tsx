"use client";

import { motion } from "framer-motion";
import React, { useContext } from "react";
import { AuroraBackground } from "@/components/ui/background-aroura";

export function AuroraBackgroundDemo({
  children,
}: {
  children: React.ReactNode;
  }) {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className=" sm:flex sm:flex-col sm:items-center sm:justify-center w-full h-full"
      >
        {children}
      </motion.div>
    </AuroraBackground>
  );
}
