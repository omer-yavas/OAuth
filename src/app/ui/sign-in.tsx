import { signIn, signOut, auth } from "@/auth";

export default async function SignIn() {
  const session = await auth();

  const user = session?.user;
  return user ? (
    <>
      <h1>Welcome {user.name}</h1>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit">Signout</button>
      </form>
    </>
  ) : (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <button type="submit">Signin with Google</button>
    </form>
  );
}
