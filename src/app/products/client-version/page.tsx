"use client";

import { Product } from "@/types";
import { useEffect, useState } from "react";
// import Image from "next/image";
import style from "../products.module.css";
import ProductCard from "@/components/ProductCard/ProductCard";

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
      <h2>Products client list</h2>
      {error ? (
        <p>{error}</p>
      ) : (
        <div className={style.productsDiv}>
          <ul>
            {products.map((p) => (
              <ProductCard product={p} key={p.id} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProductsClientVersion;
