"use client";
import { capitlize } from "@/libs/capitlizer";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useState } from "react";

const ProfileCard = () => {
  const { data: session } = useSession();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = session?.user?.email;

    if (password !== confirmPassword) alert("Not Matched");

    if (!email) return;

    try {
      const res = await fetch("http://localhost:3000/api/EditPassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });

        console.log("res", res.ok);
    } catch (error) {
      console.log("Error", error);
    }
  };
  return (
    <div className="w-full md:w-[70%] h-full">
      <div className="w-full h-full flex flex-col gap-3">
        <div className="image-box">
          <Image
            src={"/profile.webp"}
            width={180}
            height={180}
            alt="Profile Image"
            priority
            className="rounded-full"
          />
        </div>

        <div className="username">
          <h1 className="text-2xl font-semibold text-slate-800">
            Hello {capitlize(session?.user?.name)}
          </h1>
        </div>

        <div className="change-password">
          <form onSubmit={handleSubmit} className="flex gap-4 flex-col">
            <div className="flex flex-col gap-1">
              <label htmlFor="New Password">New Password</label>
              <input
                type="password"
                name="new password"
                placeholder="Enter new password.."
                className="p-2 outline-indigo-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="confirm password">Confirm Password</label>
              <input
                type="password"
                name="confirm password"
                placeholder="Enter confirm password.."
                className="p-2 outline-indigo-400"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <div className="button">
              <button
                type="submit"
                className="px-6 py-2 bg-indigo-500 text-white rounded-md"
              >
                Change Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
