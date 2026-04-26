// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Azaltma Sonrası Anlık Durum
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useEffect } from "react";

interface AzaltmaSonrasiAnlikDurumProps {
  value: number;
  previousValue: number;
  onGoToMain: () => void;
  onIncrement: () => void;
  onDecrement: () => void;
}

export function AzaltmaSonrasiAnlikDurum(props: AzaltmaSonrasiAnlikDurumProps) {
  const { value, previousValue, onGoToMain, onIncrement, onDecrement } = props;

  useEffect(() => {
    const timer = setTimeout(() => {
      onGoToMain();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onGoToMain]);

  return (
    <>
      {/*  TopAppBar  */}
      <header className="bg-[#0b1326]/60 backdrop-blur-xl docked full-width top-0 sticky flex justify-between items-center w-full px-6 py-4 max-w-[480px] mx-auto z-50">
      <div className="text-[#b4c5ff] font-['Inter'] font-bold tracking-tight text-xl font-black text-[#f8fafc]">
                  Smoke Sayacı
              </div>
      <div className="flex items-center gap-2">
      <button aria-label="Geçmiş" className="p-2 rounded-full text-[#c3c6d7] hover:bg-[#222a3d] transition-colors active:scale-95 duration-200">
      <span className="material-symbols-outlined text-[20px]">history</span>
      </button>
      <button aria-label="Ayarlar" className="p-2 rounded-full text-[#c3c6d7] hover:bg-[#222a3d] transition-colors active:scale-95 duration-200">
      <span className="material-symbols-outlined text-[20px]">settings</span>
      </button>
      </div>
      </header>
      {/*  Main Content Canvas  */}
      <main className="flex-1 w-full max-w-[480px] mx-auto flex flex-col items-center justify-center px-6 pb-24 relative">
      {/*  Atmospheric Background Glow for Feedback (-1 action)  */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-error/10 rounded-full blur-[80px] pointer-events-none"></div>
      {/*  The Ritualistic Counter Card  */}
      <div className="relative w-full max-w-[320px] aspect-square rounded-[2.5rem] bg-surface-container-high flex flex-col items-center justify-center glow-error-feedback transition-all duration-300 transform scale-[0.98]">
      {/*  Floating Indicator (Feedback)  */}
      <div className="absolute top-8 right-12 text-error font-display font-bold text-2xl tracking-tighter opacity-80 translate-y-[-8px]">
                      -1
                  </div>
      {/*  Pre-transition ghost number (optional atmospheric effect)  */}
      <div className="absolute text-[8rem] font-black tracking-[-0.04em] text-primary/10 select-none blur-sm translate-y-4">
                      {previousValue}
                  </div>
      {/*  Current Number  */}
      <div className="text-[8rem] font-display font-black tracking-[-0.04em] text-primary leading-none select-none z-10">
                      {value}
                  </div>
      {/*  Metadata Label  */}
      <div className="absolute bottom-10 flex flex-col items-center gap-1">
      <span className="font-label text-[10px] uppercase tracking-[0.05em] text-on-surface-variant font-medium">
                          BUGÜN İÇİLEN
                      </span>
      <span className="font-body text-xs text-secondary/60">
                          Hedef: 5
                      </span>
      </div>
      </div>
      {/*  Control Buttons  */}
      <div className="flex w-full max-w-[320px] gap-4 mt-12 z-10">
      {/*  Decrement Button (Active State visually pressed)  */}
      <button onClick={onDecrement} aria-label="Azalt" className="flex-1 h-16 rounded-2xl bg-surface-container-highest flex items-center justify-center gap-2 border border-error/20 text-error shadow-[inset_0_4px_12px_rgba(0,0,0,0.2)] transform scale-[0.96] transition-all cursor-pointer">
      <span className="material-symbols-outlined text-[28px]">remove</span>
      </button>
      {/*  Increment Button (Default State)  */}
      <button onClick={onIncrement} aria-label="Artır" className="flex-1 h-16 rounded-2xl bg-gradient-to-b from-primary-container to-primary-container/80 flex items-center justify-center gap-2 shadow-[0_8px_16px_-6px_rgba(37,99,235,0.4)] text-on-primary-container hover:brightness-110 active:scale-[0.96] transition-all cursor-pointer">
      <span className="material-symbols-outlined text-[28px]">add</span>
      </button>
      </div>
      {/*  Secondary Info Pill  */}
      <div className="mt-8 px-4 py-2 rounded-full bg-surface-container-low text-on-surface-variant font-label text-xs tracking-wide">
                  Son içim: Az önce
              </div>
      </main>
      {/*  BottomNavBar  */}
      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] bg-[#0b1326]/80 backdrop-blur-2xl z-50 rounded-t-3xl border-t border-white/5">
      <div className="flex justify-around items-center p-4">
      {/*  Tab: Sayaç (Active)  */}
      <button className="flex flex-col items-center justify-center text-[#b4c5ff] bg-[#2563eb]/20 rounded-xl px-4 py-1 active:scale-90 transition-transform cursor-pointer">
      <span className="material-symbols-outlined text-[24px]" style={{fontVariationSettings: "'FILL' 1"}}>add_circle</span>
      <span className="font-['Inter'] text-[10px] uppercase tracking-[0.05em] font-medium mt-1">Sayaç</span>
      </button>
      {/*  Tab: İstatistik (Inactive)  */}
      <button className="flex flex-col items-center justify-center text-[#c3c6d7] hover:text-[#f8fafc] active:scale-90 transition-transform cursor-pointer">
      <span className="material-symbols-outlined text-[24px]">leaderboard</span>
      <span className="font-['Inter'] text-[10px] uppercase tracking-[0.05em] font-medium mt-1">İstatistik</span>
      </button>
      {/*  Tab: Geçmiş (Inactive)  */}
      <button className="flex flex-col items-center justify-center text-[#c3c6d7] hover:text-[#f8fafc] active:scale-90 transition-transform cursor-pointer">
      <span className="material-symbols-outlined text-[24px]">history</span>
      <span className="font-['Inter'] text-[10px] uppercase tracking-[0.05em] font-medium mt-1">Geçmiş</span>
      </button>
      </div>
      </nav>
    </>
  );
}
