// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Ana Sayfa (Smoke Sayacı)
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface AnaSayfaSmokeSayaciProps {}

export function AnaSayfaSmokeSayaci(props: AnaSayfaSmokeSayaciProps) {
  return (
    <>
      {/*  TopAppBar  */}
      <header className="sticky top-0 w-full z-50 bg-[#0b1326]/60 backdrop-blur-xl border-none shadow-none">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-[480px] mx-auto">
      <div className="flex items-center gap-2">
      <span className="text-xl font-black text-[#f8fafc] font-['Inter'] tracking-tight">Smoke Sayacı</span>
      </div>
      <div className="flex items-center gap-4">
      <button className="text-[#c3c6d7] hover:bg-[#222a3d] transition-colors active:scale-95 duration-200 p-2 rounded-full flex items-center justify-center">
      <span className="material-symbols-outlined text-xl">history</span>
      </button>
      <button className="text-[#c3c6d7] hover:bg-[#222a3d] transition-colors active:scale-95 duration-200 p-2 rounded-full flex items-center justify-center">
      <span className="material-symbols-outlined text-xl">settings</span>
      </button>
      </div>
      </div>
      </header>
      {/*  Main Canvas  */}
      <main className="flex-grow flex flex-col items-center justify-center p-6 w-full max-w-[480px] mx-auto pb-32">
      {/*  The Atmospheric Ledger Card  */}
      <div className="w-full bg-surface-container-high rounded-[2rem] p-10 flex flex-col items-center relative shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] border-none">
      <h2 className="text-on-surface-variant font-label text-[10px] uppercase tracking-[0.05em] font-medium mb-6">Mevcut Değer</h2>
      <div className="text-[7rem] leading-none font-display font-bold tracking-tight text-on-surface mb-12">
                      0
                  </div>
      {/*  Action Buttons Grid  */}
      <div className="grid grid-cols-2 gap-4 w-full">
      {/*  Arttır Button (Primary Moment of Action)  */}
      <button className="col-span-2 flex items-center justify-center gap-3 bg-gradient-to-b from-primary-container to-primary text-on-primary py-5 px-6 rounded-2xl font-bold text-lg active:scale-95 transition-transform duration-200 shadow-lg shadow-primary-container/20 border-none">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>add</span>
                          Arttır
                      </button>
      {/*  Azalt Button (Secondary Container)  */}
      <button className="flex items-center justify-center gap-2 bg-secondary-container text-on-secondary-container py-4 px-4 rounded-xl font-medium active:scale-95 transition-transform duration-200 border-none">
      <span className="material-symbols-outlined">remove</span>
                          Azalt
                      </button>
      {/*  Sıfırla Button (Error state)  */}
      <button className="flex items-center justify-center gap-2 bg-surface-container-highest text-error py-4 px-4 rounded-xl font-medium active:scale-95 transition-transform duration-200 border-none">
      <span className="material-symbols-outlined">refresh</span>
                          Sıfırla
                      </button>
      </div>
      </div>
      </main>
      {/*  BottomNavBar  */}
      <nav className="fixed bottom-0 w-full z-50 bg-[#0b1326]/80 backdrop-blur-2xl border-none shadow-2xl md:hidden">
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] flex justify-around items-center p-4">
      {/*  Sayaç (Active)  */}
      <button className="flex flex-col items-center justify-center text-[#b4c5ff] bg-[#2563eb]/20 rounded-xl px-4 py-1 active:scale-90 transition-transform hover:text-[#f8fafc] border-none">
      <span className="material-symbols-outlined text-2xl mb-1" style={{fontVariationSettings: "'FILL' 1"}}>add_circle</span>
      <span className="font-['Inter'] text-[10px] uppercase tracking-[0.05em] font-medium text-[#b4c5ff]">Sayaç</span>
      </button>
      {/*  İstatistik (Inactive)  */}
      <button className="flex flex-col items-center justify-center text-[#c3c6d7] px-4 py-1 active:scale-90 transition-transform hover:text-[#f8fafc] border-none">
      <span className="material-symbols-outlined text-2xl mb-1">leaderboard</span>
      <span className="font-['Inter'] text-[10px] uppercase tracking-[0.05em] font-medium text-[#b4c5ff]">İstatistik</span>
      </button>
      {/*  Geçmiş (Inactive)  */}
      <button className="flex flex-col items-center justify-center text-[#c3c6d7] px-4 py-1 active:scale-90 transition-transform hover:text-[#f8fafc] border-none">
      <span className="material-symbols-outlined text-2xl mb-1">history</span>
      <span className="font-['Inter'] text-[10px] uppercase tracking-[0.05em] font-medium text-[#b4c5ff]">Geçmiş</span>
      </button>
      </div>
      </nav>
    </>
  );
}
