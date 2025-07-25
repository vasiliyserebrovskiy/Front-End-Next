import Image from "next/image";
type Category = {
  id: number;
  name: string;
  slug: string;
  image: string;
};
export default async function Categories() {
  const res = await fetch("https://api.escuelajs.co/api/v1/categories", {
    next: { tags: ["categories"] },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }
  const categories = await res.json();
  return (
    <div>
      <ul>
        {categories.map((category: Category) => (
          <li key={category.id}>
            <p>{category.name}</p>
            <Image
              src={category.image}
              alt={category.name}
              width={200}
              height={200}
              unoptimized
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

// export default async function Categories() {
//   const res = await fetch("https://api.escuelajs.co/api/v1/categories", {
//     next: { tags: ["categories"] },
//   });
//   if (!res.ok) {
//     throw new Error("Failed to fetch Categories");
//   }
//   const categories = await res.json();
//   return (
//     <div>
//       <ul>
//         {categories.map((category: Category) => {
//           <li key={category.id}>
//             <p>{category.name}</p>
//             <Image
//               src={category.image}
//               alt={category.name}
//               width={200}
//               height={200}
//               unoptimized
//             />
//           </li>;
//         })}
//       </ul>
//     </div>
//   );
// }
