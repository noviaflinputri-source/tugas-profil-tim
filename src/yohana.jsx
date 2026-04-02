import React from 'react';
const Yohana = () => {
  return (
    <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-xl text-center transform hover:scale-105 transition-all duration-300">
      <div className="relative inline-block">
        <img 
          src="/yohana.jpg" 
          alt="Yohana" 
          className="w-32 h-32 rounded-full border-4 border-emerald-500 object-cover shadow-lg mx-auto"
        />
        <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-500 border-4 border-slate-900 rounded-full"></div>
      </div>
      <h2 className="text-2xl font-bold text-white mt-4">Yohana</h2>
      <p className="text-emerald-400 font-medium">System Analyst</p>
      <p className="text-slate-300 mt-4 text-sm leading-relaxed">
        "Menganalisis alur data dan struktur aplikasi agar berjalan optimal."
      </p>
      <div className="mt-6 flex justify-center gap-4">
        <span className="px-3 py-1 bg-white/5 rounded-lg text-xs text-slate-400">Logic</span>
        <span className="px-3 py-1 bg-white/5 rounded-lg text-xs text-slate-400">Database</span>
      </div>
    </div>
  );
};

export default Yohana;