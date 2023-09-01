import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const GuestLayout = async ({ children }) => {
  const session = await getServerSession(authOptions);
  if (session?.user) redirect("/Explore");
  return <>{children}</>;
};

export default GuestLayout;