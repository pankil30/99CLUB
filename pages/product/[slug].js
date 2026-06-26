import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { toast, Bounce } from "react-toastify";

// 1. Import ALL of your JSON data files
// (Using relative paths as discussed earlier to avoid module errors)
import mainProducts from "../../data/products.json";
import collectionData from "../../data/collectiondata.json";
import newArrivalsData from "../../data/newarrivals.json";
import bestSellersData from "../../data/bestsellers.json";

// 2. Combine all products into one master array
const allProducts = [
  ...mainProducts,
  ...collectionData,
  ...newArrivalsData,
  ...bestSellersData,
];

export default function ProductDetails() {
  const router = useRouter();
  const { slug } = router.query;
  const { addToCart } = useCart();

  const [randomProducts, setRandomProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);

  // 3. Update the recommendations to pull from the combined allProducts array
  useEffect(() => {
    if (slug) {
      // Filter out the exact product we are viewing, and optionally filter duplicates if a product exists in two lists
      const otherProducts = allProducts.filter(
        (p, index, self) =>
          p.slug !== slug && index === self.findIndex((t) => t.slug === p.slug)
      );
      
      const shuffled = [...otherProducts].sort(() => 0.5 - Math.random());
      setRandomProducts(shuffled.slice(0, 4)); // Get 4 random products for cross-selling
    }
  }, [slug]);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  if (!router.isReady) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8fafc]">
        <p className="text-[#0a122c] uppercase tracking-widest text-sm font-bold animate-pulse">
          Loading Collection...
        </p>
      </div>
    );
  }

  // 4. Search the combined allProducts array for the matching slug
  const product = allProducts.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8fafc] text-center px-6">
        <h2 className="text-[#0a122c] text-2xl font-bold uppercase tracking-widest mb-4">
          Product Not Found
        </h2>
        <p className="text-gray-500 text-sm mb-8 max-w-sm">
          We couldn't find an item matching{" "}
          <code className="bg-gray-100 px-2 py-1 rounded text-red-500 font-mono">
            "{slug}"
          </code>
        </p>
        <button
          onClick={() => router.back()}
          className="bg-[#0a122c] text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#1a254c]"
        >
          Go Back
        </button>
      </div>
    );
  }

  const handleBuyNow = () => {
    addToCart(product, quantity);
    router.push("/checkout/name");
  };

  return (
    <>
      <Head>
        <title>{product.name} | Meridian</title>
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
        className="breathing-bg min-h-screen w-full flex flex-col items-center px-6 md:px-16 pt-32 pb-24"
        style={{
          background: "linear-gradient(-45deg, #ffffff, #e0e7ff, #ffffff, #e2e8f0)",
        }}
      >
        <div className="w-full max-w-[1200px] mx-auto mb-8">
          {/* Changed this to a router.back() so it smoothly returns the user to whichever collection they came from */}
          <button
            onClick={() => router.back()}
            className="text-gray-400 hover:text-[#0a122c] text-0.5xl uppercase tracking-widest transition-colors flex items-center bg-transparent border-none cursor-pointer"
          >
            ← Back
          </button>
        </div>

        <div className="z-20 w-full max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div className="w-full aspect-[4/5] bg-gray-50 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-white/50">
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col pt-4 md:pt-10">
            <h1 className="text-[#0a122c] text-3xl md:text-5xl font-bold uppercase tracking-widest mb-4 leading-tight">
              {product.name}
            </h1>

            <p className="text-gray-500 text-xl md:text-2xl font-medium tracking-wide mb-8">
              {product.price}
            </p>

            <div className="w-16 h-[1px] bg-gray-300 mb-8"></div>

            <p className="text-gray-500 leading-relaxed text-sm md:text-base mb-10">
              Experience unparalleled craftsmanship. Designed with an unwavering
              attention to detail, this piece represents the pinnacle of modern
              sartorial elegance. Constructed using premium sourced materials to
              ensure a flawless drape and exceptional longevity in your
              wardrobe.
            </p>

            <div className="flex flex-col mb-10">
              <span className="text-xs font-bold text-[#0a122c] uppercase tracking-widest mb-4">
                Quantity
              </span>
              <div className="flex items-center border border-gray-300 rounded-full w-36 h-12">
                <button
                  onClick={decrement}
                  className="w-1/3 h-full flex items-center justify-center text-gray-500 hover:text-[#0a122c] transition-colors"
                >
                  -
                </button>
                <span className="w-1/3 h-full flex items-center justify-center font-bold text-[#0a122c] text-sm">
                  {quantity}
                </span>
                <button
                  onClick={increment}
                  className="w-1/3 h-full flex items-center justify-center text-gray-500 hover:text-[#0a122c] transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  addToCart(product, quantity);
                  toast("Product added to your cart", {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                  });
                }}
                className="flex-1 bg-transparent border border-[#0a122c] text-[#0a122c] py-4 rounded-full font-bold uppercase tracking-widest text-[0.75rem] hover:bg-gray-50 transition-colors"
              >
                Add to Cart
              </button>

              <button
                onClick={handleBuyNow}
                className="flex-1 bg-[#0a122c] text-white py-4 rounded-full font-bold uppercase tracking-widest text-[0.75rem] hover:bg-[#1a254c] transition-all"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {randomProducts.length > 0 && (
          <div className="w-full max-w-[1200px] mx-auto mt-32 border-t border-gray-300/50 pt-16">
            <h2 className="text-[#0a122c] text-2xl font-black uppercase tracking-widest mb-10 text-center">
              Products You Might Like
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {randomProducts.map((p) => (
                <Link
                  key={p.slug} // Using slug as key to ensure it is always unique
                  href={`/product/${p.slug}`}
                  className="group block"
                >
                  <div className="w-full aspect-[4/5] bg-gray-50 rounded-2xl overflow-hidden mb-4 shadow-sm border border-white/50 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-300">
                    <img
                      src={p.img}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <h3 className="text-[#0a122c] font-bold text-sm mb-1 group-hover:text-indigo-600 transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-gray-500 text-sm font-medium">
                    {p.price}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>
    </>
  );
}