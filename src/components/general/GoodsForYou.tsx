import Image from "next/image";
import Link from "next/link";
import * as React from "react";

interface IGoodsForYouProps {}

const GoodsForYou: React.FunctionComponent<IGoodsForYouProps> = (props) => {
  const productsArr = [
    {
      id: 1,
      title: "hero short",
      imgUrl:
        "https://res.cloudinary.com/dgdoymhtj/image/upload/v1708006604/tytn/announcements/24f3e3a8-24ea-49f3-bd69-8234ef44d91a_qwus6q.jpg",
      price: 3000,
    },
    {
      id: 2,
      title: "hero polo",
      imgUrl:
        "https://res.cloudinary.com/dgdoymhtj/image/upload/v1708006605/tytn/announcements/e72c6bff-7b7a-4d88-97cb-557c3cb18870_jrpi5u.jpg",
      price: 5000,
    },
    {
      id: 3,
      title: "suave sweatshirt",
      imgUrl:
        "https://res.cloudinary.com/dgdoymhtj/image/upload/v1708006605/tytn/announcements/Fall___Winter_2020_Uniform_II_clukd1.jpg",
      price: 4500,
    },
    {
      id: 4,
      title: "essential t-shirt",
      imgUrl:
        "https://res.cloudinary.com/dgdoymhtj/image/upload/v1708006605/tytn/announcements/Feature_Braque_Tee_mpoyrl.jpg",
      price: 4800,
    },
  ];
  return (
    <div className="px-20 py-12">
      <div className="relative flex items-center h-[100px]">
        <p className="absolute z-10 opacity-[0.04] text-8xl uppercase font-extrabold top-0">
          Goods
        </p>
        <p className="text-3xl relative z-20">
          Goods <span className="font-semibold">for you</span>
        </p>
      </div>

      <div className="flex gap-x-10 py-10 px-20 w-full z-20 relative">
        {productsArr.map(({ id, imgUrl, price, title }) => (
          <Link
            href={"#"}
            className="rounded-md overflow-hidden h-[330px] relative w-[250px] bg-white text-center"
            key={id}
          >
            <p className="absolute text-white text-sm top-6 bg-black bg-opacity-10 px-5 py-2 rounded-md capitalize w-full text-center">
              {title}
            </p>
            <div className="w-full h-[250px] overflow-hidden">
              <Image
                src={imgUrl}
                alt="product"
                priority
                width={1000}
                height={1000}
              />
            </div>
            <button className="bg-wheelOrange text-white capitalize px-5 py-3 rounded-full text-sm mt-5 mx-auto">
              NGN {price}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GoodsForYou;
