"use client";
import { UserLoggedInContext } from "@/context/IsLoggedIn.context";
import { useRouter } from "next/navigation";
import * as React from "react";

const AuthProtected = ({ children }: { children: React.ReactNode }) => {
  const { isUSerLoggedIn } = React.useContext(UserLoggedInContext);
  const router = useRouter();

  React.useEffect(() => {
    if (isUSerLoggedIn === true) {
      router.back()
    }
  }, [isUSerLoggedIn, router]);

  return isUSerLoggedIn === false ? children : null;
};

export default AuthProtected;
