import Image from "next/image";
import { client } from "../../sanity/lib/client";
import { product } from "../../sanity/product";

export const getProductData = async () => {
  const res = await client.fetch(`*[_type=="product"]{
    product,
    category,
    price
  }`);
  return res;
};

interface IProduct {
  product: "string";
  category: "string";
  price: "number";
}

export default async function Home() {
  const data: IProduct[] = await getProductData();
  console.log(data);
  return (
    <div>
      {data.map((product) => (
        <h1>{product.product}</h1>
      ))}
    </div>
  );
}
