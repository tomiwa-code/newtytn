"use client";
import Header from "@/components/general/Header";
import React from "react";
import { motion } from "framer-motion";
import { arrivalSlide } from "@/utils/variants";

const Newsletter = () => {
  return (
    <div className="w-full bg-semiWhite pt-10 pb-20 px-20 flex items-center justify-center flex-col">
      <Header
        text="Be the first to know"
        subText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto,
          amet incidunt."
      />
      <motion.form
        variants={arrivalSlide("right")}
        initial="initial"
        whileInView={"animate"}
        viewport={{ once: true }}
        className="flex items-center justify-center"
      >
        <input
          type="text"
          placeholder="janedoe@gmail.com"
          className="rounded-m border-2 border-semiGray font-light rounded-tl-md rounded-bl-md w-[300px] py-2 focus:outline-none px-5 bg-transparent h-[60px]"
        />
        <button className="w-[150px] py-3 text-center bg-wheelOrange text-semiWhite rounded-tr-md rounded-br-md h-[60px] text-base capitalize">
          subscribe
        </button>
      </motion.form>
    </div>
  );
};

export default Newsletter;
