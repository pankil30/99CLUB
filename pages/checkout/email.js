"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import CheckoutLayout from "@/components/CheckoutLayout";
import Link from "next/link";

export default function Email() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const isValidEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value.trim());
  };

  const handleNext = () => {
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }

    localStorage.setItem("email", email);

    router.push("/checkout/confirm");
  };

  const valid = isValidEmail(email);

  return (
    <CheckoutLayout title="Email">
      <input
        type="email"
        placeholder="example@gmail.com"
        className="input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <div className="flex justify-between items-center mt-6">
        <Link
          href="/checkout/phone"
          className="text-gray-500 hover:text-[#0a122c] transition-colors font-medium"
        >
          &larr; Back
        </Link>
        <button
          onClick={handleNext}
          disabled={!valid}
          className={`btn ${!valid ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          Next
        </button>
      </div>
      <div className="rounded-xl border-l-4 border-yellow-400 bg-yellow-50  shadow-md mt-5">
        <p className="text-gray-700 text-l leading-6 ml-2 my-0 p-2">
          Please ensure that the information you provide is accurate and
          complete. Your name, contact details, and address will be used for
          order processing and timely delivery. Any mistakes in the details may
          cause delays or failed deliveries. Double-check your entries before
          proceeding to the next step. Providing a valid phone number and email
          address will also help us contact you for updates regarding your
          order. We value your trust and make every effort to ensure a smooth
          and hassle-free shopping experience. Thank you for choosing us!
        </p>
      </div>
    </CheckoutLayout>
  );
}
