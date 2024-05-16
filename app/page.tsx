"use client";
import RootPageDesktop from "@/components/rootPage/RootPageDesktop";
import RootPageMobilc from "@/components/rootPage/RootPageMobilc";
import { ThemeContext } from "@/useContext/context";
import { useWindowSize } from "@react-hook/window-size";
import Image from "next/image";
import { useContext } from "react";

export default function Home() {
  const theme = useContext(ThemeContext);
  const [width, height] = useWindowSize();
  const AdminInfo = {
    name: "Mohamed",
    lastName: "Jarboua",
    intro:
      "👋 Hello! I'm mohamed, a passionate full-stack developer currently studying at 1337 coding school.\
  💻 I have a strong background in web development, working with technologies like JavaScript, React, Node.js, and more.\
  🚀 I'm deeply passionate about coding and enjoy tackling challenging problems, building efficient solutions, and continuously learning new technologies.\
  ⚙️ I'm also a big-time DevOps enthusiast, with a keen interest in automation, continuous integration and deployment, and cloud technologies.",
    bio: "",
    ig: "",
    github: "",
    xApp: "",
    linkedIn: "",
  };
  return (
    <div className="w-full h-full">
      {width < 640 ? (
        <RootPageMobilc theme={theme!} info={AdminInfo} />
      ) : (
        <RootPageDesktop theme={theme!} info={AdminInfo} />
      )}
    </div>
  );
}
