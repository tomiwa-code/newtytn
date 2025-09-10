"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { GoSearch } from "react-icons/go";
import { LiaTimesSolid } from "react-icons/lia";
import { useContext, useEffect, useState } from "react";
import Tooltip from "./Tooltip";
import { useAnimate, usePresence } from "framer-motion";
import { UserLoggedInContext } from "@/context/IsLoggedIn.context";
import { MdOutlineContactSupport } from "react-icons/md";
import { LiaShoppingBasketSolid } from "react-icons/lia";
import Cookies from "js-cookie";
import { useStore } from "@/utils/zustand.store";

const Navbar = () => {
  // USE STATES
  const [iconExpand, setIconExpand] = useState(false);

  // DECLARES
  const pathname = usePathname();
  const [isPresent, safeToRemove] = usePresence();
  const [scope, animate] = useAnimate();
  const { isUSerLoggedIn } = useContext(UserLoggedInContext);
  const router = useRouter();
  const totalProducts = useStore((state) => state.totalProducts);
  const userDetails = useStore((state) => state.userDetails);

  // FUNCTIONS
  const toggleExpandOff = () => {
    setIconExpand(false);
  };
  const toggleExpandOn = () => {
    setIconExpand(true);
  };

  const handleSearch = () => {
    if (iconExpand) {
      console.log("search");
      toggleExpandOff();
    }
  };

  const handleCart = () => {
    if (iconExpand) {
      toggleExpandOff();
      router.push("/cart");
    }
  };

  const handleShop = () => {
    if (iconExpand) {
      toggleExpandOff();
      router.push("/shop");
    }
  };

  const handleContact = () => {
    if (iconExpand) {
      toggleExpandOff();
      router.push("/contact");
    }
  };

  const handleUser = () => {
    if (iconExpand) {
      if (isUSerLoggedIn === false) {
        Cookies.set("athpaslt", pathname);
        router.push("/auth");
        toggleExpandOff();
      } else {
        router.push("/profile/info");
      }
    }
  };

  // USE EFFECTS
  useEffect(() => {
    if (isPresent) {
      const enterAnimation = async () => {
        await animate(scope.current, { opacity: 0, y: -50 });
        await animate(
          scope.current,
          { opacity: 1, y: 0 },
          {
            type: "spring",
            stiffness: 120,
            damping: 3,
            mass: 0.4,
          }
        );
      };
      enterAnimation();
    } else {
      const exitAnimation = async () => {
        await animate(scope.current, { opacity: 0, y: -50 });
        safeToRemove();
      };
      exitAnimation();
    }
  }, [isPresent]);

  useEffect(() => {
    useStore.persist.rehydrate();
  }, []);

  return (
    <div
      ref={scope}
      className="opacity-0 absolute lg:py-8 top-5 z-[90] px-5 lg:px-20 flex items-center justify-between w-full"
    >
      {/* Logo  */}
      <Link href={"/"} className="w-[50px]">
        <Image
          src={
            "https://res.cloudinary.com/dgdoymhtj/image/upload/v1710975934/tytn/announcements/tytn_fprw4d.png"
          }
          alt="logo"
          width={40}
          height={40}
          priority
        />
      </Link>

      {/* Links  */}
      <div className="lg:flex items-center hidden justify-center gap-x-20 w-1/2">
        <Link
          href={"/"}
          className={`text-xs tracking-[0.2em] text-black uppercase ${
            pathname === "/"
              ? "text-princetonOrange font-semibold"
              : "duration-200 hover:text-semiGray"
          }`}
        >
          home
        </Link>
        <Link
          href={"/shop"}
          className={`text-xs tracking-[0.2em] text-black uppercase ${
            pathname === "/shop"
              ? "text-princetonOrange font-semibold"
              : "duration-200 hover:text-semiGray"
          }`}
        >
          shop
        </Link>
        <Link
          href={"/contact"}
          className={`text-xs tracking-[0.2em] text-black uppercase ${
            pathname === "/contact"
              ? "text-princetonOrange font-semibold"
              : "duration-200 hover:text-semiGray"
          }`}
        >
          contact
        </Link>
      </div>

      {/* right icons  */}
      <div
        className={`bg-black rounded-full transition-transform duration-300 h-[40px] flex relative items-center justify-center px-2 ${
          !iconExpand ? "gap-x-2" : ""
        }`}
      >
        {!iconExpand && (
          <div
            className="absolute z-50 inset-0 cursor-pointer"
            onClick={toggleExpandOn}
          />
        )}

        {/* SEARCH  */}
        <button
          className={`rounded-full flex items-center justify-center ${
            iconExpand ? "text-lg w-8 h-8" : "text-base"
          } text-white`}
          onClick={handleSearch}
        >
          <Tooltip text="Search">
            <GoSearch />
          </Tooltip>
        </button>

        {/* CART  */}
        <button
          className={`rounded-full relative flex items-center justify-center ${
            iconExpand ? "w-8 h-8 text-lg" : "text-base"
          } text-white`}
          onClick={handleCart}
        >
          {totalProducts > 0 && (
            <span
              className={`${
                iconExpand ? "w-3 h-3 text-[9px] left-5 top-1" : "w-2 h-2 -left-1 -top-1"
              } flex items-center justify-center duration-300 bg-princetonOrange rounded-full absolute`}
            >
              {iconExpand && totalProducts}
            </span>
          )}

          <Tooltip text="Cart">
            <HiOutlineShoppingBag />
          </Tooltip>
        </button>

        {iconExpand && (
          <>
            {/* SHOP  */}
            <button
              className={`rounded-full flex lg:hidden items-center justify-center w-8 h-8 text-lg text-white`}
              onClick={handleShop}
            >
              <Tooltip text="Shop">
                <LiaShoppingBasketSolid />
              </Tooltip>
            </button>

            {/* CONTACT  */}
            <button
              className={`rounded-full flex lg:hidden items-center justify-center w-8 h-8 text-lg text-white`}
              onClick={handleContact}
            >
              <Tooltip text="Contact">
                <MdOutlineContactSupport />
              </Tooltip>
            </button>

            {/* PROFILE  */}
            <button
              className={`rounded-full w-8 h-8 flex items-center justify-center text-lg text-white`}
              onClick={handleUser}
            >
              <Tooltip text={"profile"}>
                <span
                  className={`w-5 h-5 rounded-full ${
                    isUSerLoggedIn === true && "border border-wheelOrange"
                  } overflow-hidden block`}
                >
                  <Image
                    src={
                      userDetails?.profilePhoto
                        ? userDetails?.profilePhoto
                        : "https://res.cloudinary.com/dgdoymhtj/image/upload/v1710543935/e4ffe1cc-eb87-49ae-ac39-f114c706184c.png"
                    }
                    alt="dp"
                    width={1000}
                    height={1000}
                    priority
                  />
                </span>
              </Tooltip>
            </button>

            {/* TIMES  */}
            <button
              onClick={toggleExpandOff}
              className=" text-princetonOrange text-lg px-1 pt-2"
            >
              <Tooltip text="Close">
                <LiaTimesSolid />
              </Tooltip>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
