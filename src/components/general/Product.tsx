import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsHeart } from "react-icons/bs";

interface IProductProps {
  link: string;
  text: string | null;
}

const Product: React.FC<IProductProps> = ({ link, text }) => {
  return (
    <div className="w-[200px] relative rounded-md overflow-hidden">
      {text && (
        <div className="absolute rounded bg-princetonOrange p-1 text-xs text-semiWhite capitalize top-0 right-0">
          {text}
        </div>
      )}

      <div className="w-full h-[230px] overflow-hidden">
        <Link href={`/shop_product/productname`}>
          <Image src={link} alt="fimg" width={1000} height={1000} priority />
        </Link>
      </div>
      <div className="flex justify-between pt-5">
        <div>
          <p className="text-base text-semiGray capitalize">
            sweet sweatshirt{" "}
          </p>
          <p className="text-black text-lg">$215</p>
        </div>
        <div className="text-base cursor-pointer">
          <BsHeart />
        </div>
      </div>
    </div>
  );
};

export default Product;
