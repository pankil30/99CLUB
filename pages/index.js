import Head from "next/head";
import { useState, useEffect } from "react";
import Link from "next/link";
import products from "@/data/products.json"; // Import the extracted JSON data

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <>
      <Head>
        <link rel="icon" href="/99logo.png" sizes="any" />
        <title>99 Club</title>
      </Head>

      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .breathing-bg {
          background-size: 200% 200%;
          animation: gradientMove 15s ease infinite;
        }
      `}</style>

      <main
        className="breathing-bg min-h-screen w-full flex flex-col items-center px-4 md:px-12 pt-32 pb-24"
        style={{
          background:
            "linear-gradient(-45deg, #ffffff, #e0e7ff, #ffffff, #e2e8f0)",
        }}
      >
        <div className="z-20 flex flex-col items-center justify-center w-full max-w-[1400px] mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-gray-500 font-bold uppercase tracking-[0.3em] text-xs mb-4">
              Our Selection
            </span>
            <h2 className="text-[#0a122c] text-3xl md:text-5xl font-black uppercase tracking-widest mb-6">
              Featured Products
            </h2>
            <p className="text-gray-500 max-w-2xl text-sm md:text-base leading-relaxed">
              A curated edit of our most distinguished pieces. Each item in this
              collection represents the intersection of timeless design,
              superior craftsmanship, and modern sartorial excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 w-full mb-16">
            {currentProducts.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.slug}`}
                className="group bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col w-full transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-gray-100 cursor-pointer"
              >
                {/* Product Image */}
                <div className="w-full aspect-[4/5] relative bg-gray-50 overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Product Details */}
                <div className="p-5 flex flex-col items-center text-center">
                  <h3 className="text-[#0a122c] text-sm font-bold tracking-wide mb-1 uppercase line-clamp-1">
                    {product.name}
                  </h3>

                  <p className="text-gray-500 mb-4 font-medium text-sm">
                    {product.price}
                  </p>

                  <div className="w-full bg-[#0a122c] text-white py-2.5 rounded-full font-bold uppercase tracking-widest text-[0.7rem] group-hover:bg-[#1a254c] transition-colors flex justify-center items-center">
                    View Product
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* --- PAGINATION CONTROLS --- */}
          {totalPages > 1 && (
            <div className="flex items-center space-x-2 md:space-x-4">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-full font-semibold uppercase tracking-widest text-xs transition-colors border ${
                  currentPage === 1
                    ? "bg-gray-100 text-gray-400 border-gray-100 cursor-not-allowed"
                    : "bg-white text-[#0a122c] border-gray-200 hover:border-[#0a122c]"
                }`}
              >
                Prev
              </button>

              <div className="flex items-center space-x-2">
                {pageNumbers.map((number) => (
                  <button
                    key={number}
                    onClick={() => paginate(number)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                      currentPage === number
                        ? "bg-[#0a122c] text-white"
                        : "bg-white text-[#0a122c] border border-gray-200 hover:border-[#0a122c]"
                    }`}
                  >
                    {number}
                  </button>
                ))}
              </div>

              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-full font-semibold uppercase tracking-widest text-xs transition-colors border ${
                  currentPage === totalPages
                    ? "bg-gray-100 text-gray-400 border-gray-100 cursor-not-allowed"
                    : "bg-white text-[#0a122c] border-gray-200 hover:border-[#0a122c]"
                }`}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
