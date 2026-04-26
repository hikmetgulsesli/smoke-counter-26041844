// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Boş Değer Durumu (Error Fallback)
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface BosDegerDurumuErrorFallbackProps {
  onReset: () => void;
}

export function BosDegerDurumuErrorFallback(props: BosDegerDurumuErrorFallbackProps) {
  const { onReset } = props;

  return (
    <>
      {/*  Atmospheric Ambient Glow for Error State  */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-error/10 rounded-full blur-[100px] pointer-events-none"></div>
      <main className="relative z-10 w-full max-w-sm px-6 flex flex-col items-center text-center">
      {/*  Error Icon  */}
      <div className="mb-8">
      <span className="material-symbols-outlined text-[3rem] text-error" style={{fontVariationSettings: "'FILL' 0, 'wght' 300"}}>
                      error
                  </span>
      </div>
      {/*  Glitched / Dimmed Counter  */}
      <div className="mb-6 relative">
      <h1 className="font-display text-[7rem] font-bold tracking-[-0.04em] text-on-surface-variant opacity-30 leading-none">
                      0
                  </h1>
      {/*  Subtle interference overlay to suggest broken data  */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-transparent mix-blend-overlay pointer-events-none"></div>
      </div>
      {/*  Error Message  */}
      <div className="mb-12 space-y-2">
      <p className="font-body text-lg text-on-surface">Veri Bağlantısı Koptu</p>
      <p className="font-body text-sm text-on-surface-variant">Değer okunamadı — 0 kullanılıyor.</p>
      </div>
      {/*  Action Button  */}
      <button onClick={onReset} className="w-full bg-gradient-to-b from-primary-container to-primary text-on-primary font-label uppercase tracking-[0.05em] text-sm font-bold py-4 rounded-xl shadow-[0_15px_30px_-10px_rgba(37,99,235,0.3)] hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)] transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 cursor-pointer">
      <span className="material-symbols-outlined text-[1.25rem]">refresh</span>
                  Sıfırla ve Yenile
              </button>
      </main>
    </>
  );
}
