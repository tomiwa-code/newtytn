"use client";
import * as React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BsCart2 } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { GrSecure } from "react-icons/gr";
import { TbTruckReturn } from "react-icons/tb";
import GoodsForYou from "@/components/general/GoodsForYou";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { UserLoggedInContext } from "@/context/IsLoggedIn.context";

interface ISoloProductProps {}

const SoloProduct: React.FunctionComponent<ISoloProductProps> = (props) => {
  // USE STATES
  const [quantity, setQuantity] = React.useState<number>(1);
  const [clothProp, setClothProp] = React.useState<{
    color: string;
    size: string;
  }>({
    color: "",
    size: "string",
  });
  const [initialPrice, setInitialPrice] = React.useState<number>(4500);
  const [productImages, setProductImages] = React.useState<
    { id: string; imageUrl: string }[]
  >([
    {
      id: "ad1",
      imageUrl:
        "https://res.cloudinary.com/dgdoymhtj/image/upload/v1708006604/tytn/announcements/ee561c3b-1610-4fc5-b3e6-fb736ca40f90_orm8dg.jpg",
    },
    {
      id: "ad3",
      imageUrl:
        "https://res.cloudinary.com/dgdoymhtj/image/upload/v1708006604/tytn/announcements/24f3e3a8-24ea-49f3-bd69-8234ef44d91a_qwus6q.jpg",
    },
    {
      id: "sa3",
      imageUrl:
        "https://res.cloudinary.com/dgdoymhtj/image/upload/v1708006604/tytn/announcements/Fall___Winter_2020_Uniform_II_1_ome1c9.jpg",
    },
  ]);
  const [activeImg, setActiveImg] = React.useState<{
    id: string;
    imageUrl: string;
  }>(productImages[0]);

  // DECLARES
  const sizeArr = ["m", "l", "xl"];
  const colorArr = ["purple", "green", "pink", "blue "];
  const getCurrentUrl = usePathname();
  const router = useRouter();
  const { isUSerLoggedIn } = React.useContext(UserLoggedInContext);

  // FUNCTIONS
  const handleQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    const quan = Number(e.target.value);
    setQuantity(quan);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleColor = (color: string) => {
    setClothProp((prev) => ({ ...prev, color }));
  };

  const handleSize = (size: string) => {
    setClothProp((prev) => ({ ...prev, size }));
  };

  const handleImageChange = (id: string, imageUrl: string) => {
    setActiveImg({ id, imageUrl });
  };

  const handleBuyNow = () => {
    // check if user is logged in
    if (isUSerLoggedIn === true) {
      console.log("user is logged in");
    } else {
      if (getCurrentUrl) {
        Cookies.set("athpaslt", getCurrentUrl);
        router.push("/auth");
      }
    }
  };

  return (
    <div className="bg-semiWhite">
      <div className="w-full min-h-screen bg-semiWhite pb-20 px-20 pt-24 flex">
        {/* Left  */}
        <div className="w-1/2 py-10 px-20 space-y-10">
          <div className="w-[400px] h-[400px] rounded-lg overflow-hidden">
            <Image
              src={activeImg.imageUrl}
              alt="product"
              priority
              width={1000}
              height={1000}
            />
          </div>

          <div className="flex gap-x-10 items-center justify-center">
            {productImages.map(({ id, imageUrl }) => (
              <>
                {id !== activeImg.id && (
                  <div
                    className="w-[150px] rounded-md h-[150px] bg-semiWhite overflow-hidden cursor-pointer"
                    onClick={() => handleImageChange(id, imageUrl)}
                    key={id}
                  >
                    <Image
                      src={imageUrl}
                      alt="other product"
                      priority
                      width={1000}
                      height={1000}
                    />
                  </div>
                )}
              </>
            ))}
          </div>
        </div>

        {/* Right  */}
        <div className="w-1/2 py-10 px-20 space-y-5 relative">
          <p className="text-sm font-semibold text-darkOrange capitalize">
            100% clothing t-shirt
          </p>
          <p className="font-semibold capitalize text-5xl">Peng t-shirt</p>
          <div className="absolute w-[270px] top-14 whitespace-nowrap overflow-hidden opacity-[0.04] font-bold capitalize text-center text-[100px]">
            peng t-shirt
          </div>
          <p className="text-xs capitalize font-medium relative z-10">
            product id: 23h8qwzua
          </p>

          {/* sizes  */}
          <div className="flex gap-x-5 relative z-10">
            {sizeArr.map((items, index) => (
              <div className="space-y-2 cursor-pointer" key={index}>
                <div
                  className={`rounded-md text-center w-[50px] p-2 hover:border-none hover:bg-black hover:text-semiWhite duration-300  border border-gray-400 ${
                    clothProp.size === items.toLowerCase() &&
                    "bg-black text-semiWhite"
                  }`}
                  onClick={() => handleSize(items)}
                >
                  <p className="uppercase">{items}</p>
                </div>
                <p className="text-xs font-semibold capitalize">
                  {items.toLowerCase() === "m"
                    ? "medium"
                    : items.toLowerCase() === "l"
                    ? "large"
                    : items.toLowerCase() === "xl" && "extra large"}
                </p>
              </div>
            ))}
          </div>

          {/* colors  */}
          <div className="flex gap-x-5">
            {colorArr.map((items, index) => (
              <div className="space-y-2 cursor-pointer" key={index}>
                <div
                  className={`rounded-full w-[80px] p-2 border hover:border-none hover:bg-white duration-300 border-gray-400 ${
                    clothProp.color === items.toLowerCase() &&
                    "bg-white border-none"
                  }`}
                  onClick={() => handleColor(items)}
                >
                  <div
                    style={{ backgroundColor: items }}
                    className={`rounded-full h-[2px] w-full`}
                  ></div>
                </div>
                <p
                  style={{ color: items }}
                  className={`text-xs font-semibold capitalize`}
                >
                  {items}
                </p>
              </div>
            ))}
          </div>

          {/* quantity  */}
          <div className="flex gap-x-10 items-center">
            <p className="text-sm font-semibold capitalize">quantity:</p>
            <div className="flex gap-x-5">
              <button
                onClick={handleDecrement}
                className="w-[50px] hover:border-none hover:bg-black hover:text-semiWhite duration-300 rounded-md text-center py-1 border border-gray-500 text-2xl"
              >
                -
              </button>

              <input
                value={quantity}
                type="number"
                onChange={(e) => handleQuantity(e)}
                className="appearance-none focus:outline-none w-[50px] rounded-md text-center py-1 bg-white text-lg flex items-center justify-center"
              />

              <button
                onClick={handleIncrement}
                className="w-[50px] hover:border-none hover:bg-black hover:text-semiWhite duration-300 rounded-md text-center py-1 border border-gray-500 text-2xl"
              >
                +
              </button>
            </div>
          </div>

          {/* price  */}
          <div className="flex gap-x-10 items-center">
            <p className="text-3xl font-bold capitalize">
              <span className="font-sans">NGN</span>{" "}
              {quantity > 0 ? initialPrice * quantity : initialPrice}.00
            </p>
            <p className="text-xs  font-semibold text-darkOrange capitalize">
              best deal price
            </p>
          </div>

          {/* buy or add  */}
          <div className="flex gap-x-8">
            <button className="w-[130px] hover:bg-black hover:text-semiWhite duration-300 rounded-md py-3 flex gap-x-2 items-center justify-center text-sm bg-wheelOrange text-semiWhite text-center capitalize">
              <BsCart2 />
              <p>add to cart</p>
            </button>
            <button
              className="w-[130px] hover:bg-black hover:border-none hover:text-semiWhite duration-300 rounded-md py-3 flex gap-x-2 items-center justify-center text-sm border border-gray-400 text-center capitalize"
              onClick={handleBuyNow}
            >
              <HiOutlineShoppingBag />
              <p>buy now</p>
            </button>
          </div>

          {/* Benefits  */}
          <div className="flex gap-x-6">
            <div className="gap-y-2 flex-col flex items-center justify-center">
              <div className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center">
                <FaShippingFast />
              </div>
              <p className="capitalize font-medium italic text-xs">
                fast delivery
              </p>
            </div>
            <div className="gap-y-2 flex-col flex items-center justify-center">
              <div className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center">
                <GrSecure />
              </div>
              <p className="capitalize font-medium text-xs">secure payment</p>
            </div>
            <div className="gap-y-2 flex-col flex items-center justify-center">
              <div className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center">
                <TbTruckReturn />
              </div>
              <p className="capitalize font-medium text-xs">return of goods</p>
            </div>
          </div>
        </div>
      </div>

      {/* Goods for you  */}
      <GoodsForYou />
    </div>
  );
};

export default SoloProduct;
