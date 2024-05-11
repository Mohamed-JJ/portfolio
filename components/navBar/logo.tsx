import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Theme } from "@/types/theme";

const Logo = ({ theme }: {theme: Theme| null}) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize(); // set initial width
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = () => {
    router.push("/");
  };

  return (
    <div onClick={handleClick} className="hover:cursor-pointer opacity-50">
      {windowWidth < 640 || windowWidth === 0 ? (
        <Image
          src={
            theme?.dark ? "/logos/light-mj-logo.png" : "/logos/dark-mj-logo.png"
          }
          alt="logo"
          width={50}
          height={50}
        />
      ) : null}
    </div>
  );
};

export default Logo;
