import { createProduct } from "@/app/actions/createProduct";
import React from "react";

export default function CreateProduct() {
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
          />
          <input
            type="text"
            name="price"
            placeholder="price"
            className="border rounded-2xl p-2"
          />
          <input
            type="text"
            name="description"
            placeholder="description"
            className="border rounded-2xl p-2"
          />
          <input
            type="text"
            name="categoryId"
            placeholder="categoryId"
            className="border rounded-2xl p-2"
          />
          <input
            type="text"
            name="image"
            placeholder="image"
            className="border rounded-2xl p-2"
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
