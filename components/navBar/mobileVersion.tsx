"use client";
import { useEffect, useState } from "react";
import ExpandedMenu from "./ExpandedMenu";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Theme } from "@/types/theme";
import Image from "next/image";
import { IoIosMenu } from "react-icons/io";

const MobileVersion = ({
  routes,
  router,
  HandleClick,
  theme,
  setmenuExpand,
  MenuExpand,
}: {
  routes: { name: string; path: string; visibility: string }[];
  router: AppRouterInstance;
  HandleClick: (router: AppRouterInstance, path: string) => void;
  theme: Theme | null;
  setmenuExpand: React.Dispatch<React.SetStateAction<boolean>>;
  MenuExpand: boolean;
}) => {
  const toggleMenu = () => {
    setmenuExpand(!MenuExpand);
    console.log("menuExpand", MenuExpand);
  };

  return (
    <>
      {MenuExpand ? (
        <ExpandedMenu setMenuExpand={setmenuExpand} routes={routes} />
      ) : (
        <div
          className="w-full h-full flex flex-row justify-between items-center border border-white"
          onClick={() => console.log("clicked")}
        >
          <div
            onClick={() => HandleClick(router, "/")}
            className="cursor-pointer opacity-50 ml-3"
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
          <IoIosMenu
            className="w-10 h-10 mr-3 cursor-pointer"
            color={theme?.dark ? "gray" : "black"}
            onClick={toggleMenu}
          />
        </div>
      )}
    </>
  );
};

export default MobileVersion;
