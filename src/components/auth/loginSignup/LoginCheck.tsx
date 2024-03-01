"use client";
import { URL } from "@/utils/apiUrls";
import { getRequest } from "@/utils/requestMethod";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/utils/tytnRoutes";
import Cookies from "js-cookie";
import { Puff } from "react-loader-spinner";

const LoginCheck = (props: { token: string }) => {
  // USE STATES
  const [checkRes, setCheckRes] = useState({
    isLoading: false,
    isError: {
      state: false,
      message: "",
    },
    isSuccess: false,
  });

  // DECLARES
  const router = useRouter();

  // FUNCTIONS
  const handleCheck = async () => {
    setCheckRes({
      isLoading: true,
      isError: { state: false, message: "" },
      isSuccess: false,
    });
    try {
      const res: any = await getRequest(URL.GET_USER_BY_TOKEN, props.token);
      setCheckRes({
        isLoading: false,
        isError: { state: false, message: "" },
        isSuccess: true,
      });

      if (!res.profileCreated) {
        Cookies.set("onboarding", "true");
        Cookies.set("email", res.email);
        Cookies.set("isAllowed", "true");
        setTimeout(() => {
          router.push(ROUTES.ONBOARDING);
        }, 1200);
      } else {
        Cookies.set("_Ga_TTYDI", props.token, { expires: 3 });
        Cookies.set("_inEdGGolIs", "true");

        // check for the last url before redirect
        const chkRedirect = Cookies.get("athpaslt");

        if (chkRedirect) {
          setTimeout(() => {
            router.push(chkRedirect);
          }, 1200);
          Cookies.set("_seudathpaslt", "true");
        } else {
          setTimeout(() => {
            router.push(ROUTES.HOME);
          }, 1200);
        }
      }
    } catch (error: any) {
      setCheckRes({
        isLoading: false,
        isError: { message: error?.response?.data?.error, state: true },
        isSuccess: false,
      });
    }
  };

  // USE EFFECTS
  useEffect(() => {
    handleCheck();
  }, []);

  return (
    <div className="bg-white pointer-events-none absolute inset-0 flex items-center justify-center">
      {props.token && checkRes.isLoading ? (
        <div>
          <Puff
            height="40"
            width="40"
            radius={1}
            color="#FE9200"
            ariaLabel="puff-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : checkRes.isError.state ? (
        <div className="text-center pointer-events-auto">
          <p className="text-lg">Fetched failed</p>
          <Link href={"/auth"}>
            <p className="text-white bg-darkOrange mt-2 rounded-full py-2 px-5">
              Try again
            </p>
          </Link>
        </div>
      ) : (
        checkRes.isSuccess && (
          <div className="items-center flex gap-y-3 flex-col justify-center">
            <Puff
              height="40"
              width="40"
              radius={1}
              color="#FE9200"
              ariaLabel="puff-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
            <p>One moment</p>
          </div>
        )
      )}
    </div>
  );
};

export default LoginCheck;
