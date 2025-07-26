import { createCategory } from "@/app/actions/createCategory";
import React from "react";

export default function CreateCategory() {
  return (
    <div className="flex justify-center gap-2 p-2">
      <form
        action={createCategory}
        className="flex flex-col items-center border p-4 gap-4 rounded-2xl  border-green-600"
      >
        <input
          type="text"
          name="name"
          placeholder="name"
          className="border rounded-2xl p-2"
        />
        <input
          type="text"
          name="image"
          placeholder="image"
          className="border rounded-2xl p-2"
        />
        <button type="submit" className="border rounded-2xl p-2 border-blue-400 text-blue-700 hover:text-blue-300 cursor-pointer">
          Submit
        </button>
      </form>
    </div>
  );
}
