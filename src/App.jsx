import React from 'react';
import Yohana from './yohana';
import Nindi from './nindi';
import Novi from './novi';

function App() {
  return (
    <>
      {/* 1. NAVIGATION BAR (Sekarang di Pojok Kanan Atas) */}
      <nav className="fixed top-6 right-6 z-50 bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20 flex gap-5 shadow-lg">
        <button 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} 
          className="text-white hover:text-pink-300 transition font-medium text-sm"
        >
          Beranda
        </button>
        <a href="#profil-novi" className="text-white hover:text-pink-300 transition font-medium text-sm">Novi</a>
        <a href="#profil-yohana" className="text-white hover:text-pink-300 transition font-medium text-sm">Yohana</a>
        <a href="#profil-nindi" className="text-white hover:text-pink-300 transition font-medium text-sm">Nindi</a>
      </nav>

      {/* 2. MAIN CONTENT AREA */}
      <div className="relative min-h-screen font-sans antialiased text-white">
        
        {/* BACKGROUND FOTO (Posisi Tetap) */}
        <div 
          className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
          style={{
            backgroundImage: "url('/bg-kelompok.jpeg')",
            backgroundColor: "#0f172a"
          }}
        >
          {/* Lapisan Gelap agar tulisan terbaca */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* 3. BAGIAN BERANDA (Judul Kelompok) */}
        <div className="relative flex flex-col items-center justify-center min-h-screen text-center px-4">
          <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter drop-shadow-2xl mb-4">
            KELOMPOK <span className="text-pink-500">TERSERAH</span>
          </h1>
          <p className="text-lg md:text-xl font-light tracking-[0.3em] uppercase opacity-80">
            Information Technology Team
          </p>
          <div className="mt-10 animate-bounce text-3xl">↓</div>
        </div>

        {/* 4. DAFTAR PROFIL ANGGOTA */}
        <div className="relative z-10 flex flex-col items-center gap-20 pb-20">
          <Novi />
          <Yohana />
          <Nindi />
        </div>
      </div>
    </>
  );
}

export default App;