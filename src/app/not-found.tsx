"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full flex flex-col justify-center items-center p-6">
      <h2 className="font-bold text-exl">Page not Found</h2>
      <Link
        href={"/"}
        className="underline pt-8 board from-yellow-400 to-red-500 px-1 py-8"
      >
        Back to home
      </Link>
    </div>
  );
}
