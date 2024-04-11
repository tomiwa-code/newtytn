import UserInfo from "@/components/main/profile/UserInfo";
import * as React from "react";

interface IUserProfileProps {}

const UserProfile: React.FunctionComponent<IUserProfileProps> = (props) => {
  return (
    <>
      <UserInfo />
    </>
  );
};

export default UserProfile;
