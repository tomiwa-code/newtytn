import { UserDataProp } from "./userTypes";

export type UserDetailsRes = {
  address: object;
  _id: string;
  email: string;
  phone: [];
  isAdmin: boolean;
  profileCreated: false;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type InitialStore = {
  products: AddProductType[];
  totalProducts: number;
  userDetails: UserDataProp
};

export type AddProductType = {
  id: string;
  price: number;
  quantity: number;
  name: string;
  color: string;
  size: string;
  total_price: number;
};

export type DispatchActions = {
  addProduct: (props: AddProductType[]) => void;
  clearCart: () => void;
  addUserDetails: (props: UserDataProp) => void
  logout: () => void
};

export type Store = InitialStore & DispatchActions;

export type ProductProps = {
  id: string;
  color: string;
  size: string;
};
