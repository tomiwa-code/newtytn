import { successNotify } from "./toaster";
import { AddProductType } from "../types/zustandTypes";

type ArrayProp = {
  cartItems: AddProductType[];
};

type Combine = AddProductType & ArrayProp;

export const addToCartFunc = ({
  id,
  name,
  color,
  size,
  price,
  total_price,
  cartItems,
}: Combine) => {
  const findProduct = cartItems.find(
    (items) => items.id === id && items.color === color && items.size === size
  );

  if (findProduct) {
    const newQuantity = findProduct.quantity + 1;
    const newTotalPrice = newQuantity * findProduct.price;
    const findIndex = cartItems.findIndex(
      (items) =>
        items.id === findProduct.id &&
        items.color === color &&
        items.size === size
    );
    const updateCart = [...cartItems];
    updateCart[findIndex] = {
      ...updateCart[findIndex],
      quantity: newQuantity,
      total_price: newTotalPrice,
    };
    successNotify("item added to cart");
    return updateCart;
  } else {
    const newItem = [
      ...cartItems,
      {
        id,
        quantity: 1,
        total_price,
        price,
        color,
        size,
        name,
      },
    ];
    successNotify("item added to cart");
    return newItem;
  }
};
