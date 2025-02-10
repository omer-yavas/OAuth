import HeaderNav from "../ui/dashboard/headerNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen">
      <HeaderNav className="flex-none" />
      <div className="flex-auto">{children}</div>
    </div>
  );
}
