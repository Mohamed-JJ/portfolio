import { ThemeContext } from "@/useContext/context";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { FaGithub } from "react-icons/fa6";

const ParagraphSection = ({
  clickHandler,
  data,
}: {
  clickHandler: (router: AppRouterInstance, path: string) => void;
  data: { Title: string; Description: string; link: string };
}) => {
  const theme = useContext(ThemeContext);
  const router = useRouter();
  return (
    <div className="w-full items-center relative">
      <div className=" ml-2 pl-[50px] border-l-[1px] flex flex-col gap-5">
        <div
          className={`flex gap-3 items-center ${
            theme?.dark ? "text-gray-300" : "text-gray-700"
          } hover:text-white transition duration-300 ease-in-out cursor-pointer`}
          onClick={() => clickHandler(router, "https://github.com/Mohamed-JJ/")}
        >
          <p className="text-base">{data.Title} </p>
        </div>
        <div
          className={` leading-loose text-sm ${
            theme?.dark ? "text-gray-400" : "text-gray-700"
          } `}
        >
          {data.Description}
        </div>
      </div>
      <div className="w-4 h-4 rounded-full  top-0 left-0 absolute bg-gray-500"></div>
    </div>
  );
};

export default ParagraphSection;
