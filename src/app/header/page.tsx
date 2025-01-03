
'use client'; 

import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import Cart from '../component/cartcomponent';
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Header() {
  const [isMobileMenu, setMobileMenu] = useState(false);
  const [data, setData] = useState<{
    imageUrl?: string;
    colorpick?: string;
    navigationLinks?: { label: string; linkname: string }[];
  } | null>(null);

  const toggleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
  };

  useEffect(() => {
    const fetchData = async () => {
      const query = await client.fetch(`*[_type == "header"][0]{
        "imageUrl": image.asset->url,
        colorpick,
        navigationLinks[] {
          label,
          linkname
        }
      }`);
      setData(query);
    };
    fetchData();
  }, []);

  return (
    <div className="flex justify-between items-center p-4 bg-[#fecdc9]">
      <div className="flex items-center space-x-4">
        <button className="md:hidden" onClick={toggleMobileMenu}>
          <i
            className={`fa ${isMobileMenu ? 'fa-times' : 'fa-bars'} text-3xl text-gray-800 hover:text-gray-600 transition-transform duration-300`}
          ></i>
        </button>
      </div>

      <div className="hidden md:flex flex-grow justify-center">
        <ul className="font-semibold flex gap-12">
          {data?.navigationLinks?.map((link, index) => (
            <li
              key={index}
              className="hover:text-gray-600 hover:underline-offset-2 hover:underline mt-5 cursor-pointer"
            >
              <Link href={link.linkname ? `/${link.linkname}` : '/'}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={`space-x-7 mt-10 hidden md:flex`}>
        <button>
          <Link href="/myaccount">
            <i className="fa-regular fa-user text-2xl text-gray-800 hover:text-gray-600 transition-all duration-300"></i>
          </Link>
        </button>
        <button>
          <i className="fa-solid fa-magnifying-glass text-2xl text-gray-800 hover:text-gray-600 transition-all duration-300"></i>
        </button>
        <button>
          <i className="fa-regular fa-heart text-2xl text-gray-800 hover:text-gray-600 transition-all duration-300"></i>
        </button>

        <Cart />
      </div>

      <div className={`md:hidden ${isMobileMenu ? 'block' : 'hidden'} relative top-2 right-32 bg-[#fecdc9] p-4`}>
        <ul className="font-semibold flex flex-col gap-4">
          {data?.navigationLinks?.map((link, index) => (
            <li
              key={index}
              className="hover:text-gray-500"
            >
              <Link href={link.linkname ? `/${link.linkname}` : '/'}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-4 mt-6">
          <button className="flex justify-between items-center">
            <Link href="/myaccount">
              <i className="fa-regular fa-user text-2xl text-gray-800 hover:text-gray-600 transition-all duration-300"></i>
            </Link>
            <span>Account</span>
          </button>
          <button className="flex justify-between items-center">
            <i className="fa-solid fa-magnifying-glass text-2xl text-gray-800 hover:text-gray-600 transition-all duration-300" aria-hidden="true"></i>
            <span>Search</span>
          </button>
          <button className="flex justify-between items-center">
            <i className="fa-regular fa-heart text-2xl text-gray-800 hover:text-gray-600 transition-all duration-300"></i>
            <span>Favorites</span>
          </button>

          <Cart />
        </div>
      </div>
    </div>
  );
}
