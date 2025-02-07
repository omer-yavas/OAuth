"use client";

import Button from "./ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/login");
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto grid max-w-(--breakpoint-xl) px-4 py-8 text-center lg:py-16">
        <div className="mx-auto place-self-center">
          <h1 className="mb-4 max-w-2xl text-4xl leading-none font-extrabold tracking-tight md:text-5xl xl:text-6xl dark:text-white">
            Next.js Authentication with OAuth
          </h1>
          <p className="mb-6 max-w-2xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400">
            Building with Next.js, Auth.js, Google OAuth, and GitHub OAuth! I
            love creating modern, flexible, and secure web applications.
          </p>
        </div>
        <div className="flex justify-center">
          <Button text="Get Started" onClick={handleClick} />
        </div>
      </div>
    </section>
  );
}
