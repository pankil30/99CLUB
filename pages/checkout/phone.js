"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import CheckoutLayout from "@/components/CheckoutLayout";
import Link from "next/link";

export default function Phone() {
  const [phone, setPhone] = useState("");
  const router = useRouter();

  const isValidPhone = (value) => {
    return value.length === 10; // India strict 10-digit rule
  };

  const handleNext = () => {
    if (!isValidPhone(phone)) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }

    localStorage.setItem("phone", phone);
    router.push("/checkout/email");
  };

  return (
    <CheckoutLayout title="Phone Number">
      <input
        type="text"
        inputMode="numeric"
        placeholder="Enter 10 digit number"
        className="input"
        value={phone}
        onChange={(e) => {
          const value = e.target.value.replace(/[^0-9]/g, "");
          setPhone(value);
        }}
        maxLength={10}
      />
      <div className="flex justify-between items-center mt-6">
        <Link
          href="/checkout/country"
          className="text-gray-500 hover:text-[#0a122c] transition-colors font-medium"
        >
          &larr; Back
        </Link>

        <button
          onClick={handleNext}
          disabled={!isValidPhone(phone)}
          className={`btn ${
            !isValidPhone(phone) ? "opacity-50 cursor-not-allowed" : ""
          }`}
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
