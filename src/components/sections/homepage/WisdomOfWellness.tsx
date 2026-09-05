"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionTemplate, useVelocity, useSpring } from "framer-motion";

const journeySteps = [
// ... (omitted replacing the whole array, I'll just replace the component body)
  { 
    id: 1, 
    phase: "The Herb", 
    title: "Rooted in the Kerala Soil", 
    desc: "Hand-foraged botanicals that carry the raw, untamed energy of the earth.", 
    keywords: ["Ayurveda", "Herbal Treatments", "Nutrition"],
    bgColor: "bg-paper",
    textColor: "text-forest",
    rightBg: "bg-forest",
    rightText: "text-sage",
    image: "/images/wellness_herb.png"
  },
  { 
    id: 2, 
    phase: "The Oil", 
    title: "Ancient Alchemy", 
    desc: "Centuries-old distillation processes that concentrate nature's healing properties into liquid gold.", 
    keywords: ["Extraction", "Purity", "Essence"],
    bgColor: "bg-[#E5E1D4]", // slightly darker paper
    textColor: "text-forest",
    rightBg: "bg-terracotta",
    rightText: "text-paper",
    image: "/images/wellness_oil.png"
  },
  { 
    id: 3, 
    phase: "The Ritual", 
    title: "Sacred Preparation", 
    desc: "A rhythmic, intentional approach to wellness that honors the mind before treating the body.", 
    keywords: ["Mindfulness", "Intention", "Tradition"],
    bgColor: "bg-sage",
    textColor: "text-forest",
    rightBg: "bg-paper",
    rightText: "text-forest",
    image: "/images/wellness_ritual.png"
  },
  { 
    id: 4, 
    phase: "The Therapy", 
    title: "Deep Application", 
    desc: "Dynamic massage techniques that push medicinal properties deep into cellular tissues.", 
    keywords: ["Massage", "Healing", "Alignment"],
    bgColor: "bg-forest",
    textColor: "text-paper",
    rightBg: "bg-[#0B2A24]", // Deep Forest
    rightText: "text-sage",
    image: "/images/wellness_therapy.png"
  },
  { 
    id: 5, 
    phase: "The Rest", 
    title: "Intentional Stillness", 
    desc: "Quieting the physical form through breathwork and movement to clear dormant energetic pathways.", 
    keywords: ["Yoga", "Meditation", "Stillness"],
    bgColor: "bg-[#0B2A24]", // Deep Forest
    textColor: "text-sage",
    rightBg: "bg-terracotta",
    rightText: "text-paper",
    image: "/images/wellness_rest.png"
  },
  { 
    id: 6, 
    phase: "The Recovery", 
    title: "Total Harmony", 
    desc: "A profound state of physiological balance, where natural intelligence is fully restored.", 
    keywords: ["Clinical Wellness", "Vitality", "Balance"],
    bgColor: "bg-terracotta",
    textColor: "text-paper",
    rightBg: "bg-paper",
    rightText: "text-terracotta",
    image: "/images/wellness_recovery.png"
  },
];

