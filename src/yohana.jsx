import React from 'react';

const Yohana = () => {
  return (
    <div className="max-w-4xl w-full bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 text-white shadow-2xl transition-all hover:border-blue-400/50 my-10">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* KOLOM KIRI: FOTO & KONTAK */}
        <div className="md:w-1/3 flex flex-col items-center border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-8">
          <div className="relative inline-block mb-4 group">
            {/* Pastikan foto kamu ada di folder public dengan nama yohana.jpg */}
            <img 
              src="/yohana.jpg" 
              alt="Yohana" 
              className="w-40 h-40 rounded-2xl border-4 border-blue-400 object-cover shadow-lg transition-transform group-hover:scale-105"
            />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 border-4 border-slate-900 rounded-full shadow-md animate-pulse"></div>
          </div>
          
          <h2 className="text-2xl font-bold italic">Yohana</h2>
          <p className="text-blue-400 font-medium mb-6">Frontend Developer</p>

          <div className="w-full space-y-3 text-left">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 px-2">Hubungi Saya</h3>
            <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl hover:bg-blue-400/20 transition cursor-pointer border border-white/5">
              <span className="text-xl">📸</span>
              <p className="text-xs font-medium">@yohana_</p>
            </div>
            <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl hover:bg-blue-400/20 transition cursor-pointer border border-white/5">
              <span className="text-xl">📧</span>
              <p className="text-xs font-medium truncate">yohana@gmail.com</p>
            </div>
          </div>

          <div className="w-full mt-8 space-y-3 text-left">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 px-2">Tech Stack</h3>
            <div className="flex gap-4 p-2 bg-white/5 rounded-xl border border-white/5 justify-center">
                <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" className="h-6 hover:scale-110 transition" alt="React" />
                <img src="https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg" className="h-6 hover:scale-110 transition" alt="Tailwind" />
                <img src="https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg" className="h-6 hover:scale-110 transition" alt="VSCode" />
            </div>
          </div>
        </div>

        {/* KOLOM KANAN: DETAIL INFO */}
        <div className="md:w-2/3 space-y-8 text-left">
          <section>
            <h3 className="text-xl font-bold border-b-2 border-blue-400 inline-block mb-4">Tentang Diri</h3>
            <p className="text-slate-200 leading-relaxed text-sm italic bg-white/5 p-4 rounded-2xl border-l-4 border-blue-400">
              "Mahasiswa Teknologi Informasi yang fokus pada pengembangan antarmuka web yang interaktif dan responsif. Bersemangat dalam mempelajari logika pemrograman dan membangun sistem yang memudahkan pengguna."
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold border-b-2 border-blue-400 inline-block mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-400/20 text-blue-300 px-4 py-1.5 rounded-full text-xs font-semibold border border-blue-400/30">React.js</span>
              <span className="bg-blue-400/20 text-blue-300 px-4 py-1.5 rounded-full text-xs font-semibold border border-blue-400/30">Javascript</span>
              <span className="bg-blue-400/20 text-blue-300 px-4 py-1.5 rounded-full text-xs font-semibold border border-blue-400/30">Tailwind CSS</span>
              <span className="bg-blue-400/20 text-blue-300 px-4 py-1.5 rounded-full text-xs font-semibold border border-blue-400/30">Git & Github</span>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className="bg-white/5 p-5 rounded-2xl border border-white/10">
                <h4 className="text-xs font-bold text-blue-300 uppercase mb-3 tracking-widest">Kekuatan</h4>
                <ul className="text-sm space-y-2 text-slate-300">
                  <li>🚀 Fast Learner</li>
                  <li>🤝 Team Player</li>
                  <li>💡 Problem Solver</li>
                </ul>
             </div>
             <div className="bg-blue-400/10 p-5 rounded-2xl border border-blue-400/20">
                <h4 className="text-xs font-bold text-blue-300 uppercase mb-3 tracking-widest">Target</h4>
                <p className="text-sm text-slate-200 leading-relaxed">
                  Menjadi <strong>Fullstack Developer</strong> dan menguasai berbagai framework modern.
                </p>
             </div>
          </section>
        </div>
      </div>
    </div>
  );
};

// EXPORT SUPAYA BISA DIPANGGIL DI APP.JSX
export default Yohana;