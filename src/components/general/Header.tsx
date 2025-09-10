"use client";
import React from "react";
import { motion } from "framer-motion";
import { titleSlide } from "@/utils/variants";

const Header = (props: { text: string; subText: string }) => {
  return (
    <div className="mb-10">
      <motion.h3
        variants={titleSlide("left")}
        initial="initial"
        whileInView={"animate"}
        viewport={{ once: true }}
        className="text-center tracking-wider mb-3 text-black"
      >
        {props.text}
      </motion.h3>
      {props.subText !== "" && (
        <motion.div
          variants={titleSlide("right")}
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: true }}
          className="text-center w-full flex justify-center"
        >
          <p className="text-center w-full px-5 md:px-0 md:w-[400px] text-xs text-semiGray">
            {props.subText}
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default Header;
