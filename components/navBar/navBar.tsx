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
import DesktopVersion from "./desktopVersion";
import MobileVersion from "./mobileVersion";

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
    <>
      {windowWidth > 640 ? (
        <DesktopVersion
          HandleClick={HandleClick}
          router={router}
          routes={routes}
          theme={theme!}
        />
      ) : (
        <MobileVersion
          HandleClick={HandleClick}
          router={router}
          routes={routes}
          theme={theme!}
        />
      )}
    </>
  );
};

export default NavBar;
