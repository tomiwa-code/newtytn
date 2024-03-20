"use client";
import { create } from "zustand";
import { AddProductType, ProductProps, Store } from "./types";

export const useStore = create<Store>()((set) => ({
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
  removeProduct: (products: AddProductType[]) => {
    set((state) => ({
      ...state,
      totalProducts: products.length,
      products,
    }));
  },
  deleteProduct: (products: AddProductType[]) => {
    set((state) => ({
      ...state,
      totalProducts: products.length,
      products,
    }));
  },
  clearCart: () => {
    set((state) => ({ ...state, products: [], totalProducts: 0 }));
  },
}));
