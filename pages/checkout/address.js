import { useState, useEffect } from "react";
import Link from "next/link";
import CheckoutLayout from "@/components/CheckoutLayout";

export default function Address() {
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");



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