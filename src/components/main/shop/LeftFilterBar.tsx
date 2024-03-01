"use client";
import * as React from "react";
import { BiCheck, BiTrash } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";

interface ILeftFilterBarProps {
  handleActiveCat: (props: string) => void;
  handleRemoveActiveFilter: (type: string) => void;
  handleActiveFilter: (props: string, type: string) => void;
  clearActiveFilter: () => void;
  activeFilterObj: { color: string; size: string; price: string };
  searchFilter: () => void;
  activeCategory: string;
}

const LeftFilterBar: React.FunctionComponent<ILeftFilterBarProps> = ({
  handleActiveCat,
  handleActiveFilter,
  handleRemoveActiveFilter,
  clearActiveFilter,
  activeFilterObj,
  searchFilter,
  activeCategory,
}) => {
  // USE STATES
  const [catArr, setCatArr] = React.useState<string[]>([
    "t-shirt",
    "sweatshirt",
    "joggers",
    "short",
  ]);
  const [colorArr, setColorArr] = React.useState<string[]>([
    "black",
    "white",
    "purple",
    "pink",
  ]);
  const [sizeArr, setSizeArr] = React.useState<string[]>([
    "medium",
    "large",
    "extra large",
    "extra 2(x) large",
  ]);
  const [activeCat, setActiveCat] = React.useState<string>("");
  const [activeColor, setActiveColor] = React.useState<string>("");
  const [activeSize, setActiveSize] = React.useState<string>("");
  const [activePrice, setActivePrice] = React.useState<string>("");
  const [showColor, setShowColor] = React.useState<boolean>(false);
  const [showSize, setShowSize] = React.useState<boolean>(false);
  const [showPrice, setShowPrice] = React.useState<boolean>(false);
  const [priceRange, setPriceRange] = React.useState<{
    min: number;
    max: number;
  }>({ min: 0, max: 0 });

  //   DECLARES
  const priceArr = ["below 10,000", "above 10,000"];

  //   FUNCTIONS
  const handleCategory = (props: string) => {
    setActiveCat(props);
    handleActiveCat(props);
  };

  const handleColor = (color: string) => {
    setActiveColor(color);
    handleActiveFilter(color, "color");
  };

  const handleSize = (size: string) => {
    setActiveSize(size);
    handleActiveFilter(size, "size");
  };

  const handlePrice = (price: string) => {
    setActivePrice(price);
    handleActiveFilter(price, "price");
    setPriceRange({ min: 0, max: 0 });
  };

  const handleToggleColor = () => {
    setShowColor((prev) => !prev);
  };

  const handleToggleSize = () => {
    setShowSize((prev) => !prev);
  };

  const handleTogglePrice = () => {
    setShowPrice((prev) => !prev);
  };

  const handlePiceVal = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    const changeToNumber = Number(e.target.value);
    switch (type) {
      case "min":
        setPriceRange((prev) => ({ ...prev, min: changeToNumber }));
        break;
      case "min":
        setPriceRange((prev) => ({ ...prev, max: changeToNumber }));
        break;
      default:
        break;
    }
  };

  const handleDelete = () => {
    setActiveCat("");
    setActiveColor("");
    setActivePrice("");
    setActiveSize("");
    setPriceRange({ min: 0, max: 0 });
    clearActiveFilter();
  };

  //   USE EFFECTS
  React.useEffect(() => {
    if (priceRange.min > 0 || priceRange.max > 0) {
      const findPrice = activeFilterObj.price === activePrice;
      if (
        (findPrice && priceRange.min > 0) ||
        (findPrice && priceRange.max > 0)
      ) {
        handleRemoveActiveFilter("price");
      }
      setActivePrice("");
    }
  }, [priceRange]);

  React.useEffect(() => {
    if (activeFilterObj) {
      const findColor = activeFilterObj.color === activeColor;
      const findSize = activeFilterObj.size === activeSize;
      const findPrice = activeFilterObj.price === activePrice;

      if (!findColor) {
        setActiveColor("");
      }
      if (!findSize) {
        setActiveSize("");
      }
      if (!findPrice) {
        setActivePrice("");
      }
    }
  }, [activeFilterObj]);

  React.useEffect(() => {
    if (activeCategory) {
      setActiveCat(activeCategory);
    }
  }, [activeCategory]);

  return (
    <div className="pr-5 space-y-5">
      {/* Category */}
      <div>
        <p className="text-base font-bold capitalize">category</p>
        <div className="pl-6 pb-5 space-y-5 mt-5 duration-300 border-b border-b-gray-300">
          {catArr.map((items, index) => (
            <div
              key={index}
              className="cursor-pointer"
              onClick={() => handleCategory(items)}
            >
              <p
                className={`capitalize ${
                  items === activeCat
                    ? "text-wheelOrange font-semibold"
                    : "text-gray-600"
                } text-sm`}
              >
                {items}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="">
        <p className="text-base font-bold">Filter by :</p>
        <>
          {/* Colors */}
          <div className="pl-6">
            <div
              className="mt-5 relative flex justify-between items-center cursor-pointer"
              onClick={handleToggleColor}
            >
              <p className="text-sm font-bold capitalize">color</p>
              <p
                className={`${
                  showColor ? "rotate-180" : "rotate-0"
                } duration-300`}
              >
                <IoIosArrowDown />
              </p>
            </div>

            {showColor && (
              <div className="mt-3 space-y-3">
                {colorArr.map((items, index) => (
                  <div
                    className="flex items-center gap-x-2"
                    key={index}
                    onClick={() => handleColor(items)}
                  >
                    <div
                      className={`w-4 h-4 rounded cursor-pointer relative ${
                        activeColor === items
                          ? "bg-wheelOrange"
                          : "border border-gray-300"
                      }`}
                    >
                      {activeColor === items && (
                        <p className="text-sm text-white">
                          <BiCheck />
                        </p>
                      )}
                    </div>
                    <p className="capitalize text-sm text-gray-600">{items}</p>
                    <div
                      className="w-7 h-2 rounded"
                      style={{ background: items }}
                    ></div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sizes  */}
          <div className="pl-6">
            <div
              className="mt-5 relative flex justify-between items-center cursor-pointer"
              onClick={handleToggleSize}
            >
              <p className="text-sm font-bold capitalize">size</p>
              <p
                className={`${
                  showSize ? "rotate-180" : "rotate-0"
                } duration-300`}
              >
                <IoIosArrowDown />
              </p>
            </div>

            {showSize && (
              <div className="mt-3 space-y-3">
                {sizeArr.map((items, index) => (
                  <div
                    className="flex items-center gap-x-2"
                    key={index}
                    onClick={() => handleSize(items)}
                  >
                    <div
                      className={`w-4 h-4 rounded cursor-pointer relative ${
                        activeSize === items
                          ? "bg-wheelOrange"
                          : "border border-gray-300"
                      }`}
                    >
                      {activeSize === items && (
                        <p className="text-sm text-white">
                          <BiCheck />
                        </p>
                      )}
                    </div>
                    <p className="capitalize text-sm text-gray-600">{items}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Prices  */}
          <div className="border-b border-b-gray-300 pl-6 pb-5">
            <div
              className="mt-5 relative flex justify-between items-center cursor-pointer"
              onClick={handleTogglePrice}
            >
              <p className="text-sm font-bold capitalize">price</p>
              <p
                className={`${
                  showPrice ? "rotate-180" : "rotate-0"
                } duration-300`}
              >
                <IoIosArrowDown />
              </p>
            </div>

            {showPrice && (
              <div className="mt-3 space-y-3">
                {priceArr.map((items, index) => (
                  <div
                    className="flex items-center gap-x-2"
                    key={index}
                    onClick={() => handlePrice(items)}
                  >
                    <div
                      className={`w-4 h-4 rounded cursor-pointer relative ${
                        activePrice === items
                          ? "bg-wheelOrange"
                          : "border border-gray-300"
                      }`}
                    >
                      {activePrice === items && (
                        <p className="text-sm text-white">
                          <BiCheck />
                        </p>
                      )}
                    </div>
                    <p className="capitalize text-sm text-gray-600">{items}</p>
                  </div>
                ))}
                <div className="flex items-center justify-between w-full">
                  <div className="space-y-1">
                    <p className="text-sm">min</p>
                    <input
                      type="number"
                      value={priceRange.min}
                      onChange={(e) => handlePiceVal(e, "min")}
                      placeholder="5000"
                      className="w-[80px] px-3 py-2 rounded bg-gray-200 text-black focus:outline-none text-sm"
                    />
                  </div>
                  <p className="text-xl mt-6">-</p>
                  <div className="space-y-1">
                    <p className="text-sm">max</p>
                    <input
                      type="number"
                      value={priceRange.max}
                      placeholder="15000"
                      className="w-[80px] px-3 py-2 rounded bg-gray-200 text-black focus:outline-none text-sm"
                      onChange={(e) => handlePiceVal(e, "max")}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Apply or Delete  */}
          <div className="flex items-center gap-x-6 mt-5">
            <button
              className="px-10 py-3 rounded-md bg-princetonOrange text-semiWhite capitalize"
              onClick={searchFilter}
            >
              apply
            </button>
            <button
              className="py-3 px-5 rounded-md text-xl bg-gray-200 text-gray-600"
              onClick={handleDelete}
            >
              <BiTrash />
            </button>
          </div>
        </>
      </div>
    </div>
  );
};

export default LeftFilterBar;