export default function WisdomOfWellnessSection() {
  const containerRef = useRef<HTMLElement>(null);
  
  // Track scroll progress across the entire 700vh parent container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate scroll velocity for high-end "GSAP-style" skewing physics
  const scrollVelocity = useVelocity(scrollYProgress);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const skewVelocity = useTransform(smoothVelocity, [-1, 1], [-10, 10]);
  const scaleVelocity = useTransform(smoothVelocity, [-1, 1], [0.95, 1.05]);

  // 100vh fade-in / 600vh scroll distance = 0.1666
  // We use strict mathematical clamping functions because array-based useTransform 
  // can sometimes extrapolate values (causing blur(-10px) which browsers interpret as blurrier!)
  
  const sectionOpacity = useTransform(scrollYProgress, (pos) => {
    if (pos <= 0) return 0;
    if (pos >= 0.1666) return 1;
    return pos / 0.1666;
  });

  const blurAmount = useTransform(scrollYProgress, (pos) => {
    if (pos <= 0) return 30;
    if (pos >= 0.1666) return 0;
    return 30 - ((pos / 0.1666) * 30);
  });
  
  const sectionFilter = useMotionTemplate`blur(${blurAmount}px)`;

  // Left column scrolls UP normally
  const leftY = useTransform(scrollYProgress, (pos) => {
    if (pos <= 0.1666) return "0%";
    if (pos >= 1) return "-83.3333%";
    const progress = (pos - 0.1666) / (1 - 0.1666);
    return `-${progress * 83.3333}%`;
  });
  
  // Right column scrolls DOWN backwards
  const rightY = useTransform(scrollYProgress, (pos) => {
    if (pos <= 0.1666) return "-83.3333%";
    if (pos >= 1) return "0%";
    const progress = (pos - 0.1666) / (1 - 0.1666);
    return `${-83.3333 + (progress * 83.3333)}%`;
  });

  return (
    <section ref={containerRef} className="relative z-10 w-full h-[700vh] bg-transparent mt-[-200vh] pointer-events-none">
      
      {/* Sticky Viewport Window */}
      <motion.div 
        style={{ opacity: sectionOpacity, filter: sectionFilter }}
        className="sticky top-0 w-full h-screen overflow-hidden flex flex-col md:flex-row shadow-2xl pointer-events-auto bg-paper"
      >
        
        {/* LEFT COLUMN (Scrolls UP) with velocity skew */}
        <motion.div 
          style={{ y: leftY, skewY: skewVelocity }}
          className="w-full md:w-1/2 h-[600vh] flex flex-col will-change-transform origin-center"
        >
          {journeySteps.map((step, index) => (
            <div key={`left-${step.id}`} className={`w-full h-screen flex flex-col justify-center px-8 md:px-20 lg:px-32 ${step.bgColor} ${step.textColor}`}>
              <JourneyTextReveal step={step} index={index} scrollYProgress={scrollYProgress} />
            </div>
          ))}
        </motion.div>

        {/* RIGHT COLUMN (Scrolls DOWN) with velocity scale breathing */}
        <motion.div 
          style={{ y: rightY, scale: scaleVelocity }}
          className="w-full md:w-1/2 h-[600vh] hidden md:flex flex-col will-change-transform origin-center"
        >
          {/* We reverse the array so that item 1 is physically at the BOTTOM of the DOM column */}
          {[...journeySteps].reverse().map((step) => (
            <div key={`right-${step.id}`} className={`relative w-full h-screen flex items-center justify-center overflow-hidden ${step.rightBg}`}>
              
              <Image 
                src={step.image} 
                alt={step.phase}
                fill
                className="object-cover"
                quality={90}
                priority={step.id === 1}
              />
              
              {/* Subtle graphic accent */}
              <div className="absolute top-12 right-12 w-3 h-3 bg-paper rotate-45 opacity-30 z-10"></div>
              <div className="absolute bottom-12 left-12 w-3 h-3 bg-paper rounded-full opacity-30 z-10"></div>

            </div>
          ))}
        </motion.div>
        
      </motion.div>
    </section>
  );
}

// --------------------------------------------------------
// Local Component for Bulletproof Scroll-Driven Text Reveal
// --------------------------------------------------------
function JourneyTextReveal({ step, index, scrollYProgress }: { step: any, index: number, scrollYProgress: any }) {
  const target = (index + 1) / 6;
  const window = 0.12; 
  
  // Use mathematical mapping instead of arrays to prevent WAAPI [0, 1] offset errors
  const opacity = useTransform(scrollYProgress, (pos) => {
    const dist = Math.abs(pos - target);
    if (dist >= window) return 0.1;
    const peak = 1 - (dist / window);
    return 0.1 + (peak * 0.9);
  });
  
  const parallaxY = useTransform(scrollYProgress, (pos) => {
    const dist = pos - target;
    const clampedDist = Math.max(-window, Math.min(window, dist));
    const factor = clampedDist / window;
    return factor * 60; // from 60px down to 0, then to -60px
  });

  return (
    <motion.div style={{ opacity, y: parallaxY }} className="max-w-2xl">
      <p className="font-sans text-xs tracking-[0.3em] uppercase font-bold mb-8 opacity-70">
        Phase 0{step.id} — {step.phase}
      </p>
      
      <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[0.9] tracking-tight mb-8 drop-shadow-sm">
        {step.title}
      </h2>
      
      <p className="font-sans text-base md:text-lg opacity-90 leading-relaxed max-w-md mb-12">
        {step.desc}
      </p>
      
      <div className="flex flex-wrap gap-3">
        {step.keywords.map((kw: string) => (
          <span 
            key={kw} 
            className="font-sans text-[10px] tracking-widest uppercase border border-current px-5 py-2 rounded-full opacity-80"
          >
            {kw}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
