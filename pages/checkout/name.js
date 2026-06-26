import { useState, useEffect } from "react";
import Link from "next/link";
import CheckoutLayout from "@/components/CheckoutLayout";

export default function Name() {
  const [name, setName] = useState("");
  const [error, setError] = useState(""); // 1. Added state for the error message

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    sessionStorage.setItem("checkout_name", value);

    // 2. Regex check: strictly alphabets and spaces
    if (!/^[a-zA-Z\s]*$/.test(value)) {
      setError("Name can only contain alphabets.");
    } else {
      setError(""); // Clear error if input is valid
    }
  };

  // 3. Disable the 'Next' button if input is empty OR if there is an error
  const isNextDisabled = name.trim() === "" || error !== "";

  return (
    <CheckoutLayout title="Customer Details">
      <div>
        <input
          placeholder="Enter your name"
          // Optional: Add a red border to the input itself if there is an error
          className={`input w-full ${error ? "border-red-500 focus:outline-red-500" : ""}`}
          value={name}
          onChange={handleNameChange}
        />

        {/* 4. Conditionally render the small red error text */}
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>

      <div className="flex justify-between items-center mt-6">
        <Link
          href="/cart"
          className="text-gray-500 hover:text-[#0a122c] transition-colors font-medium"
        >
          &larr; Back
        </Link>
        <Link
          href="/checkout/address"
          className={`btn ${isNextDisabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}`}
        >
          Next
        </Link>
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
