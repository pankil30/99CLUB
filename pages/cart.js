import Head from "next/head";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => {
        const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
        return total + price * item.quantity;
      }, 0)
      .toFixed(2);
  };

  return (
    <>
      <Head>
        <title>Your Bag | Meridian</title>
      </Head>

      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animated-bg {
          background-size: 200% 200%;
          animation: gradientMove 18s ease infinite;
        }
      `}</style>

      <main className="animated-bg min-h-screen px-5 md:px-10 pt-28 pb-24 bg-gradient-to-br from-white via-indigo-50 to-slate-100">
        <div className="max-w-6xl mx-auto">
          {/* HEADER */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[#0a122c]">
              Shopping Bag
            </h1>
            <p className="text-gray-500 mt-3">
              Review your items before checkout
            </p>
          </div>

          {cart.length === 0 ? (
            /* EMPTY CART STATE */
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-14 text-center shadow-xl">
              <div className="text-6xl mb-5">🛒</div>
              <h2 className="text-xl font-bold text-[#0a122c]">
                Your bag is empty
              </h2>
              <p className="text-gray-500 mt-2 mb-8">
                Looks like you haven't added anything yet.
              </p>
              <Link
                href="/"
                className="inline-block bg-[#0a122c] text-white px-10 py-4 rounded-full text-sm font-bold hover:scale-105 transition"
              >
                Start Shopping
              </Link>
            </div>
          ) : (
            /* CART ITEMS & SUMMARY GRID */
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* PRODUCTS LIST */}
              <div className="lg:col-span-2 space-y-6">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="group bg-white/80 backdrop-blur-xl rounded-3xl p-5 flex gap-5 items-center shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    {/* IMAGE */}
                    <div className="w-28 h-32 bg-gray-100 rounded-2xl overflow-hidden">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                      />
                    </div>

                    {/* DETAILS */}
                    <div className="flex-1">
                      <h3 className="font-bold text-[#0a122c] text-lg">
                        {item.name}
                      </h3>
                      <p className="text-gray-500 text-sm mt-2">{item.price}</p>
                      <div className="inline-flex mt-4 px-3 py-1 bg-indigo-50 rounded-full text-xs font-bold text-indigo-700">
                        Qty : {item.quantity}
                      </div>
                    </div>

                    {/* ACTION */}
                    <div className="text-right">
                      <p className="font-bold text-[#0a122c] mb-5">
                        
                        ₹{(
                          parseFloat(item.price.replace(/[^0-9.-]+/g, "")) *
                          item.quantity
                        ).toFixed(2)}
                      </p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-xs font-bold uppercase text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* ORDER SUMMARY SIDEBAR */}
              <div className="lg:sticky lg:top-28 h-fit bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-black text-xl text-[#0a122c]">
                    Order Summary
                  </h2>
                 
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between text-gray-500 text-sm">
                    <span>Items ({cart.length})</span>
                    <span>₹{calculateTotal()}</span>
                  </div>
                  <div className="flex justify-between text-gray-500 text-sm">
                    <span>Shipping</span>
                    <span className="text-green-600 font-semibold">Free</span>
                  </div>
                </div>

                <div className="my-6 border-t border-gray-200" />

                {/* TOTAL */}
                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-5">
                  <p className="text-xs uppercase text-gray-500 font-bold">
                    Total Amount
                  </p>
                  <p className="text-3xl font-black text-[#0a122c] mt-1">
                    ₹{calculateTotal()}
                  </p>
                </div>

                {/* CHECKOUT */}
                <Link
                  href="/checkout/name"
                  className="mt-6 w-full py-4 rounded-full bg-[#0a122c] text-white font-bold uppercase tracking-widest text-xs hover:bg-[#182653] hover:shadow-xl transition-all flex justify-center items-center"
                >
                  Continue To Checkout
                </Link>

                {/* BENEFITS */}
                <div className="mt-6 space-y-3 text-xs text-gray-500">
                  <div className="flex gap-2 items-center">
                    <span>✓</span> <p>Free delivery on your order</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <span>✓</span> <p>Cash On Delivery</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <span>✓</span> <p>Easy returns available</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}