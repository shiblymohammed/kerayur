"use client";

import Image from "next/image";

const experts = [
  {
    id: "01",
    name: "DR. ARJUN NAIR",
    title: "CHIEF CLINICAL VAIDYA",
    lineage: "7th Generation Practitioner",
    quote: "True healing is not the suppression of a symptom. It is the meticulous reconstruction of the body's internal intelligence.",
    bio: "Dr. Nair oversees all clinical protocols. Specializing in neurological and autoimmune conditions, he bridges ancient diagnostic techniques with modern physiological understanding.",
    image: "/images/vaidya_1.png",
    top: "top-[15vh]" // CSS sticky offset
  },
  {
    id: "02",
    name: "DR. MEERA MENON",
    title: "HEAD OF BOTANICAL COMPOUNDING",
    lineage: "Ashtanga Hridayam Scholar",
    quote: "Every herb has a frequency. Our formulations are not just chemical mixtures; they are living ecosystems designed to correct imbalance.",
    bio: "With over two decades of experience in clinical pharmacognosy, Dr. Menon formulates all internal medicines using sustainably harvested, high-altitude botanicals.",
    image: "/images/vaidya_2.png",
    top: "top-[19vh]" // CSS sticky offset (4vh lower than previous)
  },
  {
    id: "03",
    name: "RAJEEV PANICKER",
    title: "LEAD PANCHAKARMA SPECIALIST",
    lineage: "Kalari Marma Master",
    quote: "The physical body holds the memory of trauma. Through targeted somatic therapies, we release what the mind cannot process.",
    bio: "Trained in the ancient martial art of Kalaripayattu, Rajeev brings an unparalleled understanding of the Marma (vital energy points) system to physical therapies.",
    image: "/images/vaidya_3.png",
    top: "top-[23vh]" // CSS sticky offset (4vh lower than previous)
  }
];

export default function PeopleSection() {
  return (
    <section className="relative w-full bg-[#F8F6F0] py-24 md:py-40 text-[#1a1a1a]">
      
      {/* Section Header */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-32 md:mb-48 text-center flex flex-col items-center">
         <span className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-forest/70 mb-6 block">Section 08</span>
         <h3 className="font-serif text-5xl md:text-7xl lg:text-8xl text-forest uppercase tracking-tight mb-8">The Lineage.</h3>
         <p className="font-sans font-light text-xl text-[#1a1a1a]/60 max-w-2xl">
           The Kerayur Method is stewarded by masters. Meet the clinicians and scholars bridging ancient wisdom with rigorous medical science.
         </p>
      </div>

      {/* The Stacked Rolodex Container */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-12 pb-32">
        {experts.map((expert) => (
          <div 
            key={expert.id}
            className={`sticky ${expert.top} w-full h-[75vh] md:h-[65vh] mb-[50vh] flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-2xl border border-black/5`}
            style={{ 
              // A subtle box shadow to separate stacked cards in light mode
              boxShadow: '0 -15px 40px rgba(0,0,0,0.08)' 
            }}
          >
             {/* Left Side: Content */}
             <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-between relative z-10 bg-gradient-to-r from-white via-white to-white/80">
                
                <div>
                   <div className="flex items-center gap-4 mb-8">
                      <span className="font-sans text-xs tracking-widest text-black/30">{expert.id}</span>
                      <div className="h-px w-8 bg-forest/40"></div>
                      <span className="font-sans text-[10px] tracking-widest uppercase text-forest">{expert.lineage}</span>
                   </div>
                   
                   <h4 className="font-sans font-light text-4xl md:text-5xl uppercase tracking-tighter text-[#1a1a1a] mb-2">
                     {expert.name}
                   </h4>
                   <span className="font-serif italic text-lg text-[#1a1a1a]/50 block mb-12">{expert.title}</span>
                </div>

                <div>
                   <blockquote className="font-serif text-2xl md:text-3xl text-forest leading-snug mb-8 relative">
                     <span className="absolute -top-6 -left-4 text-6xl text-forest/10 font-sans">"</span>
                     {expert.quote}
                   </blockquote>
                   
                   <p className="font-sans font-light text-sm md:text-base text-[#1a1a1a]/70 leading-relaxed max-w-md">
                     {expert.bio}
                   </p>
                </div>

             </div>

             {/* Right Side: Image */}
             <div className="absolute md:relative inset-0 md:inset-auto w-full md:w-1/2 h-full z-0">
                <Image 
                  src={expert.image}
                  fill
                  className="object-cover object-top md:object-center grayscale opacity-15 md:opacity-100"
                  alt={expert.name}
                  quality={90}
                />
                {/* Mobile overlay to ensure text is readable on light mode */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-transparent md:hidden"></div>
                {/* Desktop fade edge for light theme */}
                <div className="hidden md:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent"></div>
             </div>
          </div>
        ))}
      </div>
      
    </section>
  );
}
