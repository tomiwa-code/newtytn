"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { AddProductType, Store } from "./types";

export const useStore = create<Store>()(
  persist(
    (set) => ({
      // STATES
      products: [],
      totalProducts: 0,
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
    }),
    { name: "cart-items", skipHydration: true }
  )
);
