import { useState } from "react";
import Link from "next/link";
import CheckoutLayout from "@/components/CheckoutLayout";

export default function Phone() {
  const [phone, setPhone] = useState("");
  const isInputEmpty = phone.trim() === "";

  return (
    <CheckoutLayout title="Phone Number">
      <input
        type="tel"
        placeholder="+91 XXXXX XXXXX"
        className="input"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <div className="flex justify-between items-center mt-6">
        <Link
          href="/checkout/country"
          className="text-gray-500 hover:text-[#0a122c] transition-colors font-medium"
        >
          &larr; Back
        </Link>

        <Link
          href="/checkout/email"
          className={`btn ${isInputEmpty ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}`}
        >
          Next
        </Link>
      </div>
    </CheckoutLayout>
  );
}

// 'use client';

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import CheckoutLayout from "@/components/CheckoutLayout";

// export default function Phone() {
//   const [phone, setPhone] = useState("");
//   const router = useRouter();

//   const isValidPhone = (value) => {
//     return value.length === 10; // India strict 10-digit rule
//   };

//   const handleNext = () => {
//     if (!isValidPhone(phone)) {
//       alert("Please enter a valid 10-digit phone number");
//       return;
//     }

//     localStorage.setItem("phone", phone);
//     router.push("/checkout/email");
//   };

//   return (
//     <CheckoutLayout title="Phone Number">
//       <input
//         type="text"
//         inputMode="numeric"
//         placeholder="Enter 10 digit number"
//         className="input"
//         value={phone}
//         onChange={(e) => {
//           const value = e.target.value.replace(/[^0-9]/g, "");
//           setPhone(value);
//         }}
//         maxLength={10}
//       />

//       <button
//         onClick={handleNext}
//         disabled={!isValidPhone(phone)}
//         className={`btn ${
//           !isValidPhone(phone)
//             ? "opacity-50 cursor-not-allowed"
//             : ""
//         }`}
//       >
//         Next
//       </button>
//     </CheckoutLayout>
//   );
// }
