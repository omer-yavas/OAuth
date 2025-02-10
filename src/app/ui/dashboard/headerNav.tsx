import { auth, signOut } from "@/auth";

interface HeaderNavProps {
  className?: string;
}

async function HeaderNav(props: HeaderNavProps) {
  const session = await auth();

  const user = session?.user;

  return (
    <div
      className={`flex justify-between items-center w-screen px-16 bg-green-400 text-white h-24 ${props.className}`}
    >
      <div>Dashboard</div>
      <div>
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button type="submit">{user?.name}, Signout</button>
        </form>
      </div>
    </div>
  );
}

export default HeaderNav;
