import { Theme } from "@/types/theme";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const RootPageDesktop = ({
  theme,
  info,
}: {
  theme: Theme | null;
  info: any;
}) => {
  const [h1Ref, setH1Ref] = useState<string>("I AM MOHAMED JARBOUA"); // the refirence if for the heading tag to be targeted when hovered over
  const router = useRouter();
  const colors = [
    "text-blue-300",
    "text-blue-700",
    "text-purple-300",
    "text-purple-700",
    "text-green-300",
    "text-green-700",
    "text-red-300",
    "text-red-700",
    "text-pink-300",
    "text-pink-700",
    "text-yellow-300",
    "text-yellow-700",
  ];
  const [color, setColor] = useState<string>("white");
  const [firstH1State, setfirstH1State] = useState<string>(
    "I AM MOHAMED JARBOUA"
  ); // the refirence if for the heading tag to be targeted when hovered over

  // idea, use an array and set it with a value and use that value to diplay it each time the mose hovers
  const ChangeStyle = () => {
    let iterations = 0;
    const interval = setInterval(() => {
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const holder = h1Ref
        .split("")
        .map((char, index) => {
          if (index < iterations) return firstH1State[index];
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");
      setColor(colors[Math.floor(Math.random() * colors.length)]);
      setH1Ref(holder);
      if (iterations >= firstH1State.length) {
        clearInterval(interval);
        setColor("white");
      }
      iterations += 1 / 3;
    }, 30);
  };

  return (
    <div
      className={`sm:pt-40 w-full h-full flex flex-col items-center gap-2 font-mono ${
        theme?.dark ? "text-gray-300" : "text-gray-700"
      }`}
    >
      {/* <div className="w-[150px] min-h-[150px] border-white border">dgsdghdgyhj</div>
	  {/* //example of to use a scrollable caontainer */}
      {/*<div className="w-[150px] min-h-[150px] border-white border bg-white">1</div>
      <div className="w-[150px] min-h-[150px] border-white border">2</div>
      <div className="w-[150px] min-h-[150px] border-white border">3</div>
      <div className="w-[150px] min-h-[150px] border-white border">4</div>
      <div className="w-[150px] min-h-[150px] border-white border">5</div>
      <div className="w-[150px] min-h-[150px] border-white border">6</div>
      <div className="w-[150px] min-h-[150px] border-white border">7</div> */}
      <div className={`text-white w-[40%] flex flex-col gap-7`}>
        <h1 className="font-bold text-4xl" onMouseOver={ChangeStyle}>
          {h1Ref}
        </h1>
        <p
          className={`${
            theme?.dark ? "text-gray-400" : "text-gray-700"
          } text-pretty leading-loose`}
        >
          Passionate Full Stack/DevOps graduate student with a knack for
          crafting immersive digital experiences. with experience in both
          front-end and back-end technologies, with a focus on JavaScript. with
          proficiency in devops architecture and automation, I thrive on
          transforming ideas into impactful{" "}
          <a
            href=""
            className={`no-underline font-bold ${
              theme?.dark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            projects
          </a>
          . Dedicated to continuous learning and driving innovation in tech.
          Ready to bring creativity, dedication, and expertise to the table.
        </p>
        <p
          className={`${
            theme?.dark ? "text-gray-400" : "text-gray-700"
          } leading-loose`}
        >
          Embracing sunlight or indoor settings is what i long for. I am all
          about minimalism, finding beauty in simplicity and order. Beyond
          crafting elegant web experiences, you will find me immersed in
          articles or swaying to the rhythm of Music&amp;, losing myself in
          captivating melodies. Let&apos;s{" "}
          <a
            href=""
            className={`no-underline font-bold ${
              theme?.dark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            connect
          </a>
          !
        </p>
      </div>
      <div className="w-[40%] flex flex-col">
        <p
          className={`${
            theme?.dark ? "text-gray-300" : "text-gray-700"
          } font-bold mt-5`}
        >
          my Social
        </p>
        <div className="w-full flex flex-row gap-5 mt-5">
          <FaLinkedin
            onClick={() =>
              router.push("https://www.linkedin.com/in/mohamed-jarboua/")
            }
            className={`${
              theme?.dark ? "text-gray-300" : "text-gray-700"
            } w-[40px] h-[40px] cursor-pointer`}
          />
          <FaGithub
            onClick={() => router.push("https://github.com/mohamed-JJ")}
            className={`${
              theme?.dark ? "text-gray-300" : "text-gray-700"
            } w-[40px] h-[40px] cursor-pointer`}
          />
        </div>
      </div>
    </div>
  );
};

export default RootPageDesktop;
