"use server"

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function createCategory(formData: FormData) {
    const name = formData.get("name")?.toString();
    const image = formData.get("image")?.toString();

    // console.log(name, image);

    //save to DB or make fetch
    const res = await fetch("https://api.escuelajs.co/api/v1/categories", {
        method: "POST",
        headers: {"Content-Type":"Application/JSON"},
        body: JSON.stringify({name, image}),
    });
    revalidateTag("categories");
    redirect("/categories");
}