"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 50) {
        setIsVisible(true);
        setScrolled(false);
      } else {
        setScrolled(true);
        if (currentScrollY > lastScrollY) {
          setIsVisible(false); // Hide on scroll down
        } else {
          setIsVisible(true); // Show on scroll up
        }
      }
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] border-b ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        scrolled 
          ? "bg-paper/95 backdrop-blur-md py-4 border-forest/10 shadow-sm" 
          : "bg-transparent py-8 border-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex justify-between items-center">
        
        {/* Left: Navigation Links */}
        <div className="flex-1 flex items-center gap-10 font-sans text-[11px] tracking-[0.2em] uppercase font-bold text-forest">
          {/* Architectural Menu Button */}
          <button className="group flex items-center gap-3 overflow-hidden cursor-pointer">
            <div className="relative flex flex-col justify-center items-start w-5 h-5 gap-[4px]">
              <span className="block w-full h-[1px] bg-forest transform transition-all duration-300 group-hover:w-3 group-hover:bg-terracotta"></span>
              <span className="block w-3 h-[1px] bg-forest transform transition-all duration-300 group-hover:w-full group-hover:bg-terracotta"></span>
            </div>
            <span className="relative overflow-hidden h-4">
              <span className="block transition-transform duration-500 ease-in-out group-hover:-translate-y-full">Menu</span>
              <span className="absolute left-0 top-0 block translate-y-full text-terracotta transition-transform duration-500 ease-in-out group-hover:translate-y-0">Menu</span>
            </span>
          </button>

          {/* Roll-up Link Animation */}
          <Link href="#culture" className="hidden md:block relative group overflow-hidden h-4">
            <span className="block transition-transform duration-500 ease-in-out group-hover:-translate-y-full">Culture</span>
            <span className="absolute left-0 top-0 block translate-y-full text-terracotta transition-transform duration-500 ease-in-out group-hover:translate-y-0">Culture</span>
          </Link>

          <Link href="#wellness" className="hidden md:block relative group overflow-hidden h-4">
            <span className="block transition-transform duration-500 ease-in-out group-hover:-translate-y-full">Wellness</span>
            <span className="absolute left-0 top-0 block translate-y-full text-terracotta transition-transform duration-500 ease-in-out group-hover:translate-y-0">Wellness</span>
          </Link>
        </div>

        {/* Center: Logo */}
        <div className="flex-1 flex justify-center">
          <Link 
            href="/" 
            className={`font-serif tracking-[0.25em] uppercase text-forest transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${
              scrolled ? "text-2xl md:text-3xl" : "text-3xl md:text-5xl"
            }`}
          >
            Kerayur
          </Link>
        </div>

        {/* Right: CTA */}
        <div className="flex-1 flex justify-end items-center gap-10 font-sans text-[11px] tracking-[0.2em] uppercase font-bold text-forest">
          <Link href="#sanctuaries" className="hidden md:block relative group overflow-hidden h-4">
            <span className="block transition-transform duration-500 ease-in-out group-hover:-translate-y-full">Sanctuaries</span>
            <span className="absolute left-0 top-0 block translate-y-full text-terracotta transition-transform duration-500 ease-in-out group-hover:translate-y-0">Sanctuaries</span>
          </Link>
          
          <Link 
            href="#enquire" 
            className="relative overflow-hidden border border-forest/40 px-8 py-3.5 group"
          >
            {/* Elegant sweep fill animation */}
            <span className="absolute inset-0 bg-forest transform origin-bottom scale-y-0 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-y-100"></span>
            
            <span className="relative z-10 transition-colors duration-500 group-hover:text-paper flex items-center gap-3">
              Enquire
              <svg className="w-3 h-3 transform transition-transform duration-500 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>
        </div>
        
      </div>
    </header>
  );
}
