import UserCard from "@/components/UserCard/UserCard";
import { User } from "@/types";

//by default we work with server component
const UsersServerVersion = async () => {
  const res = await fetch("https://api.escuelajs.co/api/v1/users", {
    next: { tags: ["users"] },
  });

  // Caching with fetch - works only on server components.
  // 1 cache: "force-cache" - default caching (fetch is executed during build and stored, no further updates)
  // - for static pages that don't change (or change very rarely)

  // 2 cache: "no-store"
  // - do not store data and do not use cache.

  // 3 Revalidate option
  // next: { revalidate: 60 } - number of seconds after which the page should be updated
  // suitable for news, exchange rates, stock quotes, products

  // 4 Manual update
  // next: { tags: ["users"] } - inside fetch
  // to trigger an update, we can call { revalidateTag("users"); }

  if (!res.ok) {
    throw new Error("Fetch users failed.");
  }

  const users = await res.json();
  //   console.log(users); // will be printed on server

  return (
    <div className="flex gap-10  flex-wrap justify-center">
      {users.map((user: User) => (
        <UserCard user={user} key={user.id} />
      ))}
    </div>
  );
};

export default UsersServerVersion;
