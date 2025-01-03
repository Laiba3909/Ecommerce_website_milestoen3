import Image from "next/image"
import back from '../../../public/back2.jpg'
import Link from "next/link"

export default function MyAccount(){
    return (
      <main>
      <div className="relative">
        <Image className="w-full h-60" src={back} alt="background" />
        <div className="absolute inset-0 bg-white bg-opacity-50"></div>

        <div className="absolute inset-0  flex justify-center items-center mt-6">
          <Image
            className="lg:w-[80px] -mt-24 w-[45px] h-[45px] lg:h-[80px]"
            src={'/logo.png'}
            alt="Logo"
            width={100}
            height={100}
          />
        </div>

        <div className="absolute inset-x-6 -mt-32  flex justify-center items-center">
          <h2 className="lg:text-5xl sm:text-3xl">Contact</h2>
        </div>

        <div className="absolute inset-x-6 -mt-16 flex justify-center items-center space-x-2">
          <h2><Link href={'/'}>Home</Link></h2>
          <p className="mt-1"><i className="fa-solid fa-greater-than"></i></p>
          <h2><Link href={'/contact'}>Contact</Link></h2>
        </div>
      </div>

<div>
  <h2 className="text-center font-semibold text-3xl mt-16">
    Get In Touch With Us
  </h2>
  <div className="justify-center flex text-center px-4">
    <p className="text-center max-w-md mt-2 text-gray-500">
      For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
    </p>
  </div>

  <div className="flex xl:ml-64 flex-col md:flex-row md:justify-between mt-16">
    <div className="md:ml-16 lg:ml-44">
      <h3>
        <i className="fa-solid fa-location-dot"></i>
        <span className="font-semibold text-xl md:text-2xl ml-4">Address</span>
      </h3>
      <p className="ml-8 md:ml-12 mt-1 w-auto md:w-44">
        236 5th SE Avenue, New York NY10000, United States
      </p>

      <h3 className="mt-6">
        <i className="fa-solid fa-phone"></i>
        <span className="font-semibold text-xl md:text-2xl ml-4">Phone</span>
      </h3>
      <p className="ml-8 md:ml-12 mt-1 w-auto md:w-44">
        Mobile: +(84) 546-6789 <br />
        Hotline: +(84) 456-6789
      </p>

      <h3 className="mt-6">
        <i className="fa-regular fa-clock"></i>
        <span className="font-semibold text-xl md:text-2xl ml-4">Working Time</span>
      </h3>
      <p className="ml-8 md:ml-12 mt-1 w-auto md:w-44">
        Monday-Friday: 9:00 - 22:00 <br />
        Saturday-Sunday: 9:00 - 21:00
      </p>
    </div>

    <div className="mt-10 md:mt-0 md:mr-16 xl:mr-[400px] xl:-mt-9 lg:mr-52 mx-4">
      <form className="space-y-3">
        <h2 className="text-xl">Your name</h2>
        <input
          className="w-full md:w-80 h-12 rounded-lg border-gray-400 border-2 px-2"
          type="text"
          placeholder="Abc"
        />
        <h2 className="text-xl">Email address</h2>
        <input
          className="w-full md:w-80 h-12 rounded-lg border-gray-400 border-2 px-2"
          type="email"
          placeholder="Abc@def.com"
        />
        <h2 className="text-xl">Subject</h2>
        <input
          className="w-full md:w-80 h-12 rounded-lg border-gray-400 border-2 px-2"
          type="text"
          placeholder="This is an optional"
        />
        <h2 className="text-xl">Message</h2>
        <textarea
          className="w-full md:w-80 h-28 rounded-lg border-gray-400 border-2 px-2"
          placeholder="Hi id like to ask about..."
        ></textarea>
      </form>
    </div>
  </div>
</div>

<div
  className="w-full bg-[#faf4f4] xl:h-44 h-auto mt-16 flex flex-col lg:flex-row items-center justify-center space-y-12 lg:space-y-0 px-4 lg:px-8"
>
  <div className="text-center lg:text-left xl:space-x-16">
    <h2 className="text-xl md:text-2xl xl:text-4xl font-semibold">Free Delivery</h2>
    <p className="w-full lg:w-60 xl:w-80 mx-auto lg:mx-0 mt-4 text-gray-500 text-sm md:text-base">
      For all orders over $50, consectetur adipiscing elit.
    </p>
  </div>

  <div className="text-center lg:text-left xl:space-x-16">
    <h2 className="text-xl md:text-2xl xl:text-4xl font-semibold">90 Days Return</h2>
    <p className="w-full lg:w-60 xl:w-80 mx-auto lg:mx-0 mt-4 text-gray-500 text-sm md:text-base">
      If goods have problems, consectetur adipiscing elit.
    </p>
  </div>

  <div className="text-center lg:text-left xl:space-x-16">
    <h2 className="text-xl md:text-2xl xl:text-4xl font-semibold">Secure Payments</h2>
    <p className="w-full lg:w-60 xl:w-80 mx-auto lg:mx-0 mt-4 text-gray-500 text-sm md:text-base">
      100% secure payment, consectetur adipiscing elit.
    </p>
  </div>
</div>
  <br />
  <br />
      </main>
    )
}