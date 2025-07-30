import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <>
      <nav className="flex justify-center gap-8 text-yellow-500">
        {session && (
          <Link href={"/events/create"} className="hover:text-amber-300">
            Create event
          </Link>
        )}
      </nav>
      {children}
    </>
  );
}
