"use client";
import { useEffect, useState } from "react";
import ToggleOverlay from "./ToggleOverlay";
import Login from "./Login";
import SignUp from "./SignUp";
import { useSearchParams } from "next/navigation";
import LoginCheck from "./LoginCheck";
import Link from "next/link";
import Image from "next/image";

const LoginSignUp = () => {
  // USE STATES
  const [toggleAuth, setToggleAuth] = useState(false);
  const [renderCheck, setRenderCheck] = useState(false);
  const [userExist, setUserExit] = useState("");

  // DECLARES
  const searchParam = useSearchParams();
  const isSuccess = searchParam.get("success") === "false";
  const isEmailExist = searchParam.get("eae") === "true";
  const token = searchParam.get("token");

  // FUNCTION
  const handleAuthToggle = () => {
    setToggleAuth((prev) => !prev);
  };

  // USE EFFECTS
  useEffect(() => {
    if (token) {
      setRenderCheck(true);
    } else {
      setRenderCheck(false);
    }
  }, [token]);

  useEffect(() => {
    if (isEmailExist && isSuccess) {
      setUserExit("true");
    } else {
      setUserExit("false");
    }
  }, [isEmailExist, isSuccess]);

  return (
    <div className="w-full h-screen flex relative">
      {/* Overlay toggle  */}
      <ToggleOverlay
        toggleAuth={toggleAuth}
        handleAuthToggle={handleAuthToggle}
      />

      {/* Sign up  */}
      <div
        className={`w-full lg:w-1/2 h-screen flex flex-col items-center justify-center relative ${
          !toggleAuth ? "hidden lg:block" : ""
        }`}
      >
        <div className="mb-5">
          <p className="text-4xl font-bold lg:hidden text-princetonOrange">
            tytn
          </p>
        </div>

        {!renderCheck && userExist === "false" && (
          <SignUp handleAuthToggle={handleAuthToggle} toggleAuth={toggleAuth} />
        )}
      </div>

      {/* Login and User already exist */}
      <div
        className={`w-full lg:w-1/2 h-screen flex items-center justify-center relative ${
          toggleAuth ? "hidden lg:block" : ""
        }`}
      >
        {renderCheck && userExist === "false" && (
          <LoginCheck token={token ? token : ""} />
        )}

        {userExist === "true" && (
          <div className="flex-col gap-y-4 flex items-center justify-center">
            <div className="w-[200px]">
              <Image
                src={
                  "https://res.cloudinary.com/dgdoymhtj/image/upload/v1707505998/tytn/announcements/Man_Sorry_Vector_Hd_Images__Sorry_Sorry_Sorry_Cartoon_Man__Cartoon_Clipart__Man_Clipart__Very_Sorry_PNG_Image_For_Free_Download__1_-removebg-preview_qhxxuq.png"
                }
                alt="sorry"
                width={1000}
                height={1000}
                priority={true}
              />
            </div>
            <p className="text-lg text-center font-medium">
              User with this email already exists
            </p>
            <p className="text-sm">Try with different email.</p>
            <Link
              className="text-sm text-center bg-darkOrange text-white px-8 rounded-md py-3"
              href={"/auth"}
            >
              Try again
            </Link>
          </div>
        )}

        {!renderCheck && userExist === "false" && (
          <div className="flex-col gap-y-4 flex items-center justify-center">
            <div className="mb-5">
              <p className="text-4xl font-bold lg:hidden text-princetonOrange">
                tytn
              </p>
            </div>

            <Login
              handleAuthToggle={handleAuthToggle}
              toggleAuth={toggleAuth}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginSignUp;
