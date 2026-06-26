import Head from "next/head";

export default function Policy() {
  const policies = [
    {
      id: "01",
      title: "Shipping & Delivery",
      content: [
        "Complimentary standard shipping is provided on all domestic orders over $300. We partner exclusively with premium couriers to ensure the safe, discreet, and timely arrival of your garments.",
        "Orders are processed at our atelier within 1-2 business days. Once dispatched, domestic delivery typically takes 3-5 business days. International shipments generally take 7-14 business days, depending on local customs processing.",
        "Please note that international clients are responsible for any applicable import duties and taxes levied by the destination country."
      ]
    },
    {
      id: "02",
      title: "Returns & Exchanges",
      content: [
        "We hold our craftsmanship to the highest standard. If your purchase does not perfectly meet your expectations, we accept returns and exchanges within 30 days of the delivery date.",
        "Garments must be returned in their original, unworn, and unaltered condition, with all Meridian tags permanently attached and original packaging included.",
        "Bespoke, made-to-measure, and intimately tailored items are considered final sale and are not eligible for return or exchange."
      ]
    },
    {
      id: "03",
      title: "Privacy & Discretion",
      content: [
        "Your privacy is a cornerstone of the Meridian client experience. We collect only the information strictly necessary to process your orders, elevate your shopping experience, and inform you of exclusive collections.",
        "We will never sell, rent, or trade your personal information to third parties. All payment processing is conducted through heavily encrypted, industry-leading secure gateways.",
        "By utilizing our website, you consent to our use of cookies, which are deployed solely to remember your preferences and tailor your digital experience."
      ]
    },
    {
      id: "04",
      title: "Terms of Service",
      content: [
        "By accessing and placing an order with Meridian, you confirm that you are in agreement with and bound by these terms of service.",
        "We reserve the right to modify prices, discontinue products, or update our terms without prior notice. However, any order already confirmed and processed will be honored under the terms active at the moment of purchase.",
        "All content, imagery, and designs on this website are the intellectual property of Meridian and may not be reproduced without explicit written consent."
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Policies & Terms | Meridian</title>
      </Head>

      {/* The Breathing Background */}
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
        className="breathing-bg min-h-screen w-full flex flex-col items-center px-6 md:px-16 pt-40 pb-32"
        style={{
          background: "linear-gradient(-45deg, #ffffff, #e0e7ff, #ffffff, #e2e8f0)",
        }}
      >
        <div className="z-20 w-full max-w-[900px] mx-auto flex flex-col">
          
          {/* Header Section */}
          <div className="text-center mb-20">
            <h1 className="text-[#0a122c] text-3xl md:text-5xl font-bold uppercase tracking-widest mb-6">
              Legal & Policies
            </h1>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-lg mx-auto">
              Transparency and trust are the fabric of our brand. Please review our operating standards, shipping procedures, and client commitments below.
            </p>
          </div>

          {/* Policies List */}
          <div className="flex flex-col space-y-16">
            {policies.map((policy, index) => (
              <div 
                key={index} 
                className="flex flex-col md:flex-row md:items-start border-t border-gray-200/60 pt-12"
              >
                {/* Left Side: Number & Title */}
                <div className="w-full md:w-1/3 mb-6 md:mb-0 md:pr-8">
                  <span className="block text-xs font-bold text-gray-400 mb-2 tracking-widest">
                    {policy.id}
                  </span>
                  <h2 className="text-[#0a122c] text-lg font-bold uppercase tracking-widest">
                    {policy.title}
                  </h2>
                </div>

                {/* Right Side: Content Paragraphs */}
                <div className="w-full md:w-2/3 flex flex-col space-y-5">
                  {policy.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-gray-500 leading-relaxed text-sm">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>
    </>
  );
}