'use client'
import Image from "next/image";
import Link from "next/link";
import Button from '../component/button';
import back from '../../../public/back2.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';
import  { useEffect,useState } from "react";
import { client } from "@/sanity/lib/client";
export default function ShopPage() {

  interface Product {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    order: number;
  }
  

    const [data, setData] = useState<Product[]>([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const query = `
          *[_type == "product2"] | order(order asc) {
            id,
            name,
            price,
            "imageUrl": image.asset->url,
            order
          }
        `;
        const result: Product[] = await client.fetch(query);
        setData(result);
      };
  
      fetchData();
    }, []);
  
  

  return (
    <main>
      <div className="relative">
        <Image className="w-full h-60" src={back} alt="background" />
        <div className="absolute inset-0 bg-white bg-opacity-50"></div>

        <div className="absolute inset-0 flex justify-center items-center mt-6">
          <Image
            className="lg:w-[80px] -mt-24 w-[45px] h-[45px] lg:h-[80px]"
            src={'/logo.png'}
            alt="Logo"
            width={100}
            height={100}
          />
        </div>

        <div className="absolute inset-x-6 -mt-32  flex justify-center items-center">
          <h2 className="lg:text-5xl sm:text-3xl">Shop</h2>
        </div>

        <div className="absolute inset-x-6 -mt-16 flex justify-center items-center space-x-2">
          <h2><Link href={'/'}>Home</Link></h2>
          <p className="mt-1"><i className="fa-solid fa-greater-than"></i></p>
          <h2><Link href={'/shop'}>Shop</Link></h2>
        </div>
      </div>

      <div className="flex justify-between w-full sm:h-24 h-28 lg:h-20 bg-[#faf4f4] mt-12 px-4 sm:px-8 md:px-12">
        <div className="flex items-center flex-wrap">
          <h2 className="ml-4 sm:ml-8 md:ml-28">
            <i className="fa-solid fa-sliders"></i>
          </h2>
          <p className="ml-2 sm:ml-3 font-semibold">Filter</p>
          <p className="ml-4 sm:ml-6">
            <i className="fas fa-grip-horizontal"></i>
          </p>
          <p className="ml-4 sm:ml-6">
            <i className="fas fa-bars"></i>
          </p>
          <div className="w-1 h-10 bg-gray-400 ml-4 sm:ml-12 md:ml-12"></div>
          <p className="ml-4 sm:ml-6 md:ml-8">Showing 1-16 of 32 results</p>
        </div>
        <div className="mr-4 sm:mr-8 md:mr-12 flex justify-center items-center space-x-4 sm:space-x-6">
          <h2 className="text-sm sm:text-base">
            Show
            <Button name="16" style="w-12 h-12 bg-white text-center text-gray-500" />
          </h2>
          <h2 className="text-sm sm:text-base">
            Sort by
            <Button name="Default" style="w-20 h-12 bg-white text-center text-gray-500" />
          </h2>
        </div>
      </div>

  <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
  {data.map((product) => (
    <div
      key={product.id}
      className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-[400px]"
    >
      <Link
        href={`/product/${product.id}`}
        className="h-[200px] w-full flex justify-center items-center"
      >
        <Image
          src={product.imageUrl}
          alt={product.name}
          height={180}
          width={180}
          className="rounded-md object-contain"
        />
      </Link>
      <div className="mt-4">
        <h3 className="text-base font-semibold text-gray-700 truncate">
          {product.name}
        </h3>
        <p className="mt-2 text-lg font-bold text-black">
           {product.price}
        </p>
      </div>
    </div>
  ))}
</div>



      <div className="flex justify-center items-center space-x-4 mt-8">
        <Button name='1' style="w-10 h-10 bg-[#fecdc9] rounded"/>
        <Button name='2' style="w-10 h-10 bg-[#faf4f4] hover:bg-[#fecdc9] rounded"/>
        <Button name='3' style="w-10 h-10 bg-[#faf4f4] hover:bg-[#fecdc9] rounded"/>
        <Button name='Next' style="w-20 h-10 bg-[#faf4f4] hover:bg-[#fecdc9] rounded"/>
      </div>

      <div className="w-full bg-[#faf4f4] xl:h-44 h-auto mt-16 flex flex-col sm:flex-row md:flex-row items-center justify-center space-y-12 sm:space-y-0 px-4 lg:px-8">
        <div className="text-center sm:text-left xl:space-x-16">
          <h2 className="text-2xl xl:text-4xl xl:ml-16 sm:text-xl md:text-xl lg:text-2xl font-semibold">Free Delivery</h2>
          <p className="w-full xl:w-80 sm:w-48 md:w-52 lg:w-60 mx-auto md:mx-0 mt-4 text-gray-500">
            For all orders over $50, consectetur adipiscing elit.
          </p>
        </div>

        <div className="text-center sm:text-left xl:space-x-16">
          <h2 className="text-2xl xl:text-4xl sm:text-xl md:text-xl lg:text-2xl font-semibold">90 Days Return</h2>
          <p className="w-full xl:w-80 sm:w-48 xl:ml-16 md:w-52 lg:w-60 mx-auto md:mx-0 mt-4 text-gray-500">
            If goods have problems, consectetur adipiscing elit.
          </p>
        </div>

        <div className="text-center sm:text-left xl:space-x-16">
          <h2 className="text-2xl xl:text-4xl xl:ml-16 sm:text-xl md:text-xl lg:text-2xl font-semibold">Secure Payments</h2>
          <p className="w-full xl:w-80 sm:w-48 md:w-52 lg:w-60 mx-auto md:mx-0 mt-4 text-gray-500">
            100% secure payment, consectetur adipiscing elit.
          </p>
        </div>
      </div>

      <br />
      <br />
    </main>
  );
}
