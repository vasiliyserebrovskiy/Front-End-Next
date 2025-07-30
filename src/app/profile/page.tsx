import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

import Image from "next/image";

export default async function Profile() {
  const session = await getServerSession(authOptions);
  // пример использования сессии на серверном компоненте
  return (
    <div className="flex flex-col items-center gap-5">
      <h2 className="text-green-700">User profile </h2>
      <p>{session?.user?.email}</p>

      <Image
        src={session?.user?.image || ""}
        alt="avatar"
        unoptimized
        width={200}
        height={200}
      />
    </div>
  );
}
