"use client";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg 
                 hover:bg-blue-600 hover:cursor-pointer 
                 transition-colors duration-300"
    >
      ⬅ Back
    </button>
  );
}
