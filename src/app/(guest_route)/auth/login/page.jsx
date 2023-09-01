"use client"
import { signIn } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
  const {replace} = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSignIn = async () => {

    console.log(email);

    if (!email && !password) return;

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error === null) replace('/')

 console.log(res);
    } catch (error) {
      console.log("Error", error);
    }
  };
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-8 bg-[#fafafa]">
      <div className="title text-center">
        <h1 className="text-4xl font-semibold text-slate-800">
          Login to <span className="text-indigo-500">Grow With Ai</span>
        </h1>
        <p className="text-md text-[#999] font-normal mt-2">
          ~ Create impact with your knowledge <br /> #GrowWithAi{" "}
        </p>
      </div>
      <form
        action={onSignIn}
        className="flex flex-col gap-3 w-full md:w-[35%] border p-6 rounded-md bg-white shadow-sm"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="p-2 outline-indigo-500 text-md border rounded"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password.."
            required
            className="p-2 outline-indigo-500 text-md border rounded"
          />
        </div>

        <div className="mt-2">
          <Link href={"/auth/signup"} className="text-[16px]">
            Dont have Account! <span className="text-indigo-500">Sign Up</span>{" "}
          </Link>
        </div>

        <div className="mt-4 w-full">
          <button
            type="submit"
            className="w-full p-2 text-white bg-indigo-500 rounded-md"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
