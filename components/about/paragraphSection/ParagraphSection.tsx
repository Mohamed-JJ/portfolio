import { ThemeContext } from "@/useContext/context";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { FaGithub } from "react-icons/fa6";

const ParagraphSection = () => {
  const theme = useContext(ThemeContext);
  const router = useRouter();
  const clickHandler = (router: any, path: string) => {
    router.push(path);
  };
  return (
    <div className="w-full items-center  relative">
    </div>
  );
};

export default ParagraphSection;
