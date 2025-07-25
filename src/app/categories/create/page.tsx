import { createCategory } from "@/app/actions/createCategory";
import React from "react";

export default function CreateCategory() {
  return (
    <div>
      <form action={createCategory}>
        <input type="text" name="name" placeholder="name" />
        <input type="text" name="image" placeholder="image" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
