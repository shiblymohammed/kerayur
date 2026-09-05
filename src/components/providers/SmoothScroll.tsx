"use client";

import { ReactLenis } from 'lenis/react';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.02, // Extremely low lerp for a heavy, fluid, luxurious drag
        wheelMultiplier: 0.5, // Much slower scroll speed
        smoothWheel: true 
      }}
    >
      {children}
    </ReactLenis>
  );
}
