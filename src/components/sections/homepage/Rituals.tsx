"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const rituals = [
  {
    id: "01",
    name: "ABHYANGA",
    tagline: "THE RITUAL OF OIL",
    explanation: "A deeply therapeutic full-body massage using warm, medicated herbal oils tailored to your physical constitution.",
    context: "Practiced for thousands of years in Kerala, Abhyanga pulls toxins from deep tissues into the digestive tract for elimination.",
    duration: "60 - 90 Min",
    image: "/images/wellness_oil.png"
  },
  {
    id: "02",
    name: "SHIRODHARA",
    tagline: "A MOMENT OF STILLNESS",
    explanation: "A continuous, rhythmic pouring of warm herbal oil over the ajna chakra to induce a state of profound rest.",
    context: "Historically reserved for royalty, Shirodhara directly targets the central nervous system, resetting stress patterns.",
    duration: "45 - 60 Min",
    image: "/images/trad_ritual.png"
  },
  {
    id: "03",
    name: "YOGA",
    tagline: "BREATH. MOVEMENT. BALANCE.",
    explanation: "Curated asana and pranayama sequences designed to optimize your body's structural alignment and energetic flow.",
    context: "Originating in ancient India, Yoga and Ayurveda are sister sciences. Our approach focuses on biomechanical benefits.",
    duration: "60 Min / Daily",
    image: "/images/wellness_therapy.png"
  },
  {
    id: "04",
    name: "MEDITATION",
    tagline: "QUIET THE NOISE.",
    explanation: "Guided practices focused on down-regulating the sympathetic nervous system and cultivating deep neuroplasticity.",
    context: "Drawing from Vipassana and ancient Vedic contemplation, providing mental stillness required for true cellular healing.",
    duration: "30 Min",
    image: "/images/wellness_rest.png"
  },
  {
    id: "05",
    name: "HERBAL THERAPY",
    tagline: "FROM THE LAND.",
    explanation: "Internal and external application of specific botanical compounds formulated to address your unique physiological imbalances.",
    context: "Kerala is the apothecary of the world. Our formulations use highly potent, sustainably harvested herbs.",
    duration: "Ongoing",
    image: "/images/wellness_herb.png"
  }
];

export default function RitualsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);
  const sectionRef = useRef<HTMLElement>(null);

  // Track the scroll progress of the entire section to drive the parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Create highly staggered parallax values for the 5 images
  const y1 = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["-25%", "25%"]);
  const y4 = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const y5 = useTransform(scrollYProgress, [0, 1], ["-10%", "30%"]);
  
  const parallaxTransforms = [y1, y2, y3, y4, y5];

  return (
    <section ref={sectionRef} className="relative w-full bg-[#f4f1ea] py-24 md:py-32">
      <div className="max-w-[1800px] mx-auto px-4 md:px-8">
        
        {/* Header (Light Theme) */}
        <div className="mb-12 md:mb-16">
           <span className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-forest/60 mb-4 block">Section 06</span>
           <h3 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#1a1a1a] uppercase tracking-tight">The Rituals.</h3>
        </div>

        {/* The Expanding Hover Grid */}
        <div className="w-full h-[75vh] md:h-[80vh] flex flex-col md:flex-row gap-2 md:gap-4 overflow-hidden rounded-[2rem]">
          {rituals.map((ritual, index) => {
            const isHovered = hoveredIndex === index;
            
            return (
              <motion.div
                key={ritual.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onClick={() => setHoveredIndex(index)} // For mobile tap
                animate={{ 
                  flex: isHovered ? 6 : 1,
                }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative h-full rounded-2xl overflow-hidden cursor-pointer group"
              >
                {/* Background Image with Parallax & Hover Scaling */}
                <motion.div 
                  className="absolute w-full h-full"
                  style={{ 
                    // Make container 140% height and negatively offset so parallax has room to move
                    top: "-20%", 
                    height: "140%",
                    y: parallaxTransforms[index]
                  }}
                  animate={{ 
                    scale: isHovered ? 1 : 1.15,
                    filter: isHovered ? 'brightness(0.9)' : 'brightness(0.4)'
                  }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Image 
                    src={ritual.image} 
                    fill 
                    className="object-cover" 
                    alt={ritual.name} 
                    quality={90}
                  />
                </motion.div>

                {/* Gradients to ensure text readability */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
                <div className={`absolute inset-0 bg-black/40 transition-opacity duration-700 ${!isHovered ? 'opacity-100' : 'opacity-0'}`}></div>

                {/* Number Badge (Always visible at top) */}
                <div className="absolute top-6 left-6 text-paper/70 font-sans text-xs tracking-widest z-20">
                  {ritual.id}
                </div>

                {/* Vertical Text (Visible only when NOT hovered) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none md:block hidden z-20">
                  <motion.div 
                    initial={false}
                    animate={{ opacity: isHovered ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 origin-center whitespace-nowrap"
                  >
                    <span className="font-sans font-light text-2xl md:text-3xl uppercase tracking-[0.2em] text-paper">
                      {ritual.name}
                    </span>
                  </motion.div>
                </div>

                {/* Expanded Content (Visible only when hovered) */}
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 flex flex-col justify-end text-paper h-full z-10 pointer-events-none">
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col justify-end h-full pointer-events-auto"
                      >
                        <span className="font-serif italic text-xl md:text-3xl text-[#E5E1D4] block mb-2">{ritual.tagline}</span>
                        <h4 className="font-sans font-light text-4xl md:text-6xl lg:text-7xl uppercase tracking-tighter mb-6 leading-none">
                          {ritual.name}
                        </h4>
                        
                        <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-8 border-t border-white/20 pt-6 mt-2">
                           <div className="flex flex-col gap-4 max-w-xl">
                              <p className="font-sans font-light text-sm md:text-base leading-relaxed text-paper/90">
                                <span className="text-white font-medium mr-2">The Practice:</span>{ritual.explanation}
                              </p>
                              <p className="font-sans font-light text-sm md:text-base leading-relaxed text-paper/60">
                                <span className="text-white/80 font-medium mr-2">Context:</span>{ritual.context}
                              </p>
                           </div>
                           
                           <div className="flex xl:flex-col items-center xl:items-end justify-between xl:justify-end gap-6 shrink-0">
                              <div className="text-left xl:text-right">
                                <span className="block font-sans text-[10px] tracking-widest uppercase text-white/50 mb-1">Duration</span>
                                <span className="font-serif text-lg md:text-xl text-paper">{ritual.duration}</span>
                              </div>
                              <button className="px-6 py-3 rounded-full border border-white/30 text-paper hover:bg-white hover:text-black transition-colors font-sans text-[10px] tracking-widest uppercase">
                                Explore
                              </button>
                           </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
