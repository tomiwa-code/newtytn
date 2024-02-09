"use client";
import { useEffect, useState } from "react";
import ToggleOverlay from "./ToggleOverlay";
import Login from "./Login";
import SignUp from "./SignUp";
import { useSearchParams } from "next/navigation";
import LoginCheck from "./LoginCheck";

const LoginSignUp = () => {
  // USE STATES
  const [toggleAuth, setToggleAuth] = useState(false);
  const [renderCheck, setRenderCheck] = useState(false);

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
    if (isSuccess || isEmailExist || token) {
      setRenderCheck(true);
    } else {
      setRenderCheck(false);
    }
  }, [isSuccess, isEmailExist, token]);

  return (
    <div className="w-full h-screen flex relative">
      <ToggleOverlay
        toggleAuth={toggleAuth}
        handleAuthToggle={handleAuthToggle}
      />

      <div className="w-1/2 h-screen flex items-center justify-center relative">
        {!renderCheck && (
          <SignUp handleAuthToggle={handleAuthToggle} toggleAuth={toggleAuth} />
        )}
      </div>

      <div className="w-1/2 h-screen flex items-center justify-center relative">
        {renderCheck && (
          <LoginCheck
            isSuccess={isSuccess}
            isEmailExist={isEmailExist}
            token={token}
          />
        )}

        {!renderCheck && (
          <Login handleAuthToggle={handleAuthToggle} toggleAuth={toggleAuth} />
        )}
      </div>
    </div>
  );
};

export default LoginSignUp;
