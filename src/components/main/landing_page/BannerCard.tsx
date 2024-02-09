"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { fadeInBottom } from "@/utils/variants";

const BannerCard = () => {
  return (
    <div className="w-full px-20 pt-10 pb-20 bg-semiWhite">
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
          />
        </div>
        <p className="relative text-center text-semiWhite uppercase text-3xl font-semibold">
          up to 60% off holiday bit
        </p>
      </motion.div>
    </div>
  );
};

export default BannerCard;
