"use client";
import React, { useEffect, useState } from "react";
import { Heading } from "./Heading";
import { Product } from "@/types/products";
import { products, certifications } from "@/constants/products";
import Link from "next/link";
import Image from "next/image";
import { Paragraph } from "./Paragraph";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export const Products = () => {
  const params = usePathname();
  const [productsList, setProductsList] = useState<Product[]>([]);
  const [targetPath, setTargetPath] = useState("projects");
  useEffect(()=> {
    if (params.includes("/certifications")) {
      setTargetPath('certifications');
      setProductsList(certifications);
    } else {
      setTargetPath('projects');
      setProductsList(products);
    }
  }, [params]);

  return (
    <div>
      <div className="grid grid-cols-1  gap-10">
        {productsList.map((product: Product, idx: number) => (
          <motion.div
            key={product.href}
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 0.2, delay: idx * 0.1 }}
          >
            <Link
              href={product.slug ? `/${targetPath}/${product.slug}` : product.href}
              key={product.href}
              className="group flex flex-col  md:flex-row space-y-4 md:space-y-0 md:space-x-4 hover:scale-105 rounded-2xl transition duration-200 pt-4"
            >
              <Image
                src={product.thumbnail}
                alt="thumbnail"
                height="200"
                width="200"
                className="rounded-md"
              />
              <div className="flex flex-col justify-between">
                <div>
                  <Heading
                    as="h4"
                    className="font-black text-lg md:text-lg lg:text-lg "
                  >
                    {product.title}
                  </Heading>
                  <Paragraph className="text-sm md:text-sm lg:text-sm mt-2 max-w-xl">
                    {product.description}
                  </Paragraph>
                </div>
                <div className="flex space-x-2 md:mb-1 mt-2 md:mt-0">
                  {product.stack?.map((stack: string) => (
                    <span
                      key={stack}
                      className="text-xs  md:text-xs lg:text-xs bg-gray-50 dark:bg-gray-700 px-2 py-1 rounded-sm text-secondary dark:text-gray-300"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
