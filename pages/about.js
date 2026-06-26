import Head from "next/head";
import Link from "next/link";

export default function About() {
  const pillars = [
    {
      title: "Uncompromising Craft",
      description: "Every seam, button, and hem is considered. We work exclusively with generational artisans who treat garment-making as an art form rather than a process."
    },
    {
      title: "Sartorial Heritage",
      description: "We honor the golden era of tailoring while engineering our garments for the modern silhouette. It is classic menswear, elevated for today."
    },
    {
      title: "Sustainable Luxury",
      description: "True luxury doesn't harm the earth. We source limited-run, organic fabrics and produce in small batches to eliminate waste and guarantee exclusivity."
    }
  ];

  return (
    <>
      <Head>
        <title>About Us | Meridian</title>
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
        className="breathing-bg min-h-screen w-full flex flex-col items-center px-6 md:px-16 pt-40 pb-24 overflow-hidden"
        style={{
          background: "linear-gradient(-45deg, #ffffff, #e0e7ff, #ffffff, #e2e8f0)",
        }}
      >
        <div className="z-20 w-full max-w-[1200px] mx-auto flex flex-col">
          
          {/* --- HERO SECTION --- */}
          <div className="text-center mb-24 max-w-4xl mx-auto">
            <h1 className="text-[#0a122c] text-4xl md:text-6xl font-light uppercase tracking-[0.2em] mb-8">
              The Meridian Story
            </h1>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed font-light">
              Born from a desire to bridge the gap between traditional bespoke tailoring and modern accessibility. 
              We don't just make clothes; we craft the modern uniform for the discerning individual.
            </p>
          </div>

          {/* --- EDITORIAL SPLIT SECTION --- */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 mb-32">
            {/* Left: Image */}
            <div className="w-full md:w-1/2 relative">
              <div className="aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(10,18,44,0.1)] relative group">
                <img 
                  src="https://images.pexels.com/photos/3738088/pexels-photo-3738088.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Meridian Craftsmanship" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                {/* Subtle glass overlay inside the image */}
                <div className="absolute inset-0 bg-[#0a122c]/5 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0" />
              </div>
            </div>

            {/* Right: Text */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="text-[#0a122c] text-2xl md:text-3xl font-bold uppercase tracking-widest mb-6">
                Redefining the Standard
              </h2>
              <div className="w-12 h-0.5 bg-[#0a122c] mb-8"></div>
              <p className="text-gray-500 mb-6 leading-relaxed text-sm md:text-base">
                Meridian was founded on a singular premise: that fast fashion has stripped the soul out of menswear. We set out to return to a time when garments were investments, built to weather both the elements and the shifting tides of trends.
              </p>
              <p className="text-gray-500 mb-10 leading-relaxed text-sm md:text-base">
                By stripping away the middlemen and partnering directly with century-old mills in Italy and Japan, we bring an unprecedented level of construction directly to your wardrobe. 
              </p>
              
              <div>
                <img 
                  src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Fabric Detail" 
                  className="w-full h-48 object-cover rounded-xl shadow-md grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>

          {/* --- BRAND PILLARS (3 Columns) --- */}
          <div className="w-full flex flex-col items-center text-center mb-24">
            <h2 className="text-[#0a122c] text-3xl font-bold uppercase tracking-widest mb-16">
              Our Philosophy
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
              {pillars.map((pillar, index) => (
                <div key={index} className="flex flex-col items-center bg-white/50 backdrop-blur-sm p-10 rounded-2xl border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:-translate-y-2 transition-transform duration-500">
                  <div className="w-12 h-12 rounded-full border border-[#0a122c] text-[#0a122c] flex items-center justify-center font-bold text-lg mb-6">
                    0{index + 1}
                  </div>
                  <h3 className="text-[#0a122c] text-sm font-bold uppercase tracking-widest mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* --- BOTTOM CTA --- */}
          <div className="w-full flex flex-col items-center justify-center border-t border-gray-200/60 pt-16 mt-8">
            <h2 className="text-[#0a122c] text-2xl md:text-3xl font-light uppercase tracking-widest mb-8 text-center">
              Experience the Collection
            </h2>
            <Link href="/">
              <button className="bg-[#0a122c] text-white px-12 py-4 rounded-full font-bold uppercase tracking-widest text-[0.75rem] hover:bg-[#1a254c] hover:shadow-[0_10px_30px_rgba(10,18,44,0.15)] hover:-translate-y-1 transition-all duration-300">
                Shop Now
              </button>
            </Link>
          </div>

        </div>
      </main>
    </>
  );
}