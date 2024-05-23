"use client";
import { ThemeContext } from "@/useContext/context";
import { Theme } from "@/types/theme";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState, useContext } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Socials from "../ui/socials/Socials";
import { AnimatePresence, motion } from "framer-motion";
import { Poppins } from "next/font/google";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import ParagraphSectionCard from "./paragraphSection/paragraphSectionCard";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500"] });

const AboutDesktopPage = ({ dark }: { dark: boolean }) => {
  const theme = useContext(ThemeContext);
  const router = useRouter();
  const clickHandler = (router: AppRouterInstance, path: string) => {
    router.push(path);
  };
  return (
    <AnimatePresence>
      <motion.div
        className={`sm:pt-[4%] w-full min-h-full flex flex-col items-center gap-2 ${
          poppins.className
        }  ${theme?.dark ? "text-gray-300" : "text-gray-700"} `}
      >
        <div className="w-full flex flex-col items-center justify-center h-[100%]">
          <div
            className={` ${
              theme?.dark ? "text-gray-300" : "text-gray-700"
            } w-[40%] flex flex-col gap-7`}
          >
            <h1 className="font-bold text-5xl font-mono">About me.</h1>
            <ParagraphSectionCard clickHandler={clickHandler} router={router} />
          </div>
          <div className={`text-white w-[40%] flex flex-col gap-7 mt-[4%]`}>
            <h1 className="font-bold text-5xl font-mono">My Readings.</h1>
            <ParagraphSectionCard clickHandler={clickHandler} router={router} />

            <Socials theme={theme!} />
          </div>
        </div>
        <div className="w-full flex items-center justify-center  h-[100%]"></div>
      </motion.div>
    </AnimatePresence>
  )
};

export default AboutDesktopPage;
