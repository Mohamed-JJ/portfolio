import { ThemeContext } from "@/useContext/context";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import React, { useContext } from "react";
import { FaGithub } from "react-icons/fa6";

const ParagraphSectionCard = ({
  clickHandler,
  router,
}: {
  clickHandler: (router: AppRouterInstance, path: string) => void;
  router: AppRouterInstance;
}) => {
  const theme = useContext(ThemeContext);

  return (
    <div className="w-full relative flex  items-center mt-10">
      <div className="w-full  flex flex-col">
        <div className="w-full items-center  relative">
          <div className=" ml-2 pl-[50px] border-l-[1px] flex flex-col gap-5">
            <div
              className={`flex gap-3 items-center ${
                theme?.dark ? "text-gray-300" : "text-gray-700"
              } hover:text-white transition duration-300 ease-in-out cursor-pointer`}
              onClick={() =>
                clickHandler(router, "https://github.com/Mohamed-JJ/")
              }
            >
              <p className="text-base">Engineering </p>
              <FaGithub className="w-[15px] h-[15px]" />
            </div>
            <div
              className={` leading-loose text-sm ${
                theme?.dark ? "text-gray-400" : "text-gray-700"
              } `}
            >
              First impressions matter, and exceptional website design is key. A
              great website combines aesthetics with seamless functionality and
              user-friendly navigation. As a seasoned software engineer, I solve
              complex technical challenges to create websites that are both
              sleek and visually appealing. Balancing aesthetics and
              functionality, optimizing load times, ensuring cross-browser
              compatibility, and implementing responsive design are some of the
              challenges I tackle. My deep understanding of recognized technical
              standards and modern practices ensures high-quality, maintainable
              code. Working with me means having a website that is elegant,
              efficient, and secure. Every element is meticulously crafted,
              providing a superior user experience and a lasting first
              impression.
            </div>
          </div>
          <div className="w-4 h-4 rounded-full  top-0 left-0 absolute bg-gray-500"></div>
        </div>
        <div className="h-5 ml-2 border-l-[1px]"></div>
        <div className="w-full items-center relative ">
          <div className=" ml-2 pl-[50px] border-l-[1px] flex flex-col gap-5">
            <div className="flex gap-3 items-center text-gray-200 hover:text-white transition duration-300 ease-in-out">
              <p className="text-base">Education </p>
              <FaGithub className="w-[15px] h-[15px]" />
            </div>
            <div
              className={` leading-loose text-sm ${
                theme?.dark ? "text-gray-400" : "text-gray-700"
              } `}
            >
              As i was a student at 1337 coding school/42 network, I have a
              strong knowledge in all IT fields, I have a strong background in
              web development, working with technologies like JavaScript, React,
              Node.js for both Backend and frontEnd, and more. I&apos;m deeply
              passionate about coding and enjoy tackling challenging problems,
              building efficient solutions, and continuously learning new
              technologies. I&apos;m also a big-time DevOps enthusiast, with a
              keen interest in automation, continuous integration and
              deployment, and cloud technologies.
            </div>
          </div>
          <div className="w-4 h-4 rounded-full  top-0 left-0 absolute bg-gray-500"></div>
        </div>
      </div>
    </div>
  );
};

export default ParagraphSectionCard;
