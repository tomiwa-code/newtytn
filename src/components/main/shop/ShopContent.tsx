"use client";
import * as React from "react";
import { BsCart2 } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { LiaTimesSolid } from "react-icons/lia";
import LeftFilterBar from "@/components/main/shop/LeftFilterBar";
import { useSearchParams } from "next/navigation";
import Product from "@/components/general/Product";

interface IShopContentProps {}

const ShopContent: React.FunctionComponent<IShopContentProps> = (props) => {
  // USE STATES
  const [activeFilter, setActiveFilter] = React.useState<{
    color: string;
    price: string;
    size: string;
  }>({
    color: "",
    size: "",
    price: "",
  });
  const [activeCat, setActiveCat] = React.useState<string>("");

  // DECLARES
  const searchParams = useSearchParams();
  const searchVal = searchParams.get("cat");
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
    {
      link: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1705877393/tytn/products/new2_yur5ty.jpg",
    },
    {
      link: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1705877392/tytn/products/new3_eckzzr.jpg",
    },
  ];

  // FUNCTIONS
  const handleActiveFilter = (props: string, type: string) => {
    switch (type) {
      case "color":
        setActiveFilter((prev) => ({ ...prev, color: props }));
        break;
      case "size":
        setActiveFilter((prev) => ({ ...prev, size: props }));
        break;
      case "price":
        setActiveFilter((prev) => ({ ...prev, price: props }));
        break;
      default:
        break;
    }
  };

  const handleRemoveActiveFilter = (type: string) => {
    switch (type) {
      case "color":
        setActiveFilter((prev) => ({ ...prev, color: "" }));
        break;
      case "size":
        setActiveFilter((prev) => ({ ...prev, size: "" }));
        break;
      case "price":
        setActiveFilter((prev) => ({ ...prev, price: "" }));
        break;
      default:
        break;
    }
  };

  const handleActiveCat = (props: string) => {
    setActiveCat(props);
  };

  const clearActiveFilter = () => {
    setActiveFilter({ price: "", color: "", size: "" });
    setActiveCat("");
  };

  const searchFilter = () => {};

  // USE EFFECTS
  React.useEffect(() => {
    if (searchVal) {
      setActiveCat(searchVal);
    }
  }, [searchVal]);

  return (
    <div className="w-full min-h-screen pb-20 md:px-10 px-5 lg:px-20 pt-32 flex">
      <div className="border-r border-gray-300 hidden lg:block w-[20%] fixed h-[600px] pb-10 overflow-auto">
        <LeftFilterBar
          handleActiveCat={handleActiveCat}
          handleActiveFilter={handleActiveFilter}
          activeFilterObj={activeFilter}
          searchFilter={searchFilter}
          clearActiveFilter={clearActiveFilter}
          activeCategory={activeCat}
          handleRemoveActiveFilter={handleRemoveActiveFilter}
        />
      </div>

      {/* Right  */}
      <div className="w-full lg:w-[80%] relative lg:left-[23%]">
        {/* Link Direction  */}
        <div className="flex gap-x-3 mb-10 items-center">
          <div className="flex gap-x-3 items-center">
            <p className="text-base opacity-90">
              <BsCart2 />
            </p>
            <p className="capitalize font-semibold text-gray-500 text-sm">
              shop page
            </p>
          </div>
          {activeCat && (
            <>
              <div className="flex gap-x-3 items-center">
                <p className="opacity-50 text-sm">
                  <IoIosArrowForward />
                </p>
                <p className="capitalize font-medium text-gray-400 text-sm">
                  category
                </p>
                <p className="opacity-50 text-sm">
                  <IoIosArrowForward />
                </p>
              </div>

              <div className="flex gap-x-3 items-center">
                <p className="capitalize font-medium text-gray-400 text-sm">
                  {activeCat}
                </p>
              </div>
            </>
          )}
        </div>

        {/* Title and sort  */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-base md:text-3xl text-wheelOrange capitalize font-bold">
            {!activeCat ? "all products" : activeCat}
          </p>

          <div className="relative w-[300px]">
            <input
              type="text"
              placeholder="sort by most popular"
              className="capitalize text-sm w-full rounded-md bg-gray-200 text-black px-5 py-4"
            />

            <p></p>
          </div>
        </div>

        {/* Filters active */}
        <div className="flex gap-x-5 mb-8">
          {activeFilter.color && (
            <div
              className="relative flex gap-x-3 items-center justify-center bg-gray-200 rounded-md py-3 px-6"
              onClick={() => handleRemoveActiveFilter("color")}
            >
              <p className="capitalize text-sm text-gray-500">
                {activeFilter.color}
              </p>
              <p className="text-sm text-gray-500 cursor-pointer">
                <LiaTimesSolid />
              </p>
            </div>
          )}

          {activeFilter.size && (
            <div
              className="relative flex gap-x-3 items-center justify-center bg-gray-200 rounded-md py-3 px-6"
              onClick={() => handleRemoveActiveFilter("size")}
            >
              <p className="capitalize text-sm text-gray-500">
                {activeFilter.size}
              </p>
              <p className="text-sm text-gray-500 cursor-pointer">
                <LiaTimesSolid />
              </p>
            </div>
          )}

          {activeFilter.price && (
            <div
              className="relative flex gap-x-3 items-center justify-center bg-gray-200 rounded-md py-3 px-6"
              onClick={() => handleRemoveActiveFilter("price")}
            >
              <p className="capitalize text-sm text-gray-500">
                {activeFilter.price}
              </p>
              <p className="text-sm text-gray-500 cursor-pointer">
                <LiaTimesSolid />
              </p>
            </div>
          )}
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 flex-wrap gap-y-12">
          {products.map(({ link }, index) => (
            <Product key={index} link={link} text={null} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopContent;
