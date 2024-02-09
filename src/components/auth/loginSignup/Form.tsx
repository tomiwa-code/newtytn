"use client";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useFormik } from "formik";
import * as Yup from "yup";
import { postRequest } from "@/utils/requestMethod";
import { URL } from "@/utils/apiUrls";
import { errNotify } from "@/utils/toaster";
import { Puff } from "react-loader-spinner";
import LoginCheck from "./LoginCheck";

const Form = (props: { viewType: string }) => {
  // USE STATES
  const [showPass, setShowPass] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [authRes, setAuthRes] = useState({
    status: false,
    token: "",
  });

  // FORMIK SETUP
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .required("Required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W]{8,}$/,
        "Password must contain at least 1 uppercase letter, 1 number, and 1 special character"
      ),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      handleFormSubmit(values, props.viewType);
    },
  });

  //   FUNCTIONS
  const handleGoogleAuth = () => {
    window.open(
      `${process.env.NEXT_PUBLIC_TYTN_BASE_URL}/auth/google`,
      "_self"
    );
  };

  const handleFormSubmit = async (payload: object, formType: string) => {
    if (formType === "SignUp") {
      setIsLoading(true);
      try {
        const res: any = await postRequest(URL.SIGNUP, payload, null);
        setIsLoading(false);
        setAuthRes({ status: true, token: res.token });
      } catch (err: any) {
        errNotify(err?.response?.data?.error);
        setIsLoading(false);
      }

      return;
    }

    if (formType === "Login") {
      setIsLoading(true);
      try {
        const res: any = await postRequest(URL.SIGN_IN, payload, null);
        setIsLoading(false);
        setAuthRes({ status: true, token: res.token });
      } catch (err: any) {
        errNotify(err?.response?.data?.error);
        setIsLoading(false);
      }
      return;
    }
  };

  return (
    <>
      {authRes.status ? (
        <LoginCheck token={authRes.token} />
      ) : (
        <>
          <button
            className="rounded-full border border-black w-[320px] py-4 gap-x-5 flex items-start justify-center"
            onClick={handleGoogleAuth}
            style={{ pointerEvents: `${isLoading ? "none" : "auto"}` }}
          >
            <FcGoogle className="text-2xl" />
            Continue with google
          </button>
          <div className="my-5">
            <p className="font-bold relative text-darkOrange text-center before:w-[120px] before:top-1/2 before:translate-y-1/2 before:left-0 before:h-[2px] before:absolute before:bg-gray-300 after:w-[120px] after:top-1/2 after:translate-y-1/2 after:right-0 after:h-[2px] after:absolute after:bg-gray-300">
              OR
            </p>
          </div>
          <form
            className="space-y-5"
            autoComplete="off"
            onSubmit={formik.handleSubmit}
          >
            {/* Email  */}
            <div className="flex flex-col relative space-y-1">
              <label
                htmlFor={
                  props.viewType === "Login" ? "loginEmail" : "signUpEmail"
                }
                className="text-black font-semibold text-sm"
              >
                Email
              </label>
              <input
                id={props.viewType === "Login" ? "loginEmail" : "signUpEmail"}
                name="email"
                type="email"
                placeholder="youremail@gmail.com"
                className={`rounded-md w-[320px] bg-white  py-4 ms-start justify-center border border-black focus:bg-white focus:outline-none px-6 ${
                  formik.touched.email && formik.errors.email
                    ? "border border-red-500"
                    : ""
                }`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                autoComplete="off"
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-sm text-red-500">
                  {formik.errors.email}
                </div>
              )}
            </div>

            {/* Password  */}
            <div className="flex flex-col relative space-y-1">
              <label
                htmlFor={
                  props.viewType === "Login" ? "loginPass" : "signUpPass"
                }
                className="text-black font-semibold text-sm"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id={props.viewType === "Login" ? "loginPass" : "signUpPass"}
                  name="password"
                  type={`${showPass ? "text" : "password"}`}
                  placeholder="Password10:)"
                  className={`rounded-md w-[320px] bg-white  py-4 ms-start justify-center border border-black focus:outline-none px-6 ${
                    formik.touched.password && formik.errors.password
                      ? "border border-red-500"
                      : ""
                  }`}
                  autoComplete="off"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                <span
                  onClick={() => setShowPass((prev) => !prev)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer"
                >
                  {showPass ? "hide" : "show"}
                </span>
              </div>
              {formik.touched.password && formik.errors.password && (
                <div className="text-sm text-red-500 w-[300px] break-words">
                  {formik.errors.password}
                </div>
              )}
            </div>

            <button
              className="rounded-full flex cursor-pointer justify-center items-center uppercase bg-black text-darkOrange font-bold w-[320px] py-4 text-center"
              style={{ pointerEvents: `${isLoading ? "none" : "auto"}` }}
              type="submit"
            >
              {isLoading ? (
                <Puff
                  height="30"
                  width="30"
                  radius={1}
                  color="#FE9200"
                  ariaLabel="puff-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              ) : props.viewType === "Login" ? (
                "sign in"
              ) : (
                "sign up"
              )}
            </button>
          </form>
        </>
      )}
    </>
  );
};

export default Form;
