"use client";
import Image from "next/image";
import * as React from "react";
import Header from "./Header";
import { motion } from "framer-motion";
import { arrivalSlide, scrollAction } from "@/utils/variants";
import Product from "./Product";

interface ILandingProductsProps {
  products: { link: string }[];
  imageUrl: string;
  subText: string;
  text: string;
}

const LandingProducts: React.FunctionComponent<ILandingProductsProps> = ({
  products,
  imageUrl,
  subText,
  text,
}) => {
  return (
    <div className="w-full md:px-20 mb-10 md:mb-14 lg:mb-20">
      <Header subText={subText} text={text} />

      <div className="flex gap-x-5 items-center">
        {/* left image  */}
        <motion.div
          variants={arrivalSlide("left")}
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: true }}
          className="w-[30%] relative hidden lg:block"
        >
          <div className="flex items-center justify-center">
            <motion.div
              variants={scrollAction}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              className="rounded-full absolute bg-wheelOrange w-[300px] h-[300px] -mt-20"
            ></motion.div>
            <div className="w-[400px] z-20 relative">
              <Image
                src={imageUrl}
                alt="fimg"
                width={1000}
                height={1000}
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* products  */}
        <motion.div
          variants={arrivalSlide("right")}
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: true }}
          className="w-full px-5 md:px-0 lg:w-[70%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 md:gap-x-7 gap-y-5"
        >
          {products.map(({ link }, index) => (
            <Product key={index} link={link} text={"new"} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LandingProducts;
