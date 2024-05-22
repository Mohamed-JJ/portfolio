"use client";
import { ThemeContext } from "@/useContext/context";
import { Theme } from "@/types/theme";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState, useContext } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Socials from "../ui/socials/Socials";
import { AnimatePresence, motion } from "framer-motion";
const AboutDesktopPage = ({ dark }: { dark: boolean }) => {
  const theme = useContext(ThemeContext);
  const router = useRouter();
  const clickHandler = (router: any, path: string) => {
    router.push(path);
  }
  return (
    <AnimatePresence>
      <motion.div
        className={`sm:pt-[4%] w-full min-h-[97%] flex flex-col items-center gap-2 font-mono  ${
          theme?.dark ? "text-gray-300" : "text-gray-700"
        } border`}
      >
        <div className="w-full flex flex-col items-center justify-center border h-[100%]">
          <div className={`text-white w-[40%] flex flex-col gap-7`}>
            <h1 className="font-bold text-5xl font-mono">About me.</h1>
            <div className="w-full relative flex items-center mt-10">
              <div className="w-full border-gray-500 flex flex-col">
                <div className="w-full items-center  relative">
                  <div className=" ml-2 pl-[50px] border-l-[1px] flex flex-col gap-5">
                    <div className="flex gap-3 items-center text-gray-200 hover:text-white transition duration-300 ease-in-out cursor-pointer" onClick={()=>clickHandler(router, "https://github.com/Mohamed-JJ/")}>
                      <p className="text-base">Engineering </p>
                      <FaGithub className="w-[15px] h-[15px]" />
                    </div>
                    <div className=" leading-loose text-sm">
                      The power of first impressions cannot be underestimated,
                      and the gateway to capitalizing on them lies in
                      exceptional website design. An outstanding website
                      transcends mere aesthetics and extends its influence to
                      encompass seamless functionality and user-friendly
                      navigation. Drawing upon my expertise as a seasoned
                      programmer, I possess the unique ability to tackle
                      intricate technical challenges while crafting websites
                      that exude sleekness and visual allure. Moreover, my
                      extensive knowledge of recognized technical standards is
                      complemented by my proficiency in modern building
                      practices, ensuring that every aspect of your website is
                      finely tuned to perfection.
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full  top-0 left-0 absolute bg-gray-500"></div>
                </div>
                <div className="h-5 ml-2 border-l-[1px]"></div>
                <div className="w-full items-center relative ">
                  <div className=" ml-2 pl-[50px] border-l-[1px] flex flex-col gap-5">
                    <div className="flex gap-3 items-center text-gray-200 hover:text-white transition duration-300 ease-in-out">
                      <p className="text-base">Products </p>
                      <FaGithub className="w-[15px] h-[15px]" />
                    </div>
                    <div className=" leading-loose text-sm">
                      While I may not fit the conventional mold of a product
                      manager, my diverse skill set in research, product design,
                      and product coordination empowers me to drive the growth
                      of a product from its inception. As an exceptional
                      analytical thinker, I possess the ability to uphold the
                      product&apos;s vision throughout its entire journey,
                      effectively bridging the technical and product aspects. By
                      leveraging my expertise, I can navigate the path from 0 to
                      1, ensuring the product&apos;s success at every stage.
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full  top-0 left-0 absolute bg-gray-500"></div>
                </div>
              </div>
            </div>
          </div>
          <div className={`text-white w-[40%] flex flex-col gap-7 mt-[4%]`}>
            <h1 className="font-bold text-5xl font-mono">My Readings.</h1>
            <div className="w-full relative flex items-center mt-10">
              <div className="w-full border-gray-500 flex flex-col">
                <div className="w-full items-center  relative">
                  <div className=" ml-2 pl-[50px] border-l-[1px] flex flex-col gap-5">
                    <div className="flex gap-3 items-center text-gray-200 hover:text-white transition duration-300 ease-in-out">
                      <p className="text-base">Gnu make </p>
                      <FaGithub className="w-[15px] h-[15px]" />
                    </div>
                    <div className=" leading-loose text-sm">
                      The power of first impressions cannot be underestimated,
                      and the gateway to capitalizing on them lies in
                      exceptional website design. An outstanding website
                      transcends mere aesthetics and extends its influence to
                      encompass seamless functionality and user-friendly
                      navigation. Drawing upon my expertise as a seasoned
                      programmer, I possess the unique ability to tackle
                      intricate technical challenges while crafting websites
                      that exude sleekness and visual allure. Moreover, my
                      extensive knowledge of recognized technical standards is
                      complemented by my proficiency in modern building
                      practices, ensuring that every aspect of your website is
                      finely tuned to perfection.
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full  top-0 left-0 absolute bg-gray-500"></div>
                </div>
                <div className="h-5 ml-2 border-l-[1px]"></div>
                <div className="w-full items-center relative ">
                  <div className=" ml-2 pl-[50px] border-l-[1px] flex flex-col gap-5">
                    <div className="flex gap-3 items-center text-gray-200 hover:text-white transition duration-300 ease-in-out">
                      <p className="text-base">Products </p>
                      <FaGithub className="w-[15px] h-[15px]" />
                    </div>
                    <div className=" leading-loose text-sm">
                      While I may not fit the conventional mold of a product
                      manager, my diverse skill set in research, product design,
                      and product coordination empowers me to drive the growth
                      of a product from its inception. As an exceptional
                      analytical thinker, I possess the ability to uphold the
                      product&apos;s vision throughout its entire journey,
                      effectively bridging the technical and product aspects. By
                      leveraging my expertise, I can navigate the path from 0 to
                      1, ensuring the product&apos;s success at every stage.
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full  top-0 left-0 absolute bg-gray-500"></div>
                </div>
              </div>
            </div>
            <Socials theme={theme!} />
          </div>
        </div>
        <div className="w-full flex items-center justify-center  h-[100%]"></div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AboutDesktopPage;
