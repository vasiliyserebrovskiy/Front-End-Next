import { User } from "@/types";

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
    <div>
      {users.map((user: User) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </div>
  );
};

export default UsersServerVersion;
