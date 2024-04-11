"use client";
import { UserLoggedInContext } from "@/context/IsLoggedIn.context";
import { useRouter } from "next/navigation";
import * as React from "react";

const ProfileProtected = ({ children }: { children: React.ReactNode }) => {
  const { isUSerLoggedIn } = React.useContext(UserLoggedInContext);
  const router = useRouter();

  React.useEffect(() => {
    if (isUSerLoggedIn === false) {
      router.back()
    }
  }, [isUSerLoggedIn]);

  return isUSerLoggedIn === true ? children : null;
};

export default ProfileProtected;
