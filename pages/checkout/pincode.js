import { useState, useEffect } from "react";
import Link from "next/link";
import CheckoutLayout from "@/components/CheckoutLayout";

export default function Pincode() {
  const [pincode, setPincode] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const savedPincode = sessionStorage.getItem("checkout_pincode");
    if (savedPincode) {
      setPincode(savedPincode);
      // Re-validate if data is pulled from session storage
      if (!/^\d*$/.test(savedPincode)) {
        setError("Pincode can only contain numbers.");
      } else if (savedPincode.length !== 6) {
        setError("Pincode must be exactly 6 digits.");
      }
    }
  }, []);

  const handlePincodeChange = (e) => {
    const value = e.target.value;
    setPincode(value);
    sessionStorage.setItem("checkout_pincode", value);

    // 1. Check if it contains anything other than numbers
    if (!/^\d*$/.test(value)) {
      setError("Pincode can only contain numbers.");
    } 
    // 2. Check if the length is exactly 6
    else if (value.length !== 6) {
      setError("Pincode must be exactly 6 digits.");
    } 
    // 3. Clear error if all conditions are met
    else {
      setError("");
    }
  };

  const isNextDisabled = pincode.trim() === "" || error !== "";

  return (
    <CheckoutLayout title="Pincode">
      <div>
        <input 
          type="text" 
          placeholder="Enter pincode" 
          className={`input w-full ${error ? "border-red-500 focus:outline-red-500" : ""}`} 
          value={pincode}
          onChange={handlePincodeChange}
          maxLength={6} // Optional: Prevents user from typing more than 6 characters
        />

        {error && (
          <p className="text-red-500 text-sm mt-1">{error}</p>
        )}
      </div>

      <div className="flex justify-between items-center mt-6">
        <Link href="/checkout/state" className="text-gray-500 hover:text-[#0a122c] transition-colors font-medium">
          &larr; Back
        </Link>
        <Link 
          href="/checkout/country" 
          className={`btn ${isNextDisabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}`}
        >
          Next
        </Link>
      </div>
    </CheckoutLayout>
  );
}