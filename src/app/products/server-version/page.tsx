import { Product } from "@/types";
import style from "../products.module.css";
import Image from "next/image";

export const ProductsServerVersion = async () => {
  const res = await fetch("https://api.escuelajs.co/api/v1/products");

  if (!res.ok) {
    throw new Error(`Products fetch error: ${res.status} ${res.statusText}`);
  }

  const products: Product[] = await res.json();

  return (
    <div className={style.mainDiv}>
      <h2>Products server list</h2>
      <div className={style.productsDiv}>
        <ul>
          {products.map((p) => (
            <li key={"product" + p.id} className={style.productCard}>
              <h3>{p.title}</h3>
              {/* <img src={p.images[0]} alt="product" /> */}
              <Image
                src={p.images[0]}
                alt="Photo"
                width={150}
                height={200}
                className="w-40 h-auto"
              />
              <span>{p.price} $</span>
              {/* <p>{p.description}</p> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductsServerVersion;
