import React, { useState , useEffect} from "react";
import { useCart } from "@/context/CartContext";

export default function CheckoutLayout({ title, children }) {
  
  const { cart } = useCart();
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function: ensures scrolling is restored if the component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  const total = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
    return sum + price * item.quantity;
  }, 0);

  return (
    <main
      className="
      min-h-screen
      bg-gradient-to-br
      from-slate-100
      via-white
      to-slate-200
      pt-32
      pb-24
      px-5
      "
    >
      <div
        className="
        max-w-3xl
        mx-auto
        space-y-8
        relative
        z-10
        "
      >
        {/* ORDER DETAILS (Glossy White) */}
        <div
          className="
          bg-white/70
          backdrop-blur-xl
          border border-white
          rounded-3xl
          shadow-[0_20px_50px_rgba(0,0,0,0.05)]
          p-7
          text-[#0a122c]
          "
        >
          <div
            className="
            flex
            justify-between
            items-center
            mb-6
            "
          >
            <h2
              className="
              text-2xl
              font-black
              uppercase tracking-widest
              "
            >
              Order Details
            </h2>
          </div>

          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="
                bg-white
                border border-gray-100
                shadow-sm
                rounded-2xl
                p-4
                flex
                gap-4
                items-center
                transition-all
                hover:shadow-md
                "
              >
                {/* Task 1: Product Image - Increased size */}
                <div
                  className="w-24 h-28 sm:w-28 sm:h-32 flex-shrink-0 bg-gray-50 rounded-xl overflow-hidden border border-gray-100 cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setSelectedImage(item.img)}
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="font-bold text-sm sm:text-base text-[#0a122c] leading-tight">
                    {item.name}
                  </h3>
                  {/* Task 2: Product ID added below title */}
                  <p className="text-xs font-medium text-gray-500 mt-1">
                    ID: SKU{item.id}
                  </p>
                  <p className="text-xs font-medium text-gray-500 mt-1">
                    Qty: {item.quantity}
                  </p>
                </div>

                {/* Product Price */}
                <div className="font-black text-[#0a122c] text-sm sm:text-lg text-right">
                  ₹
                  {(
                    parseFloat(item.price.replace(/[^0-9.-]+/g, "")) *
                    item.quantity
                  ).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          {/* Total Amount Section */}
          <div
            className="
            border-t
            border-gray-200
            mt-6
            pt-6
            flex
            justify-between
            items-center
            "
          >
            <span
              className="
              text-gray-500
              font-bold
              uppercase tracking-widest
              text-sm
              "
            >
              Total Amount
            </span>

            <span
              className="
              text-3xl
              font-black
              text-[#0a122c]
              "
            >
              ₹{total.toFixed(2)}
            </span>
          </div>
        </div>

        {/* CUSTOMER DETAILS FORM AREA */}
        <div
          className="
          bg-white
          rounded-3xl
          shadow-[0_20px_50px_rgba(0,0,0,0.05)]
          border border-gray-100
          p-8
          "
        >
          <div className="mb-8">
            <p
              className="
              text-indigo-600
              text-xs
              font-bold
              uppercase
              tracking-widest
              "
            >
              Checkout Step
            </p>

            <h1
              className="
              text-3xl
              font-black
              text-[#0a122c]
              mt-2
              "
            >
              {title}
            </h1>
          </div>

          {children}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white p-0"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-screen h-screen flex items-center justify-center">
            {/* Close Button */}
            <button
              className="absolute top-4 right-6 sm:top-6 sm:right-10 text-gray-400 hover:text-[#0a122c] text-5xl font-light z-10 cursor-pointer transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="Close modal"
            >
              &times;
            </button>

            {/* Full Size Image */}
            <img
              src={selectedImage}
              alt="Full screen preview"
              className="w-full h-full object-contain p-4 sm:p-12"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </main>
  );
}
