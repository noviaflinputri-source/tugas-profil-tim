import React from 'react';

const Novi = () => {
  return (
    <div className="max-w-2xl w-full bg-white/10 backdrop-blur-xl rounded-[40px] p-10 border border-white/20 shadow-2xl text-center transform hover:scale-[1.02] transition-all duration-500">
      
      {/* FOTO PROFIL */}
      <div className="relative inline-block mb-6">
        <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full blur opacity-75"></div>
        <img 
          src="/novi.jpg" 
          alt="Novi" 
          className="relative w-36 h-36 rounded-full border-4 border-slate-900 object-cover shadow-2xl mx-auto"
        />
        <div className="absolute bottom-2 right-2 w-7 h-7 bg-pink-500 border-4 border-slate-900 rounded-full shadow-lg"></div>
      </div>

      {/* NAMA & ROLE */}
      <h2 className="text-4xl font-extrabold text-white tracking-tight">Novia</h2>
      <p className="text-pink-400 font-semibold text-lg mt-1 tracking-widest uppercase italic">Project Leader & Coordinator</p>
      
      {/* DESKRIPSI LEADER */}
      <div className="mt-8 bg-black/20 rounded-3xl p-6 border border-white/5">
        <p className="text-slate-200 text-base leading-relaxed text-justify italic">
          "Sebagai Project Leader dalam tim ini, Novi bertanggung jawab penuh atas manajemen alur kerja, integrasi kode melalui sistem kontrol versi Git, hingga memastikan visi proyek tercapai tepat waktu. Ia berperan sebagai jembatan komunikasi antar anggota tim, memastikan kolaborasi antara sistem analisis dan pengembangan front-end berjalan selaras. Novia sangat teliti dalam menjaga kualitas standar kode (Clean Code) dan memastikan bahwa setiap fitur yang dikembangkan oleh tim dapat terintegrasi dengan sempurna ke dalam repository utama. Dengan kemampuan kepemimpinan dan pemahaman teknis yang solid, ia mengarahkan tim untuk menghadapi tantangan pemrograman, menyelesaikan konflik teknis (merge conflicts), dan memastikan produk akhir aplikasi web ini memiliki performa yang optimal serta tampilan yang profesional bagi seluruh pengguna."
        </p>
      </div>

      {/* SKILL TAGS */}
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {['Team Management', 'Git & GitHub Expert', 'Conflict Resolution', 'Project Planning', 'Code Review'].map((skill) => (
          <span key={skill} className="px-4 py-1.5 bg-pink-500/10 rounded-full text-xs text-pink-300 font-bold border border-pink-500/20 hover:bg-pink-500/20 transition-colors">
            {skill}
          </span>
        ))}
      </div>

      {/* FOOTER */}
      <div className="mt-10 pt-6 border-t border-white/10">
        <p className="text-slate-400 text-xs font-medium tracking-[0.3em] uppercase">
          Project Manager • T2H Teknologi Informasi
        </p>
      </div>

    </div>
  );
};

export default Novi;