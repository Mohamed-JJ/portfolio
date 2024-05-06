"use client";
import { useQuery } from "@tanstack/react-query";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useParams, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

import React, { useEffect } from "react";

const CheckIfAdmin = async () => {
  return await false;
};

const HandleClick = (router: AppRouterInstance, path: string) => {
  router.push(path);
};

const NavBar = () => {
  const router = useRouter();
  const param = useParams();
  const searchParam = useSearchParams();
  const { data: isAdmin } = useQuery({
    queryKey: ["Admin"],
    queryFn: async () => CheckIfAdmin(),
  });

  const routes: { name: string; path: string; visibility: string }[] = [
    {
      name: "Projects",
      path: "/",
      visibility: "viewer",
    },
    {
      name: "About",
      path: "/about",
      visibility: "viewer",
    },
    {
      name: "Contact",
      path: "/contact",
      visibility: "viewer",
    },
    {
      name: "projectUpload",
      path: "/Admin/projectUpload",
      visibility: "Admin",
    },
    {
      name: "updateInfo",
      path: "/Admin/updateInfo",
      visibility: "Admin",
    },
  ];

  return (
    <div className="flex flex-row justify-between items-center w-full h-[15%] px-8 border-black border">
      {routes.map((route, key) => {
        return (
          <div key={key} onClick={() => HandleClick(router, route.path)}>
            {route.name}
          </div>
        );
      })}
    </div>
  );
};

export default NavBar;
