"use client";
import { User } from "@/types";
import { useEffect, useState } from "react";
import UserCard from "@/components/UserCard/UserCard";

export default function UsersClientVersion() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);
  async function fetchUsers() {
    const res = await fetch("https://api.escuelajs.co/api/v1/users");
    if (!res.ok) {
      throw new Error("Failed to fetch users");
    }
    const arr = await res.json();
    console.log(arr);
    setUsers(arr);
  }
  return (
    <div className="flex gap-10  flex-wrap justify-center">
      {users.map((user) => (
        <UserCard user={user} key={user.id} />
      ))}
    </div>
  );
}
