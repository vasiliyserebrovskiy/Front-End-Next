import Link from "next/link";

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav className="flex justify-center gap-8 text-yellow-500">
        <Link href={"/categories/create"} className="hover:text-amber-300">
          Create category
        </Link>
      </nav>
      {children}
    </>
  );
}
