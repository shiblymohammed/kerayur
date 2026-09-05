"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  {
    id: "01",
    name: "KUMARAKOM LAKE RESORT",
    location: "Vembanad Lake, Kerala",
    description: "A heritage retreat constructed from 16th-century traditional Kerala homesteads. The backwater climate provides the ideal humidity for deep Ayurvedic oil absorption.",
    image: "/images/partner_1.png",
    alignment: "left"
  },
  {
    id: "02",
    name: "NIRAAMAYA SURYA SAMUDRA",
    location: "Kovalam, Kerala",
    description: "Perched on a dramatic cliff edge overlooking the Arabian Sea, this sanctuary combines rigorous clinical therapies with the deeply restorative power of the ocean breeze.",
    image: "/images/partner_2.png",
    alignment: "right"
  }
];

export default function PartnerResortsSection() {
  return (
    <section className="relative w-full bg-white py-24 md:py-40 text-[#1a1a1a]">
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="mb-24 md:mb-40 flex flex-col md:flex-row md:items-end justify-between gap-12">
           <div>
             <span className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-[#2A3B2A]/70 mb-6 block">Section 11</span>
             <h3 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#1a1a1a] uppercase tracking-tight">Our Partners.</h3>
           </div>
           <div className="max-w-md">
             <p className="font-sans font-light text-lg md:text-xl text-[#1a1a1a]/60 leading-relaxed">
               We exclusively partner with Kerala's most prestigious heritage properties to ensure your clinical journey takes place in a sanctuary of uncompromising luxury.
             </p>
           </div>
        </div>

        {/* The Offset Grid */}
        <div className="flex flex-col gap-32 md:gap-48">
          {partners.map((partner, index) => {
            const isLeft = partner.alignment === "left";
            
            return (
              <motion.div 
                key={partner.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-10% 0px -10% 0px", once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}
              >
                 {/* Image Block */}
                 <div className="w-full md:w-[60%]">
                    <div className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-2xl shadow-2xl">
                      <Image 
                        src={partner.image}
                        fill
                        className="object-cover transition-transform duration-1000 hover:scale-105"
                        alt={partner.name}
                        quality={90}
                      />
                    </div>
                 </div>

                 {/* Text Block */}
                 <div className={`w-full md:w-[40%] flex flex-col ${isLeft ? 'items-start text-left' : 'items-start md:items-end md:text-right'}`}>
                    <div className="flex items-center gap-4 mb-8">
                       <span className="font-sans text-xs tracking-widest text-[#1a1a1a]/30">{partner.id}</span>
                       <div className="h-px w-8 bg-[#1a1a1a]/10"></div>
                       <span className="font-sans text-[10px] tracking-widest uppercase text-[#2A3B2A]">{partner.location}</span>
                    </div>
                    
                    <h4 className="font-sans font-light text-4xl md:text-5xl uppercase tracking-tighter text-[#1a1a1a] mb-6">
                      {partner.name}
                    </h4>
                    
                    <p className="font-sans font-light text-base md:text-lg text-[#1a1a1a]/70 leading-relaxed mb-12 max-w-sm">
                      {partner.description}
                    </p>

                    <button className={`group flex items-center gap-4 font-sans text-xs tracking-[0.2em] uppercase text-[#1a1a1a] pb-2 border-b border-[#1a1a1a]/20 hover:border-[#1a1a1a] transition-colors`}>
                      Explore Sanctuary
                      <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                 </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  );
}
