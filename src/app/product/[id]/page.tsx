'use client'
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import { useCart } from '../../component/cartcontext';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  order: number;
  quantity: number;
}

export default function ProductListing() {
  const { id } = useParams();
  const { addToCart } = useCart();
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

  if (!id) {
    return <div>Loading...</div>;
  }

  const singleProduct = data.find(product => product.id === Number(id));
  if (!singleProduct) {
    return <div className="text-3xl">Product not found</div>;
  }

  const furtherProduts = [
    { id: 1, name: "Vitamin C Glow", image: "/pp1.webp", price: 1299 },
    { id: 2, name: "Vitamin C Hydrated", image: "/pp2.webp", price: 1199 },
    { id: 3, name: "Honey Lip Bam", image: "/pp3.webp", price: 788 },
    { id: 4, name: "Honey Mask", image: "/pp4.jpg", price: 899 },
  ];

  return (
    <main>
      <div className="ml-6 mt-3 space-x-2">
        <h2>
          <Link href={'/'}>Home <span><i className="fa-solid fa-greater-than"></i></span></Link>
          <span><Link href={'/shop'}>Shop <span><i className="fa-solid fa-greater-than"></i></span></Link></span>
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="mt-2">
          <div className="bg-[#fbebb5] rounded-lg w-full lg:w-[500px]  lg:mr-[20px] mt-10 lg:mt-32 lg:ml-20 flex justify-center h-auto items-center">
            <Image
              src={singleProduct.imageUrl}
              alt="loadingg"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="mr-0 lg:mr-24 mt-8 lg:mt-32 px-4 lg:px-0">
          <h1 className="text-3xl lg:text-6xl font-semibold">{singleProduct.name}</h1>
          <p className="mt-4 text-xl lg:text-2xl text-gray-400">Rs.{singleProduct.price}</p>
          <p className="mt-2 text-lg text-gray-500">
            <i className="fa-solid fa-star text-yellow-500"></i>
            <i className="fa-solid fa-star text-yellow-500"></i>
            <i className="fa-solid fa-star text-yellow-500"></i>
            <i className="fa-solid fa-star text-yellow-500"></i>
            <i className="fa-solid fa-star text-yellow-500"></i> | 5 Customer Ratings
          </p>
          <p className="mt-4 text-gray-500">Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>
          <p className="text-gray-500 mt-4">Size</p>
          <div className="ml-7 inline-flex gap-2">
            <button className="bg-[#fecdc9] w-10 h-10 rounded">Lg</button>
            <button className="bg-[#fecdc9] w-10 h-10 rounded">Xl</button>
            <button className="bg-[#fecdc9] w-10 h-10 rounded">XS</button>
          </div>
          <p className="text-gray-500 mt-4">Color</p>
          <div className="ml-8 mt-3 inline-flex gap-4">
            <div className="bg-black w-10 h-10 rounded-full"></div>
            <div className="bg-blue-600 w-10 h-10 rounded-full"></div>
            <div className="bg-gray-600 w-10 h-10 rounded-full"></div>
          </div>
          <div className="ml-5 mt-5 space-x-4">
            <button
              className="w-28 h-12 rounded border-2 border-gray-500"
              onClick={() => {
                addToCart(singleProduct);
                alert(`${singleProduct.name} has been added to your cart!`);
              }}
            >
              Add to cart
            </button>
          </div>
          <hr className="mt-5 border-gray-500" />
          <ul className="ml-6 text-gray-500 mt-2">
             <li>Sku: <span>SS001</span></li>
             <li>Category: <span>Sofas</span></li>
            <li>Tags: <span>Sofa, Chair, Home, Shop</span></li>
           </ul>
        </div>
      </div>
      <br />
      <div>
        <h2 className="text-center space-x-6 text-xl mt-5 "><span>Description</span><span className="text-gray-600">Additional Information</span><span className="text-gray-600">Reviews (5)</span></h2>
        <div className="flex justify-center items-center mt-7">
         <p className=" w-[900px] text-gray-400">Embodying the raw, wayward spirit of rock  roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
         <br />
        </div>
        <div className="flex justify-center items-center mt-12">
        <p className="text-center text-gray-400 w-[1000px]">Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
        </div>
      </div>
      <br />
      <hr  className="text-gray-600"/>
      <div className="mt-7">
         <h2 className="text-3xl text-center font-semibold mb-4">Related Products</h2>
      </div>      
      <div className="flex lg:justify-center lg:items-center overflow-x-auto space-x-6">      
        {furtherProduts.map((product, index) => (
          <div key={index} className="flex-none w-64">
            <Image
              src={product.image}
              alt="loading"
              width={400}
              height={400}
              className="rounded-md"
            />
            <h3 className="text-xl mt-2">{product.name}</h3>
            <h3 className="text-2xl font-semibold">Rs.{product.price}</h3>
          </div>
        ))}
      </div>
      <div className="mt-20">
        <Link href={'/shop'}><h2 className="text-3xl text-center  mb-4">View More</h2></Link>
      </div>
    </main>
  );
}
