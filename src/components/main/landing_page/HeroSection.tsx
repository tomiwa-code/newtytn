"use client";
import React from "react";
import { RiTwitterXLine } from "react-icons/ri";
import { BsCart2, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { BsPlusLg } from "react-icons/bs";
import Tooltip from "@/components/general/Tooltip";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCreative, Pagination, Autoplay } from "swiper/modules";
import {
  fadeInBottomSpring,
  heroSlideInLeft,
  heroSlideInRight,
  orangeCircle,
  scrollAction,
  theImage,
} from "@/utils/variants";
import { AddProductType } from "@/utils/types";
import { addToCartFunc } from "@/utils/functions";
import { useStore } from "@/utils/zustand.store";
import { UserLoggedInContext } from "@/context/IsLoggedIn.context";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";

const HeroSection: React.FC = () => {
  const slides = [
    {
      id: "1",
      lining: "clothing",
      color: "cream",
      size: "large",
      product_name: "the square t-shirt",
      original_price: "",
      new_price: 145,
      link: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1705874638/tytn/hero/Men_Checker___Slogan_Graphic_Tee-removebg-preview_hnvbyt.png",
    },
    {
      id: "2",
      lining: "clothing",
      color: "black and yellow",
      size: "large",
      product_name: "freedom hoodie",
      original_price: "",
      new_price: 148,
      link: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1705872681/tytn/hero/Men_Letter_Graphic_Kangaroo_Pocket_Drawstring_Hoodie-removebg-preview_lrdzoc.png",
    },
    {
      id: "3",
      lining: "clothing",
      color: "black and red",
      size: "large",
      product_name: "the last of us hoodie",
      original_price: "",
      new_price: 149.99,
      link: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1706474922/tytn/hero/men_wxlhgd.png",
    },
  ];

  // DECLARES
  const addToCart = useStore((state) => state.addProduct);
  const cartItems = useStore((state) => state.products);
  const getCurrentUrl = usePathname();
  const router = useRouter();
  const { isUSerLoggedIn } = React.useContext(UserLoggedInContext);

  // FUNCTIONS
  const scrollToAction = () => {
    window.scrollTo({
      top: 900,
      behavior: "smooth",
    });
  };

  const handleAddToCart = ({
    id,
    name,
    color,
    size,
    price,
    total_price,
    quantity,
  }: AddProductType) => {
    const data = addToCartFunc({
      id,
      name,
      color,
      size,
      price,
      total_price,
      quantity,
      cartItems,
    });
    addToCart(data);
  };

  const handleBuyNow = ({
    id,
    name,
    color,
    size,
    price,
    total_price,
    quantity,
  }: AddProductType) => {
    // check if user is logged in
    if (isUSerLoggedIn === true) {
      const data = addToCartFunc({
        id,
        name,
        color,
        size,
        price,
        total_price,
        quantity,
        cartItems,
      });
      addToCart(data);
      router.push("/cart");
    } else {
      if (getCurrentUrl) {
        Cookies.set("athpaslt", getCurrentUrl);
        router.push("/auth");
      }
    }
  };

  return (
    <div className="w-full relative h-screen flex items-center justify-center bg-semiWhite overflow-hidden">
      <Swiper
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -800],
            rotate: [180, 0, 0],
          },
          next: {
            shadow: true,
            translate: [0, 0, -800],
            rotate: [-180, 0, 0],
          },
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[EffectCreative, Pagination, Autoplay]}
        className="w-[90%] h-full relative"
      >
        {slides.map(
          ({ id, product_name, new_price, lining, color, size, link }) => (
            <SwiperSlide key={id} className="bg-semiWhite">
              {/* name, price and animation count */}
              <motion.div
                variants={heroSlideInLeft}
                initial="initial"
                animate="animate"
                custom={1}
                className="absolute z-10 left-20 top-1/2 -translate-y-1/2"
              >
                <div className="space-y-2">
                  <h3 className="font-medium tracking-wide capitalize text-4xl w-[230px]">
                    {product_name}
                  </h3>
                  <p className="text-semiGray text-4xl">
                    ${new_price.toFixed(2)}
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={orangeCircle}
                initial="initial"
                animate="animate"
                className="rounded-full absolute w-[500px] bg-princetonOrange h-[500px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
              ></motion.div>

              <motion.div
                variants={theImage}
                animate="animate"
                initial="initial"
                id="theImage"
                className="relative w-[500px] left-1/2 -translate-x-1/2 h-screen z-50"
              >
                <Image
                  src={link}
                  alt="fimg"
                  width={1000}
                  height={1000}
                  priority
                  className="absolute bottom-0"
                />
              </motion.div>

              {/* lining, color and size  */}
              <motion.div
                variants={heroSlideInLeft}
                initial="initial"
                animate="animate"
                custom={1.2}
                className="w-40 z-10 absolute right-24 top-1/2 -translate-y-1/2"
              >
                <div className="space-y-6">
                  <div className="space-y-2">
                    <p className="text-xs text-semiGray font-semibold capitalize">
                      lining
                    </p>
                    <p className="text-sm text-black capitalize">
                      100% {lining}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs text-semiGray font-semibold capitalize">
                      color
                    </p>
                    <p className="text-sm text-black capitalize">{color}</p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs text-semiGray font-semibold capitalize">
                      size
                    </p>
                    <p className="text-sm text-black capitalize">{size}</p>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-x-3 absolute -bottom-44">
                  <Tooltip text="Add to cart">
                    <button
                      className="rounded-full bg-princetonOrange text-white w-10 h-10 justify-center items-center flex"
                      onClick={() =>
                        handleAddToCart({
                          id,
                          color,
                          size,
                          price: new_price,
                          name: product_name,
                          quantity: 1,
                          total_price: new_price,
                        })
                      }
                    >
                      <BsPlusLg />
                    </button>
                  </Tooltip>

                  <Tooltip text="Buy now">
                    <button
                      className="rounded-full text-black text-2xl w-10 justify-center items-center flex h-10"
                      onClick={() =>
                        handleBuyNow({
                          id,
                          color,
                          size,
                          price: new_price,
                          name: product_name,
                          quantity: 1,
                          total_price: new_price,
                        })
                      }
                    >
                      <BsCart2 />
                    </button>
                  </Tooltip>
                </div>
              </motion.div>
            </SwiperSlide>
          )
        )}
      </Swiper>

      {/* Scroll to action  */}
      <motion.div
        variants={fadeInBottomSpring}
        initial={"initial"}
        animate="animate"
        custom={1.4}
        onClick={scrollToAction}
        className="absolute bottom-16 w-6 h-10 border-princetonOrange border-2 cursor-pointer rounded-full z-50 flex justify-center"
      >
        <motion.div
          variants={scrollAction}
          initial="initial"
          animate="animate"
          className="bg-semiWhite w-2 h-2 rounded-full mt-2"
        ></motion.div>
      </motion.div>

      {/* social links  */}
      <motion.div
        variants={heroSlideInRight}
        initial="initial"
        animate="animate"
        className="absolute right-20 h-screen flex items-center z-50"
      >
        <div className="space-y-6">
          <div>
            <Tooltip text="x (Twitter)">
              <Link
                href="#"
                className="rounded-full bg-black w-7 h-7 flex items-center justify-center text-white text-xs"
              >
                <RiTwitterXLine />
              </Link>
            </Tooltip>
          </div>

          <div>
            <Tooltip text="Instagram">
              <Link
                href={"#"}
                className="rounded-full bg-black w-7 h-7 flex items-center justify-center text-white text-xs"
              >
                <BsInstagram />
              </Link>
            </Tooltip>
          </div>

          <div>
            <Tooltip text="Whatsapp">
              <Link
                href={"#"}
                className="rounded-full bg-black w-7 h-7 flex items-center justify-center text-white text-xs"
              >
                <BsWhatsapp />
              </Link>
            </Tooltip>
          </div>
        </div>
      </motion.div>
      <div className="w-[120%] bg-semiWhite h-24 absolute -left-10 -bottom-10 z-50 blur-lg "></div>
    </div>
  );
};

export default HeroSection;
