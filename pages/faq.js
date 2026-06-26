import Head from "next/head";
import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";

export default function FAQ() {
  // State to track which FAQ is currently open
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle function: closes the open one, or opens the clicked one
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // High-end, brand-appropriate FAQ data
  const faqs = [
    {
      question: "What is your return and exchange policy?",
      answer: "We offer a 30-day return policy for all unworn, unaltered items with original tags attached. To initiate a return or exchange, please visit our Returns Portal with your order number. Refunds are issued to the original form of payment within 5-7 business days of receiving the item."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, Meridian ships worldwide. We partner with premium international couriers to ensure your garments arrive safely. International shipping rates and estimated delivery times are calculated at checkout based on your location. Please note that duties and taxes are the responsibility of the recipient."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order has been dispatched from our atelier, you will receive a shipping confirmation email containing a tracking link. You can use this link to monitor your delivery status in real-time."
    },
    {
      question: "How should I care for my Meridian garments?",
      answer: "Each piece comes with a specific care label. As a general rule for our luxury fabrics, we recommend professional dry cleaning for all wool coats, suits, and cashmere. Cotton and linen items should be washed on a delicate cold cycle and laid flat to dry to preserve their structural integrity."
    },
    {
      question: "Is your sizing true to size?",
      answer: "Our garments are designed with a modern, tailored fit. They generally run true to size, but if you prefer a more relaxed drape or plan to layer heavily, we recommend sizing up. Please refer to our detailed Sizing Guide on each product page for exact garment measurements."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express), Apple Pay, Google Pay, and PayPal. For select regions, we also offer secure financing options at checkout."
    }
  ];

  return (
    <>
      <Head>
        <title>FAQ | Meridian</title>
      </Head>

      {/* Reusing your breathing background animation */}
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .breathing-bg {
          background-size: 200% 200%;
          animation: gradientMove 15s ease infinite;
        }
      `}</style>

      <main
        className="breathing-bg min-h-screen w-full flex flex-col items-center px-4 md:px-12 pt-40 pb-24"
        style={{
          background: "linear-gradient(-45deg, #ffffff, #e0e7ff, #ffffff, #e2e8f0)",
        }}
      >
        <div className="z-20 w-full max-w-3xl mx-auto flex flex-col items-center">
          
          {/* Header Section */}
          <h1 className="text-[#0a122c] text-3xl md:text-5xl font-bold uppercase tracking-widest mb-4 text-center">
            Client Services
          </h1>
          <p className="text-gray-500 text-center mb-16 max-w-xl text-sm md:text-base leading-relaxed">
            Find answers to frequently asked questions about our collections, shipping, and policies. If you require further assistance, our concierge team is at your disposal.
          </p>

          {/* Accordion Container */}
          <div className="w-full flex flex-col space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-[#0a122c]/30 hover:bg-white/90 shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="text-[#0a122c] font-bold tracking-wide text-sm uppercase pr-8">
                    {faq.question}
                  </span>
                  
                  {/* Chevron Icon that rotates when open */}
                  <div className={`transform transition-transform duration-300 text-[#0a122c] ${openIndex === index ? "rotate-180" : "rotate-0"}`}>
                    <IoChevronDown size={20} />
                  </div>
                </button>

                {/* Answer Section (Smooth Height Animation using CSS Grid) */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    openIndex === index 
                      ? "grid-rows-[1fr] opacity-100" 
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="p-6 pt-0 text-gray-500 text-sm leading-relaxed border-t border-gray-100/50 mt-2">
                      {faq.answer}
                    </p>
                  </div>
                </div>
                
              </div>
            ))}
          </div>

          {/* Contact Support CTA */}
          <div className="mt-16 text-center">
            <p className="text-gray-500 text-sm mb-4">Still have questions?</p>
            <button className="bg-[#0a122c] text-white px-10 py-3.5 rounded-full font-bold uppercase tracking-widest text-[0.7rem] hover:bg-[#1a254c] transition-colors shadow-md">
              Contact Us
            </button>
          </div>

        </div>
      </main>
    </>
  );
}