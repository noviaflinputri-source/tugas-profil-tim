import React from 'react';
import Yohana from './Yohana'; 

function App() {
  return (
    <div className="relative min-h-screen font-sans antialiased overflow-hidden">
      
      {/* 1. BACKGROUND FOTO */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed scale-105"
        style={{ 
          backgroundImage: "url('/bg-kelompok.jpeg')",
          backgroundColor: "#0f172a" 
        }}
      ></div>

      {/* 2. OVERLAY GELAP */}
      <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[2px]"></div>

      {/* 3. KONTEN UTAMA */}
      <div className="relative z-10 flex flex-col items-center py-20 px-6 text-center">
        
        <div className="max-w-4xl w-full bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20 shadow-2xl">
          <span className="bg-pink-300 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">
            Project Kelompok TERSERAH
          </span>

          <h1 className="text-5xl font-black text-white mt-6 mb-6">
            PROFILE KELOMPOK <span className="text-pink-300 text-6xl block mt-2">TERSERAH</span>
          </h1>

          <div className="space-y-4">
            <p className="text-slate-100 text-lg max-w-2xl mx-auto">
              Website ini merupakan hasil implementasi proyek ReactJS yang dirancang untuk menampilkan profil kelompok secara modern dan inovatif.
            </p>
          </div>

          <div className="mt-10 mb-6 flex justify-center gap-2">
            <div className="h-1.5 w-16 bg-pink-300 rounded-full"></div>
            <div className="h-1.5 w-4 bg-indigo-300 rounded-full"></div>
          </div>

          <p className="text-slate-400 text-sm font-medium uppercase tracking-widest animate-pulse">
            Scroll ke bawah untuk melihat profil anggota
          </p>
        </div>
        <div className="mt-10 flex justify-center pb-20">
          <Yohana />
        </div>
        {/* ------------------------- */}

      </div>
    </div>
  );
}
export default App;