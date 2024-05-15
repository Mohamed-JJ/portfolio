import { Theme } from "@/types/theme";
import React from "react";

const RootPageDesktop = ({
  theme,
  info,
}: {
  theme: Theme | null;
  info: any;
}) => {
  return (
    <div
      className={`sm:pt-32 h-[82%] w-full flex flex-col items-center gap-2 border border-white ${
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
		  
    </div>
  );
};

export default RootPageDesktop;
