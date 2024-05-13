import { ThemeContext } from "@/useContext/context";
import React, { useContext } from "react";
import { FaXmark } from "react-icons/fa6";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const ExpandedMenu = ({
  setMenuExpand,
  routes,
}: {
  setMenuExpand: React.Dispatch<React.SetStateAction<boolean>>;
  routes: { name: string; path: string; visibility: string }[];
}) => {
  const theme = useContext(ThemeContext);
  return (
    <div className="w-full h-full border border-red-700">
      <div className="flex justify-between mx-3 mt-12">
        {theme?.dark ? (
          <MdOutlineLightMode
            className="w-[40px] h-[40px]"
            color="gray"
            // style={{
            //   color: theme?.dark ? "rgb(209,213,219)" : "rgb(55,65,81)",
            // }}
          />
        ) : (
          <MdOutlineDarkMode
            className="w-[40px] h-[40px]"
            color={theme?.dark ? "gray" : "black"}
          />
        )}
        <FaXmark
          className="w-[40px] h-[40px]"
          onClick={() => setMenuExpand(false)}
          color={theme?.dark ? "gray" : "black"}
        />
      </div>
      <div></div>
    </div>
  );
};

export default ExpandedMenu;
