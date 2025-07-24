import { Product } from "@/types";
import style from "../products.module.css";
// import Image from "next/image";
import ProductCard from "@/components/ProductCard/ProductCard";

const ProductsServerVersion = async () => {
  const res = await fetch("https://api.escuelajs.co/api/v1/products", {
    next: { tags: ["products"] },
  });

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
            <ProductCard product={p} key={p.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductsServerVersion;
// default cache -> SSG server side generation - > only on first build the document would be generated.
// This variant worked only for static information

// next: { revalidate: 60 } -> ISR incremetal server regeneration
// use time interval for revalidate (make new request) after 60 sec get the same first client receive old data,
// after that will get new fetch()

// next: { revalidate: 0 } -> SSR - Server Side Rendering -> get new data every request from client
// hi load on server

// the same varient like -> cache: "no-store",

//  SSG - no update ufter build
// SSR - each request to the server data will updated
// ISR - using timer
