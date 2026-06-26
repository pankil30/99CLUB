import Head from "next/head";
import { IoLocationOutline, IoMailOutline, IoCallOutline } from "react-icons/io5";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | Meridian</title>
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
        className="breathing-bg min-h-screen w-full flex flex-col items-center px-6 md:px-16 pt-40 pb-24"
        style={{
          background: "linear-gradient(-45deg, #ffffff, #e0e7ff, #ffffff, #e2e8f0)",
        }}
      >
        <div className="z-20 w-full max-w-[1200px] mx-auto flex flex-col">
          
          {/* Header Section */}
          <div className="text-center mb-16 md:mb-24">
            <h1 className="text-[#0a122c] text-3xl md:text-5xl font-bold uppercase tracking-widest mb-4">
              Concierge
            </h1>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
              Whether you require styling advice, have a question regarding a recent order, or wish to arrange a bespoke fitting, our dedicated team is at your disposal.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left Column: Contact Information */}
            <div className="flex flex-col space-y-12 justify-center">
              
              {/* Info Block 1: Location */}
              <div className="flex items-start space-x-6 group">
                <div className="mt-1 text-[#0a122c] transform transition-transform duration-500 group-hover:scale-110">
                  <IoLocationOutline size={28} />
                </div>
                <div>
                  <h3 className="text-[#0a122c] text-sm font-bold uppercase tracking-widest mb-2">
                    Flagship Atelier
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    124 Sartorial Avenue <br />
                    The Garment District <br />
                    New York, NY 10012
                  </p>
                </div>
              </div>

              {/* Info Block 2: Email */}
              <div className="flex items-start space-x-6 group">
                <div className="mt-1 text-[#0a122c] transform transition-transform duration-500 group-hover:scale-110">
                  <IoMailOutline size={28} />
                </div>
                <div>
                  <h3 className="text-[#0a122c] text-sm font-bold uppercase tracking-widest mb-2">
                    Digital Correspondence
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm mb-1">
                    Client Services: concierge@meridian.com
                  </p>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    Press & Media: press@meridian.com
                  </p>
                </div>
              </div>

              {/* Info Block 3: Phone */}
              <div className="flex items-start space-x-6 group">
                <div className="mt-1 text-[#0a122c] transform transition-transform duration-500 group-hover:scale-110">
                  <IoCallOutline size={28} />
                </div>
                <div>
                  <h3 className="text-[#0a122c] text-sm font-bold uppercase tracking-widest mb-2">
                    Direct Line
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm mb-1">
                    +1 (800) 555-0199
                  </p>
                  <p className="text-gray-500 text-xs mt-2 uppercase tracking-wide">
                    Monday – Friday, 9am to 6pm EST
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Glassmorphism Contact Form */}
            <div className="bg-white/60 backdrop-blur-md border border-gray-200 rounded-2xl p-8 md:p-12 shadow-[0_15px_40px_rgba(0,0,0,0.03)] transition-all duration-500 hover:bg-white/80 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
              <h2 className="text-[#0a122c] text-xl font-bold uppercase tracking-widest mb-8">
                Send a Message
              </h2>
              
              <form className="flex flex-col space-y-6" onSubmit={(e) => e.preventDefault()}>
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="text-xs font-bold text-[#0a122c] uppercase tracking-widest mb-2 ml-1">
                      Full Name
                    </label>
                    <input 
                      type="text" 
                      id="name"
                      placeholder="Jane Doe"
                      className="bg-white/50 border border-gray-200 rounded-lg px-4 py-3.5 text-sm text-[#0a122c] placeholder-gray-400 focus:outline-none focus:border-[#0a122c] focus:ring-1 focus:ring-[#0a122c] transition-all"
                    />
                  </div>
                  
                  <div className="flex flex-col">
                    <label htmlFor="email" className="text-xs font-bold text-[#0a122c] uppercase tracking-widest mb-2 ml-1">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      placeholder="jane@example.com"
                      className="bg-white/50 border border-gray-200 rounded-lg px-4 py-3.5 text-sm text-[#0a122c] placeholder-gray-400 focus:outline-none focus:border-[#0a122c] focus:ring-1 focus:ring-[#0a122c] transition-all"
                    />
                  </div>
                </div>

                {/* Subject Line */}
                <div className="flex flex-col">
                  <label htmlFor="subject" className="text-xs font-bold text-[#0a122c] uppercase tracking-widest mb-2 ml-1">
                    Subject / Inquiry Type
                  </label>
                  <select 
                    id="subject"
                    className="bg-white/50 border border-gray-200 rounded-lg px-4 py-3.5 text-sm text-gray-500 focus:outline-none focus:border-[#0a122c] focus:ring-1 focus:ring-[#0a122c] transition-all appearance-none cursor-pointer"
                  >
                    <option>Order Status & Shipping</option>
                    <option>Returns & Exchanges</option>
                    <option>Styling & Fit Advice</option>
                    <option>Press & Partnerships</option>
                    <option>Other Inquiry</option>
                  </select>
                </div>

                {/* Message Field */}
                <div className="flex flex-col">
                  <label htmlFor="message" className="text-xs font-bold text-[#0a122c] uppercase tracking-widest mb-2 ml-1">
                    Your Message
                  </label>
                  <textarea 
                    id="message"
                    rows="5"
                    placeholder="How may we assist you?"
                    className="bg-white/50 border border-gray-200 rounded-lg px-4 py-3.5 text-sm text-[#0a122c] placeholder-gray-400 focus:outline-none focus:border-[#0a122c] focus:ring-1 focus:ring-[#0a122c] transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit"
                  className="w-full mt-2 bg-[#0a122c] text-white py-4 rounded-lg font-bold uppercase tracking-widest text-xs hover:bg-[#1a254c] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  Submit Inquiry
                </button>

              </form>
            </div>
            
          </div>
        </div>
      </main>
    </>
  );
}