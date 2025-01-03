"use client";
import Image from "next/image";
import back from "../../../public/back2.jpg";
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.min.css";
export default function BillingPage() {
  const message = "Your order has been placed";

  const order = () => {
    alert(message);
  };

  return (
    <main>
      <div className="relative">
        <Image className="w-full h-60" src={back} alt="background" />
        <div className="absolute inset-0 bg-white bg-opacity-50"></div>

        <div className="absolute inset-0 flex justify-center items-center mt-6">
          <Image
            className="lg:w-[80px] -mt-24 w-[45px] h-[45px] lg:h-[80px]"
   src={"/logo.png"}
            alt="Logo"
   width={100}
            height={100}
          />
        </div>

        <div className="absolute inset-x-6 -mt-32  flex justify-center items-center">
          <h2 className="lg:text-5xl sm:text-3xl">Checkout</h2>
        </div>

        <div className="absolute inset-x-6 -mt-16 flex justify-center items-center space-x-2">
          <h2>
            <Link href={"/"}>Home</Link>
          </h2>
          <p className="mt-1">
            <i className="fa-solid fa-greater-than"></i>
          </p>
          <h2>
            <Link href={"/billing"}>Checkout</Link>
          </h2>
</div>
      </div>
 <div className="w-full min-h-screen bg-gray-50 flex flex-col items-center">
        <div className="w-full bg-gray-100 py-8">
     <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold">Checkout</h2>
            <p className="text-gray-500 mt-2">
              <Link href="/" className="hover:text-gray-700">
                Home
              </Link>{" "}
              &gt; Checkout
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-between max-w-7xl mx-auto px-4 mt-12">
  <div className="w-full lg:w-7/12 bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-semibold mb-8">Billing Details</h1>
            <form className="space-y-6">
      <div className="flex space-x-4">
        <div className="flex-1">
                  <label className="block text-gray-700">First Name</label>
           <input
                    type="text"
            className="w-full border border-gray-300 rounded px-4 py-3"
                  />
           </div>
                <div className="flex-1">
                  <label className="block text-gray-700">Last Name</label>
                  <input
       type="text"
                    className="w-full border border-gray-300 rounded px-4 py-3"
                  />
                </div>
      </div>
              <div>
                <label className="block text-gray-700">
                  Company Name (Optional)
    </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-4 py-3"
                />
       </div>
              <div>
                <label className="block text-gray-700">Country/Region</label>
        <select className="w-full border border-gray-300 rounded px-4 py-3">
                  <option>Sri Lanka</option>
       <option>Pakistan</option>
                  <option>America</option>
       </select>
              </div>
              <div>
       <label className="block text-gray-700">Street Address</label>
                <input
                  type="text"
             placeholder="House number and street name"
                  className="w-full border border-gray-300 rounded px-4 py-3"
                />
              </div>
              <div>
                <label className="block text-gray-700">Town/City</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-4 py-3"
                />
              </div>
              <div className="flex space-x-4">
                <div className="flex-1">
                  <label className="block text-gray-700">Province</label>
                  <select className="w-full border border-gray-300 rounded px-4 py-3">
                    <option>Western Province</option>
                    <option>Sindh Western</option>
                    <option>French Western</option>
                  </select>
                </div>
                <div className="flex-1">
                  <label className="block text-gray-700">Zip Code</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded px-4 py-3"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700">Phone Number</label>
                <input
                  type="number"
                  className="w-full border border-gray-300 rounded px-4 py-3"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded px-4 py-3"
                />
              </div>
              <div>
                <label className="block text-gray-700">
                  Additional Information
                </label>
                <textarea
                  className="w-full border border-gray-300 rounded px-4 py-3"
                  placeholder="Notes about your order, e.g., special notes for delivery"
                ></textarea>
              </div>
            </form>
          </div>

          <div className="w-full lg:w-4/12 bg-white shadow-md rounded-lg p-8 mt-8 lg:mt-0">
            <h2 className="text-2xl font-bold mb-4">Your Order</h2>
            <div className="space-y-4">
              <div className="flex justify-between border-b pb-4">
                <span className="text-gray-600">Asgaard Sofa x 1</span>
                <span className="text-gray-800 font-semibold">
                  Rs. 250,000.00
                </span>
              </div>
              <div className="flex justify-between border-b pb-4">
                <span className="text-gray-600">Subtotal</span>
                <span className="text-gray-800 font-semibold">
                  Rs. 250,000.00
                </span>
              </div>
              <div className="flex justify-between text-orange-500 font-bold text-lg">
                <span>Total</span>
                <span>Rs. 250,000.00</span>
              </div>
            </div>
            <h3 className="text-lg font-semibold mt-6">Payment Method</h3>
            <div className="mt-4">
              <label className="block text-gray-700">
                <input type="radio" name="payment" className="mr-2" />
                Direct Bank Transfer
              </label>
              <p className="text-sm text-gray-500 ml-6">
                Make your payment directly into our bank account.
              </p>
            </div>
            <div className="mt-4">
              <label className="block text-gray-700">
                <input type="radio" name="payment" className="mr-2" />
                Cash on Delivery
              </label>
            </div>
            <button
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg mt-6"
              onClick={order}
            >
              Place Order
            </button>
          </div>
        </div>
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
