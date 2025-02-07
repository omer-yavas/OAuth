import { Metadata } from "next";
import Link from "next/link";
import SignIn from "../ui/sign-in";

export const metadata: Metadata = {
  title: "Login Page",
};

export default function LoginPage() {
  return (
    <div>
      <div>This is login page</div>
      <div className="w-48">
        <Link
          href="/"
          className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
        >
          <span>Ana sayfa</span>
        </Link>
      </div>
      <div className="w-48 mt-16">
        <SignIn />
      </div>
    </div>
  );
}
