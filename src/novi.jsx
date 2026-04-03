import React from 'react';

const Novi = () => {
  return (
     <div id="profil-novi" className="max-w-4xl w-full bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-white/20 transition-all duration-500 hover:shadow-pink-500/20">
     {/* Isi profil lainnya */}
    <div className="max-w-4xl w-full bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 text-white shadow-2xl transition-all hover:border-pink-400/50 my-10">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* KOLOM KIRI: FOTO & DETAIL DASAR */}
        <div className="md:w-1/3 flex flex-col items-center border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-8">
          <div className="relative inline-block mb-4 group">
            <img 
              src="/novi.jpeg" 
              alt="Novi Aflin Putri" 
              className="w-40 h-40 rounded-2xl border-4 border-pink-400 object-cover shadow-lg transition-transform group-hover:scale-105"
            />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 border-4 border-slate-900 rounded-full shadow-md animate-pulse"></div>
          </div>
          
          <h2 className="text-2xl font-bold italic text-center">Novi Aflin Putri</h2>
          <p className="text-pink-400 font-medium mb-4 uppercase tracking-widest text-sm">Teknologi Informasi</p>

          {/* DETAIL: DOMISILI & KELAS */}
          <div className="w-full space-y-2 mb-6">
            <div className="flex items-center gap-2 bg-white/5 p-2 rounded-lg border border-white/5">
              <span className="text-sm">📍</span>
              <p className="text-xs font-semibold text-slate-300">Malang, Jawa Timur</p>
            </div>
            <div className="flex items-center gap-2 bg-white/5 p-2 rounded-lg border border-white/5">
              <span className="text-sm">🏫</span>
              <p className="text-xs font-semibold text-slate-300">Kelas: T2H - Teknologi Informasi</p>
            </div>
          </div>

          <div className="w-full space-y-3 text-left">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 px-2">Hubungi Saya</h3>
            <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl hover:bg-pink-400/20 transition cursor-pointer border border-white/5">
              <span className="text-xl">📸</span>
              <p className="text-xs font-medium">@noviaflin.p</p>
            </div>
            <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl hover:bg-pink-400/20 transition cursor-pointer border border-white/5">
              <span className="text-xl">📧</span>
              <p className="text-xs font-medium truncate">noviaflinputri@gmail.com</p>
            </div>
          </div>
        </div>

        {/* KOLOM KANAN: DESKRIPSI & SKILLS */}
        <div className="md:w-2/3 space-y-8 text-left">
          <section>
            <h3 className="text-xl font-bold border-b-2 border-pink-400 inline-block mb-4">Tentang Diri</h3>
            <p className="text-slate-200 leading-relaxed text-sm italic bg-white/5 p-5 rounded-2xl border-l-4 border-pink-400">
              "Saya adalah seorang mahasiswi Teknologi Informasi yang memiliki antusiasme tinggi dalam dunia pengembangan perangkat lunak, khususnya pada bidang Front-End Development. Fokus utama saya adalah menciptakan antarmuka web yang tidak hanya memiliki visual menarik, tetapi juga responsif dan memberikan pengalaman pengguna yang optimal. Saya sangat gemar mengeksplorasi ekosistem JavaScript, terutama framework React.js dan utility-first CSS seperti Tailwind CSS untuk membangun proyek-proyek yang modern. Melalui berbagai tugas praktikum pemrograman web, saya telah mengasah kemampuan dalam memecahkan masalah logika secara sistematis dan mengimplementasikan desain menjadi kode yang bersih. Saya adalah pribadi yang berkomitmen untuk terus belajar mengikuti perkembangan tren teknologi terbaru, senang berkolaborasi dalam tim, serta memiliki ketelitian tinggi dalam proses debugging demi menghasilkan produk digital yang berkualitas serta user-friendly bagi masyarakat luas."
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold border-b-2 border-pink-400 inline-block mb-4">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-pink-400/20 text-pink-300 px-4 py-1.5 rounded-full text-xs font-semibold border border-pink-400/30">React.js</span>
              <span className="bg-pink-400/20 text-pink-300 px-4 py-1.5 rounded-full text-xs font-semibold border border-pink-400/30">JavaScript ES6</span>
              <span className="bg-pink-400/20 text-pink-300 px-4 py-1.5 rounded-full text-xs font-semibold border border-pink-400/30">Tailwind CSS</span>
              <span className="bg-pink-400/20 text-pink-300 px-4 py-1.5 rounded-full text-xs font-semibold border border-pink-400/30">Git & GitHub</span>
              <span className="bg-pink-400/20 text-pink-300 px-4 py-1.5 rounded-full text-xs font-semibold border border-pink-400/30">HTML5 & CSS3</span>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className="bg-white/5 p-5 rounded-2xl border border-white/10">
                <h4 className="text-xs font-bold text-pink-300 uppercase mb-3 tracking-widest">Soft Skills</h4>
                <ul className="text-sm space-y-2 text-slate-300">
                  <li>💡 Logic-Oriented</li>
                  <li>🤝 Team Collaboration</li>
                  <li>🎯 Project Management</li>
                </ul>
             </div>
             <div className="bg-pink-400/10 p-5 rounded-2xl border border-pink-400/20">
                <h4 className="text-xs font-bold text-pink-300 uppercase mb-3 tracking-widest">Fokus Saat Ini</h4>
                <p className="text-sm text-slate-200 leading-relaxed">
                  Sedang mendalami <strong>API Integration</strong> dan <strong>State Management</strong> di dalam ekosistem React.
                </p>
             </div>
          </section>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Novi;