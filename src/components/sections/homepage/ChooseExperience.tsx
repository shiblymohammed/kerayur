"use client";

import Image from "next/image";

const experiences = [
  {
    id: "01",
    name: "REJUVENATION",
    subtitle: "Rasayana Chikitsa",
    idealFor: ["Burnout", "General Fatigue", "Preventative Health", "Post-Illness Recovery"],
    duration: "7 to 14 Days",
    focus: "A complete reset of the nervous system and cellular detoxification to halt the aging process and restore vital energy.",
    image: "/images/wellness_recovery.png",
    accent: "bg-[#2A3B2A] text-[#F8F6F0]",
    borderColor: "border-[#2A3B2A]/20"
  },
  {
    id: "02",
    name: "CLINICAL THERAPY",
    subtitle: "Roga Nivarana",
    idealFor: ["Autoimmune Disorders", "Chronic Pain", "Metabolic Syndrome", "Neurological Issues"],
    duration: "14 to 28 Days",
    focus: "Intensive, targeted medical intervention using deep Panchakarma protocols to pull localized toxins from deep tissues.",
    image: "/images/clinical_half.png",
    accent: "bg-[#C1A87D] text-[#1a1a1a]",
    borderColor: "border-[#C1A87D]/40"
  },
  {
    id: "03",
    name: "MENTAL WELLNESS",
    subtitle: "Manasika Chikitsa",
    idealFor: ["Severe Anxiety", "Depression", "Insomnia", "Cognitive Decline"],
    duration: "10 to 21 Days",
    focus: "Focused entirely on the mind-body axis. Utilizing Shirodhara, specialized herbs, and sensory deprivation to rewire neural pathways.",
    image: "/images/wellness_rest.png",
    accent: "bg-[#1a1a1a] text-white",
    borderColor: "border-[#1a1a1a]/20"
  }
];

export default function ChooseExperienceSection() {
  return (
    <section className="relative w-full bg-[#F4F1EA] py-24 md:py-32 text-[#1a1a1a]">
      
      {/* Header */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 mb-20 flex flex-col md:flex-row md:items-end justify-between border-b border-[#1a1a1a]/10 pb-12">
         <div>
           <span className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-[#2A3B2A]/70 mb-4 block">Section 10</span>
           <h3 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#1a1a1a] uppercase tracking-tight">Choose Your Path.</h3>
         </div>
         <p className="font-sans font-light text-lg md:text-xl text-[#1a1a1a]/60 max-w-md mt-8 md:mt-0 leading-relaxed">
           Select the clinical track that aligns with your current physiological state. Each path is a fully bespoke, doctor-led journey.
         </p>
      </div>

      {/* The Dossier Grid */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {experiences.map((exp) => (
          <div 
            key={exp.id}
            className="flex flex-col group h-full"
          >
             {/* Image Container */}
             <div className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl mb-8 shadow-xl">
               <Image 
                 src={exp.image} 
                 fill 
                 className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                 alt={exp.name} 
                 quality={90}
               />
               {/* Subtle overlay */}
               <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
               
               {/* Badge */}
               <div className="absolute top-6 left-6 flex items-center justify-center w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border border-white/20 shadow-lg z-10">
                 <span className="font-sans text-xs tracking-widest text-[#1a1a1a]">{exp.id}</span>
               </div>
             </div>

             {/* Content Container */}
             <div className={`flex flex-col flex-grow border-l-2 pl-6 md:pl-8 ${exp.borderColor} transition-colors duration-500`}>
                
                <div className="mb-8">
                   <span className="font-serif italic text-xl md:text-2xl block mb-2 text-[#2A3B2A]/80">
                     {exp.subtitle}
                   </span>
                   <h4 className="font-sans font-light text-3xl md:text-4xl lg:text-5xl uppercase tracking-tighter text-[#1a1a1a]">
                     {exp.name}
                   </h4>
                </div>

                <div className="flex flex-col gap-8 flex-grow mb-12">
                   <div>
                      <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#1a1a1a]/40 mb-3 block">Clinical Focus</span>
                      <p className="font-sans font-light text-base md:text-lg text-[#1a1a1a]/80 leading-relaxed">
                        {exp.focus}
                      </p>
                   </div>
                   
                   <div>
                      <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#1a1a1a]/40 mb-3 block">Ideal For</span>
                      <ul className="flex flex-col gap-2">
                        {exp.idealFor.map((item, i) => (
                          <li key={i} className="font-sans font-medium text-sm md:text-base text-[#1a1a1a]/90 flex items-center gap-3">
                            <div className="w-1 h-1 rounded-full bg-[#1a1a1a]/40"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                   </div>
                </div>

                <div className="mt-auto flex flex-col xl:flex-row xl:items-center justify-between gap-6 pt-8 border-t border-[#1a1a1a]/10">
                   <div>
                     <span className="block font-sans text-[10px] tracking-[0.2em] uppercase text-[#1a1a1a]/40 mb-1">Duration</span>
                     <span className="font-serif text-xl text-[#1a1a1a]">{exp.duration}</span>
                   </div>
                   <button className={`px-8 py-4 rounded-full font-sans text-[10px] tracking-[0.2em] uppercase transition-transform hover:-translate-y-1 w-full xl:w-auto text-center shadow-lg ${exp.accent}`}>
                     Select Path
                   </button>
                </div>
             </div>

          </div>
        ))}
      </div>
      
    </section>
  );
}
