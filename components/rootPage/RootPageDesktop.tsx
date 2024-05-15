import { Theme } from "@/types/theme";
import React, { useEffect, useRef, useState } from "react";

const RootPageDesktop = ({
  theme,
  info,
}: {
  theme: Theme | null;
  info: any;
	}) => {
	const [hover, setHover] = useState(false);
	const h1Ref = useRef();
	useEffect(() => {
		const h1Ref = document.querySelector("h1");
		if (h1Ref) {
			h1Ref.onmouseover = (event: MouseEvent) => {
				h1Ref.innerText = Math.random().toString();
				console.log("hovered");
			};
		}
	}, [h1Ref]);
  return (
    <div
      className={`sm:pt-40 w-full h-full flex flex-col items-center gap-2 border border-white ${
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
      <div className="text-white w-[40%]">
        <h1 className="font-bold text-4xl">I AM {"MOHAMED JARBOUA"}</h1>
      </div>
    </div>
  );
};

export default RootPageDesktop;
