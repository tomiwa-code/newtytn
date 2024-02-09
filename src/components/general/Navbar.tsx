"use client";
import Image from "next/image";
import Logo from "public/tytn.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { LuUser2 } from "react-icons/lu";
import { GoSearch } from "react-icons/go";
import { LiaTimesSolid } from "react-icons/lia";
import { useEffect, useState } from "react";
import Tooltip from "./Tooltip";
import { useAnimate, usePresence } from "framer-motion";

const Navbar = () => {
  const [iconExpand, setIconExpand] = useState(false);
  const pathname = usePathname();
  const [isPresent, safeToRemove] = usePresence();
  const [scope, animate] = useAnimate();

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
            mass: 0.4

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
      console.log("cart");
    }
  };

  const handleUser = () => {
    if (iconExpand) {
      console.log("user");
    }
  };

  return (
    <div ref={scope} className="opacity-0 absolute py-8 top-5 z-[90] px-20 flex items-center justify-between w-full">
      {/* Logo  */}
      <Link href={"#"} className="w-[50px]">
        <Image src={Logo} alt="logo" width={40} height={40} priority />
      </Link>

      {/* Links  */}
      <div className="flex items-center justify-center gap-x-20 w-1/2">
        <Link
          href={"#"}
          className={`text-xs tracking-[0.2em] text-black uppercase ${
            pathname === "/"
              ? "text-princetonOrange font-semibold"
              : "duration-200 hover:text-semiGray"
          }`}
        >
          home
        </Link>
        <Link
          href={"#"}
          className={`text-xs tracking-[0.2em] text-black uppercase ${
            pathname === "/shop"
              ? "text-princetonOrange font-semibold"
              : "duration-200 hover:text-semiGray"
          }`}
        >
          shop
        </Link>
        <Link
          href={"#"}
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
            <Tooltip text="Search">
              <GoSearch />
            </Tooltip>
          </button>

          <button
            className={`rounded-full w-8 h-8 flex items-center justify-center absolute ${
              iconExpand ? "left-9 text-lg" : "left-5 text-base"
            } text-white`}
            onClick={handleCart}
          >
            <Tooltip text="Cart">
              <HiOutlineShoppingBag />
            </Tooltip>
          </button>

          {iconExpand && (
            <button
              className={`rounded-full w-8 h-8 flex items-center justify-center absolute left-16 text-lg text-white`}
              onClick={handleUser}
            >
              <Tooltip text="Profile">
                <LuUser2 />
              </Tooltip>
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
