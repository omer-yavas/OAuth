import { auth, signOut } from "@/auth";

async function HeaderNav() {
  const session = await auth();

  const user = session?.user;

  return (
    <div className="flex justify-between items-center w-screen px-16 bg-green-400 text-white h-24">
      <div>Dashboard</div>
      <div>
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button type="submit">Signout {user?.name}</button>
        </form>
      </div>
    </div>
  );
}

export default HeaderNav;
