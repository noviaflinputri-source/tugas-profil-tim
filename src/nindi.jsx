import React from 'react';

const Nindi = () => {
  return (
    <div className="max-w-4xl w-full bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 text-white shadow-2xl transition-all hover:border-pink-400/50 my-10 font-sans">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* KOLOM KIRI: IDENTITAS & KONTAK */}
        <div className="md:w-1/3 flex flex-col items-center md:items-start md:border-r border-white/10 pb-6 md:pb-0 md:pr-8">
          
          <div className="relative inline-block mb-6 group self-center">
            <img 
              src="/nindi.jpeg" 
              alt="Nindi Ramadhani" 
              className="w-40 h-40 rounded-2xl border-4 border-pink-400 object-cover shadow-lg transition-transform group-hover:scale-105"
            />
            <div className="absolute -bottom-2 -right-2 w-7 h-7 bg-green-500 border-4 border-slate-900 rounded-full shadow-md animate-pulse"></div>
          </div>
          
          <div className="w-full text-center md:text-left mb-6">
            <h2 className="text-2xl font-bold italic tracking-wide">Nindi Ramadhani</h2>
            <p className="text-pink-400 font-semibold mb-4 uppercase text-[10px] tracking-[0.2em]">Teknologi Informasi</p>
            
            <div className="space-y-2">
                <div className="flex items-center gap-2 justify-center md:justify-start bg-white/5 p-2 rounded-lg border border-white/5 text-[11px] text-slate-300">
                    <span>📍</span>
                    <p>Malang, Jawa Timur</p>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start bg-white/5 p-2 rounded-lg border border-white/5 text-[11px] text-slate-300">
                    <span>🏫</span>
                    <p>Kelas: T2H</p>
                </div>
            </div>
          </div>

          <div className="w-full space-y-3 text-left">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 px-2">Hubungi Saya</h3>
            <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl hover:bg-pink-400/20 transition border border-white/5 shadow-inner cursor-pointer">
              <span className="text-lg">📸</span>
              <p className="text-[11px] font-medium text-slate-100">@nindrdn._</p>
            </div>
            <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl hover:bg-pink-400/20 transition border border-white/5 shadow-inner cursor-pointer">
              <span className="text-lg">📧</span>
              <p className="text-[11px] font-medium truncate text-slate-100">nindiramadhani@gmail.com</p>
            </div>
          </div>

          <div className="w-full mt-8 space-y-3 text-left">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 px-2">Software</h3>
            <div className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/5 justify-center items-center shadow-inner">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" className="h-5 hover:scale-125 transition" alt="React" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" className="h-5 hover:scale-125 transition" alt="Tailwind" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" className="h-5 hover:scale-125 transition invert" alt="GitHub" />
            </div>
          </div>
        </div>

        {/* KOLOM KANAN: DETAIL INFO */}
        <div className="md:w-2/3 space-y-8 text-left">
          
          <section>
            <h3 className="text-lg font-bold border-b-2 border-pink-400 inline-block mb-4 tracking-wide">Tentang Diri</h3>
            <div className="bg-white/5 p-6 rounded-2xl border-l-4 border-pink-400 shadow-xl">
                <p className="text-slate-200 leading-relaxed text-sm italic">
                  "Halo! Saya Nindi, mahasiswi Teknologi Informasi yang lagi seru-serunya mendalami dunia Front-End Development. Di perkuliahan semester ini, saya fokus belajar gimana caranya membangun website yang nggak cuma jalan kodenya, tapi juga enak dilihat dan responsif. Saya banyak menghabiskan waktu buat ngulik framework React.js dan Tailwind CSS karena menurut saya kombinasi keduanya sangat powerful buat bikin interface yang modern."
                </p>
                <p className="text-slate-200 leading-relaxed text-sm italic mt-3">
                  "Meskipun lebih banyak fokus ke teknis dan logika koding, saya juga punya ketertarikan sedikit di sisi UI/UX agar tampilan aplikasi yang saya buat lebih ramah pengguna. Saya tipikal orang yang detail kalau lagi ngerjain sesuatu, senang belajar hal baru bareng teman-teman setim, dan selalu berusaha buat nyelesaiin masalah koding sampai ketemu solusinya. Intinya, saya ingin terus berkembang jadi developer yang bisa diandalkan."
                </p>
            </div>
          </section>

          {/* SKILLS (DISESUAIKAN DENGAN DESKRIPSI) */}
          <section>
            <h3 className="text-lg font-bold border-b-2 border-pink-400 inline-block mb-4 tracking-wide">Skills</h3>
            <div className="flex flex-wrap gap-2">
                <span className="bg-blue-600/20 text-blue-200 px-4 py-1.5 rounded-full text-[11px] font-medium border border-blue-500/30">React.js Development</span>
                <span className="bg-cyan-600/20 text-cyan-200 px-4 py-1.5 rounded-full text-[11px] font-medium border border-cyan-500/30">Tailwind Styling</span>
                <span className="bg-yellow-600/20 text-yellow-200 px-4 py-1.5 rounded-full text-[11px] font-medium border border-yellow-500/30">JavaScript Logic</span>
                <span className="bg-pink-600/20 text-pink-200 px-4 py-1.5 rounded-full text-[11px] font-medium border border-pink-500/30">Basic UI/UX</span>
            </div>
          </section>

          {/* KEKUATAN & TARGET (GAYA YOHANA, ISINYA NYAMBUNG KE DESKRIPSI) */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className="bg-white/5 p-5 rounded-2xl border border-white/10 shadow-lg">
                <h4 className="text-[10px] font-bold text-pink-300 uppercase mb-3 tracking-widest px-1">KEKUATAN</h4>
                <ul className="text-[11px] space-y-2 text-slate-300">
                  <li className="flex items-center gap-2">🔍 <span>Detail-Oriented</span></li>
                  <li className="flex items-center gap-2">🤝 <span>Team Player</span></li>
                  <li className="flex items-center gap-2">🛠️ <span>Problem Solver</span></li>
                </ul>
             </div>
             <div className="bg-pink-400/5 p-5 rounded-2xl border border-pink-400/20 shadow-xl">
                <h4 className="text-[10px] font-bold text-pink-300 uppercase mb-3 tracking-widest px-1">TARGET</h4>
                <p className="text-[11px] text-slate-100 leading-relaxed font-medium">
                  Menguasai pembuatan komponen website yang <strong>clean</strong>, <strong>efisien</strong>, dan <strong>user-friendly</strong> untuk proyek-proyek mendatang.
                </p>
             </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Nindi;