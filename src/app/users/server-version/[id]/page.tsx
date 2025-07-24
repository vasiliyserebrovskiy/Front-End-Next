import BackButton from "@/components/BackButton/BackButton";
import { User } from "@/types";
import Image from "next/image";

export default async function UserDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  const res = await fetch(`https://api.escuelajs.co/api/v1/users/${id}`);

  if (!res.ok) {
    throw new Error("Fetch users details failed.");
  }

  const user: User = await res.json();

  return (
    <section className="flex justify-center">
      <div className="flex flex-col justify-center items-center gap-5 border rounded-lg p-4 m-4 w-150">
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
        <p>{user.email}</p>
        <p>{user.role}</p>
        <BackButton />
      </div>
    </section>
  );
}
