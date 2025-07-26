import Link from "next/link";

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav className="flex justify-center gap-8 text-yellow-500">
        <Link href={"/users/client-version"} className="hover:text-amber-300">
          Users client
        </Link>
        <Link href={"/users/server-version"} className="hover:text-amber-300">
          Users server
        </Link>
      </nav>
      {children}
    </>
  );
}
