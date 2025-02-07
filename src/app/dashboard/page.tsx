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
    <div>
      <p>Welcome to the dashboard</p>
    </div>
  );
}

export default DashboardPage;
