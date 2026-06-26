import Link from "next/link";
import CheckoutLayout from "@/components/CheckoutLayout";

export default function Success() {
  return (
    <CheckoutLayout title="Order Confirmed">
      <div className="text-center flex flex-col items-center py-6">
        <div className="text-7xl mb-6 animate-bounce">🎉</div>

        <h2 className="text-3xl font-black text-[#0a122c] mb-3">
          Thank You!
        </h2>

        <p className="text-gray-500 font-medium mb-10 max-w-sm mx-auto">
          Your order has been placed successfully. We will send you a confirmation email shortly.
        </p>

        <Link 
          href="/" 
          className="bg-[#0a122c] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[#1a254c] transition-all hover:shadow-lg inline-block"
        >
          Back to Home
        </Link>
      </div>
    </CheckoutLayout>
  );
}