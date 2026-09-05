"use client";

import { motion } from "framer-motion";

export default function ArrivalSection() {
  const transition = { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const };

  return (
    <section className="relative w-full h-[100vh] bg-paper text-forest border-b border-sage overflow-hidden flex items-center pt-20">

      {/* Main Typography & Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col h-full justify-between gap-24">
          
          {/* Brutalist Heading with Staggered Word Reveal */}
          <h1 className="font-serif text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] leading-[0.85] tracking-tight uppercase">
            <span className="block overflow-hidden"><motion.span className="block" initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ ...transition, delay: 0.1 }}>Wellness</motion.span></span>
            <span className="block overflow-hidden"><motion.span className="block" initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ ...transition, delay: 0.2 }}>Has A</motion.span></span>
            <span className="block overflow-hidden"><motion.span className="block" initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ ...transition, delay: 0.3 }}>History.</motion.span></span>
          </h1>
          
          {/* Bottom Row: Copy & CTA */}
          <div className="flex flex-col md:flex-row md:items-end justify-between w-full max-w-5xl gap-8">
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: 0.5 }}
              className="font-sans text-lg md:text-xl max-w-md text-forest/80 leading-relaxed"
            >
              Discover a different approach to wellbeing, rooted in the ancient traditions and living culture of Kerala.
            </motion.p>
            
            <motion.button 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ...transition, delay: 0.7 }}
              className="font-sans text-sm tracking-[0.2em] uppercase border border-forest/30 px-10 py-5 transition-all duration-300 hover:bg-forest hover:text-paper cursor-pointer"
            >
              Begin The Journey
            </motion.button>
          </div>

        </div>
      </div>
    </section>
  );
}
