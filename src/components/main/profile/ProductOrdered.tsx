import Image from "next/image";
import * as React from "react";

interface IProductOrderedProps {
  status: string;
}

const ProductOrdered: React.FunctionComponent<IProductOrderedProps> = ({
  status,
}) => {
  return (
    <div className="grid grid-cols-5 items-center gap-x-6">
      <div className="w-24 h-24 overflow-hidden rounded-lg">
        <Image
          src={
            "https://res.cloudinary.com/dgdoymhtj/image/upload/v1708006605/tytn/announcements/e72c6bff-7b7a-4d88-97cb-557c3cb18870_jrpi5u.jpg"
          }
          alt="product img"
          width={1000}
          height={1000}
          priority
        />
      </div>

      <div className="space-y-1">
        <p className="capitalize text-md font-medium">tytn made sweatshirt</p>
        <p className="capitalize text-xs text-gray-500">Ref: 43h4b12121ib</p>
      </div>

      <div className="gap-y-1.5 flex flex-col justify-center">
        <p className="capitalize text-md text-gray-500 text-center">
          {/* {color} */}
          purple
        </p>
        <p className="capitalize text-sm text-gray-500 text-center">
          {/* {size === "l"
        ? "large"
        : size === "m"
        ? "medium"
        : size === "xl"
        ? "extra large"
        : "extra(2x) large"} */}
          large
        </p>
      </div>

      <p className="capitalize text-md text-black">
        {/* {total_price.toFixed(2)} */}
        4500.00 NGN
      </p>

      <div className="flex items-center gap-x-3 capitalize text-md">
        <p>status</p>
        <p
          className={`${
            status === "canceled"
              ? "text-red-400"
              : status === "delivered"
              ? "text-green-400"
              : "text-orange-400"
          }`}
        >
          {status}
        </p>
      </div>
    </div>
  );
};

export default ProductOrdered;
