"use client";

import Image from "next/image";

const sanctuaries = [
  {
    id: "01",
    name: "THE FOREST RETREAT",
    location: "Wayanad, Kerala",
    description: "Nestled deep within the ancient rainforests, this sanctuary is designed for deep neurological restoration and digital detox. Built using traditional laterite stone and reclaimed teak.",
    image: "/images/sanctuary_3.png",
    className: "col-span-1 md:col-span-2 row-span-2"
  },
  {
    id: "02",
    name: "THE HEALING COURTYARD",
    location: "Palakkad, Kerala",
    description: "Built around a central Nalukettu courtyard. The geometry of the space aligns with Vastu Shastra principles to optimize the flow of prana during intensive Panchakarma therapies.",
    image: "/images/sanctuary_1.png",
    className: "col-span-1 md:col-span-1 row-span-1"
  },
  {
    id: "03",
    name: "THE CLINICAL CHAMBER",
    location: "Kochi, Kerala",
    description: "Where ancient tradition meets sterile precision. Our treatment rooms are stark, silent, and strictly temperature-controlled to ensure the perfect environment for oil absorption.",
    image: "/images/sanctuary_2.png",
    className: "col-span-1 md:col-span-1 row-span-1"
  }
];

export default function SanctuariesSection() {
  return (
    <section className="relative w-full bg-[#F4F1EA] py-24 md:py-40 text-[#1a1a1a]">
      
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-24 md:mb-32 flex flex-col md:flex-row md:items-end justify-between gap-12">
           <div>
             <span className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-forest/70 mb-6 block">Section 09</span>
             <h3 className="font-serif text-5xl md:text-7xl lg:text-8xl text-forest uppercase tracking-tight">The Sanctuaries.</h3>
           </div>
           <div className="max-w-md">
             <p className="font-sans font-light text-lg md:text-xl text-[#1a1a1a]/60 leading-relaxed">
               Healing requires surrender. Our sanctuaries are brutalist, minimalist spaces designed to strip away distraction and foster deep internal repair.
             </p>
           </div>
        </div>

        {/* The Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-[60vh] md:auto-rows-[45vh]">
          {sanctuaries.map((sanctuary) => (
            <div 
              key={sanctuary.id} 
              className={`relative group rounded-3xl overflow-hidden bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-black/5 ${sanctuary.className}`}
            >
               {/* Image */}
               <Image 
                 src={sanctuary.image} 
                 fill 
                 className="object-cover opacity-80 transition-transform duration-1000 group-hover:scale-105 group-hover:opacity-100" 
                 alt={sanctuary.name} 
                 quality={90}
               />
               
               {/* Gradient overlay to ensure text readability */}
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

               {/* Hover Details Overlay */}
               <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                     <span className="font-sans text-xs tracking-widest text-white bg-black/30 px-4 py-2 rounded-full backdrop-blur-md border border-white/20">
                       {sanctuary.id}
                     </span>
                     <span className="font-sans text-[10px] tracking-widest uppercase text-white bg-forest/80 px-4 py-2 rounded-full backdrop-blur-md border border-white/20">
                       {sanctuary.location}
                     </span>
                  </div>

                  <div>
                     <h4 className="font-sans font-light text-3xl md:text-5xl uppercase tracking-tighter text-paper mb-4 group-hover:text-white transition-colors duration-500 shadow-sm">
                       {sanctuary.name}
                     </h4>
                     <p className="font-sans font-light text-sm md:text-base text-white/90 max-w-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0 drop-shadow-md">
                       {sanctuary.description}
                     </p>
                  </div>
               </div>
            </div>
          ))}
        </div>

        {/* Global CTA */}
        <div className="mt-24 md:mt-32 flex justify-center">
           <button className="px-10 py-5 rounded-full border border-forest/30 text-forest font-sans text-xs tracking-[0.2em] uppercase hover:bg-forest hover:text-paper hover:border-forest transition-all duration-300">
             Explore All Locations
           </button>
        </div>

      </div>
    </section>
  );
}
