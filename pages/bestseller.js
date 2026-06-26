import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
// Use standard relative import path
import bestSellersData from '../data/bestsellers.json'; 

const Bestseller = () => {
  return (
    <>
      <Head>
        <title>Best Sellers | Meridian</title>
      </Head>

      <main className="min-h-screen bg-[#f8fafc] w-full flex flex-col items-center px-4 md:px-12 pt-32 pb-24">
        <div className="w-full max-w-[1400px] mx-auto">
          
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-gray-500 font-bold uppercase tracking-[0.3em] text-xs mb-4">
              Fan Favorites
            </span>
            <h1 className="text-[#0a122c] text-4xl md:text-6xl font-black uppercase tracking-widest mb-6">
              Best Sellers
            </h1>
            <p className="text-gray-500 max-w-2xl text-sm md:text-base leading-relaxed">
              Our most loved pieces, chosen by you. Discover the signature styles and timeless essentials that our customers return to time and time again.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 w-full">
            {bestSellersData.map((item) => (
              <Link
                key={item.id}
                href={`/product/${item.slug}`}
                className="group bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col w-full transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-gray-100 cursor-pointer"
              >
                <div className="w-full aspect-[4/5] relative bg-gray-50 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* BEST SELLER TAG */}
                  <div className="absolute top-4 left-4 bg-amber-600 text-white text-[0.65rem] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                    Best Seller
                  </div>
                </div>

                <div className="p-5 flex flex-col items-center text-center">
                  <h3 className="text-[#0a122c] text-sm font-bold tracking-wide mb-1 uppercase line-clamp-1">
                    {item.name}
                  </h3>
                  <p className="text-gray-500 mb-4 font-medium text-sm">
                    {item.price}
                  </p>
                  <div className="w-full bg-transparent border border-[#0a122c] text-[#0a122c] py-2.5 rounded-full font-bold uppercase tracking-widest text-[0.7rem] group-hover:bg-[#0a122c] group-hover:text-white transition-colors flex justify-center items-center">
                    View Details
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </main>
    </>
  );
};

export default Bestseller;