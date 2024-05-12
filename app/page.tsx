"use client";
import { ThemeContext } from "@/useContext/context";
import Image from "next/image";
import { useContext } from "react";

export default function Home() {
  const theme = useContext(ThemeContext);
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
    <main className="w-screen h-screen flex justify-center">
      <div
        className={`sm:pt-32 ${theme?.dark ? "text-gray-300" : "text-gray-700"
          }`}
      >
        <div id="content-section">
          <div>
            dgsdghdgyhj
          </div>
          <div>

          </div>
          <div>

          </div>
        </div>
      </div>
    </main>
  );
}
