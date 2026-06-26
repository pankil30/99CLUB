import Link from "next/link";
import { IoLogoInstagram, IoLogoTwitter, IoLogoFacebook } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-[#0a122c] text-white py-16 px-6 md:px-16">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Column 1: Brand Info */}
        <div className="flex flex-col">
          <h2 className="text-xl font-bold uppercase tracking-widest mb-6">99 CLUB</h2>
          <p className="text-gray-400 text-xs leading-relaxed mb-6">
            Elevating the modern uniform through uncompromising craftsmanship and timeless design.
          </p>
          <div className="flex space-x-4">
            <IoLogoInstagram className="text-xl hover:text-gray-300 cursor-pointer transition-colors" />
            <IoLogoTwitter className="text-xl hover:text-gray-300 cursor-pointer transition-colors" />
            <IoLogoFacebook className="text-xl hover:text-gray-300 cursor-pointer transition-colors" />
          </div>
        </div>

        {/* Column 3: Support Links */}
        <div className="flex flex-col">
          <h3 className="text-[0.7rem] font-bold uppercase tracking-widest mb-6 text-gray-500">Support</h3>
          <ul className="space-y-4">
            <li><Link href="/faq" className="text-sm hover:text-gray-300 transition-colors uppercase tracking-wider">FAQ</Link></li>
            <li><Link href="/about" className="text-sm hover:text-gray-300 transition-colors uppercase tracking-wider">About Us</Link></li>
            <li><Link href="/contact" className="text-sm hover:text-gray-300 transition-colors uppercase tracking-wider">Contact Us</Link></li>
            <li><Link href="/policy" className="text-sm hover:text-gray-300 transition-colors uppercase tracking-wider">Policy</Link></li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div className="flex flex-col">
          <h3 className="text-[0.7rem] font-bold uppercase tracking-widest mb-6 text-gray-500">Newsletter</h3>
          <p className="text-gray-400 text-xs mb-4">Receive exclusive updates on our collections.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-transparent border-b border-gray-600 text-xs py-2 w-full focus:outline-none focus:border-white transition-colors"
            />
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1400px] mx-auto mt-16 pt-8 border-t border-gray-800 text-center md:text-left">
        <p className="text-[0.65rem] text-gray-600 uppercase tracking-widest">
          © {new Date().getFullYear()} 99 CLUB Apparel. All rights reserved.
        </p>
      </div>
    </footer>
  );
}