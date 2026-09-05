"use client";

import { motion } from "framer-motion";

export default function BeginJourneySection() {
  return (
    <section className="relative w-full bg-[#F8F6F0] text-[#1a1a1a] flex flex-col pt-32 md:pt-48 pb-12">
      
      {/* Main CTA Content */}
      <div className="flex-grow flex flex-col items-center justify-center px-6 text-center max-w-4xl mx-auto mb-32 md:mb-48">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
         >
           <span className="font-sans text-xs md:text-sm tracking-[0.4em] uppercase text-[#2A3B2A]/70 mb-8 block">
             The Next Step
           </span>
           <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#1a1a1a] leading-[1.1] tracking-tight mb-8">
             Your restoration <br className="hidden md:block" /> begins here.
           </h2>
           <p className="font-sans font-light text-lg md:text-xl text-[#1a1a1a]/60 max-w-2xl mx-auto mb-16 leading-relaxed">
             Submit your preliminary health details. Our clinical Vaidyas will review your case and invite you to begin a bespoke journey of healing in Kerala.
           </p>
           
           <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
             <button className="px-10 py-5 rounded-full bg-[#2A3B2A] text-[#F8F6F0] font-sans text-xs tracking-[0.2em] uppercase hover:bg-[#1a1a1a] transition-all duration-500 shadow-xl hover:shadow-2xl hover:-translate-y-1 w-full sm:w-auto">
               Begin Assessment
             </button>
             <button className="px-10 py-5 rounded-full border border-[#1a1a1a]/20 text-[#1a1a1a] font-sans text-xs tracking-[0.2em] uppercase hover:bg-white transition-all duration-500 w-full sm:w-auto">
               Contact Concierge
             </button>
           </div>
         </motion.div>
      </div>

      {/* Minimalist Footer */}
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 pt-12 border-t border-[#1a1a1a]/10">
         <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            
            <div className="flex items-center gap-2">
               <span className="font-serif text-2xl font-medium tracking-tight text-[#2A3B2A]">KERAYUR.</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
               <a href="#" className="font-sans text-[10px] tracking-widest uppercase text-[#1a1a1a]/60 hover:text-[#1a1a1a] transition-colors">The Method</a>
               <a href="#" className="font-sans text-[10px] tracking-widest uppercase text-[#1a1a1a]/60 hover:text-[#1a1a1a] transition-colors">Sanctuaries</a>
               <a href="#" className="font-sans text-[10px] tracking-widest uppercase text-[#1a1a1a]/60 hover:text-[#1a1a1a] transition-colors">Journal</a>
               <a href="#" className="font-sans text-[10px] tracking-widest uppercase text-[#1a1a1a]/60 hover:text-[#1a1a1a] transition-colors">FAQ</a>
            </div>

            <div className="text-center md:text-right">
               <p className="font-sans text-[10px] tracking-widest uppercase text-[#1a1a1a]/40">
                 © 2026 Kerayur Clinical Wellness
               </p>
            </div>

         </div>
      </div>

    </section>
  );
}
