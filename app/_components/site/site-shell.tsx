import SiteFooter from "./footer";
import ConditionalHeader from "./conditional-header";

export default function SiteShell({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ConditionalHeader />
      <div className="flex-1">{children}</div>
      <SiteFooter />
    </>
  );
}
