"use client";
import GoBack from "@/components/general/GoBack";
import { successNotify } from "@/utils/toaster";
import { ProductProps } from "@/utils/types";
import { useStore } from "@/utils/zustand.store";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

interface ICartProps {}

const Cart: React.FunctionComponent<ICartProps> = (props) => {
  // DECLARES
  const cartItems = useStore((state) => state.products);
  const clearCart = useStore((state) => state.clearCart);
  const deleteProductFromCart = useStore((state) => state.deleteProduct);
  const totalPrice = React.useMemo(() => {
    return cartItems.reduce(
      (accumulator, currentItem) => accumulator + currentItem.total_price,
      0
    );
  }, [cartItems]);

  // FUNCTIONS
  const handleClearCart = () => {
    clearCart();
    successNotify("Cart has been cleaned");
  };

  const handleDeleteProduct = ({ id, color, size }: ProductProps) => {
    const products = cartItems.filter(
      (item) => !(item.id === id && item.color === color && item.size === size)
    );
    deleteProductFromCart(products);
    successNotify("item deleted successfully");
  };

  return (
    <div className="w-full min-h-screen bg-semiWhite pt-28 px-20">
      <div className="relative">
        <div className="absolute">
          <GoBack />
        </div>
        <p className="text-xl capitalize text-gray-500 w-full text-center">
          your shopping Cart{" "}
        </p>
        {cartItems.length !== 0 && (
          <div className="absolute right-20 top-0 font-semibold">
            <button className="text-red-500" onClick={handleClearCart}>
              clear cart
            </button>
          </div>
        )}
      </div>

      {cartItems.length === 0 ? (
        <div className="w-full h-[600px] flex flex-col items-center justify-center">
          <div className="w-56 h-56 overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dgdoymhtj/image/upload/v1710961534/tytn/announcements/emptyCart_II-removebg-preview_pdwcgu.png"
              alt="empty cart"
              width={1000}
              height={1000}
              priority
            />
          </div>
          <p className="text-base text-gray-400">
            Your bag is currently empty.
          </p>
          <Link
            href={"/shop"}
            className="rounded-full px-6 py-3 bg-wheelOrange text-white mt-5"
          >
            Go to Shop
          </Link>
        </div>
      ) : (
        <div className="relative flex justify-between mt-10">
          <div className="flex flex-col gap-y-6 gap-x-20 w-[65%]">
            {cartItems.map(
              ({ id, total_price, name, color, size, quantity }, index) => (
                <div className="flex justify-between items-center" key={index}>
                  <div className="flex justify-between items-center w-[95%] py-3 px-5 bg-gray-200">
                    <div className="w-[80px] h-[80px] overflow-hidden rounded-full bg-white">
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
                      <p className="capitalize text-md font-medium">{name}</p>
                      <p className="capitalize text-xs text-gray-500">
                        Ref: 43h4b12121ib
                      </p>
                    </div>

                    <div className="gap-y-1.5 flex flex-col justify-center">
                      <p className="capitalize text-md text-gray-500 text-center">
                        {color}
                      </p>
                      <p className="capitalize text-sm text-gray-500 text-center">
                        {size === "l"
                          ? "large"
                          : size === "m"
                          ? "medium"
                          : size === "xl"
                          ? "extra large"
                          : "extra(2x) large"}
                      </p>
                    </div>

                    <div className="flex items-center gap-x-3">
                      <p className="capitalize text-sm text-gray-500">
                        {quantity}
                      </p>
                      <div className="gap-y-1.5 flex flex-col">
                        <button className="rounded-full bg-gray-600 flex items-center justify-center text-semiWhite  w-[25px] h-[25px]">
                          -
                        </button>
                        <button className="rounded-full bg-gray-600 flex items-center justify-center text-semiWhite  w-[25px] h-[25px]">
                          +
                        </button>
                      </div>
                    </div>

                    <p className="capitalize text-md text-gray-500">
                      {" "}
                      {total_price.toFixed(2)} NGN
                    </p>
                  </div>
                  <button
                    className=""
                    onClick={() => handleDeleteProduct({ id, color, size })}
                  >
                    x
                  </button>
                </div>
              )
            )}

            <div className="w-full text-right">
              <p className="font-semibold text-xl text-gray-600">
                Total Price: {totalPrice} NGN
              </p>
            </div>
          </div>

          <div className="fixed w-[25%] h-[550px] rounded-lg z-[90] bg-black bg-opacity-90 right-20 overflow-auto"></div>
        </div>
      )}
    </div>
  );
};

export default Cart;
