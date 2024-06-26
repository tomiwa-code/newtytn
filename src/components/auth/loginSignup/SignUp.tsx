import React from "react";
import { motion } from "framer-motion";
import { fadeInUpToggle } from "@/utils/variants";
import Form from "./Form";
import { HandleAuthProps } from "../../../types/authTypes";

const SignUp = ({ handleAuthToggle, toggleAuth }: HandleAuthProps) => {
  return (
    <motion.div
      animate={toggleAuth ? "show" : "hide"}
      variants={fadeInUpToggle}
    >
      <div
        className={`w-full text-black ${!toggleAuth ? "hidden" : "visible"}`}
      >
        <Form viewType="SignUp" />

        <p className="text-xs text-center mt-4">
          Already have an account yet?{" "}
          <span
            onClick={handleAuthToggle}
            className="font-bold text-wheelOrange cursor-pointer"
          >
            Sign in
          </span>{" "}
          instead.
        </p>
      </div>
    </motion.div>
  );
};

export default SignUp;
