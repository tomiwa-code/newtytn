"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as React from "react";

interface ISuccessProps {
  isLoading: boolean;
  purchaseDetails: {} | null;
}

const Success: React.FunctionComponent<ISuccessProps> = ({
  isLoading,
  purchaseDetails,
}) => {
  const [countdown, setCountdown] = React.useState(10);

  const router = useRouter();

  React.useEffect(() => {
    if (countdown === 0) {
      router.push("/shop");
      return;
    }

    const intervalId = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [countdown]);

  return (
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
  );
};

export default Success;
