"use client";
import Product from "@/components/general/Product";
import React from "react";
import { motion } from "framer-motion";
import { cateAnime, titleSlide } from "@/utils/variants";

const BestDeal = () => {
  const products = [
    {
      link: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1705877393/tytn/products/b2e46750418af48a83c279462267dd0d_ftbfbn.jpg",
    },
    {
      link: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1705877396/tytn/products/pullover_pyehgj.jpg",
    },
    {
      link: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1705877395/tytn/products/tshirt_hxzxnr.jpg",
    },
    {
      link: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1705877394/tytn/products/short2_wreify.jpg",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden flex flex-col items-center justify-center pb-20 bg-semiWhite">
      <div className="relative mt-16 mb-10">
        <motion.h3
          variants={titleSlide("left")}
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: true }}
          className="text-center tracking-wider mb-3 text-xl font-semibold text-princetonOrange"
        >
          Best Deal
        </motion.h3>
        <motion.div
          variants={titleSlide("right")}
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: true }}
          className="text-center w-full flex justify-center"
        >
          <p className="text-center w-[400px] text-xs text-semiGray">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Architecto, amet incidunt.
          </p>
        </motion.div>
      </div>

      {/* products  */}
      <motion.div
        variants={cateAnime}
        initial="initial"
        whileInView={"animate"}
        viewport={{ once: true }}
        className="w-[80%] justify-center items-center flex gap-x-7 gap-10 flex-wrap"
      >
        {products.map(({ link }, index) => (
          <Product key={index} link={link} text={"best deal"} />
        ))}
      </motion.div>
    </div>
  );
};

export default BestDeal;
