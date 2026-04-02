import React from 'react';
import './App.css'; // <--- PASTIKAN BARIS INI ADA

const Yohana = () => {
  return (
    // Background Gelap Utama
    <div className="min-h-screen bg-[#0d0d15] text-white flex items-center justify-center p-6">
      
      {/* Kotak Transparan (Card) */}
      <div className="max-w-5xl w-full bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 border border-white/10 shadow-2xl flex flex-col md:flex-row gap-10">
        
        {/* Sisi Kiri: Foto dengan Bingkai Pink */}
        <div className="md:w-1/3 flex flex-col items-center">
          <div className="relative mb-6">
            <img 
              src="/yohana.jpg" 
              alt="Yohana" 
              className="w-48 h-48 md:w-56 md:h-56 rounded-3xl object-cover border-4 border-[#e91e63] shadow-[0_0_20px_rgba(233,30,99,0.3)]"
            />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-[#1a1a25]"></div>
          </div>
          <h1 className="text-3xl font-bold">Yohana</h1>
          <p className="text-[#e91e63] font-medium mt-1 text-lg">Web Developer</p>
          
          <div className="w-full mt-8 space-y-3 text-sm">
             <div className="bg-white/5 p-3 rounded-xl border border-white/10 flex items-center gap-3">
                <span>📷</span> @yohana_str
             </div>
             <div className="bg-white/5 p-3 rounded-xl border border-white/10 flex items-center gap-3">
                <span>✉️</span> yohana@gmail.com
             </div>
          </div>
        </div>

        {/* Sisi Kanan: Detail */}
        <div className="md:w-2/3 space-y-8">
          <section>
            <h2 className="text-xl font-semibold border-b-2 border-[#e91e63] inline-block mb-4">Tentang Diri</h2>
            <p className="text-slate-300 leading-relaxed italic bg-white/5 p-5 rounded-2xl">
              "Mahasiswa Teknologi Informasi yang antusias dalam bidang Web Development. Gemar mengeksplorasi tren teknologi terbaru untuk membangun pengalaman pengguna yang menarik."
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold border-b-2 border-[#e91e63] inline-block mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {["HTML", "CSS", "React.js", "Tailwind CSS", "Vite"].map(skill => (
                <span key={skill} className="bg-[#e91e63]/10 text-[#e91e63] border border-[#e91e63]/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase">
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>

      </div>
    </div>
  );
};

export default Yohana;