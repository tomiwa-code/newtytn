export type HandleAuthProps = {
  handleAuthToggle: () => void;
  toggleAuth: boolean;
};

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
