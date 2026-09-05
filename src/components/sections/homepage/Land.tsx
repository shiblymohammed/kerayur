"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const biomes = [
  {
    id: "01",
    name: "WESTERN GHATS",
    tagline: "THE HIGH ALTITUDE APOTHECARY",
    description: "Towering peaks and ancient forests where the rarest, most potent Ayurvedic herbs are wild-harvested by local tribes. The altitude and pristine air create botanical compounds found nowhere else on earth.",
    image: "/images/western_ghats.png",
    alignment: "left"
  },
  {
    id: "02",
    name: "THE BACKWATERS",
    tagline: "VEINS OF THE EARTH",
    description: "A vast, interconnected labyrinth of brackish lagoons and lakes. The humidity and unique mineral composition of the water here are essential for the fermentation of our traditional arishtams (herbal wines).",
    image: "/images/kerala_backwaters.png",
    alignment: "right"
  },
  {
    id: "03",
    name: "TEA PLANTATIONS",
    tagline: "THE MISTED SLOPES",
    description: "Rolling hills perpetually draped in mist. Beyond tea, these high-altitude slopes cultivate rare camphor and eucalyptus varieties critical for our respiratory therapies.",
    image: "/images/tea_plantations.png",
    alignment: "center"
  }
];

export default function LandSection() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax the map background extremely slowly
  const mapY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={containerRef} className="relative w-full bg-[#EAE7DF] text-[#1a1a1a] min-h-[300vh]">
      
      {/* Sticky Background Map */}
      <div className="sticky top-0 w-full h-screen overflow-hidden pointer-events-none flex items-center justify-center">
         <motion.div 
           className="relative w-[150vw] h-[150vh] opacity-30 mix-blend-multiply"
           style={{ y: mapY }}
         >
            <Image 
              src="/images/kerala_topo_map.png" 
              fill 
              className="object-cover" 
              alt="Kerala Topography" 
              priority
            />
         </motion.div>
         
         {/* Central Manifesto Text (Fades out as you scroll down) */}
         <motion.div 
           className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
           style={{ 
             opacity: useTransform(scrollYProgress, [0, 0.15], [1, 0]),
             scale: useTransform(scrollYProgress, [0, 0.15], [1, 0.95]),
           }}
         >
            <span className="font-sans text-xs tracking-[0.4em] uppercase text-forest/70 mb-8 block">Section 07</span>
            <h3 className="font-serif text-6xl md:text-8xl lg:text-9xl text-forest uppercase tracking-tight mb-8">The Land.</h3>
            <p className="font-sans font-light text-xl md:text-2xl text-[#1a1a1a]/80 max-w-2xl leading-relaxed">
              Ayurveda cannot be exported. It must be experienced where the earth itself acts as medicine. Welcome to the apothecary of the world.
            </p>
         </motion.div>
      </div>

      {/* Scrolling Content - The Biome Cards */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 pb-32">
        {/* Empty space at the top so the map manifesto shows first */}
        <div className="h-[80vh]"></div>

        <div className="flex flex-col gap-[30vh]">
          {biomes.map((biome, i) => {
            // Determine alignment classes
            let alignmentClass = "mr-auto"; // Left
            if (biome.alignment === "right") alignmentClass = "ml-auto";
            if (biome.alignment === "center") alignmentClass = "mx-auto";

            return (
              <motion.div 
                key={biome.id}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-20% 0px -20% 0px", once: false }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={`w-full max-w-2xl bg-white/40 backdrop-blur-xl border border-white/60 p-6 md:p-10 rounded-3xl shadow-2xl ${alignmentClass}`}
              >
                 <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-8">
                    <Image 
                      src={biome.image}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-1000"
                      alt={biome.name}
                    />
                    <div className="absolute top-4 left-4 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full border border-white/50 flex items-center justify-center">
                       <span className="font-sans text-xs tracking-widest text-white">{biome.id}</span>
                    </div>
                 </div>

                 <div>
                    <span className="font-serif italic text-xl text-forest block mb-2">{biome.tagline}</span>
                    <h4 className="font-sans font-light text-4xl md:text-5xl uppercase tracking-tight text-[#1a1a1a] mb-6">
                      {biome.name}
                    </h4>
                    <p className="font-sans font-light text-base md:text-lg text-[#1a1a1a]/70 leading-relaxed">
                      {biome.description}
                    </p>
                 </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
