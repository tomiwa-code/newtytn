import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import LoginImage from "public/login.jpg";
import LoginImage2 from "public/login2.jpg";
import { HandleAuthProps } from "@/utils/types";

const ToggleOverlay = ({ toggleAuth }: HandleAuthProps) => {
  return (
    <motion.div
      animate={{ x: !toggleAuth ? 0 : "100%" }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      className="absolute w-1/2 h-screen overflow-hidden before:inset-0 before:absolute before:bg-princetonOrange before:bg-opacity-80 before:z-20"
    >
      <Image
        src={LoginImage}
        alt="login image"
        width={1000}
        height={1000}
        className={`${
          !toggleAuth
            ? "opacity-100 duration-500 delay-200"
            : "opacity-0 z-0 absolute"
        }`}
      />
      <Image
        src={LoginImage2}
        alt="login image"
        width={1000}
        height={1000}
        className={`${
          !toggleAuth
            ? "opacity-0 z-0 "
            : "opacity-100 relative z-10 duration-500 delay-200"
        }`}
      />
      <p className=" absolute top-[20%] text-white text-xl font-bold left-1/2 -translate-y-1/2 -translate-x-1/2 z-30">
        {!toggleAuth ? "Welcome to" : "Become a member in"}
      </p>
      <div className="flex flex-col gap-y-3 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-30 text-white text-center">
        <p className="text-4xl font-bold">tytn</p>
        <p className="text-3xl uppercase font-bold">Amazing store</p>
        <p>Sign {!toggleAuth ? "in" : "up"} and start shopping</p>
      </div>
    </motion.div>
  );
};

export default ToggleOverlay;
