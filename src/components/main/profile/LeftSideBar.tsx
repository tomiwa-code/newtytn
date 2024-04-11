"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import * as React from "react";
import { BsHeart } from "react-icons/bs";
import { LuUser2 } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { RiLogoutCircleLine } from "react-icons/ri";
import { useStore } from "@/utils/zustand.store";
import Cookies from "js-cookie";

interface ILeftSideBarProps {}

const LeftSideBar: React.FunctionComponent<ILeftSideBarProps> = (props) => {
  // DECLARES
  const router = useRouter();
  const pathname = usePathname();
  const otherPaths = pathname.split("/")[2];
  const logoutUser = useStore((state) => state.logout);
  const linkArr = [
    {
      name: "orders",
      url: "/profile/orders",
      icon: <FiShoppingBag />,
    },
    {
      name: "favorites",
      url: "/profile/favorites",
      icon: <BsHeart />,
    },
    {
      name: "setting",
      url: "/profile/setting",
      icon: <IoSettingsOutline />,
    },
  ];

  //   FUNCTIONS
  const handleLogout = () => {
    Cookies.remove("_Ga_TTYDI");
    Cookies.remove("_inEdGGolIs");
    logoutUser();
    router.refresh();
  };

  return (
    <div className="w-[20%] min-h-[650px] fixed left-0 pt-8 border-r border-gray-300 flex flex-col gap-y-5">
      <p className="capitalize text-center font-semibold text-xl text-gray-600">
        user profile
      </p>

      <Link
        href={"/profile"}
        className={`w-full py-4 flex items-center justify-left pl-20 gap-x-3 ${
          pathname === "/profile" || otherPaths === "info"
            ? "text-black border-r-4 border-wheelOrange"
            : "text-gray-500"
        }`}
      >
        <span className="text-2xl">
          <LuUser2 />
        </span>
        <p className="capitalize">user info</p>
      </Link>

      {linkArr.map(({ url, name, icon }, index) => (
        <Link
          href={url}
          className={`w-full py-4 flex items-center justify-left pl-20 gap-x-3 ${
            otherPaths === name
              ? "text-black border-r-4 border-wheelOrange"
              : "text-gray-500"
          }`}
          key={index}
        >
          <span className="text-2xl">{icon}</span>
          <p className="capitalize">{name}</p>
        </Link>
      ))}

      <button
        className="absolute bottom-10 left-0 right-0 text-center flex items-center justify-left pl-20 font-semibold gap-x-3 text-red-500"
        onClick={handleLogout}
      >
        <RiLogoutCircleLine />
        <span>Log out</span>
      </button>
    </div>
  );
};

export default LeftSideBar;
