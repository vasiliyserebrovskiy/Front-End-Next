import { createProduct } from "@/app/actions/createProduct";
import React from "react";

export default function CreateProduct() {
  return (
    <section className="flex justify-center p-3">
      <div className="flex flex-col gap-2">
        <h2>Create Product</h2>
        <form
          action={createProduct}
          className="flex flex-col items-center gap-5"
        >
          <input type="text" name="title" placeholder="title" />
          <input type="text" name="price" placeholder="price" />
          <input type="text" name="description" placeholder="description" />
          <input type="text" name="categoryId" placeholder="categoryId" />
          <input type="text" name="image" placeholder="image" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}
