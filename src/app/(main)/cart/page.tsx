"use client";
import GoBack from "@/components/general/GoBack";
import { successNotify } from "@/utils/toaster";
import { ProductProps } from "../../../types/zustandTypes";
import { useStore } from "@/utils/zustand.store";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import Checkout from "@/components/general/Checkout";
import Success from "@/components/general/Success";
import LoadingComp from "@/components/general/LoadingComp";

interface ICartProps {}

const Cart: React.FunctionComponent<ICartProps> = (props) => {
  // DECLARES
  const cartItems = useStore((state) => state.products);
  const clearCart = useStore((state) => state.clearCart);
  const addToCart = useStore((state) => state.addProduct);
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
    addToCart(products);
    successNotify("item deleted successfully");
  };

  const handleDecreaseQuantity = ({ id, color, size }: ProductProps) => {
    const findProduct = cartItems.find(
      (items) => items.id === id && items.color === color && items.size === size
    );

    if (findProduct && findProduct.quantity > 1) {
      const findIndex = cartItems.findIndex(
        (items) =>
          items.id === findProduct.id &&
          items.color === color &&
          items.size === size
      );
      const updateCart = [...cartItems];
      updateCart[findIndex] = {
        ...updateCart[findIndex],
        quantity: updateCart[findIndex].quantity - 1,
        total_price:
          updateCart[findIndex].total_price - updateCart[findIndex].price,
      };
      addToCart(updateCart);
    }
  };

  const handleIncreaseQuantity = ({ id, color, size }: ProductProps) => {
    const findProduct = cartItems.find(
      (items) => items.id === id && items.color === color && items.size === size
    );

    if (findProduct) {
      const findIndex = cartItems.findIndex(
        (items) =>
          items.id === findProduct.id &&
          items.color === color &&
          items.size === size
      );
      const updateCart = [...cartItems];
      updateCart[findIndex] = {
        ...updateCart[findIndex],
        quantity: updateCart[findIndex].quantity + 1,
        total_price:
          updateCart[findIndex].total_price + updateCart[findIndex].price,
      };
      addToCart(updateCart);
    }
  };

  // USE EFFECTS
  React.useEffect(() => {
    useStore.persist.rehydrate();
  }, []);

  return (
    <div className="w-full min-h-screen bg-semiWhite pb-20 lg:pb-0 pt-28 px-5 md:px-20">
      <div className="relative w-full">
        <div className="absolute -top-10 md:top-0">
          <GoBack />
        </div>

        <p className="text-xl capitalize text-gray-500 pt-2 w-full text-center">
          your shopping Cart
        </p>

        {cartItems.length !== 0 && (
          <button
            className="text-red-500 absolute right-0 md:right-20 -top-10 md:top-0 py-2 font-semibold"
            onClick={handleClearCart}
          >
            clear cart
          </button>
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
        <div className="relative flex flex-col lg:flex-row justify-between mt-10">
          <div className="flex flex-col gap-y-6 gap-x-20 pb-10 w-full lg:w-[65%]">
            {cartItems.map(
              ({ id, total_price, name, color, size, quantity }, index) => (
                <div className="flex justify-between items-center" key={index}>
                  <div className="flex justify-between flex-wrap md:flex-nowrap gap-y-4 items-center w-[95%] py-3 px-5 bg-gray-200">
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
                      <p className="capitalize truncate text-xs text-gray-500">
                        Ref: 43h4b12121ib
                      </p>
                    </div>

                    <div className="gap-y-1.5 flex flex-col justify-center">
                      <p className="capitalize text-sm md:text-md text-gray-500 text-center">
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
                        <button
                          className="rounded-full bg-gray-600 flex items-center justify-center text-semiWhite  w-[25px] h-[25px]"
                          onClick={() =>
                            handleDecreaseQuantity({ id, color, size })
                          }
                        >
                          -
                        </button>
                        <button
                          className="rounded-full bg-gray-600 flex items-center justify-center text-semiWhite  w-[25px] h-[25px]"
                          onClick={() =>
                            handleIncreaseQuantity({ id, color, size })
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <p className="capitalize text-md text-black">
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
                Total Price: {totalPrice.toFixed(2)} NGN
              </p>
            </div>
          </div>

          <Checkout totalPrice={totalPrice} />
        </div>
      )}

      {/* Success Comp  */}
      <React.Suspense fallback={<LoadingComp />}>
        <Success />
      </React.Suspense>
    </div>
  );
};

export default Cart;
