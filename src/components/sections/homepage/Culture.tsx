"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function CultureSection() {
  const containerRef = useRef<HTMLElement>(null);

  // ==============================
  // SCROLL PARALLAX LOGIC
  // ==============================
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Dancer slides up smoothly into position
  const dancerY = useTransform(scrollYProgress, [0.2, 0.5, 1], ["15%", "0%", "-5%"]);
  const dancerOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);

  return (
    <section
      id="culture"
      ref={containerRef}
      className="w-full h-[300vh] relative z-0"
    >
      {/* Sticky wrapper */}
      <div className="sticky top-0 w-full h-screen bg-[#E5E1D4] overflow-hidden flex flex-col items-center justify-center cursor-default">

        {/* Background Layer */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none flex">
          <Image
            src="/theyyabg1.jpeg"
            alt="Theyyam Background"
            fill
            className="object-cover"
            quality={100}
          />

          {/* Blurred Foreground Leaves */}
          <div className="absolute bottom-0 left-0 w-[50vw] max-w-[600px] h-[50vh] pointer-events-none z-10">
            <Image
              src="/images/leaves_bottom_left.png"
              alt="Foreground Leaves"
              fill
              className="object-contain object-left-bottom blur-[8px] opacity-90"
            />
          </div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 h-screen flex flex-col items-start justify-center">

          {/* Left Column: Typography */}
          <div className="relative w-full lg:w-1/2 flex flex-col justify-center items-start text-forest z-20">

            <p className="font-sans text-[10px] md:text-xs tracking-[0.25em] uppercase font-bold mb-4 opacity-60">
              Living Traditions
            </p>

            <h2 className="font-serif text-[4.5rem] md:text-[6rem] lg:text-[7.5rem] leading-none mb-4 tracking-tight drop-shadow-sm">
              Theyyam
            </h2>

            {/* Decorative Divider */}
            <div className="flex items-center gap-2 mb-8 opacity-40">
              <div className="w-20 h-[1px] bg-forest"></div>
              <div className="w-1.5 h-1.5 bg-forest rotate-45"></div>
              <div className="w-20 h-[1px] bg-forest"></div>
            </div>

            <p className="font-serif text-base md:text-xl leading-relaxed opacity-80 max-w-sm mb-12">
              An ancient ritual art form of North Malabar, Kerala.<br /><br />
              A divine dance of devotion, colors, and centuries of tradition.
            </p>

            {/* CTA Button */}
            <button className="flex items-center gap-4 group cursor-pointer">
              <span className="font-sans text-[10px] tracking-[0.2em] font-bold uppercase group-hover:text-terracotta transition-colors">
                Explore Our Heritage
              </span>
              <div className="w-8 h-8 rounded-full border border-forest/40 flex items-center justify-center group-hover:border-terracotta transition-colors">
                <svg className="w-3 h-3 group-hover:text-terracotta transition-colors text-forest" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </button>

          </div>

          {/* Right Column: Absolutely Positioned Massive Dancer */}
          <div className="absolute right-0 bottom-[5vh] lg:bottom-[8vh] w-full lg:w-[65%] h-[80vh] lg:h-[110vh] pointer-events-none flex flex-col items-center justify-end z-10 overflow-visible">
            <motion.div
              style={{ y: dancerY, opacity: dancerOpacity }}
              className="relative w-full h-full max-w-[900px] lg:max-w-[1500px] flex flex-col items-center justify-end scale-[1.1] lg:scale-[1.15] origin-bottom lg:translate-x-12"
            >
              {/* Animated Dancer Image */}
              <div className="relative w-full h-[95%] z-10">
                <Image
                  src="/images/theyyam_final_dancer.png"
                  alt="Theyyam Dancer"
                  fill
                  className="object-contain object-bottom filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                  priority
                />
              </div>

              {/* Tight Grounding Shadows anchored strictly to bottom */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[35%] h-[20px] bg-black/40 blur-xl rounded-[100%] z-0"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[20%] h-[8px] bg-black/60 blur-md rounded-[100%] z-0"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[10%] h-[3px] bg-black/80 blur-sm rounded-[100%] z-0"></div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
