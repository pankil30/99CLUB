import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { IoCart } from "react-icons/io5";

const Navbar = () => {
  const { cart } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cartItemCount = cart.length;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-[#0a122c]/10 text-[#0a122c] py-5 transition-all duration-300">
      <div className="w-full px-8 md:px-16">
        <div className="flex items-center justify-between h-10">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <img
                src="/99logo.jpg"
                alt="Meridian Logo"
                className="w-8 h-8 object-contain"
              />

              <span className="text-[1.35rem] font-medium tracking-wide uppercase">
                99 CLUB
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-12">
            <Link
              href="/"
              className="text-sm font-light tracking-widest uppercase hover:opacity-60 transition-opacity"
            >
              Home
            </Link>
            <Link
              href="/collection"
              className="text-sm font-light tracking-widest uppercase hover:opacity-60 transition-opacity"
            >
              COLLECTION
            </Link>
            <Link
              href="/newarrival"
              className="text-sm font-light tracking-widest uppercase hover:opacity-60 transition-opacity"
            >
              NEW ARRIVALS
            </Link>
            <Link
              href="/bestseller"
              className="text-sm font-light tracking-widest uppercase hover:opacity-60 transition-opacity"
            >
              BEST SELLERS
            </Link>
            <Link
              href="/cart"
              className="relative text-2xl hover:opacity-60 transition-opacity flex items-center"
            >
              <IoCart />

              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-md border border-white">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>

          {/* Right: Mobile Cart & Menu Button */}
          <div className="md:hidden flex items-center space-x-6">
            <Link
              href="/cart"
              className="relative text-2xl hover:opacity-60 transition-opacity flex items-center"
            >
              <IoCart />

              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-md border border-white">
                  {cartItemCount}
                </span>
              )}
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#0a122c] hover:opacity-60 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {!isMobileMenuOpen ? (
                <svg
                  className="w-8 h-8 font-light"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="w-8 h-8 font-light"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl shadow-2xl border-t border-[#0a122c]/10 h-screen">
          <div className="flex flex-col px-8 py-10 space-y-8">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-light tracking-widest uppercase hover:opacity-60"
            >
              Home
            </Link>
            <Link
              href="/collection"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-light tracking-widest uppercase hover:opacity-60"
            >
              COLLECTION
            </Link>
            <Link
              href="/newarrival"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-light tracking-widest uppercase hover:opacity-60"
            >
              NEW ARRIVALS
            </Link>
            <Link
              href="/bestseller"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-light tracking-widest uppercase hover:opacity-60"
            >
              BEST SELLERS
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
