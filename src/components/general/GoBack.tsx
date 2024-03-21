"use client";
import { useRouter } from "next/navigation";
import * as React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";

interface IGoBackProps {}

const GoBack: React.FunctionComponent<IGoBackProps> = (props) => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  return (
      <button
        className="flex gap-x-2 py-2 items-center capitalize text-gray-600"
        onClick={handleBack}
      >
        <span className="text-3xl">
          <IoIosArrowRoundBack />
        </span>{" "}
        go back
      </button>
  );
};

export default GoBack;
