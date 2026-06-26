import { useState, useEffect } from "react";
import Link from "next/link";
import CheckoutLayout from "@/components/CheckoutLayout";

export default function State() {
  const [stateName, setStateName] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const savedState = sessionStorage.getItem("checkout_state");
    if (savedState) {
      setStateName(savedState);
      if (!/^[a-zA-Z\s]*$/.test(savedState)) {
        setError("State can only contain alphabets.");
      }
    }
  }, []);

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
    </CheckoutLayout>
  );
}