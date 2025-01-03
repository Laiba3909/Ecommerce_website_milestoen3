'use client';
import { useCart } from '../component/cartcontext';
import Link from 'next/link';
import Image from 'next/image';
export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <main className="bg-[#fce4ec] min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-[#d81b60] mb-6">Your Cart</h2>
          {cart.length === 0 ? (
            <p className="text-xl text-gray-600">Your cart is empty.</p>
          ) : (
            <div>
              {cart.map((product) => (
                <div key={product.id} className="flex justify-between mb-6 bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <Image
                      src={product.imageUrl}
                      alt="product"
                      width={100}
                      height={100}
                      className="rounded-md object-cover"
                    />
                    <span className="ml-4 text-lg text-gray-800 font-semibold">{product.name}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-3 text-lg font-semibold text-[#d81b60]">
                      Rs. {product.price * product.quantity}
                    </span>
                    <button
                      className="bg-[#f06292] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#f48fb1] transition"
                      onClick={() => removeFromCart(product.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <div className="text-center mt-4">
                <button
                  className="bg-[#f06292] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#f48fb1] transition"
                  onClick={clearCart}
                >
                  Clear Cart
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="text-center mt-8">
          <Link href="/">
            <button className="text-xl text-[#d81b60] font-semibold hover:text-[#f48fb1] transition">
              Back to Shop
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

