import { Metadata } from "next";
import Link from "next/link";
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
      <div className="w-48">
        <Link
          href="/"
          className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
        >
          <span>Ana sayfa</span>
        </Link>
      </div>
      <div className="w-48 mt-16">
        <Link
          href="/login"
          className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
        >
          <span>Login</span>
        </Link>
      </div>
    </div>
  );
}

export default DashboardPage;
