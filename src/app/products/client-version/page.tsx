"use client";

import { Product } from "@/types";
import { useEffect, useState } from "react";
import Image from "next/image";
import style from "../products.module.css";

const ProductsClientVersion = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      const res = await fetch("https://api.escuelajs.co/api/v1/products");

      if (!res.ok) {
        throw new Error(
          `Products fetch error: ${res.status} ${res.statusText}`
        );
      }

      const productsRes = await res.json();
      setProducts(productsRes);
    } catch (error) {
      setError(`Error receiving products list: ${error}`);
    }
  }

  return (
    <div className={style.mainDiv}>
      <h2>Products list</h2>
      {error ? (
        <p>error</p>
      ) : (
        <div className={style.productsDiv}>
          <ul>
            {products.map((p) => (
              <li key={"product" + p.id} className={style.productCard}>
                <h3>{p.title}</h3>
                {/* <img src={p.images[0]} alt="product" /> */}
                <Image src={p.images[0]} alt="Photo" width={150} height={200} />
                <span>{p.price} $</span>
                {/* <p>{p.description}</p> */}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProductsClientVersion;
