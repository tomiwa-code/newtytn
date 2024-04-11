"use client";
import { UserDataProp } from "@/types/userTypes";
import { useStore } from "@/utils/zustand.store";
import Image from "next/image";
import * as React from "react";
import { MdFlipCameraAndroid } from "react-icons/md";

interface IUserInfoProps {}

const UserInfo: React.FunctionComponent<IUserInfoProps> = (props) => {
  // USE STATES
  const [imageUrl, setImageUrl] = React.useState<string>(
    "https://res.cloudinary.com/dgdoymhtj/image/upload/v1710543935/e4ffe1cc-eb87-49ae-ac39-f114c706184c.png"
  );
  const [imgFile, setImgFile] = React.useState<File | null>(null);
  const [userData, setUserData] = React.useState<{
    firstname: string;
    lastname: string;
    email: string;
    address: string;
    postal_code: string;
    phone: string[];
    location: string;
  }>({
    firstname: "",
    lastname: "",
    email: "",
    location: "",
    postal_code: "",
    address: "",
    phone: [""],
  });
  const [formTouched, setFormTouched] = React.useState(false);
  const [formRes, setFormRes] = React.useState({
    isError: false,
    isLoading: false,
  });

  // DECLARES
  const userDetails: UserDataProp = useStore((state) => state.userDetails);

  // FUNCTIONS
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setImageUrl(reader.result);
        }
      };
      reader.readAsDataURL(file);
      setImgFile(file);
    }
  };

  const handleInputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setFormTouched(true);
  };

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const LabelName = (name: string) => (
    <p className="capitalize text-left text-sm text-gray-600">{name}</p>
  );

  // USE EFFECTS
  React.useEffect(() => {
    useStore.persist.rehydrate();
  }, []);

  React.useEffect(() => {
    if (userDetails) {
      setUserData({
        firstname: userDetails?.firstname ? userDetails.firstname : "",
        lastname: userDetails?.lastname ? userDetails.lastname : "",
        email: userDetails?.email ? userDetails.email : "",
        phone: userDetails?.phone ? userDetails.phone : [""],
        location: userDetails?.location ? userDetails.location : "",
        postal_code: userDetails?.postal_code ? userDetails.postal_code : "",
        address: userDetails?.address ? userDetails.address : "",
      });
      if (userDetails.profilePhoto) {
        setImageUrl(userDetails.profilePhoto);
      }
    }
  }, [userDetails]);

  return (
    <div className="w-[80%] left-[20%] relative flex items-center justify-center flex-col">
      {/* Profile image and name  */}
      <div className="flex items-center gap-x-6">
        <div className="relative">
          <div className="w-[100px] h-[100px] overflow-hidden rounded-full bg-gray-200 shadow-lg">
            <Image
              src={imageUrl}
              alt="profile image"
              width={1000}
              height={1000}
              priority
            />
          </div>
          <input
            type="file"
            accept="image/*"
            hidden
            id="dp"
            onChange={handleImageChange}
          />
          <label
            htmlFor="dp"
            className="absolute bottom-0 right-0 bg-pantoneOrange cursor-pointer text-white p-2 rounded-full"
          >
            <MdFlipCameraAndroid />
          </label>
        </div>

        <div className="space-y-2">
          <p className="text-lg capitalize">{userDetails?.name}</p>
          <p className="capitalize text-sm text-gray-400">lagos, nigeria</p>
        </div>
      </div>

      {/* Details  */}
      <form onSubmit={handleSave} className="text-center">
        <div className="flex flex-col gap-y-10 mt-10">
          {/* Name  */}
          <div className="w-full grid grid-cols-2 gap-x-10">
            <div className="space-y-1">
              {LabelName("firstname")}
              <input
                type="text"
                name="firstname"
                placeholder="tomiwa"
                value={userData?.firstname}
                onChange={handleInputOnChange}
                required
                className="w-full py-2 px-5 rounded-md bg-gray-100 focus:outline-none text-sm capitalize"
              />
            </div>
            <div className="space-y-1">
              {LabelName("lastname")}
              <input
                type="text"
                name="lastname"
                placeholder="codes"
                value={userData?.lastname}
                onChange={handleInputOnChange}
                required
                className="w-full py-2 px-5 rounded-md bg-gray-100 focus:outline-none text-sm capitalize"
              />
            </div>
          </div>

          {/* mail and phone  */}
          <div className="w-full grid grid-cols-2 gap-x-10">
            <div className="space-y-1">
              {LabelName("email address")}
              <input
                type="text"
                name="email"
                placeholder="example@gmail.com"
                value={userData?.email}
                readOnly
                required
                className="w-full py-2 px-5 rounded-md bg-gray-100 focus:outline-none text-sm capitalize"
              />
            </div>
            <div className="space-y-1">
              {LabelName("phone number")}
              <input
                type="text"
                name="phone"
                placeholder="+2349129341944"
                value={userData?.phone[0]}
                onChange={handleInputOnChange}
                required
                className="w-full py-2 px-5 rounded-md bg-gray-100 focus:outline-none text-sm capitalize"
              />
            </div>
          </div>

          {/* location and postal code  */}
          <div className="w-full grid grid-cols-2 gap-x-10">
            <div className="space-y-1">
              {LabelName("location")}
              <input
                type="text"
                name="location"
                placeholder="lagos, nigeria"
                value={userData?.location}
                onChange={handleInputOnChange}
                required
                className="w-full py-2 px-5 rounded-md bg-gray-100 focus:outline-none text-sm capitalize"
              />
            </div>
            <div className="space-y-1">
              {LabelName("postal code")}
              <input
                type="text"
                name="postal_code"
                placeholder="111101"
                value={userData?.postal_code}
                onChange={handleInputOnChange}
                required
                className="w-full py-2 px-5 rounded-md bg-gray-100 focus:outline-none text-sm capitalize"
              />
            </div>
          </div>
        </div>

        <button
          className={`text-white  mx-auto mt-10 rounded-lg px-6 py-3 bg-wheelOrange ${
            (!formTouched && formRes.isLoading) ||
            (!formTouched &&
              !formRes.isLoading &&
              "bg-opacity-80 cursor-not-allowed")
          }`}
        >
          {formRes.isLoading ? "saving" : "save changes"}
        </button>
      </form>
    </div>
  );
};

export default UserInfo;
