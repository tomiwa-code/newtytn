"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { AddProductType, Store } from "../types/zustandTypes";
import { UserDataProp } from "../types/userTypes";

const userDetailsVal = {
  address: "",
  _id: "",
  email: "",
  phone: [""],
  isAdmin: false,
  profileCreated: false,
  createdAt: "",
  updatedAt: "",
  __v: 0,
  additionalInformation: "",
  name: "",
  firstname: "",
  lastname: "",
  location: "",
  postal_code: "",
  profilePhoto: "",
};

export const useStore = create<Store>()(
  persist(
    (set) => ({
      // STATES
      products: [],
      totalProducts: 0,
      userDetails: userDetailsVal,
      //   DISPATCH ACTIONS
      addProduct: (products: AddProductType[]) => {
        set((state) => ({
          ...state,
          totalProducts: products.length,
          products,
        }));
      },
      clearCart: () => {
        set((state) => ({ ...state, products: [], totalProducts: 0 }));
      },
      logout: () => {
        set((state) => ({ ...state, userDetails: userDetailsVal }));
      },
      addUserDetails: (props: UserDataProp) => {
        set((state) => ({ ...state, userDetails: props }));
      },
    }),
    { name: "cart-items", skipHydration: true }
  )
);
