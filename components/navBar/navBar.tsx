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

const CheckIfAdmin = async () => {
  return await false;
};

const HandleClick = (router: AppRouterInstance, path: string) => {
  router.push(path);
};

const NavBar = () => {
  const theme = useContext(ThemeContext);
  const [width, height] = useWindowSize();
  const [{ windowWidth, windowHeight }, setWindowSize] = useState({
    windowWidth: 0,
    windowHeight: 0,
  });
  const [menuExpand, setMenuExpand] = useState(false);
  const router = useRouter();
  const routes: { name: string; path: string; visibility: string }[] = [
    {
      name: "Projects",
      path: "/projects",
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

  useEffect(() => {
    setWindowSize({ windowWidth: width, windowHeight: height });
    window.addEventListener("resize", () => {
      setWindowSize({ windowWidth: width, windowHeight: height });
    });
    return () => {
      window.removeEventListener("resize", () => {
        setWindowSize({ windowWidth: width, windowHeight: height });
      });
    };
  }, [width, height]);

  return (
    <div
      className={`flex sm:flex-row flex-col-reverse border-2 border-white sm:justify-between justify-center items-center sm:w-[50%] sm:h-[18%] w-full ${
        menuExpand ? "h-full" : "h-[18%]"
      } sm:px-8 sm:text-sm relative `}
    >
      {!menuExpand ? (
        <div
          onClick={() => HandleClick(router, "/")}
          className="hover:cursor-pointer opacity-50"
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
      ) : null}
      <div className=" flex sm:flex-col flex-row items-center ">
        {windowWidth < 640 && (
          !menuExpand ? (
            <FaXmark
              className={`w-[30px] h-[30px]`}
              style={{
                color: theme?.dark ? "rgb(209,213,219)" : "rgb(55,65,81)",
              }}
              onClick={() => setMenuExpand(false)}
            />
          ) : (
            <IoIosMenu
              className={`w-[30px] h-[30px]`}
              style={{
                color: theme?.dark ? "rgb(209,213,219)" : "rgb(55,65,81)",
              }}
              onClick={() => setMenuExpand(true)}
            />
          )
        )}
        <div className="flex flex-col sm:flex-row sm:gap-10 items-center justify-center relative">
          {menuExpand &&
            routes.map((route, key) => {
              return route.visibility === "viewer" ? (
                <div
                  key={key}
                  className={`text-gray-${
                    theme?.dark ? "300" : "700"
                  } cursor-pointer`}
                  onClick={() => HandleClick(router, route.path)}
                >
                  {route.name}
                </div>
              ) : null;
            })}
          <div className="flex justify-center items-center">
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
        </div>
      </div>
    </div>
  );
};

export default NavBar;
