import React, { useState } from 'react';
import Yohana from './yohana';
import Nindi from './nindi';
import Novi from './novi';

function App() {
  // State untuk menentukan halaman mana yang aktif
  // Nilai awal adalah 'beranda'
  const [halamanAktif, setHalamanAktif] = useState('beranda');

  return (
    <>
      {/* 1. NAVIGATION BAR */}
      <nav className="fixed top-6 right-6 z-50 bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20 flex gap-5 shadow-lg">
        <button 
          onClick={() => setHalamanAktif('beranda')} 
          className={`transition font-medium text-sm ${halamanAktif === 'beranda' ? 'text-pink-400' : 'text-white'}`}
        >
          Beranda
        </button>
        <button 
          onClick={() => setHalamanAktif('novi')} 
          className={`transition font-medium text-sm ${halamanAktif === 'novi' ? 'text-pink-400' : 'text-white'}`}
        >
          Novi
        </button>
        <button 
          onClick={() => setHalamanAktif('yohana')} 
          className={`transition font-medium text-sm ${halamanAktif === 'yohana' ? 'text-pink-400' : 'text-white'}`}
        >
          Yohana
        </button>
        <button 
          onClick={() => setHalamanAktif('nindi')} 
          className={`transition font-medium text-sm ${halamanAktif === 'nindi' ? 'text-pink-400' : 'text-white'}`}
        >
          Nindi
        </button>
      </nav>

      {/* 2. AREA KONTEN (Tanpa Scroll Panjang) */}
      <div className="relative min-h-screen w-full overflow-hidden font-sans antialiased text-white flex items-center justify-center">
        
        {/* BACKGROUND (Tetap ada di belakang) */}
        <div 
          className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
          style={{
            backgroundImage: "url('/bg-kelompok.jpeg')",
            backgroundColor: "#0f172a"
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* LOGIKA PERUBAHAN HALAMAN */}
        <main className="w-full h-full flex items-center justify-center p-4">
          {halamanAktif === 'beranda' && (
            <div className="text-center animate-fadeIn">
              <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter drop-shadow-2xl mb-4">
                KELOMPOK <span className="text-pink-500">TERSERAH</span>
              </h1>
              <p className="text-lg md:text-xl font-light tracking-[0.3em] uppercase opacity-80">
                Information Technology Team
              </p>
            </div>
          )}

          {halamanAktif === 'novi' && <div className="animate-slideIn"><Novi /></div>}
          {halamanAktif === 'yohana' && <div className="animate-slideIn"><Yohana /></div>}
          {halamanAktif === 'nindi' && <div className="animate-slideIn"><Nindi /></div>}
        </main>
      </div>
    </>
  );
}

export default App;