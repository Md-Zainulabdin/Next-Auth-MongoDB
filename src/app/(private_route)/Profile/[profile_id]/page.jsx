import Header from "@/app/components/Header/page";
import ProfileCard from "@/app/components/ProfileCard/page";
import React from "react";

const ProfilePage = () => {
  return (
    <div className="w-full h-[80vh]">
      <Header value={"Your Profile"} />
      <div className="w-full h-full flex justify-center items-center">
        <ProfileCard />
      </div>
    </div>
  );
};

export default ProfilePage;