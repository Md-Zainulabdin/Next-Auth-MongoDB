import Link from "next/link";
import React from "react";

const Header = async ({ value }) => {

  return (
    <div className="w-full h-[80px] border-b px-[50px] bg-white shadow-sm flex justify-between">
      <div className="w-full h-full flex justify-start items-center">
        <h1 className="text-3xl font-semibold text-slate-800">{value}</h1>
      </div>

      {/* {session && (
        <Link href={"/Profile"} className="profile flex items-center gap-5">
          <h2 className="text-xl font-medium text-slate-800">{capitlize(data?.name)}</h2>
          <img src={data?.image || "/profile.webp"} alt="profile pic" className="w-[45px] h-[45px] rounded-full border-2"/>
        </Link>
      )} */}
    </div>
  );
};

export default Header;
