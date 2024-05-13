import { Theme } from "@/types/theme";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import React, { useState } from "react";
import ExpandedMenu from "./ExpandedMenu";
import Image from "next/image";
import { FaXmark } from "react-icons/fa6";
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
  console.log("mobile");
  return (
    <>
      {menuExpand ? (
        <ExpandedMenu setMenuExpand={setMenuExpand} />
      ) : (
        <div className="w-full h-[18%] border border-white flex flex-row justify-between items-center">
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
          <div
            className="mr-3 border-white border"
            onClick={() => {
              console.log("clicked");
              setMenuExpand(true);
            }}
          >
            <IoIosMenu
              className="w-[40px] h-[40px]"
              color={theme!.dark! ? "gray" : "black"}
              onClick={() => {
                console.log("clicked");
                setMenuExpand(true);
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default MobileVersion;
