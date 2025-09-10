"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { fadeInBottom } from "@/utils/variants";

const BannerCard = () => {
  return (
    <div className="w-full px-5 md:px-20 pb-20">
      <motion.div
        variants={fadeInBottom}
        initial="initial"
        whileInView={"animate"}
        viewport={{ once: true }}
        className="w-full rounded-md flex flex-col items-center h-[250px] justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0 w-full">
          <Image
            src={
              "https://res.cloudinary.com/dgdoymhtj/image/upload/v1706480769/tytn/sales%20offer/hjh_kauhbt.jpg"
            }
            priority
            alt="bannerImage"
            width={1300}
            height={1000}
            className="w-full h-full object-center object-cover"
          />
        </div>
        <p className="relative text-center text-white bg-black/10 backdrop-blur-sm px-5 py-3 uppercase text-3xl font-semibold">
          up to 60% off holiday bit
        </p>
      </motion.div>
    </div>
  );
};

export default BannerCard;
