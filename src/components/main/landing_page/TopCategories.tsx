"use client";
import Header from "@/components/general/Header";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import { LiaTimesSolid } from "react-icons/lia";
import { motion } from "framer-motion";
import {
  appearAnime,
  arrivalSlide,
  cateAnime,
  scrollActionAxis,
} from "@/utils/variants";

const TopCategories = () => {
  return (
    <div className="w-full px-5 md:px-20 pb-20">
      <Header
        subText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto,
          amet incidunt."
        text="Top Categories"
      />

      <div className="flex w-full gap-x-5 items-center">
        <div className="w-full lg:w-[70%] flex flex-wrap md:flex-nowrap gap-x-1 md:h-[400px]">
          <div className="w-full md:w-1/2 flex gap-x-1">
            {/* sweatshirt  */}
            <Link
              href={"/shop?cat=sweatshirt"}
              className="w-full h-full space-y-1"
            >
              <motion.div
                variants={cateAnime}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={0.2}
                className="w-full h-[50%] bg-semiGray overflow-hidden"
              >
                <Image
                  src={
                    "https://res.cloudinary.com/dgdoymhtj/image/upload/v1705964493/tytn/products/Vintage_Letter_Embroidery_Sweatshirts_For_Women_-_Black___L-removebg-preview_axacll.png"
                  }
                  alt="sweatshirt"
                  width={1000}
                  height={1000}
                  priority
                />
              </motion.div>
              <motion.div
                variants={cateAnime}
                initial="initial"
                whileInView="animate"
                viewport={{ amount: 0.3, once: true }}
                className="w-full h-[49%] bg-black flex flex-col items-center justify-center relative gap-y-2"
              >
                <div className="absolute -top-3 -rotate-90 text-black">
                  <BiSolidRightArrow />
                </div>
                <p className="capitalize text-princetonOrange font-light">
                  sweatshirt
                </p>
                <p className="text-semiGray text-lg">
                  <LiaTimesSolid />
                </p>
                <p className="text-semiWhite w-[100px] text-center">
                  Men and Women
                </p>
              </motion.div>
            </Link>

            {/* short  */}
            <Link
              href={"/shop?cat=short"}
              className="w-full h-full overflow-hidden relative"
            >
              <motion.div
                variants={cateAnime}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={0.25}
                className="w-[300px]"
              >
                <Image
                  src={
                    "https://res.cloudinary.com/dgdoymhtj/image/upload/v1705965553/tytn/products/Men_Solid_Shirt_Shorts_ra4zv9.jpg"
                  }
                  alt="short"
                  width={1000}
                  height={1000}
                  priority
                />
              </motion.div>
              <motion.div
                variants={appearAnime}
                initial="initial"
                whileInView="animate"
                custom={1.2}
                viewport={{ amount: 1, once: true }}
                className="absolute z-10 top-0 bg-black py-1 px-2 rounded-tr rounded-br rounded-bl"
              >
                <p className="capitalize text-princetonOrange font-light">
                  short
                </p>
              </motion.div>
            </Link>
          </div>

          <div className="w-full mt-1 md:mt-0 md:w-1/2 space-y-1">
            {/* t-shirt  */}
            <Link href={"/shop?cat=t-shirt"} className="flex gap-x-1 h-[50%]">
              <motion.div
                variants={cateAnime}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={0.3}
                className="h-full w-full bg-semiGray overflow-hidden"
              >
                <Image
                  src={
                    "https://res.cloudinary.com/dgdoymhtj/image/upload/v1705966797/tytn/products/tshirt23-removebg-preview_vctbii.png"
                  }
                  alt="t-shirt"
                  width={1000}
                  height={1000}
                  priority
                />
              </motion.div>
              <motion.div
                variants={cateAnime}
                initial="initial"
                whileInView="animate"
                viewport={{ amount: 0.3, once: true }}
                className="bg-black h-full w-full flex flex-col items-center justify-center relative gap-y-2"
              >
                <div className="absolute -left-1 top-1/2 -translate-x-1/2 -rotate-180 text-black">
                  <BiSolidRightArrow />
                </div>
                <p className="capitalize text-princetonOrange font-light">
                  t-shirt
                </p>
                <p className="text-semiGray text-lg">
                  <LiaTimesSolid />
                </p>
                <p className="text-semiWhite w-[100px] text-center">
                  Men and Women
                </p>
              </motion.div>
            </Link>

            {/* joggers  */}
            <Link href={"/shop?cat=joggers"} className="flex gap-x-1 h-[49%]">
              <motion.div
                variants={cateAnime}
                initial="initial"
                whileInView="animate"
                viewport={{ amount: 0.3, once: true }}
                className="bg-black h-full w-full flex flex-col items-center justify-center relative gap-y-2"
              >
                <div className="absolute text-black z-10 -right-3">
                  <BiSolidRightArrow />
                </div>
                <p className="capitalize text-princetonOrange font-light">
                  joggers
                </p>
                <p className="text-semiGray text-lg">
                  <LiaTimesSolid />
                </p>
                <p className="text-semiWhite w-[100px] text-center">
                  Men and Women
                </p>
              </motion.div>
              <motion.div
                variants={cateAnime}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={0.3}
                className="h-full w-full bg-semiGray overflow-hidden"
              >
                <div className="w-[200px]">
                  <Image
                    src={
                      "https://res.cloudinary.com/dgdoymhtj/image/upload/v1705967545/tytn/products/Hombres_Pantalones_con_bolsillo_oblicuo_de_cintura_con_cord%C3%B3n-removebg-preview_dqwncc.png"
                    }
                    alt="short"
                    width={1000}
                    height={1000}
                    priority
                  />
                </div>
              </motion.div>
            </Link>
          </div>
        </div>

        <motion.div
          variants={arrivalSlide("left")}
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: true }}
          className="w-[30%] hidden bg-black relative lg:flex flex-col items-center justify-center"
        >
          <motion.div
            variants={scrollActionAxis}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="rounded-full absolute bg-wheelOrange w-[250px] h-[250px] -mt-10"
          ></motion.div>
          <div className="absolute w-[400px] right-0">
            <Image
              src={
                "https://res.cloudinary.com/dgdoymhtj/image/upload/v1706477476/tytn/announcements/download__1_-removebg-preview_zgdvru.png"
              }
              alt="afa"
              width={1000}
              height={1000}
              priority
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TopCategories;
