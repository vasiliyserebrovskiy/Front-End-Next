import Link from "next/link";
import React from "react";
import Image from "next/image";
import { User } from "@/types";

interface Props {
  user: User;
}

export default function UserCard({ user }: Props) {
  return (
    <ul
      // key={user.id}
      className="flex flex-col justify-center items-center list-none border-2 border-green-600 rounded-lg p-4 m-4"
    >
      <li className="flex flex-col items-center p-2 gap-4">
        <p>{user.name}</p>
        <Image
          src={user.avatar}
          alt={"User " + user.name}
          width={150}
          height={200}
          className="w-40 h-auto rounded-lg"
          unoptimized
        />
        <Link
          href={`/users/server-version/${user.id}`}
          className="text-blue-700 hover:text-yellow-500 "
        >
          Details
        </Link>
      </li>
    </ul>
  );
}
