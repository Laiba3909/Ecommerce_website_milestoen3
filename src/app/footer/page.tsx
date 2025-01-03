import Link from "next/link";
export default function Footer() {
  return (
    <>
      <main>
        <div className="w-full  text-black p-7">
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start">
            <div className="flex-1 text-center sm:text-left mb-6 sm:mb-0">
              <p className="w-72 mx-auto mt-12 sm:mx-0">
                400 University Drive Suite 200 Coral Gables,
                <br />
                FL 33134 USA
              </p>
            </div>

            <div className="flex-1 text-center sm:text-left mb-6 sm:mb-0">
              <h2 className="font-bold mb-4 text-gray-500">Links</h2>
              <ul className="space-y-2">
                <li className="mb-2"><Link href="/">Home</Link></li>
                <li className="mb-2"><Link href="/">Shop</Link></li>
                <li className="mb-2"><Link href="/">About</Link></li>
                <li className="mb-2"><Link href="/">Contact</Link></li>
              </ul>
            </div>

            <div className="flex-1 text-center sm:text-left mb-6 sm:mb-0">
              <ul className="space-y-5">
                <li className="mb-2 text-gray-500">Help</li>
                <li className="mb-2">Payment options</li>
                <li className="mb-2">Returns</li>
                <li className="mb-2">Privacy Policies</li>
              </ul>
            </div>

            <div className="flex-1 text-center sm:text-left">
              <h2 className="font-bold mb-4 text-gray-400">Newsletter</h2>
              <div className="block  sm:justify-start items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="border-b-2 border-black bg-transparent text-black focus:outline-none w-64 px-2 py-1"
                />
                <span className="text-black  ml-4 cursor-pointer underline underline-offset-8">Subscribe</span>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-gray-300"/>
        <p className="mt-6 ml-4">2022 Meubal House All rights reserved</p>
    

      </main>
    </>
  );
}


