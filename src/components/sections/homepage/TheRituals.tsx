"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function TheRitualsSection() {
  const [activeRitual, setActiveRitual] = useState<number | null>(0);

  const rituals = [
    {
      id: "01",
      name: "ABHYANGA",
      tagline: "THE RITUAL OF OIL",
      explanation: "A deeply therapeutic full-body massage using warm, medicated herbal oils tailored to your specific physical constitution.",
      context: "Practiced for thousands of years in Kerala, Abhyanga is the cornerstone of Ayurvedic physical therapy, designed to pull toxins from deep tissues into the digestive tract for elimination.",
      duration: "60 - 90 Min",
      image: "/images/wellness_oil.png"
    },
    {
      id: "02",
      name: "SHIRODHARA",
      tagline: "A MOMENT OF STILLNESS",
      explanation: "A continuous, rhythmic pouring of warm herbal oil over the ajna chakra (third eye) to induce a state of profound rest.",
      context: "Historically reserved for royalty, Shirodhara directly targets the central nervous system, effectively resetting stress patterns and combating modern neurological fatigue.",
      duration: "45 - 60 Min",
      image: "/images/trad_ritual.png"
    },
    {
      id: "03",
      name: "YOGA",
      tagline: "BREATH. MOVEMENT. BALANCE.",
      explanation: "Curated asana and pranayama sequences designed to optimize your body's structural alignment and energetic flow.",
      context: "Originating in ancient India, Yoga and Ayurveda are sister sciences. Our clinical approach focuses on the biomechanical and physiological benefits of traditional postures.",
      duration: "60 Min / Daily",
      image: "/images/wellness_therapy.png"
    },
    {
      id: "04",
      name: "MEDITATION",
      tagline: "QUIET THE NOISE.",
      explanation: "Guided practices focused on down-regulating the sympathetic nervous system and cultivating deep neuroplasticity.",
      context: "Drawing from Vipassana and ancient Vedic contemplation, these sessions provide the mental stillness required for true cellular healing to occur.",
      duration: "30 Min",
      image: "/images/wellness_rest.png"
    },
    {
      id: "05",
      name: "HERBAL THERAPY",
      tagline: "FROM THE LAND.",
      explanation: "Internal and external application of specific botanical compounds formulated to address your unique physiological imbalances.",
      context: "Kerala is the apothecary of the world. Our formulations use highly potent, sustainably harvested herbs prescribed according to the ancient texts of the Ashtanga Hridayam.",
      duration: "Ongoing",
      image: "/images/wellness_herb.png"
    }
  ];

  return (
    <section className="relative w-full bg-[#0d0d0d] text-paper py-24 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-32"
        >
          <h2 className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-forest/80 mb-6">Section 06</h2>
          <h3 className="font-serif text-5xl md:text-7xl lg:text-8xl text-paper uppercase tracking-tight">The Rituals.</h3>
        </motion.div>

        <div className="w-full flex flex-col border-t border-white/10">
          {rituals.map((ritual, i) => {
            const isActive = activeRitual === i;
            
            return (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                key={ritual.id} 
                className="border-b border-white/10 overflow-hidden group"
              >
                {/* Accordion Header */}
                <div 
                  className="py-8 md:py-12 flex flex-col md:flex-row md:items-center justify-between cursor-pointer"
                  onClick={() => setActiveRitual(isActive ? null : i)}
                >
                   <div className="flex items-center gap-6 md:gap-16 mb-4 md:mb-0">
                      <span className="font-sans text-xs md:text-sm tracking-widest text-white/30 font-light">{ritual.id}</span>
                      <h4 className={`font-sans text-4xl md:text-6xl lg:text-7xl uppercase tracking-tighter transition-colors duration-500 ${isActive ? 'text-forest' : 'text-paper group-hover:text-forest/70'}`}>
                        {ritual.name}
                      </h4>
                   </div>
                   <div className="pl-[3.25rem] md:pl-0">
                      <span className="font-serif italic text-xl md:text-2xl text-white/50">{ritual.tagline}</span>
                   </div>
                </div>

                {/* Accordion Content */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full"
                    >
                      <div className="pb-16 pt-8 flex flex-col lg:flex-row gap-12 lg:gap-24">
                         
                         {/* Image Column */}
                         <div className="w-full lg:w-1/2 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                            <Image 
                              src={ritual.image} 
                              fill 
                              className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                              alt={ritual.name} 
                              quality={90}
                            />
                            <div className="absolute inset-0 bg-black/20"></div>
                         </div>
                         
                         {/* Details Column */}
                         <div className="w-full lg:w-1/2 flex flex-col justify-center">
                            
                            <div className="mb-12">
                              <h5 className="font-sans text-[10px] tracking-[0.3em] uppercase text-white/40 mb-4 border-b border-white/10 pb-3">The Practice</h5>
                              <p className="font-sans font-light text-xl md:text-2xl leading-relaxed text-paper/90">{ritual.explanation}</p>
                            </div>

                            <div className="mb-12">
                              <h5 className="font-sans text-[10px] tracking-[0.3em] uppercase text-white/40 mb-4 border-b border-white/10 pb-3">Cultural Context</h5>
                              <p className="font-sans font-light text-base md:text-lg leading-relaxed text-paper/60">{ritual.context}</p>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-white/10 pt-8 mt-auto gap-8 sm:gap-0">
                              <div>
                                <span className="block font-sans text-[10px] tracking-[0.3em] uppercase text-white/40 mb-2">Duration</span>
                                <span className="font-serif italic text-xl text-forest">{ritual.duration}</span>
                              </div>
                              <button className="px-8 py-4 rounded-full border border-forest text-forest font-sans text-[10px] tracking-widest uppercase hover:bg-forest hover:text-paper transition-colors w-full sm:w-auto text-center">
                                Explore Therapy
                              </button>
                            </div>

                         </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
