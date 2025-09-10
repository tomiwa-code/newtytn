"use client";
import React from "react";
import { motion } from "framer-motion";
import { appearAnime } from "@/utils/variants";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const profilePath = pathname.split("/")[1];

  return (
    <>
      {pathname !== "/cart" && profilePath !== "profile" && (
        <div className="w-full md:pb-5 md:px-5">
          <motion.div
            variants={appearAnime}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
            className={`bg-black rounded-t-xl md:rounded-xl h-[300px] ${
              pathname === "/shop" && "w-[75%] left-[27%] relative"
            }`}
          ></motion.div>
        </div>
      )}
    </>
  );
};

export default Footer;
