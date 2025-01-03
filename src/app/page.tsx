'use client'
import Link from "next/link";
import Image from "next/image";
import Button from './component/button'
import '@fortawesome/fontawesome-free/css/all.min.css';
 import sofa from '../../public/back1.png'
import products2 from '../../public/products2.png'
import products1 from '../../public/products1.png'
import organic from '../../public/back4.png'
import back from '../../public/back.jpg'
import { client } from "@/sanity/lib/client";
import { useState,useEffect } from "react";
import { CartProvider } from '../app/component/cartcontext';
export default function Home(){

  const [data, setData] = useState<
    {
      name: string;
      description: string;
      price: number;
      currency: string;
      imageUrl: string;
      availability: string;
      condition: string;
      order: number; 
    }[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      const query = await client.fetch(`*[_type == "product"] | order(order asc) {
        name,
        description,
        price,
        currency,
        "imageUrl": image.asset->url,
        availability,
        condition,
        order,
      }`);
      setData(query);
    };
    fetchData();
  }, []);
  

  interface BlogCardData {
    title: string;
    description: string;
    imageUrl: string;
    readMoreLink: string;
    timeToRead: string;
    publishDate: string;
    order: number; 
  }
  
  
    const [data2, setData2] = useState<BlogCardData[]>([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const query = await client.fetch(
          `*[_type == "blogCard"] | order(order asc) {
            title,
            description,
            "imageUrl": image.asset->url,
            readMoreLink,
            timeToRead,
            publishDate,
            order,
          }`
        );
        setData2(query);
      };
      fetchData();

    }, []);

  
  

  
  return(
  
    <CartProvider >
<main className="text-gray-700">
  <div className="w-full lg:h-[630px] md:h-[730px] bg-[#fecdc9] overflow-hidden">
    <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start lg:gap-10 px-4 lg:px-20 py-10">
    
      <div className="family text-center lg:text-left lg:ml-[10%]  mt-[16%] lg:mt-[12%] sm:mt-[9%]">
        <h1 className="text-4xl text-gray-700 lg:w-96 sm:text-5xl italic font-serif lg:text-[60px]  ">
        SoftAura <p className="lg:mt-7 text-2xl lg:block"> Nurture Your Skin, Elevate Your Aura </p>
        </h1>
        <Link href='/shop'><Button name="Shop now" style="underline underline-offset-8 hover:text-gray-500 mt-4" /></Link>
      </div>

      <div className=" xl:mt-44 lg:mt-44 ">
        <Image
          src={sofa}
          alt=""
          className="mx-auto lg:mr-10 lg:-mt-9 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px]"
        />
      </div>
    </div>
  </div>


   <div className="grid md:grid-cols-1 lg:grid-cols-2 md:h-[1300px]  bg-[#faf4f4] h-[1000px] sm:h-[1000px] lg:h-[480px] xl:h-[480px]">
    <div className="md:-mt-7">
      <Image src={products1}
      className="mt-6  xl:w-[520px] md:ml-44 lg:mt-8  lg:ml-40  lg:w-[380px] md:w-[650px]"
      alt=""
      />
     <div className="family2 -mt-12 ml-12 md:-mt-12 md:ml-[200px] xl:ml-[210px] xl:-mt-12 lg:-mt-7  lg:ml-[160px]">
     <h1 className="text-3xl ">Whitening Cream</h1>
     <Link href={'/shop'}><Button name="View More" style="mt-4 underline underline-offset-8 hover:text-gray-500 "/></Link>
     </div>
    </div>
    <div>
    <Image src={products2}
    className="mt-6 sm:ml-28 w-[350px]  xl:w-[350px] lg:ml-40 lg:w-[250px] "
      alt=""
      />
      <div className="family2   md:-mt-5 md:ml-[180px] xl:ml-[210px] xl:-mt-6 lg:-mt-5 lg:ml-[180px] -mt-2 ml-20">
     <h1 className="text-3xl">Night Cream</h1>
     <Link href={'/shop'}><Button name="View More" style="mt-4 underline underline-offset-8 hover:text-gray-500 "/></Link>
     </div>
    </div>
    
  </div> 

<div>

  <h1 className="mt-8 text-center text-4xl">Top Picks For You</h1>
  <p className="text-center mt-3 text-gray-500">Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
</div>
<div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
  {data.map((item, index) => (
    <div
      key={index}
      className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-[400px]"
    >
      <Link href="/shop" className="h-[200px] w-full flex justify-center items-center">
        <Image
          src={item.imageUrl}
          alt={item.name}
          height={180}
          width={180}
          className="rounded-md object-contain"
        />
      </Link>
      <div className="mt-4">
        <h3 className="text-base font-semibold text-gray-700 truncate">{item.name}</h3>
        <p className="mt-2 text-lg font-bold text-black">{item.currency} {item.price}</p>
        
      </div>
    </div>
  ))}
</div>





 


    <div>
    <h1 className="text-center text-2xl mt-16 underline underline-offset-[18px]">View More</h1>
    </div>
    <br />
   
  <div className="bg-[#fecdc9] mt-6 w-full h-[500px] lg:h-[540px] lg:flex lg:justify-between block ">
   <div className="md:flex md:items-center  md:justify-center">
    <Image
    className="lg:w-[700px]  w-[300px]  lg:ml-7"
    src={organic}
    alt=""
    />
   </div>

   <div className="lg:mr-20 ml-5 lg:mt-52">
    <p className="text-center mt-16 font-semibold">New Arrivals</p>
    <h1 className="font-semibold text-center mt-10 sm:mt-0 text-4xl lg:text-4xl xl:text-5xl">Ayurvedic Products</h1>
   <div className="flex items-center justify-center">
    <Link href='/cart'><Button name="Order Now" style="xl:ml-16 xl:mt-10 mt-7 lg:ml-24 border-2 border-black  w-44 h-12"/></Link>
   </div>
   </div>
  </div>


<div className="text-center mt-20 ">
  <h1 className="text-3xl">Our Blogs</h1>
  <p>Find a bright ideal to suit your taste with our great selection</p>
</div>

<div className="sm:flex-row flex-col flex  justify-center items-center gap-12 mt-20 ">
{data2.map((item,index)=>(
  <div key={index}>
      <Image
      className="rounded-xl"
    src={item.imageUrl}
    alt="loadingg"
    width={300}
    height={300}
    />
    <h2 className="mt-5 text-center">{item.title}</h2>
    <div className="flex justify-center ">
    <Link href={'/blogabout'}><Button name="Read More" style=" text-center mt-2 font-semibold underline underline-offset-[10px]" /></Link>
     </div>
     <div className="flex justify-center mt-3">
    <p><i className="fa-regular fa-clock"></i> {item.timeToRead} <span><i className="fa-regular fa-calendar-days"> </i> {new Date(item.publishDate).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })}</span></p>
     </div>
    <br />
  </div>
))}
</div>
<div>
      <h1 className="text-center text-2xl mt-16 underline underline-offset-[18px]">View All Post</h1>
    </div>
    <div className="relative">
  <Image
    className="mt-16 w-full "
    src={back}
    alt="loadingg"
  />
  <div className="absolute inset-0  flex flex-col justify-center items-center text-center ">
    <h1 className="md:text-6xl text-3xl text-black  font-bold">Our Instagram</h1>
    <p className="mt-3">Follow our store on Instagram</p>
    <Link href={'/contact'}><Button name="Follow Us" style="rounded-xl bg-gray-300 w-32  md:mt-4 h-8" /></Link>
  </div>
</div>

</main>

</CartProvider>
  )
}


