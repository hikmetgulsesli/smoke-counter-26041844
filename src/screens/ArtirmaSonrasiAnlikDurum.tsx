// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Artırma Sonrası Anlık Durum
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface ArtirmaSonrasiAnlikDurumProps {}

export function ArtirmaSonrasiAnlikDurum(props: ArtirmaSonrasiAnlikDurumProps) {
  return (
    <>
      {/*  Ambient Success Glow (Atmospheric effect)  */}
      <div className="fixed top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-success/15 blur-[80px] rounded-full pointer-events-none z-0"></div>
      {/*  TopAppBar  */}
      <header className="sticky top-0 w-full z-40 bg-[#0b1326]/60 backdrop-blur-xl border-none shadow-none">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-[480px] mx-auto">
      <div className="text-xl font-black text-[#f8fafc] font-['Inter'] tracking-tight">
                      Smoke Sayacı
                  </div>
      <div className="flex items-center gap-4 text-[#b4c5ff]">
      <button className="hover:bg-[#222a3d] transition-colors active:scale-95 duration-200 p-2 rounded-full flex items-center justify-center">
      <span className="material-symbols-outlined">history</span>
      </button>
      <button className="hover:bg-[#222a3d] transition-colors active:scale-95 duration-200 p-2 rounded-full flex items-center justify-center">
      <span className="material-symbols-outlined">settings</span>
      </button>
      </div>
      </div>
      </header>
      {/*  Main Content Canvas  */}
      <main className="flex-1 w-full max-w-[480px] mx-auto px-6 pt-12 pb-32 flex flex-col relative z-10">
      {/*  The Counter Card (Hero)  */}
      <section className="relative bg-surface-container-high rounded-[32px] p-10 flex flex-col items-center justify-center shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] w-full mb-12 isolate overflow-hidden">
      {/*  Subtle background texture/radial within card  */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface-bright/10 to-transparent pointer-events-none"></div>
      <h2 className="text-on-surface-variant font-label text-xs uppercase tracking-[0.05em] font-medium mb-6 relative z-10">
                      Bugün
                  </h2>
      <div className="relative z-10 flex items-center justify-center">
      {/*  Floating +1 Indicator (Visual Confirmation)  */}
      <div className="absolute -top-4 -right-10 text-success font-bold text-2xl drop-shadow-[0_0_12px_rgba(34,197,94,0.6)]">
                          +1
                      </div>
      {/*  The Massive Number  */}
      <div className="text-[140px] font-display font-medium tracking-tight text-primary leading-none drop-shadow-xl">
                          5
                      </div>
      </div>
      <div className="mt-8 flex items-center gap-2 text-sm text-on-surface-variant bg-surface-container-lowest/50 px-4 py-2 rounded-full relative z-10 border border-outline-variant/10">
      <span className="material-symbols-outlined text-[16px] text-success">check_circle</span>
      <span>Son ekleme: az önce</span>
      </div>
      </section>
      {/*  Contextual Stats (Floating below)  */}
      <section className="grid grid-cols-2 gap-4 mb-auto w-full">
      <div className="bg-surface-container-low rounded-2xl p-4 flex flex-col shadow-[0_10px_20px_-5px_rgba(0,0,0,0.2)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.02)]">
      <span className="text-on-surface-variant font-label text-[10px] uppercase tracking-[0.05em] mb-1">Dün</span>
      <span className="text-on-surface font-headline text-2xl font-semibold">4</span>
      </div>
      <div className="bg-surface-container-low rounded-2xl p-4 flex flex-col shadow-[0_10px_20px_-5px_rgba(0,0,0,0.2)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.02)]">
      <span className="text-on-surface-variant font-label text-[10px] uppercase tracking-[0.05em] mb-1">Fark</span>
      <span className="text-success font-headline text-2xl font-semibold flex items-center">
      <span className="material-symbols-outlined text-[18px] mr-1">trending_up</span> %25
                      </span>
      </div>
      </section>
      {/*  Main Action Area  */}
      <div className="w-full flex justify-center mt-12 mb-8">
      {/*  Pressed State Button  */}
      <button className="w-[120px] h-[120px] rounded-full bg-gradient-to-b from-primary-container to-inverse-primary flex items-center justify-center shadow-[inset_0_4px_10px_rgba(0,0,0,0.4)] scale-95 ring-4 ring-primary-container/20 relative group">
      {/*  Inner glow for pressed feel  */}
      <div className="absolute inset-0 rounded-full shadow-[inset_0_-2px_10px_rgba(255,255,255,0.1)]"></div>
      <div className="flex flex-col items-center justify-center text-on-primary">
      <span className="material-symbols-outlined text-4xl mb-1" style={{fontVariationSettings: "'FILL' 1"}}>add</span>
      <span className="font-label text-sm uppercase tracking-widest font-bold">Arttır</span>
      </div>
      </button>
      </div>
      </main>
      {/*  BottomNavBar  */}
      <nav className="fixed bottom-0 w-full z-50 bg-[#0b1326]/80 backdrop-blur-2xl border-none shadow-2xl">
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] flex justify-around items-center p-4">
      {/*  Active Tab: Sayaç  */}
      <button className="flex flex-col items-center justify-center text-[#b4c5ff] bg-[#2563eb]/20 rounded-xl px-4 py-1 active:scale-90 transition-transform w-[72px]">
      <span className="material-symbols-outlined mb-1 text-[24px]" style={{fontVariationSettings: "'FILL' 1"}}>add_circle</span>
      <span className="font-['Inter'] text-[10px] uppercase tracking-[0.05em] font-medium">Sayaç</span>
      </button>
      {/*  Inactive Tab: İstatistik  */}
      <button className="flex flex-col items-center justify-center text-[#c3c6d7] hover:text-[#f8fafc] active:scale-90 transition-transform w-[72px]">
      <span className="material-symbols-outlined mb-1 text-[24px]">leaderboard</span>
      <span className="font-['Inter'] text-[10px] uppercase tracking-[0.05em] font-medium">İstatistik</span>
      </button>
      {/*  Inactive Tab: Geçmiş  */}
      <button className="flex flex-col items-center justify-center text-[#c3c6d7] hover:text-[#f8fafc] active:scale-90 transition-transform w-[72px]">
      <span className="material-symbols-outlined mb-1 text-[24px]">history</span>
      <span className="font-['Inter'] text-[10px] uppercase tracking-[0.05em] font-medium">Geçmiş</span>
      </button>
      </div>
      </nav>
    </>
  );
}
