import HeaderNav from "../ui/headerNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <HeaderNav />
      <div>{children}</div>
    </div>
  );
}
