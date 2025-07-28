import { createProduct } from "@/app/actions/createProduct";
import { Category } from "@/types";
import React from "react";

export default async function CreateProduct() {
  const res = await fetch("https://api.escuelajs.co/api/v1/categories");
  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  const categories: Category[] = await res.json();

  return (
    <section className="flex justify-center p-3">
      <div className="flex flex-col justify-center items-center gap-2 p-2">
        <h2>Create Product</h2>
        <form
          action={createProduct}
          className="flex flex-col items-center border p-4 gap-4 rounded-2xl  border-green-600"
        >
          <input
            type="text"
            name="title"
            placeholder="title"
            className="border rounded-2xl p-2"
            required
          />
          <input
            type="number"
            name="price"
            placeholder="price"
            className="border rounded-2xl p-2"
            required
          />
          <input
            type="text"
            name="description"
            placeholder="description"
            className="border rounded-2xl p-2"
            required
          />
          {/* <input
            type="number"
            name="categoryId"
            placeholder="categoryId"
            className="border rounded-2xl p-2"
          /> */}
          <select name="categoryId" className="border rounded-2xl p-2" required>
            {/* <option value={35}>Clothes</option>
            <option value={36}>Electronics</option> */}
            {categories.map((category: Category) => (
              <option
                value={category.id}
                key={category.id}
                className="bg-black"
              >
                {category.name}
              </option>
            ))}
          </select>
          <input
            type="text"
            name="image"
            placeholder="image"
            className="border rounded-2xl p-2"
            required
          />
          <button
            type="submit"
            className="border rounded-2xl p-2 border-blue-400 text-blue-700 hover:text-blue-300 cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
