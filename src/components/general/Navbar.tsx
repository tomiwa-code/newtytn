"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { LuUser2 } from "react-icons/lu";
import { GoSearch } from "react-icons/go";
import { LiaTimesSolid } from "react-icons/lia";
import { useContext, useEffect, useState } from "react";
import Tooltip from "./Tooltip";
import { useAnimate, usePresence } from "framer-motion";
import { UserLoggedInContext } from "@/context/IsLoggedIn.context";
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
    }
  };

  const handleCart = () => {
    if (iconExpand) {
      router.push("/cart");
    }
  };

  const handleUser = () => {
    if (iconExpand) {
      if (isUSerLoggedIn === false) {
        Cookies.set("athpaslt", pathname);
        router.push("/auth");
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
      className="opacity-0 absolute py-8 top-5 z-[90] px-20 flex items-center justify-between w-full"
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
      <div className="flex items-center justify-center gap-x-20 w-1/2">
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
        className={`bg-black rounded-full duration-200 flex relative items-center cursor-pointer ${
          iconExpand ? "w-[130px] h-[40px]" : "w-[55px] h-[40px]"
        }`}
      >
        <div onClick={toggleExpandOn} className="absolute top-1">
          <button
            className={`rounded-full w-8 h-8 flex items-center justify-center absolute ${
              iconExpand ? "left-2 text-lg" : "left-0 text-base"
            } text-white`}
            onClick={handleSearch}
          >
            {iconExpand ? (
              <Tooltip text="Search">
                <GoSearch />
              </Tooltip>
            ) : (
              <GoSearch />
            )}
          </button>

          <button
            className={`rounded-full w-8 h-8 flex items-center justify-center absolute ${
              iconExpand ? "left-9 text-lg" : "left-5 text-base"
            } text-white`}
            onClick={handleCart}
          >
            {totalProducts > 0 && (
              <span
                className={`${
                  iconExpand ? "w-3 h-3 text-[9px]" : "w-2 h-2"
                } flex items-center justify-center duration-300 bg-princetonOrange rounded-full absolute left-5 top-1`}
              >
                {iconExpand && totalProducts}
              </span>
            )}
            {iconExpand ? (
              <Tooltip text="Cart">
                <HiOutlineShoppingBag />
              </Tooltip>
            ) : (
              <HiOutlineShoppingBag />
            )}
          </button>

          {iconExpand && (
            <button
              className={`rounded-full w-8 h-8 flex items-center justify-center absolute left-16 text-lg text-white`}
              onClick={handleUser}
            >
              {isUSerLoggedIn === true && (
                <span className="w-2 h-2 bg-wheelOrange rounded-full absolute left-5 top-1"></span>
              )}
              {iconExpand ? (
                <Tooltip text="Profile">
                  <LuUser2 />
                </Tooltip>
              ) : (
                <LuUser2 />
              )}
            </button>
          )}
        </div>
        {iconExpand && (
          <button
            onClick={toggleExpandOff}
            className="absolute text-princetonOrange text-base right-3 top-3"
          >
            <Tooltip text="Close">
              <LiaTimesSolid />
            </Tooltip>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
