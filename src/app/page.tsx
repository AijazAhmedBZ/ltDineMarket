import Image from "next/image";
import { Image as IImage } from "sanity";
import { client } from "../../sanity/lib/client";
import { product } from "../../sanity/product";

export const getProductData = async () => {
  const res = await client.fetch(`*[_type=="product"]{
    id,
    product,
    category,
    group -> {
      name
    },
    price,
    image
  }`);
  return res;
};

interface IProduct {
  id: number;
  product: string;
  category: string;
  group: {
    name: string;
  };
  price: number;
  image: IImage;
}

export default async function Home() {
  const data: IProduct[] = await getProductData();
  // console.log(data);
  return (
    <div>
      {data.map((product) => (
        <h1 key={product.id}>{product.group.name}</h1>
      ))}
    </div>
  );
}
