import React from 'react';
import Yohana from './yohana';
import Nindi from './nindi'; 
import Novi from './novi';

function App() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-white/20 backdrop-blur-lg px-6 py-3 rounded-full border border-white/30 flex gap-5 shadow-2xl">
  <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="text-white hover:text-pink-300 transition font-semibold">Beranda</button>
  <a href="#profil-novi" className="text-white hover:text-pink-300 transition font-semibold">Novi</a>
  <a href="#profil-yohana" className="text-white hover:text-pink-300 transition font-semibold">Yohana</a>
  <a href="#profil-nindi" className="text-white hover:text-pink-300 transition font-semibold">Nindi</a>
</nav>
    <div className="relative min-h-screen font-sans antialiased">
      
      {/* 1. BACKGROUND FOTO - Diubah ke fixed agar saat scroll background tetap diam */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat bg-fixed scale-105"
        style={{ 
          backgroundImage: "url('/bg-kelompok.jpeg')",
          backgroundColor: "#0f172a" 
        }}
      ></div>

      {/* 2. OVERLAY GELAP */}
      <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-[2px]"></div>

      {/* 3. KONTEN UTAMA */}
      <div className="relative z-10 flex flex-col items-center py-20 px-6 text-center">
        
        {/* KARTU PROFIL KELOMPOK */}
        <div className="max-w-4xl w-full bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20 shadow-2xl mb-20">
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

          <p className="text-slate-400 text-sm font-medium uppercase tracking-widest animate-bounce">
            ↓ Scroll ke bawah untuk melihat profil anggota ↓
          </p>
        </div>

        {/* SECTION PROFIL ANGGOTA 1 (YOHANA) */}
        <div className="w-full flex justify-center mb-10">
          <Yohana />
        </div>

        {/* SECTION PROFIL ANGGOTA 2 (NINDI) */}
        <div className="w-full flex justify-center pb-20">
          <Nindi />
        </div>

        {/* SECTION PROFIL ANGGOTA 3 (NOVI) */}
        <div className="w-full flex justify-center pb-20">
          <Novi />
        </div>

      </div>
    </div>
  );
}

export default App;