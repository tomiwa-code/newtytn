"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { arrivalSlide, fadeInBottom } from "@/utils/variants";

const SaleOffer = () => {
  return (
    <div className="w-full mb-10 md:mb-14 lg:mb-20 px-5 md:px-20">
      <motion.div
        variants={fadeInBottom}
        initial="initial"
        whileInView={"animate"}
        viewport={{ once: true }}
        className="h-auto py-5 md:py-10 lg:py-0 lg:h-[450px] flex-col lg:flex-row bg-black rounded-xl flex items-center px-5 lg:px-10"
      >
        {/* Left  */}
        <motion.div
          variants={arrivalSlide("right")}
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: true }}
          className="w-full flex-col md:flex-row lg:w-1/2 h-full flex mb-5 md:mb-8"
        >
          <div className="lg:w-[60%] h-full flex items-center justify-center mx-auto mb-5 md:mb-0">
            <div className="w-72 h-64 md:h-72 overflow-hidden rounded-md">
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

          <div className="w-full md:w-[40%] pl-5 lg:pl-0 lg:h-full flex items-left gap-y-3 justify-center flex-col">
            <p className="text-lg md:text-2xl text-white capitalize">
              stay humble hustle hard
            </p>
            <p className="text-xl md:text-3xl text-pantoneOrange">$99.99</p>
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
          className="w-full lg:w-1/2 h-full flex items-center gap-y-5 justify-center flex-col"
        >
          <p className="text-sm text-semiWhite capitalize">
            limited time offer
          </p>
          <h3 className="text-pantoneOrange text-3xl md:text-5xl font-bold ">
            Get 15% off
          </h3>
          <div className="flex gap-x-2 md:gap-x-3 items-center justify-center">
            <TimeCapsule time="03" duration="days" />
            <TimeSeparator />

            <TimeCapsule time="15" duration="hours" />
            <TimeSeparator />

            <TimeCapsule time="10" duration="minute" />
            <TimeSeparator />

            <TimeCapsule time="02" duration="seconds" />
          </div>
          {/* buy now  */}
          <button className="w-[150px] py-3 md:w-[200px] md:py-4 rounded-md bg-pantoneOrange text-semiWhite capitalize">
            buy now
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SaleOffer;

const TimeCapsule = ({
  time,
  duration,
}: {
  time: string;
  duration: string;
}) => {
  return (
    <div className="space-y-2 flex flex-col items-center justify-center text-center">
      <div className="bg-semiWhite h-12 w-12 md:w-16 md:h-16 rounded flex items-center justify-center text-lg md:text-3xl">
        {time}
      </div>
      <p className="text-sm md:text-base capitalize text-semiGray">
        {duration}
      </p>
    </div>
  );
};

const TimeSeparator = () => {
  return (
    <div className="space-y-2 md:space-y-5 -mt-7">
      <div className="w-1 h-1 md:w-2 md:h-2 bg-white rounded-full"></div>
      <div className="w-1 h-1 md:w-2 md:h-2 bg-white rounded-full"></div>
    </div>
  );
};
