"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TraditionToClinicalSection() {
  const traditionList = [
    { title: "Ancient practices", desc: "Rooted in centuries of unbroken lineage." },
    { title: "Herbal knowledge", desc: "Sourced directly from the forests of Kerala." },
    { title: "Traditional therapies", desc: "Authentic, time-tested physical methodologies." },
    { title: "Ritual", desc: "Honoring the sacred elements of healing." },
    { title: "Natural ingredients", desc: "Pure, unprocessed, and deeply potent." }
  ];

  const clinicalList = [
    { title: "Consultation", desc: "Comprehensive, evidence-based diagnostics." },
    { title: "Assessment", desc: "Modern metrics meeting ancient wisdom." },
    { title: "Treatment planning", desc: "Structured, measured, and highly customized." },
    { title: "Professional practitioners", desc: "Certified experts bridging both worlds." },
    { title: "Wellness programmes", desc: "Curated journeys with trackable outcomes." },
    { title: "Modern facilities", desc: "State-of-the-art sanctuaries of healing." }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <section className="relative w-full bg-[#f8f9fa] py-24 md:py-40 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Massive Editorial Headline */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24 md:mb-40"
        >
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-forest leading-[0.9] tracking-tight drop-shadow-sm mb-4 uppercase">
            Ancient Knowledge.
          </h2>
          <h2 className="font-sans font-light text-4xl md:text-5xl lg:text-7xl text-[#1a1a1a] leading-none tracking-tighter uppercase">
            Contemporary Care.
          </h2>
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-px bg-forest/30 mx-auto mt-16 hidden md:block"
          ></motion.div>
        </motion.div>

        {/* The Overlapping Duality Layout */}
        <div className="relative w-full flex flex-col md:flex-row items-start justify-center pb-24">
          
          {/* Tradition Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50, rotate: -2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-[55%] bg-forest text-paper rounded-[2rem] overflow-hidden shadow-2xl z-10 md:-mr-[5%] relative"
          >
            {/* Hero Image for Tradition */}
            <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden group">
              <Image 
                src="/images/tradition_half.png" 
                alt="Ayurvedic Tradition" 
                fill 
                className="object-cover opacity-70 mix-blend-luminosity transition-transform duration-1000 group-hover:scale-105" 
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest to-transparent"></div>
              <h3 className="absolute bottom-8 left-8 right-8 font-serif italic text-4xl md:text-6xl drop-shadow-lg">
                The Tradition
              </h3>
            </div>
            
            {/* List */}
            <div className="p-8 md:p-12 lg:p-16">
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10"
              >
                {traditionList.map((item, i) => (
                  <motion.div key={i} variants={itemVariants} className="flex flex-col border-t border-white/20 pt-4">
                    <span className="font-serif text-xl md:text-2xl text-paper mb-2">{item.title}</span>
                    <span className="font-sans font-light text-xs md:text-sm text-paper/70 tracking-wide leading-relaxed uppercase">
                      {item.desc}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Clinical Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50, rotate: 2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-[55%] bg-paper text-forest rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-20 md:-ml-[5%] md:mt-48 relative border border-black/5 mt-8"
          >
            {/* Hero Image for Clinical */}
            <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden group">
              <Image 
                src="/images/clinical_half.png" 
                alt="Modern Clinical Care" 
                fill 
                className="object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105" 
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-paper via-paper/20 to-transparent"></div>
              <h3 className="absolute bottom-8 left-8 right-8 text-right font-sans font-light text-3xl md:text-5xl uppercase tracking-tighter text-[#1a1a1a]">
                The Clinical
              </h3>
            </div>
            
            {/* List */}
            <div className="p-8 md:p-12 lg:p-16">
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10"
              >
                {clinicalList.map((item, i) => (
                  <motion.div key={i} variants={itemVariants} className="flex flex-col border-t border-forest/20 pt-4 text-right">
                    <span className="font-sans font-medium text-lg md:text-xl text-[#1a1a1a] uppercase tracking-wide mb-2">{item.title}</span>
                    <span className="font-sans font-light text-xs md:text-sm text-forest/70 tracking-wide leading-relaxed">
                      {item.desc}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* The Visual Merge Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-200px" }}
            transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
            className="hidden md:flex absolute top-[calc(50%+6rem)] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-40 h-40 bg-deep-teal rounded-full shadow-2xl border-8 border-[#f8f9fa] items-center justify-center overflow-hidden group hover:scale-105 transition-transform duration-500"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-forest to-deep-teal opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
             <span className="relative z-10 text-center text-[10px] tracking-[0.25em] uppercase font-bold text-white leading-loose">
               The<br/>Kerayur<br/>Method
             </span>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
