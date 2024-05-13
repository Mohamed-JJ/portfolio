"use client";
import { ThemeContext } from "@/useContext/context";
import { useWindowSize } from "@react-hook/window-size";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { FaXmark } from "react-icons/fa6";
import Options from "./options";
import { AnimatePresence, motion } from "framer-motion";
import { Theme } from "@/types/theme";
const DesktopVersion = ({
  routes,
  router,
  HandleClick,
  theme,
}: {
  routes: { name: string; path: string; visibility: string }[];
  router: AppRouterInstance;
  HandleClick: (router: AppRouterInstance, path: string) => void;
  theme: Theme | null;
}) => {
  return (
    <div
      className={`flex sm:flex-row 
      items-center justify-between w-full h-full border border-white
      sm:px-8 sm:text-sm`}
    >
      <div
        onClick={() => HandleClick(router, "/")}
        className={`hover:cursor-pointer opacity-50 ml-3`}
      >
        <Image
          src={
            !theme?.dark
              ? "/logos/dark-mj-logo.png"
              : "/logos/light-mj-logo.png"
          }
          alt="logo"
          width={50}
          height={50}
        />
      </div>
      <AnimatePresence>
        <motion.div
          className={`flex  items-center`}
          initial={{ opacity: 0, y: -120 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <div
            className={`flex flex-col border border-white sm:flex-row sm:gap-10 gap-5 items-center justif-center`}
          >
            <Options
              router={router}
              routes={routes}
              HandleClick={HandleClick}
              clas=""
            />
            {theme?.dark ? (
              <MdOutlineLightMode
                className={`w-[30px] h-[30px]`}
                style={{
                  color: theme.dark ? "rgb(209,213,219)" : "rgb(55,65,81)",
                }}
              />
            ) : (
              <MdOutlineDarkMode
                className={`w-[30px] h-[30px]`}
                color={`green`}
              />
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default DesktopVersion;
