'use client'
import Image from "next/image";
import back from '../../../public/back2.jpg';
import Link from "next/link";
import Button from '../component/button'
import "@fortawesome/fontawesome-free/css/all.min.css";
import glass from '../../../public/glass.png'
import { useEffect,useState } from "react";
import { client } from "@/sanity/lib/client";
export default function BlogAbout() {
  interface BlogCardData {
      title: string;
      description: string;
      imageUrl: string;
      readMore: string;
      timeToRead: string;
      publishDate: string;
      author: string;
      category:string;
      order: number; 
    }
    
    
      const [data2, setData2] = useState<BlogCardData[]>([]);
    
      useEffect(() => {
        const fetchData = async () => {
          const query = await client.fetch(
            `*[_type == "blogsabout"] | order(order asc) {
              title,
              description,
              "imageUrl": image.asset->url,
              readMore,
              timeToRead,
              author,
              category,
              publishDate,
              order,
            }`
          );
          setData2(query);
        };
        fetchData();
  
      }, []);
  
    
    

  const Images =[
    {
        title: "Going all-in with millennial design",
       image: '/post1.jpg'
    },
    {
        title: "Exploring new ways of decorating",
        image: '/post2.jpg'
    },
    {
        title: "Handmade pieces that took time to make",
        image: '/post3.jpg'
    },
    {
        title: 'Modern Home in Milan',
        image: '/post4.jpg'
    },
    {
        title: "Colorful Office Redesigned",
        image: '/post5.jpg'
    },
]
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

        <div className="absolute inset-x-6 -mt-32 flex justify-center items-center">
          <h2 className="lg:text-5xl text-3xl">Blog</h2>
        </div>

        <div className="absolute inset-x-6 -mt-16 flex justify-center items-center space-x-2">
          <h2><Link href={'/'}>Home</Link></h2>
          <p className="mt-1"><i className="fa-solid fa-greater-than"></i></p>
          <h2><Link href={'/blogabout'}>Blog</Link></h2>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between lg:mt-6 lg:px-36 px-6">
        <div className="space-y-7 lg:w-3/4 w-full">
          {data2.map((blog, index) => (
            <div key={index}>
              <Image 
                className="rounded-lg"
                src={blog.imageUrl}
                alt="blog image"
                width={580}
                height={500}
              />
              <h3 className="mt-3 space-x-7 text-gray-500">
                <i className="fa-regular fa-user"></i><span> {blog.author} </span>  
                <span><i className="fa-regular fa-calendar-days"></i> {new Date(blog.publishDate).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })}</span>
                <span><i className="fa-solid fa-tag"></i> {blog.category}</span>
              </h3>
              <h2 className="mt-3 text-2xl font-semibold">{blog.title}</h2>
              <p className="mt-2 xl:w-[550px]">{blog.description}</p>
              <button className="underline underline-offset-[12px] mt-6">
                {blog.readMore}
              </button>
            </div>
          ))}
        </div>

        <div className="lg:w-1/4 w-full flex flex-col items-start mt-6 lg:mt-0">
          <div className="relative w-full bg-[#f5f5f5] rounded">
            <input
              className="w-full h-12 bg-transparent rounded pl-4 pr-12 outline-none"
              type="search"
              placeholder="Search blogs..."
            />
            <Image
              src={glass}
              alt="Search Icon"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 cursor-pointer"
            />
          </div>

          <h2 className="text-xl font-semibold mt-6">Category</h2>
          <ul className="mt-7 space-y-5 text-gray-500">
            <li>Crafts <span className="float-right">2</span></li>
            <li>Design <span className="float-right">8</span></li>
            <li>HandMade <span className="float-right">7</span></li>
            <li>Interior <span className="float-right">1</span></li>
            <li>Wood <span className="float-right">6</span></li>
          </ul> 

          <h2 className="text-2xl mt-6">Recent Posts</h2>
          <div className="block mt-6">
            {Images.map((image, index) => (
              <div key={index} className="flex items-center space-x-4 mb-4">
                <Image
                  className="rounded"
                  src={image.image}
                  alt=""
                  width={100}
                  height={100}
                />
                <span className="text-lg font-medium">{image.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center space-x-4 mt-8">
        <Button name='1' style="w-10 h-10 bg-[#fbebb5] rounded"/>
        <Button name='2' style="w-10 h-10 bg-[#fff9e5] hover:bg-[#fbebb5] rounded"/>
        <Button name='3' style="w-10 h-10 bg-[#fff9e5] hover:bg-[#fbebb5] rounded"/>
        <Button name='Next' style="w-20 h-10 bg-[#fff9e5] hover:bg-[#fbebb5] rounded"/>
      </div>
      <br />
      <br />
    </main>
  );
}
