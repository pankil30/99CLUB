import { useState } from "react";
import Link from "next/link";
import CheckoutLayout from "@/components/CheckoutLayout";

export default function Email() {
  const [email, setEmail] = useState("");
  const isInputEmpty = email.trim() === "";

  return (
    <CheckoutLayout title="Email">
      <input
        type="email"
        placeholder="example@gmail.com"
        className="input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <div className="flex justify-between items-center mt-6">
        <Link
          href="/checkout/phone"
          className="text-gray-500 hover:text-[#0a122c] transition-colors font-medium"
        >
          &larr; Back
        </Link>

        <Link
          href="/checkout/confirm"
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

// export default function Email() {
//   const [email, setEmail] = useState("");
//   const router = useRouter();

//   const isValidEmail = (value) => {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(value.trim());
//   };

//   const handleNext = () => {
//     if (!isValidEmail(email)) {
//       alert("Please enter a valid email address");
//       return;
//     }

//     localStorage.setItem("email", email);

//     router.push("/checkout/confirm");
//   };

//   const valid = isValidEmail(email);

//   return (
//     <CheckoutLayout title="Email">
//       <input
//         type="email"
//         placeholder="example@gmail.com"
//         className="input"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />

//       <button
//         onClick={handleNext}
//         disabled={!valid}
//         className={`btn ${
//           !valid ? "opacity-50 cursor-not-allowed" : ""
//         }`}
//       >
//         Next
//       </button>
//     </CheckoutLayout>
//   );
// }
