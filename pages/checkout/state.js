import { useState, useEffect } from "react";
import Link from "next/link";
import CheckoutLayout from "@/components/CheckoutLayout";

export default function State() {
  const [stateName, setStateName] = useState("");
  const [error, setError] = useState("");



  const handleStateChange = (e) => {
    const value = e.target.value;
    setStateName(value);
    sessionStorage.setItem("checkout_state", value);

    if (!/^[a-zA-Z\s]*$/.test(value)) {
      setError("State can only contain alphabets.");
    } else {
      setError("");
    }
  };

  const isNextDisabled = stateName.trim() === "" || error !== "";

  return (
    <CheckoutLayout title="State">
      <div>
        <input 
          placeholder="Enter state" 
          className={`input w-full ${error ? "border-red-500 focus:outline-red-500" : ""}`} 
          value={stateName}
          onChange={handleStateChange}
        />
        
        {error && (
          <p className="text-red-500 text-sm mt-1">{error}</p>
        )}
      </div>

      <div className="flex justify-between items-center mt-6">
        <Link href="/checkout/city" className="text-gray-500 hover:text-[#0a122c] transition-colors font-medium">
          &larr; Back
        </Link>
        <Link 
          href="/checkout/pincode" 
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