"use client";
import * as React from "react";
import Cookies from "js-cookie";

export const UserLoggedInContext = React.createContext<{
  isUSerLoggedIn: string | boolean;
}>({ isUSerLoggedIn: "" });

export const UserLoggedInProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // Hooks
  const [isUSerLoggedIn, setIsUSerLoggedIn] = React.useState<string | boolean>(
    ""
  );

  //   DECLARES
  const token = !!Cookies.get("_Ga_TTYDI");
  const isLoggedIn = Cookies.get("_inEdGGolIs") === "true";

  // USE EFFECTS
  React.useEffect(() => {
    if (!isLoggedIn || !token) {
      setIsUSerLoggedIn(false);
    } else {
      setIsUSerLoggedIn(true);
    }
  }, [isLoggedIn, token]);

  return (
    <UserLoggedInContext.Provider value={{ isUSerLoggedIn }}>
      {children}
    </UserLoggedInContext.Provider>
  );
};
