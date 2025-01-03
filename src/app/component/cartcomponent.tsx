// 'use client'
// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// export default function Cart() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleCart = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="md:relative  ">
//       <button onClick={toggleCart} className="flex items-center space-x-1">
//         <Image
//           src="/cart.png"
//           alt="Cart"
//           width={24}
//           height={24}
//           className="cursor-pointer"
//         />
//         <span className="md:hidden block"> Cart</span>
//       </button>

//       {isOpen && (
//         <div className="absolute md:right-0 mt-2 w w-72 sm:w-72 -ml-[52px]  md:w-96 bg-white shadow-lg p-4 rounded-lg z-50">
//           <h2 className="text-lg font-bold mb-4">Shopping Cart</h2>
//           <hr />
//           <div className="flex items-center justify-between mb-4 mt-2">
//             <div className="flex items-center">
//               <Image
//                 src="/sofa3.png"
//                 alt="Product"
//                 width={50}
//                 height={50}
//                 className="rounded-md bg-[#fbebb5]"
//               />
//               <div className="ml-4">
//                 <h3 className="font-medium">Asgaard sofa</h3>
//                 <p className="text-sm text-[#f1d063]">1 x Rs. 250,000.00</p>
//               </div>
//             </div>
//             <button className="text-red-500 text-xl">x</button>
//           </div>
//           <div className="flex justify-between text-lg mt-6 md:mt-96">
//             <span>Subtotal</span>
//             <span className="text-[#f9c828]">Rs. 250,000.00</span>
//           </div>
//           <hr />
//           <div className="flex mt-4 gap-4 flex-col sm:flex-row ">
//             <Link href="/cart" className="flex-1 border border-gray-500 py-2 rounded-xl text-gray-800 hover:bg-gray-100">
//               <button className="ml-3 w-full">View Cart</button>
//             </Link>
//             <Link href="/billing" className="flex-1 hover:bg-gray-100 border-2 border-gray-500 py-2 rounded-xl mt-2 sm:mt-0">
//               <button className="ml-3 w-full">Checkout</button>
//             </Link>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
// cartcomponent.tsx
'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../component/cartcontext";

export default function Cart() {
  const { cart, removeFromCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  const handleRemove = (id: number) => {
    removeFromCart(id);
  };

  const getSubtotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div className="md:relative">
      <button onClick={toggleCart} className="flex items-center space-x-1">
        <Image
          src="/cart.png"
          alt="Cart"
          width={24}
          height={24}
          className="cursor-pointer"
        />
        <span className="md:hidden block"> Cart</span>
      </button>

      {isOpen && (
        <div className="absolute md:right-0 mt-2 w w-72 sm:w-72 -ml-[52px] md:w-96 bg-white shadow-lg p-4 rounded-lg z-50">
          <h2 className="text-lg font-bold mb-4">Shopping Cart</h2>
          <hr />
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between mb-4 mt-2">
                <div className="flex items-center">
                  <Image
                    src={item.imageUrl || "/sofa3.png"} // Use item imageUrl or a fallback image
                    alt="Product"
                    width={50}
                    height={50}
                    className="rounded-md bg-[#fbebb5]"
                  />
                  <div className="ml-4">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-[#f1d063]">{item.quantity} x Rs. {item.price}</p>
                  </div>
                </div>
                <button
                  className="text-red-500 text-xl"
                  onClick={() => handleRemove(item.id)}
                >
                  x
                </button>
              </div>
            ))
          )}
          <div className="flex justify-between text-lg mt-6 md:mt-96">
            <span>Subtotal</span>
            <span className="text-[#f9c828]">Rs. {getSubtotal()}</span>
          </div>
          <hr />
          <div className="flex mt-4 gap-4 flex-col sm:flex-row">
            <Link href="/cart" className="flex-1 border border-gray-500 py-2 rounded-xl text-gray-800 hover:bg-gray-100">
              <button className="ml-3 w-full">View Cart</button>
            </Link>
            <Link href="/billing" className="flex-1 hover:bg-gray-100 border-2 border-gray-500 py-2 rounded-xl mt-2 sm:mt-0">
              <button className="ml-3 w-full">Checkout</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
