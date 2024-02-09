"use client";
import React from "react";
import { motion } from "framer-motion";
import { appearAnime, fadeInBottom } from "@/utils/variants";

const Footer = () => {
  return (
    <div className="w-full px-20 pb-10 bg-semiWhite">
      <motion.div
        variants={appearAnime}
        initial="initial"
        whileInView={"animate"}
        viewport={{ once: true }}
        className="bg-black w-full rounded-xl h-[300px]"
      ></motion.div>
    </div>
  );
};

export default Footer;
