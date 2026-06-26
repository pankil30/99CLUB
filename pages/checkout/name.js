import { useState, useEffect } from "react";
import Link from "next/link";
import CheckoutLayout from "@/components/CheckoutLayout";

export default function Name() {
  const [name, setName] = useState("");
  const [error, setError] = useState(""); // 1. Added state for the error message

  useEffect(() => {
    const savedName = sessionStorage.getItem("checkout_name");
    if (savedName) {
      setName(savedName);
      // Re-validate if data is pulled from session storage
      if (!/^[a-zA-Z\s]*$/.test(savedName)) {
        setError("Name can only contain alphabets.");
      }
    }
  }, []);

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
        {error && (
          <p className="text-red-500 text-sm mt-1">{error}</p>
        )}
      </div>

      <div className="flex justify-between items-center mt-6">
        <Link href="/cart" className="text-gray-500 hover:text-[#0a122c] transition-colors font-medium">
          &larr; Back
        </Link>
        <Link 
          href="/checkout/address" 
          className={`btn ${isNextDisabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}`}
        >
          Next
        </Link>
      </div>
    </CheckoutLayout>
  );
}