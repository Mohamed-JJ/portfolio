import { Theme } from "@/types/theme";
import { useRouter } from "next/navigation";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Socials = ({ theme }: { theme: Theme | null }) => {
  const router = useRouter();
  return (
    <div className="w-[40%] flex flex-col pb-5">
      <p
        className={`${
          theme?.dark ? "text-gray-300" : "text-gray-700"
        } font-bold mt-5`}
      >
        my Socials
      </p>
      <div className="w-full flex flex-row gap-5 mt-5">
        <FaLinkedin
          onClick={() =>
            router.push("https://www.linkedin.com/in/mohamed-jarboua/")
          }
          className={`${
            theme?.dark ? "text-gray-300" : "text-gray-700"
          } w-[22px] h-[22px] cursor-pointer`}
        />
        <FaGithub
          onClick={() => router.push("https://github.com/mohamed-JJ")}
          className={`${
            theme?.dark ? "text-gray-300" : "text-gray-700"
          } w-[22px] h-[22px] cursor-pointer`}
        />
      </div>
    </div>
  );
};

export default Socials
