"use client";
import Image from "next/image";
import style from "@/app/products/products.module.css";
import { Product } from "@/types";
// import { revalidateTag } from "next/cache";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();
  function handleDelete(id: number) {
    fetchDelete(id);
  }

  async function fetchDelete(id: number) {
    const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      router.refresh();
    }
  }

  return (
    <li key={"product" + product.id} className={style.productCard}>
      <h3>{product.title}</h3>
      <Image
        src={product.images[0]}
        alt={"Product " + product.title}
        width={150}
        height={200}
        className="w-40 h-auto"
        unoptimized
      />
      <span>{product.price} $</span>
      <button
        type="button"
        onClick={() => {
          handleDelete(product.id);
        }}
      >
        Delete
      </button>
      <Link
        href={`/products/server-version/${product.id}`}
        className="rounded boarder "
      >
        Details
      </Link>
    </li>
  );
}
