"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Nav = () => {
  const { data: session, status } = useSession();
  return (
    <div className="w-full h-[60px] bg-white shadow-sm">
      <nav className="w-full h-full border-b flex justify-between items-center px-[50px]">
        <div className="logo text-2xl font-semibold text-slate-800">
          <Link href={"/"}>
            <span className="text-indigo-500">Grow With</span> Ai
          </Link>
        </div>
        <div className="menu flex gap-6 items-center">
          
          <Link href={"/Explore"} className="text-lg text-slate-700">
            Explore
          </Link>
          {status === "authenticated" ? (
            <button
              onClick={() => signOut()}
              className="px-4 py-1 border bg-indigo-500 text-white rounded-md cursor-pointer transition duration-300 ease-in-out hover:bg-indigo-400"
            >
              Logout
            </button>
          ) : (
            <Link
              href={"/auth/login"}
              className="px-4 py-1 border bg-indigo-500 text-white rounded-md cursor-pointer transition duration-300 ease-in-out hover:bg-indigo-400"
            >
              Login
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Nav;
