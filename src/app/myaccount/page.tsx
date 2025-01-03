import Image from "next/image"
import back from '../../../public/back2.jpg'
import Link from "next/link"
export default function MyAccount(){
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
          <h2 className="lg:text-5xl sm:text-3xl">My Account</h2>
        </div>

        <div className="absolute inset-x-6 -mt-16 flex justify-center items-center space-x-2">
          <h2><Link href={'/'}>Home</Link></h2>
          <p className="mt-1"><i className="fa-solid fa-greater-than"></i></p>
          <h2><Link href={'/myaccount'}>My Account</Link></h2>
        </div>
      </div>
<div className="flex flex-col lg:flex-row justify-between items-center xl:ml-52  lg:items-start px-4 lg:px-20">
  <div className="w-full lg:w-1/2 mt-10 lg:mt-14">
    <h1 className="text-2xl md:text-3xl font-semibold">Log In</h1>
    <form>
      <div>
        <h2 className="mt-8 text-sm md:text-base">Username or email address</h2>
        <input
          type="text"
          className="w-full md:w-80 h-12 md:h-16 border-2 border-gray-300 rounded-xl mt-4 px-4"
        />
      </div>
      <div>
        <h2 className="mt-8 text-sm md:text-base">Password</h2>
        <input
          type="password"
          className="w-full md:w-80 h-12 md:h-16 border-2 border-gray-300 rounded-xl mt-4 px-4"
        />
      </div>
      <div className="mt-6">
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="w-4 h-4" />
          <span className="text-sm md:text-base">Remember me</span>
        </label>
        <button
          className="w-28 md:w-36 h-10 md:h-12 mt-6 bg-gray-100 border-2 border-gray-300 rounded-2xl"
        >
          Login
        </button>
        <span className="ml-4 text-sm md:text-base">Lost Your Password?</span>
      </div>
    </form>
  </div>

  <div className="w-full lg:w-1/2 mt-10 lg:mt-14 lg:ml-14">
    <h2 className="text-2xl md:text-3xl font-semibold">Register</h2>
    <form>
      <div>
        <h2 className="mt-8 text-sm md:text-base">Email address</h2>
        <input
          type="email"
          className="w-full md:w-80 h-12 md:h-16 border-2 border-gray-300 rounded-xl mt-4 px-4"
        />
      </div>
      <p className="mt-6 text-sm md:text-base w-full lg:w-80">
        A link to set a new password will be sent to your email address.
      </p>
      <p className="mt-8 text-sm md:text-base w-full lg:w-80">
        Your personal data will be used to support your experience throughout
        this website, to manage access to your account, and for other purposes
        described in our <span className="font-semibold">privacy policy.</span>
      </p>
      <button
        className="w-28 md:w-36 h-10 md:h-12 mt-6 bg-gray-100 border-2 border-gray-300 rounded-2xl"
      >
        Register
      </button>
    </form>
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

      <br />
      <br />
      </main>
)}