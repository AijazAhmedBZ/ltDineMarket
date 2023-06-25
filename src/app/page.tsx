import Image from "next/image";
import { Image as IImage } from "sanity";
import { client } from "../../sanity/lib/client";

export const getProductData = async () => {
  const res = await client.fetch(`*[_type=="product"]{
    _id,
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
  _id: string;
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-x-10 gap-y-20">
      {data.map((product) => (
        <div key={product._id}>
      
        </div>
      ))}
    </div>
  );
}
