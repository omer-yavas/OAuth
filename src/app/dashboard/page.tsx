import { Metadata } from "next";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Dashboard",
};

async function DashboardPage() {
  const session = await auth();

  //server side redirect çünkü bu component server component
  if (!session) {
    redirect("/login");
  }

  return (
    <div className="mt-16 text-center">
      <p className="text-4xl">Welcome to the dashboard!</p>
      <p className="text-xl mt-4">You've signed in successfully</p>
    </div>
  );
}

export default DashboardPage;
