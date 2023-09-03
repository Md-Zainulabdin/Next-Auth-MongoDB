import Link from "next/link";
import React from "react";
import { redirect } from "next/navigation";

const SignInPage = () => {
  const onRegister = async (formData) => {
    "use server";

    let name = formData.get("name");
    let email = formData.get("email");
    let password = formData.get("password");
    let image = "";

    if (!name && !password && !email) return;

    try {
      const res = await fetch("http://localhost:3000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, image }),
      });

      if (res.ok) {
        redirect("/auth/login");
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-8 bg-[#fafafa]">
      <div className="title text-center">
        <h1 className="text-4xl font-semibold text-slate-800">
          Create a <span className="text-indigo-500">Free Account</span>{" "}
        </h1>
        <p className="text-md text-[#999] font-normal mt-2">
          ~ Lets take a deep dive in to the world of AI <br /> #GrowWithAi{" "}
        </p>
      </div>
      <form
        action={onRegister}
        className="flex flex-col gap-3 w-full md:w-[35%] border p-6 rounded-md bg-white shadow-sm"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name.."
            required
            className="p-2 outline-indigo-500 text-md border rounded"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            name="email"
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
            placeholder="Enter your password.."
            required
            className="p-2 outline-indigo-500 text-md border rounded"
          />
        </div>

        <div className="mt-2">
          <Link href={"/auth/login"} className="text-[16px]">
            Already have Account! <span className="text-indigo-500">Login</span>{" "}
          </Link>
        </div>

        <div className="mt-4 w-full">
          <button
            type="submit"
            className="w-full p-2 text-white bg-indigo-500 rounded-md"
          >
            Submit Detail
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignInPage;
