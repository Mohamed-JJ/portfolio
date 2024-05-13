"use client"
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
}: {
  routes: { name: string; path: string; visibility: string }[];
  router: AppRouterInstance;
  HandleClick: (router: AppRouterInstance, path: string) => void;
  theme: Theme | null;
}) => {
  const [menuExpand, setMenuExpand] = useState(false);

  useEffect(() => {
    console.log("theme", theme);
  }, [theme]);

  const toggleMenu = () => {
    setMenuExpand(!menuExpand);
    console.log("menuExpand", menuExpand);
  };

  console.log("in mobile version");

  return (
    <>
      {menuExpand ? (
        <ExpandedMenu setMenuExpand={setMenuExpand} />
      ) : (
        <div
          className="w-full h-[18%] border border-white flex flex-row justify-between items-center"
          onClick={()=>console.log("clicked")}
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
            <div className="w-40 h-40 bg-white" onClick={()=> console.log("clicekd")}>

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
