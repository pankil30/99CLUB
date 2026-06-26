'use client';

import { useState } from "react";
import Link from "next/link";
import CheckoutLayout from "@/components/CheckoutLayout";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function Confirm() {
  const { clearCart } = useCart();
  const router = useRouter();
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleConfirmOrder = async () => {
    setIsSubmitting(true);

    try {
      // 1. Process the order (Simulated network request)
      await new Promise((resolve) => setTimeout(resolve, 1000)); 

      // 2. Clear the Cart items (using your excellent Context function)
      clearCart();

      // 3. FORCE CLEAR ALL BROWSER STORAGE
      // This guarantees any saved emails, addresses, or form data are deleted
      localStorage.clear();
      sessionStorage.clear();

      // 4. Redirect to success page
      router.push("/checkout/success");
      
    } catch (error) {
      console.error("Failed to place order:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <CheckoutLayout title="Confirm Order">
      <p className="text-gray-500 mb-8">
        Check your details before placing order.
      </p>

      <div className="flex justify-between items-center mt-6">
        <Link
          href="/checkout/email"
          className={`text-gray-500 hover:text-[#0a122c] transition-colors font-medium ${
            isSubmitting ? "pointer-events-none opacity-50" : ""
          }`}
        >
          ← Back
        </Link>

        <button
          onClick={handleConfirmOrder}
          disabled={isSubmitting}
          className={`btn ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {isSubmitting ? "Processing..." : "Confirm Order"}
        </button>
      </div>
    </CheckoutLayout>
  );
}