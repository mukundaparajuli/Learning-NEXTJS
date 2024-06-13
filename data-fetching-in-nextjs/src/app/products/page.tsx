import { cookies } from "next/headers";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
};

export default async function ProductPage() {
  const response = await fetch("http://localhost:3001/products", {
    next: {
      revalidate: 10,
    },
  });
  const products = await response.json();

  // const cookieStore = cookies();
  // cookieStore.get("theme");

  // const detailResponse = await fetch("http://localhost:3001/products/1");
  // const details = await response.json();

  return (
    <ul className="flex flex-col gap-4 m-2">
      {products.map((product: Product) => (
        <li
          key={product.id}
          className="bg-slate-700 text-white rounded-md shadow-sm p-3"
        >
          <div className="font-semibold text-lg">{product.title}</div>
          <div className="text-sm">{product.description}</div>
          <div className="font-sm"> $ {product.price}</div>
        </li>
      ))}
    </ul>
  );
}
