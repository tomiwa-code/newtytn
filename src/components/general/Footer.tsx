"use client";
import React from "react";
import { motion } from "framer-motion";
import { appearAnime, fadeInBottom } from "@/utils/variants";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  return (
    <>
      {pathname !== "/cart" && (
        <div className="w-full px-20 pb-10 bg-semiWhite">
          <motion.div
            variants={appearAnime}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
            className={`bg-black rounded-xl h-[300px] ${
              pathname === "/shop" && "w-[75%] left-[27%] relative"
            }`}
          ></motion.div>
        </div>
      )}
    </>
  );
};

export default Footer;
