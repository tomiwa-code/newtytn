"use client";
import { errNotify } from "@/utils/toaster";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import * as React from "react";

interface ISuccessProps {}

const Success: React.FunctionComponent<ISuccessProps> = ({}) => {
  // USE STATES
  const [countdown, setCountdown] = React.useState(10);
  const [transactionDetails, setTransactionsDetails] =
    React.useState<{} | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);

  // DECLARE
  const router = useRouter();
  const searchParams = useSearchParams();
  const transactionRef = searchParams.get("reference");

  // FUNCTIONS

  // USE EFFECTS
  React.useEffect(() => {
    if (!transactionDetails) {
      return;
    }

    if (countdown === 0) {
      router.push("/shop");
      return;
    }

    const intervalId = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [countdown, router, transactionDetails]);

  React.useEffect(() => {
    const verifyTransId = async () => {
      setIsLoading(true);
      try {
        if (transactionRef) {
          const res = await axios.get(
            `https://api.paystack.co/transaction/verify/${transactionRef}`,
            {
              headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_PAYSTACK_SECRET_KEY}`,
                "Content-Type": "application/json",
              },
            }
          );
          const { id, metadata } = await res.data.data;
          setTransactionsDetails({ id, metadata });
          setIsLoading(false);
        }
      } catch (err) {
        setIsLoading(false);
        errNotify("Oops Something went wrong, Please refresh.");
      }
    };
    verifyTransId();
  }, [transactionRef]);

  return (
    <>
      {transactionDetails && (
        <div className="inset-0 absolute flex items-center justify-center">
          <div className="absolute inset-0 z-[90] bg-opacity-70 backdrop:blur-lg bg-black"></div>

          <div className="px-6 bg-white w-[50%] rounded-2xl h-[500px] flex flex-col justify-center items-center py-10 relative z-[99]">
            <p className="capitalize text-xl text-blue-400 font-semibold">
              purchase complete
            </p>
            <div className="w-[300px] h-[200px] overflow-hidden mt-3">
              <Image
                src={
                  "https://res.cloudinary.com/dgdoymhtj/image/upload/v1711232232/tytn/announcements/Funny_young_girl_rides_shopping_cart-removebg-preview_jx8sq0.png"
                }
                alt="a girl in a cart"
                width={1000}
                height={1000}
                priority
              />
            </div>
            <p className="mt-6 w-[300px] text-center">
              Thanks for doing business with us! Come back soon!!
            </p>
            <Link
              href={"/shop"}
              className="rounded-full px-6 py-3 bg-black text-white mt-5"
            >
              Go to Shop
            </Link>
            <p className="text-sm text-gray-400 text-center mt-3.5">
              Redirects to shop in {countdown}s
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Success;
