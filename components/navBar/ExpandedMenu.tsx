import { ThemeContext } from "@/useContext/context";
import React, { useContext, useEffect } from "react";
import { FaXmark } from "react-icons/fa6";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import Options from "./options";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useWindowSize } from "@react-hook/window-size";

const ExpandedMenu = ({
  setMenuExpand,
  routes,
}: {
  setMenuExpand: React.Dispatch<React.SetStateAction<boolean>>;
  routes: { name: string; path: string; visibility: string }[];
}) => {
  const theme = useContext(ThemeContext);
  const [width, height] = useWindowSize();
  const router = useRouter();

  const HandleClick = (router: AppRouterInstance, path: string) => {
    setMenuExpand(false);
    router.push(path);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (width > 640) setMenuExpand(false);
    });
    return () => {
      window.removeEventListener("resize", () => {
        if (width > 640) setMenuExpand(false);
      });
    };
  }, [width, height]);

  return (
    <div className="w-full h-full border border-red-700 flex flex-row justify-between px-3 pt-14">
      <div className="flex justify-between">
        {theme?.dark ? (
          <MdOutlineLightMode
            className="w-[40px] h-[40px]"
            color={theme?.dark ? "gray" : "black"}
          />
        ) : (
          <MdOutlineDarkMode
            className="w-[40px] h-[40px]"
            color={theme?.dark ? "gray" : "black"}
          />
        )}
      </div>
      <div className="flex flex-col gap-5 items-center mt-8">
        <Options
          router={router}
          routes={routes}
          HandleClick={HandleClick}
          clas=""
        />
      </div>
      <FaXmark
        className="w-[40px] h-[40px]"
        onClick={() => setMenuExpand(false)}
        color={theme?.dark ? "gray" : "black"}
      />
    </div>
  );
};

export default ExpandedMenu;
