"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { arrivalSlide, fadeInBottom } from "@/utils/variants";

const SaleOffer = () => {
  return (
    <div className="w-full py-20 px-20 bg-semiWhite">
      <motion.div
        variants={fadeInBottom}
        initial="initial"
        whileInView={"animate"}
        viewport={{ once: true }}
        className="h-[450px] bg-black rounded-xl flex items-center px-10"
      >
        {/* Left  */}
        <motion.div
          variants={arrivalSlide("right")}
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: true }}
          className="w-1/2 h-full flex"
        >
          <div className="w-[60%] h-full flex items-center justify-center pl-6">
            <div className="w-72 h-72 overflow-hidden rounded-md">
              <Image
                src={
                  "https://res.cloudinary.com/dgdoymhtj/image/upload/v1706135738/tytn/sales%20offer/Stay_Humble___Hustle_Print_Hoodie_Hoodies_For_Men_Men_s_Casual_Graphic_Design_Pullover_Hooded_Sweatshirt_With_Kangaroo_Pocket_For_Spring_Fall_As_Gifts_t5xi9p.jpg"
                }
                alt="sales"
                priority
                width={1000}
                height={1000}
              />
            </div>
          </div>
          <div className="w-[40%] h-full flex items-left gap-y-3 justify-center flex-col">
            <p className="text-2xl text-semiGray capitalize">
              stay humble hustle hard
            </p>
            <p className="text-3xl text-pantoneOrange">$99.99</p>
            <div className="flex gap-x-2">
              <p className="text-semiGray text-sm capitalize">lining:</p>
              <p className="text-white text-sm capitalize">100% clothing</p>
            </div>
            <div className="flex gap-x-2">
              <p className="text-semiGray text-sm capitalize">color:</p>
              <p className="text-white text-sm capitalize">cream</p>
            </div>
            <div className="flex gap-x-2">
              <p className="text-semiGray text-sm capitalize">size:</p>
              <p className="text-white text-sm capitalize">xl</p>
            </div>
          </div>
        </motion.div>

        {/* Right  */}
        <motion.div
          variants={arrivalSlide("left")}
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: true }}
          className="w-1/2 h-full flex items-center gap-y-5 justify-center flex-col"
        >
          <p className="text-sm text-semiWhite capitalize">
            limited time offer
          </p>
          <h3 className="text-pantoneOrange text-5xl font-bold ">
            Get 15% off
          </h3>
          <div className="flex gap-x-3 items-center justify-center">
            <div className="space-y-2 text-center">
              <div className="bg-semiWhite w-16 h-16 rounded flex items-center justify-center text-3xl">
                03
              </div>
              <p className="text-base capitalize text-semiGray">days</p>
            </div>
            <div className="space-y-5 -mt-7">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div className="space-y-2 text-center">
              <div className="bg-semiWhite w-16 h-16 rounded flex items-center justify-center text-3xl">
                15
              </div>
              <p className="text-base capitalize text-semiGray">hours</p>
            </div>
            <div className="space-y-5 -mt-7">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div className="space-y-2 text-center">
              <div className="bg-semiWhite w-16 h-16 rounded flex items-center justify-center text-3xl">
                10
              </div>
              <p className="text-base capitalize text-semiGray">minute</p>
            </div>
            <div className="space-y-5 -mt-7">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div className="space-y-2 text-center">
              <div className="bg-semiWhite w-16 h-16 rounded flex items-center justify-center text-3xl">
                02
              </div>
              <p className="text-base capitalize text-semiGray">seconds</p>
            </div>
          </div>
          {/* buy now  */}
          <button className="w-[200px] py-4 rounded-md bg-pantoneOrange text-semiWhite capitalize">
            buy now
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SaleOffer;
