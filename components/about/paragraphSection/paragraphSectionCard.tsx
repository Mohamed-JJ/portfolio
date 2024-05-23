import { ThemeContext } from "@/useContext/context";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import React, { useContext } from "react";
import { FaGithub } from "react-icons/fa6";
import ParagraphSection from "./ParagraphSection";

const ParagraphSectionCard = ({
  clickHandler,
  router,
  mockData,
}: {
  clickHandler: (router: AppRouterInstance, path: string) => void;
  router: AppRouterInstance;
  mockData: { Title: string; Description: string; link: string }[];
}) => {
  const theme = useContext(ThemeContext);

  return (
    <div className="w-full relative flex  items-center mt-10">
      <div className="w-full  flex flex-col">
        {mockData.map((data, index) => {
          return (
            <>
              <ParagraphSection
                key={index}
                clickHandler={clickHandler}
                data={data}
              />
              {index < mockData.length - 1 ? (
                <div className="h-5 ml-2 border-l-[1px]"></div>
              ) : null}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ParagraphSectionCard;
