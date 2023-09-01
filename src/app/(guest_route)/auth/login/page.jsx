import React from "react";

const SignInPage = () => {
  const onRegister = async (formData) => {
    "use server";

    let name = formData.get("name");
    let email = formData.get("email");
    let password = formData.get("password");

    try {
      const res = await fetch("http://localhost:3000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (res.ok) {
       console.log("name", name);
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-8 bg-[#fafafa]">
      <div className="title">
        <h1 className="text-3xl font-semibold text-slate-800">
          Create a <span className="text-indigo-400">Free Account</span>{" "}
        </h1>
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
