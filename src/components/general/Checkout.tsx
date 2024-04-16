"use client";
import { useStore } from "@/utils/zustand.store";
import * as React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { PaystackButton } from "react-paystack";

interface ICheckoutProps {
  totalPrice: number;
}

const Checkout: React.FunctionComponent<ICheckoutProps> = ({ totalPrice }) => {
  // HOOKS
  const [customerDetails, setCustomerDetails] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    coupon: "",
  });
  const newTotalPrice = React.useMemo(() => {
    if (customerDetails.coupon) {
      return 1000;
    } else {
      return totalPrice;
    }
  }, [totalPrice, customerDetails.coupon]);
  const [checkoutReady, setCheckoutReady] = React.useState<boolean>(false);
  const cartItems = useStore((state) => state.products);
  const clearCart = useStore((state) => state.clearCart);

  //   DECLARES
  const publicKey = `${process.env.NEXT_PUBLIC_PAYSTACK_KEY}`;
  const componentProps = {
    email: customerDetails.email,
    amount: newTotalPrice * 100,
    firstname: customerDetails.firstname,
    lastname: customerDetails.lastname,
    metadata: {
      custom_fields: [
        {
          display_name: "Items Purchased",
          variable_name: "items_purchased",
          value: cartItems
        },
      ],
    },
    publicKey,
    text: "checkout",
    onSuccess: (response: any) => {
      clearCart();
      window.location.href = response.redirecturl;
    },
  };

  // FUNCTIONS
  const handleInputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  //   USE EFFECTS
  React.useEffect(() => {
    if (
      customerDetails.email &&
      customerDetails.firstname &&
      customerDetails.lastname
    ) {
      setCheckoutReady(true);
    } else {
      setCheckoutReady(false);
    }
  }, [customerDetails]);

  return (
    <div className="fixed w-[25%] h-[550px] px-8 py-6 rounded-xl z-[90] bg-black bg-opacity-90 right-20 overflow-auto">
      <p className="text-wheelOrange text-xl mt-6">Account Details</p>

      <div className="mt-8 flex flex-col gap-y-8">
        <div className="flex items-center justify-between gap-x-3">
          <input
            type="text"
            placeholder="firstname"
            name="firstname"
            onChange={handleInputOnChange}
            value={customerDetails.firstname}
            required
            className="bg-gray-400 px-3 bg-opacity-5 focus:outline-none text-sm capitalize py-4 w-full rounded-md text-white"
          />
          <input
            type="text"
            placeholder="lastname"
            name="lastname"
            value={customerDetails.lastname}
            required
            onChange={handleInputOnChange}
            className="bg-gray-400 px-3 bg-opacity-5 focus:outline-none text-sm capitalize py-4 w-full rounded-md text-white"
          />
        </div>
        <input
          type="email"
          placeholder="e-mail"
          name="email"
          required
          value={customerDetails.email}
          onChange={handleInputOnChange}
          className="bg-gray-400 px-3 bg-opacity-5 focus:outline-none text-sm capitalize py-4 w-full rounded-md text-white"
        />
        <div className="relative flex items-center justify-center">
          <input
            type="text"
            placeholder="coupon code"
            name="coupon"
            value={customerDetails.coupon}
            onChange={handleInputOnChange}
            className="bg-gray-400 px-3 bg-opacity-5 focus:outline-none text-sm capitalize py-4 w-full rounded-md text-white"
          />
          <button className="right-0 px-2 top-0 bottom-0 absolute bg-blue-600 text-white">
            <span className="text-3xl">
              <IoIosArrowRoundForward />
            </span>{" "}
          </button>
        </div>
      </div>

      <p className="text-xs text-center mt-10 text-gray-400 capitalize">
        coupon code: -0%
      </p>

      <p className="text-4xl font-semibold text-center mt-5 text-semiWhite uppercase">
        {newTotalPrice.toFixed(2)} ngn
      </p>

      {!checkoutReady ? (
        <button
          disabled={true}
          className="w-full bg-wheelOrange bg-opacity-80 text-white absolute bottom-0 py-5 text-xl capitalize font-semibold left-0"
        >
          checkout
        </button>
      ) : (
        <PaystackButton
          {...componentProps}
          className="w-full bg-wheelOrange text-white absolute bottom-0 py-5 text-xl capitalize font-semibold left-0"
        />
      )}
    </div>
  );
};

export default Checkout;
