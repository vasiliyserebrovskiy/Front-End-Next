import BackButton from "@/components/BackButton/BackButton";
import { User } from "@/types";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function UserDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  const res = await fetch(`https://api.escuelajs.co/api/v1/users/${id}`);

  if (!res.ok) {
    if (res.status === 404 || res.status === 400) {
      notFound();
    }
    throw new Error("Fetch users details failed.");
    // return { message: "Failed to load user info." };
  }

  const user: User = await res.json();

  return (
    <section className="flex justify-center bg-secondary py-20 px-14 md:px-32">
      <div className="bg-primary flex flex-col justify-center items-center gap-5 border-2 border-border rounded-lg p-4 m-4 w-150">
        <h2>User details</h2>
        <p>{user.name}</p>
        <Image
          src={user.avatar}
          alt={"User " + user.name}
          width={150}
          height={200}
          className="w-40 h-auto rounded-lg"
          unoptimized
        />
        <p className="bg-secondary w-32 sm:w-40 md:w-60 lg:w-68">
          {user.email}
        </p>
        <p>{user.role}</p>
        <BackButton />
      </div>
    </section>
  );
}
