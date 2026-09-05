"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function KeralaReimaginedSection() {
  return (
    <section className="relative w-full bg-[#F4F1EA] pt-32 pb-40 text-[#1a1a1a] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* Top Header */}
        <div className="mb-24 md:mb-40">
          <span className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-[#2A3B2A]/70 block">
            Section 02
          </span>
        </div>

        {/* Editorial Layout Grid */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">
          
          {/* The Massive Manifesto (Left Side) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-10% 0px -10% 0px", once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-9 lg:col-start-1 relative z-10"
          >
            <h3 className="font-serif text-5xl md:text-7xl lg:text-9xl xl:text-[11rem] leading-[0.85] tracking-tighter text-[#1a1a1a] uppercase">
              We did not <br />
              invent <br />
              <span className="text-[#2A3B2A] italic font-light lowercase pr-8">ayurveda.</span>
            </h3>
          </motion.div>

          {/* The Image (Right Side, Overlapping) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ margin: "-10% 0px -10% 0px", once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-5 lg:col-start-8 lg:-mt-32 relative z-0 mt-12 lg:mt-0"
          >
             <div className="relative w-full aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-xl shadow-2xl">
               <Image 
                 src="/images/kerala_lamp.png" 
                 fill 
                 className="object-cover" 
                 alt="Traditional Kerala Brass Lamp" 
                 quality={90}
               />
               <div className="absolute inset-0 bg-[#2A3B2A]/10 mix-blend-overlay"></div>
             </div>
             
             {/* Small caption */}
             <div className="mt-4 flex items-center justify-between">
                <span className="font-sans text-[9px] tracking-widest uppercase text-[#1a1a1a]/40">
                  Nilavilakku, The Light of Knowledge
                </span>
                <span className="font-sans text-[9px] tracking-widest uppercase text-[#1a1a1a]/40">
                  EST. 5000 BC
                </span>
             </div>
          </motion.div>
          
        </div>

        {/* The Body Copy (Below the manifesto) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 mt-20 lg:mt-32">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ margin: "-10% 0px -10% 0px", once: true }}
             transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
             className="lg:col-span-5 lg:col-start-3"
           >
              <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-[#1a1a1a]/50 mb-8 border-b border-[#1a1a1a]/10 pb-4">
                The Philosophy
              </h4>
              <p className="font-sans font-light text-xl md:text-2xl text-[#1a1a1a]/80 leading-relaxed">
                We simply stripped away the noise. No wellness clichés, no diluted spa menus. Kerayur is a return to the absolute, uncompromising clinical rigor of Kerala's ancient medical science, presented in spaces of unparalleled modern luxury.
              </p>
           </motion.div>
        </div>

      </div>
    </section>
  );
}
