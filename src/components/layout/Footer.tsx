import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-forest text-paper pt-24 lg:pt-32 pb-8 px-6 lg:px-12 flex flex-col justify-between overflow-hidden">
      
      {/* Top section: Massive Type & Newsletter */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24 border-b border-paper/20 pb-16">
        <div className="flex-1 max-w-2xl relative">
          {/* Creative decorative line element */}
          <div className="hidden md:block absolute -left-12 top-4 w-[1px] h-32 bg-gradient-to-b from-terracotta to-transparent"></div>
          
          <h2 className="font-serif text-5xl md:text-7xl lg:text-[7.5rem] leading-[0.85] uppercase tracking-tight mb-8">
            Return<br/>To The<br/>Source.
          </h2>
          <p className="font-sans text-sm md:text-base tracking-wide text-paper/70 leading-relaxed max-w-md">
            Ancient wisdom meets clinical care. Step away from the noise and discover a different rhythm of life through the living culture of Kerala.
          </p>
        </div>
        
        <div className="w-full lg:w-auto lg:min-w-[400px]">
          <h3 className="font-sans text-[11px] font-bold tracking-[0.2em] uppercase mb-8 text-paper/50">Journal & Updates</h3>
          <form className="flex items-end border-b border-paper/40 group focus-within:border-paper transition-colors w-full">
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              className="bg-transparent border-none outline-none w-full py-4 font-sans text-sm placeholder-paper/30 tracking-widest uppercase text-paper"
            />
            <button type="submit" className="pb-4 px-2 group-hover:text-terracotta transition-colors cursor-pointer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </form>
        </div>
      </div>

      {/* Middle section: Links Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 mb-32 max-w-7xl">
        <div className="flex flex-col gap-5 font-sans text-xs tracking-[0.15em] uppercase font-semibold">
          <h3 className="text-paper/40 mb-2">Discover</h3>
          <Link href="#culture" className="hover:text-terracotta transition-colors w-max relative group">
            <span className="relative z-10">Culture</span>
            <span className="absolute left-0 bottom-[-4px] w-full h-[1px] bg-terracotta transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
          <Link href="#wellness" className="hover:text-terracotta transition-colors w-max relative group">
            <span className="relative z-10">Wellness</span>
            <span className="absolute left-0 bottom-[-4px] w-full h-[1px] bg-terracotta transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
          <Link href="#sanctuaries" className="hover:text-terracotta transition-colors w-max relative group">
            <span className="relative z-10">Sanctuaries</span>
            <span className="absolute left-0 bottom-[-4px] w-full h-[1px] bg-terracotta transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
        </div>
        
        <div className="flex flex-col gap-5 font-sans text-xs tracking-[0.15em] uppercase font-semibold">
          <h3 className="text-paper/40 mb-2">Information</h3>
          <Link href="#about" className="hover:text-terracotta transition-colors w-max relative group">
            <span className="relative z-10">About Us</span>
            <span className="absolute left-0 bottom-[-4px] w-full h-[1px] bg-terracotta transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
          <Link href="#contact" className="hover:text-terracotta transition-colors w-max relative group">
            <span className="relative z-10">Contact</span>
            <span className="absolute left-0 bottom-[-4px] w-full h-[1px] bg-terracotta transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
          <Link href="#enquire" className="hover:text-terracotta transition-colors w-max relative group">
            <span className="relative z-10">Enquire</span>
            <span className="absolute left-0 bottom-[-4px] w-full h-[1px] bg-terracotta transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
        </div>

        <div className="flex flex-col gap-5 font-sans text-xs tracking-[0.15em] uppercase font-semibold">
          <h3 className="text-paper/40 mb-2">Social</h3>
          <a href="#" className="hover:text-terracotta transition-colors w-max relative group">
            <span className="relative z-10">Instagram</span>
            <span className="absolute left-0 bottom-[-4px] w-full h-[1px] bg-terracotta transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </a>
          <a href="#" className="hover:text-terracotta transition-colors w-max relative group">
            <span className="relative z-10">Pinterest</span>
            <span className="absolute left-0 bottom-[-4px] w-full h-[1px] bg-terracotta transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </a>
        </div>
      </div>

      {/* Bottom section: Massive Logo Watermark & Copyright */}
      <div className="flex flex-col items-center relative w-full mt-auto">
        <div className="w-full flex justify-center items-center overflow-hidden mb-8">
           {/* Massive brand watermark */}
           <h1 className="font-serif text-[18vw] leading-[0.75] tracking-tight uppercase text-paper/5 select-none pointer-events-none text-center w-full">
             Kerayur
           </h1>
        </div>
        
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 font-sans text-[10px] tracking-widest uppercase text-paper/40 border-t border-paper/10 pt-8 mt-4">
          <p>© {new Date().getFullYear()} Kerayur Wellness. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#privacy" className="hover:text-paper transition-colors">Privacy Policy</Link>
            <Link href="#terms" className="hover:text-paper transition-colors">Terms</Link>
          </div>
        </div>
      </div>
      
    </footer>
  );
}
