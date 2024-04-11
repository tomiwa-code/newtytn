import GoBack from "@/components/general/GoBack";
import LeftSideBar from "@/components/main/profile/LeftSideBar";
import ProfileProtected from "@/components/main/profile/ProfileProtected";
import * as React from "react";

interface IProfileLayoutProps {
  children: React.ReactNode;
}

const ProfileLayout: React.FunctionComponent<IProfileLayoutProps> = ({
  children,
}) => {
  return (
    <ProfileProtected>
      <div className="relative flex w-full min-h-screen bg-semiWhite pb-20 px-20 pt-28">
        <div className="absolute left-[22%] z-10">
          <GoBack />
        </div>
        <LeftSideBar />
        {children}
      </div>
    </ProfileProtected>
  );
};

export default ProfileLayout;
