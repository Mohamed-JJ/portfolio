import { ThemeContext } from "@/useContext/context";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import React, { useContext } from "react";

const Options = ({
  routes,
  router,
  HandleClick,
  clas,
}: {
  routes: { name: string; path: string; visibility: string }[];
  router: AppRouterInstance;
  HandleClick: (router: AppRouterInstance, path: string) => void;
  clas: string;
}) => {
  const theme = useContext(ThemeContext);
  return (
    <>
      {routes.map((route, key) => {
        return route.visibility === "viewer" ? (
          <div
            key={key}
            className={`${
              theme?.dark ? "text-gray-400" : "text-gray-700"
            } cursor-pointer ${clas}`}
            onClick={() => HandleClick(router, route.path)}
          >
            {route.name}
          </div>
        ) : null;
      })}
    </>
  );
};

export default Options;
