"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function createProduct(formData: FormData) {
  const title = formData.get("title")?.toString();
  const price = formData.get("price")?.toString();
  const description = formData.get("description")?.toString();
  const categoryId = formData.get("categoryId")?.toString();
  const images = [formData.get("image")?.toString()];

  console.log(title, price, description, categoryId, images);

  const res = await fetch("https://api.escuelajs.co/api/v1/products", {
    method: "POST",
    headers: { "Content-Type": "Application/JSON" },
    body: JSON.stringify({ title, price, description, categoryId, images }),
  });

  if (!res.ok) {
    const resObj = await res.json();
    console.log(res.status);
    console.log(resObj);
    console.log("create product fetch error");
  }
  revalidateTag("products");
  redirect("/products/server-version");
}
