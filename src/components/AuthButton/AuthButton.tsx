"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButton() {
  // пример использования сессии в клиентском компоненте
  const { data: session } = useSession();
  // console.log(session);
  return session ? (
    <button
      onClick={() => {
        signOut();
      }}
      className="hover:text-amber-300 cursor-pointer"
    >
      Sign out
    </button>
  ) : (
    <button
      onClick={() => {
        signIn();
      }}
      className="hover:text-amber-300 cursor-pointer"
    >
      Sign in with Google
    </button>
  );
}
