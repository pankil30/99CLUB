import { useState, useEffect } from "react";
import Link from "next/link";
import CheckoutLayout from "@/components/CheckoutLayout";

export default function Address() {
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

  useEffect(() => {
    const savedAddress1 = sessionStorage.getItem("checkout_address1");
    const savedAddress2 = sessionStorage.getItem("checkout_address2");
    if (savedAddress1) setAddress1(savedAddress1);
    if (savedAddress2) setAddress2(savedAddress2);
  }, []);

  const handleAddress1Change = (e) => {
    const value = e.target.value;
    setAddress1(value);
    sessionStorage.setItem("checkout_address1", value);
  };

  const handleAddress2Change = (e) => {
    const value = e.target.value;
    setAddress2(value);
    sessionStorage.setItem("checkout_address2", value);
  };
  
  const isInputEmpty = address1.trim() === "";

  return (
    <CheckoutLayout title="Address Details">
      <input 
        placeholder="Address Line 1" 
        className="input mb-4" 
        value={address1}
        onChange={handleAddress1Change}
      />

      <input 
        placeholder="Address Line 2 (Optional)" 
        className="input" 
        value={address2}
        onChange={handleAddress2Change}
      />

      <div className="flex justify-between items-center mt-6">
        <Link href="/checkout/name" className="text-gray-500 hover:text-[#0a122c] transition-colors font-medium">
          &larr; Back
        </Link>
        <Link 
          href="/checkout/city" 
          className={`btn ${isInputEmpty ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}`}
        >
          Next
        </Link>
      </div>
    </CheckoutLayout>
  );
}