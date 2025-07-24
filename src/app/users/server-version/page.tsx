import { User } from "@/types";
import Image from "next/image";
import Link from "next/link";

//by default we work with server component
const UsersServerVersion = async () => {
  const res = await fetch("https://api.escuelajs.co/api/v1/users", {
    next: { tags: ["users"] },
  });

  //кэширование с fetch - работает только на серверных компонентах.
  // 1 cache: "force-cache" - кэширование по умолчанию (при билде выполняем запрос и сохраняем их, дальше они не обновляются)
  // - статические страницы, которые не меняются (или меняются крайне редко)

  // 2 cache: "no-store"
  // - не хранить данные и не использовать кэш.

  // 3 Revalidate вариант
  // next: {revalidate: 60} - количество секунд, через какое время обновлять страницу
  // новости, курсы валют, котировки, продукты

  // 4 ручное обновление
  // next: {tags: ["users"]} - внутри fetch
  // для вызова обновления, можем написать {revalidateTag("users"); }

  if (!res.ok) {
    throw new Error("Fetch users failed.");
  }

  const users = await res.json();
  //   console.log(users); // will be printed on server

  return (
    <div className="flex gap-10  flex-wrap">
      {users.map((user: User) => (
        <ul
          key={user.id}
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
      ))}
    </div>
  );
};

export default UsersServerVersion;
