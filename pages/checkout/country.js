import { useState, useEffect } from "react";
import Link from "next/link";
import CheckoutLayout from "@/components/CheckoutLayout";

export default function Country() {
  const [country, setCountry] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const savedCountry = sessionStorage.getItem("checkout_country");
    if (savedCountry) {
      setCountry(savedCountry);
      if (!/^[a-zA-Z\s]*$/.test(savedCountry)) {
        setError("Country can only contain alphabets.");
      }
    }
  }, []);

  const handleCountryChange = (e) => {
    const value = e.target.value;
    setCountry(value);
    sessionStorage.setItem("checkout_country", value);

    if (!/^[a-zA-Z\s]*$/.test(value)) {
      setError("Country can only contain alphabets.");
    } else {
      setError("");
    }
  };

  const isNextDisabled = country.trim() === "" || error !== "";

  return (
    <CheckoutLayout title="Country">
      <div>
        <input
          placeholder="Country"
          className={`input w-full ${error ? "border-red-500 focus:outline-red-500" : ""}`}
          value={country}
          onChange={handleCountryChange}
        />
        
        {error && (
          <p className="text-red-500 text-sm mt-1">{error}</p>
        )}
      </div>

      <div className="flex justify-between items-center mt-6">
        <Link href="/checkout/pincode" className="text-gray-500 hover:text-[#0a122c] transition-colors font-medium">
          &larr; Back
        </Link>
        <Link 
          href="/checkout/phone" 
          className={`btn ${isNextDisabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}`}
        >
          Next
        </Link>
      </div>
    </CheckoutLayout>
  );
}