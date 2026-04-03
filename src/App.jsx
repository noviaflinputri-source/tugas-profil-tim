import React from 'react';
import Yohana from './yohana';
import Nindi from './nindi';
import Novi from './novi';

function App() {
  return (
    <>
      {/* NAVIGATION BAR */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/30 flex gap-5 shadow-lg">
        <button 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} 
          className="text-white hover:text-pink-300 transition font-medium"
        >
          Beranda
        </button>
        <a href="#profil-novi" className="text-white hover:text-pink-300 transition font-medium">Novi</a>
        <a href="#profil-yohana" className="text-white hover:text-pink-300 transition font-medium">Yohana</a>
        <a href="#profil-nindi" className="text-white hover:text-pink-300 transition font-medium">Nindi</a>
      </nav>

      {/* MAIN CONTENT */}
      <div className="relative min-h-screen font-sans antialiased">
        {/* 1. BACKGROUND FOTO */}
        <div 
          className="fixed inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/bg-kelompok.jpeg')",
            backgroundColor: "#0f172a"
          }}
        ></div>

        {/* 2. DAFTAR PROFIL ANGGOTA */}
        <div className="relative z-10">
          <Novi />
          <Yohana />
          <Nindi />
        </div>
      </div>
    </>
  );
}

export default App;