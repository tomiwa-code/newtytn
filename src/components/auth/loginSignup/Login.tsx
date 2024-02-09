import { HandleAuthProps } from "@/utils/types";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUpToggle } from "@/utils/variants";
import Form from "./Form";

const Login = ({ handleAuthToggle, toggleAuth }: HandleAuthProps) => {
  return (
    <motion.div
      animate={!toggleAuth ? "show" : "hide"}
      variants={fadeInUpToggle}
    >
      <div
        className={`w-full text-black ${toggleAuth ? "hidden" : "visible"}`}
      >
        <Form viewType="Login" />

        <p className="text-xs text-center mt-4">
          Don&apos;t have an account yet?{" "}
          <span
            onClick={handleAuthToggle}
            className="font-bold text-wheelOrange cursor-pointer"
          >
            Sign up
          </span>{" "}
          instead.
        </p>
      </div>
    </motion.div>
  );
};

export default Login;
