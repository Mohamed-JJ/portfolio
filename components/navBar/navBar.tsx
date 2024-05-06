"use client";
import { ThemeContext } from "@/useContext/context";
import { useQuery } from "@tanstack/react-query";
import { useWindowSize } from "@react-hook/window-size";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useParams, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

import React, { useContext, useEffect } from "react";

const CheckIfAdmin = async () => {
  return await false;
};

const HandleClick = (router: AppRouterInstance, path: string) => {
  router.push(path);
};

const NavBar = () => {
  const theme = useContext(ThemeContext);
  const [width, height] = useWindowSize();
  const [windowHeight, setWindowHeight] = React.useState(0);
  const router = useRouter();
  const param = useParams();
  const searchParam = useSearchParams();
  const { data: isAdmin } = useQuery({
    queryKey: ["Admin"],
    queryFn: async () => CheckIfAdmin(),
  });

  const routes: { name: string; path: string; visibility: string }[] = [
    {
      name: "Projects",
      path: "/",
      visibility: "viewer",
    },
    {
      name: "About",
      path: "/about",
      visibility: "viewer",
    },
    {
      name: "Contact",
      path: "/contact",
      visibility: "viewer",
    },
    {
      name: "projectUpload",
      path: "/Admin/projectUpload",
      visibility: "Admin",
    },
    {
      name: "updateInfo",
      path: "/Admin/updateInfo",
      visibility: "Admin",
    },
  ];

  return (
    <div
      className={`flex flex-row justify-between items-center sm:w-[60%] sm:h-[18%] sm:px-8 border-black border text-${
        !theme?.dark ? "white" : "black"
      } sm:text-sm`}
    >
      <div>logo</div>
      <div>
        <div className="flex flex-col sm:flex-row sm:gap-10 items-center justify-center">
          {routes.map((route, key) => {
            return route.visibility === "viewer" ? (
              <div
                key={key}
                className="text-gray-300"
                onClick={() => HandleClick(router, route.path)}
              >
                {route.name}
              </div>
            ) : null;
          })}
          <div className="flex justify-center items-center">
            {theme?.dark ? (
              <MdOutlineLightMode className={`w-[30px] h-[30px]`} />
            ) : (
              <MdOutlineDarkMode
                className={`w-[30px] h-[30px] bg-gray-300`}
                color={`rgb(62,73,88)`}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
