import { Metadata } from "next";
import SignIn from "../ui/sign-in";

export const metadata: Metadata = {
  title: "Login Page",
};

export default function LoginPage() {
  return (
    <div>
      <div className="mt-4 flex justify-center">This is login page</div>
      <div className="mt-8 flex justify-center">
        <SignIn />
      </div>
    </div>
  );
}
