"use client";
import AboutDesktopPage from "@/components/about/aboutDesktopPage";
import AboutMobilePage from "@/components/about/aboutMobilePage";
import { ThemeContext } from "@/useContext/context";
import { useWindowSize } from "@react-hook/window-size";
import { AnimatePresence, motion } from "framer-motion";
import { Poppins } from "next/font/google";
import React, { useContext, useEffect, useState } from "react";

const Page = () => {
  const [width, height] = useWindowSize();
  const theme = useContext(ThemeContext);
  const [winwidth, setWindWidth] = useState<number>(0);

  useEffect(() => {
    setWindWidth(width);
  }, [width]);
  const AboutMemockData: {
    Title: string;
    Description: string;
    link: string;
  }[] = [
    {
      Title: "Engineering",
      Description:
        "First impressions matter, and exceptional website design is key. A\
          great website combines aesthetics with seamless functionality and\
          user-friendly navigation. As a seasoned software engineer, I solve\
          complex technical challenges to create websites that are both sleek\
          and visually appealing. Balancing aesthetics and functionality,\
          optimizing load times, ensuring cross-browser compatibility, and\
          implementing responsive design are some of the challenges I tackle. My\
          deep understanding of recognized technical standards and modern\
          practices ensures high-quality, maintainable code. Working with me\
          means having a website that is elegant, efficient, and secure. Every\
          element is meticulously crafted, providing a superior user experience\
          and a lasting first impression.\
      ",
      link: "https://www.github.com/mohamed-JJ",
    },
    {
      Title: "Education",
      Description:
        "As a 1337 coding school/42 network student, I have a strong foundation learning things in general. I have a strong background in web development, working with technologies like JavaScript, React, Node.js, and more. I'm deeply passionate about coding and enjoy tackling challenging problems, building efficient solutions, and continuously learning new technologies. I'm also a big-time DevOps enthusiast, with a keen interest in automation, continuous integration and deployment, and cloud technologies.",
      link: "fsgcghdf",
    },
  ];
  const ReadingsMemockData: {
    Title: string;
    Description: string;
    link: string;
  }[] = [
    {
      Title: "Gnu make",
      Description:
        "a book about the make command, and how to use it, and how to make the best out of it. the book is written by Richard M. Stallman. it had a lot of examples and use cases, each one has a different approach to the make command.",
      link: "https://www.gnu.org/software/make/manual/make.html",
    },
    {
      Title: "K8s introduction on Edx",
      Description:
        "a course about kubernetes. it has a lot information on how K8s came to exist, and how it works, and how to use it. it also has a lot of examples and use cases, the K8s atchitecture and how everything is set up from the beginning of integration till the container orchestration. the course is free and can be found on Edx.",
      link: "https://learning.edx.org/course/course-v1:LinuxFoundationX+LFS158x+1T2024/",
    },
  ];

  return (
    <AnimatePresence>
      <motion.div
        className={`w-full h-[82%]`}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        {winwidth > 640 ? (
          <AboutDesktopPage
            dark={theme!.dark}
            AboutMemockData={AboutMemockData}
            ReadingsMemockData={ReadingsMemockData}
          />
        ) : (
          <AboutMobilePage
            dark={theme!.dark}
            AboutMemockData={AboutMemockData}
            ReadingsMemockData={ReadingsMemockData}
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default Page;
