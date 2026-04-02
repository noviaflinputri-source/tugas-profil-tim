import React from 'react';

const Novi = () => {
  return (
    <div className="max-w-4xl w-full bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 text-white shadow-2xl transition-all hover:border-blue-400/50">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* KOLOM KIRI: FOTO & KONTAK */}
        <div className="md:w-1/3 flex flex-col items-center border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-8">
          <div className="relative inline-block mb-4 group">
            <img 
              src="/novi.jpeg" 
              alt="Novi" 
              className="w-40 h-40 rounded-2xl border-4 border-blue-400 object-cover shadow-lg transition-transform group-hover:scale-105"
            />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 border-4 border-slate-900 rounded-full shadow-md animate-pulse"></div>
          </div>
          
          <h2 className="text-2xl font-bold">Novi</h2>
          <p className="text-blue-400 font-medium mb-6">Front-End Developer</p>

          {/* SOSIAL MEDIA */}
          <div className="w-full space-y-3 text-left">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Hubungi Saya</h3>
            <div className="flex items-center gap-3 bg-white/5 p-2 rounded-xl hover:bg-blue-400/20 transition cursor-pointer">
              <span className="text-xl">📸</span>
              <p className="text-xs">@noviaflin.p</p>
            </div>
            <div className="flex items-center gap-3 bg-white/5 p-2 rounded-xl hover:bg-blue-400/20 transition cursor-pointer">
              <span className="text-xl">📧</span>
              <p className="text-xs truncate">noviaflinputri@gmail.com</p>
            </div>
          </div>

          {/* SOFTWARE & TOOLS */}
          <div className="w-full mt-6 space-y-3 text-left">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Software</h3>
            <div className="flex gap-4 opacity-80">
                <img src="https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg" className="h-6 hover:opacity-100 transition" alt="VSCode" title="VS Code" />
                <img src="https://cdn.worldvectorlogo.com/logos/github-icon-1.svg" className="h-6 hover:opacity-100 transition invert" alt="GitHub" title="GitHub" />
                <img src="https://cdn.worldvectorlogo.com/logos/google-chrome.svg" className="h-6 hover:opacity-100 transition" alt="Chrome" title="Chrome DevTools" />
            </div>
          </div>
        </div>

        {/* KOLOM KANAN: DETAIL INFO */}
        <div className="md:w-2/3 space-y-6 text-left">
          
          {/* TENTANG DIRI */}
          <section>
            <h3 className="text-xl font-bold border-b-2 border-blue-400 inline-block mb-3">Tentang Diri</h3>
            <p className="text-slate-200 leading-relaxed text-sm italic">
              "Saya adalah seorang mahasiswi Teknologi Informasi yang memiliki antusiasme tinggi dalam dunia pengembangan perangkat lunak, khususnya pada bidang Front-End Development. Fokus utama saya adalah menciptakan antarmuka web yang tidak hanya memiliki visual menarik, tetapi juga responsif dan memberikan pengalaman pengguna yang optimal. Saya sangat gemar mengeksplorasi ekosistem JavaScript, terutama framework React.js dan utility-first CSS seperti Tailwind CSS untuk membangun proyek-proyek yang modern. Melalui berbagai tugas praktikum pemrograman web, saya telah mengasah kemampuan dalam memecahkan masalah logika secara sistematis dan mengimplementasikan desain menjadi kode yang bersih. Saya adalah pribadi yang berkomitmen untuk terus belajar mengikuti perkembangan tren teknologi terbaru, senang berkolaborasi dalam tim, serta memiliki ketelitian tinggi dalam proses debugging demi menghasilkan produk digital yang berkualitas serta user-friendly bagi masyarakat luas."
            </p>
          </section>

          {/* SKILLS */}
          <section>
            <h3 className="text-xl font-bold border-b-2 border-blue-400 inline-block mb-3">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-400/20 text-blue-300 px-3 py-1 rounded-full text-xs border border-blue-400/30">React.js</span>
              <span className="bg-yellow-400/20 text-yellow-300 px-3 py-1 rounded-full text-xs border border-yellow-400/30">JavaScript ES6</span>
              <span className="bg-cyan-400/20 text-cyan-300 px-3 py-1 rounded-full text-xs border border-cyan-400/30">Tailwind CSS</span>
              <span className="bg-orange-400/20 text-orange-300 px-3 py-1 rounded-full text-xs border border-orange-400/30">HTML5 & CSS3</span>
              <span className="bg-purple-400/20 text-purple-300 px-3 py-1 rounded-full text-xs border border-purple-400/30">Git & GitHub</span>
            </div>
          </section>

          {/* SOFT SKILLS & FOKUS */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white/5 p-4 rounded-2xl">
               <div>
                  <h4 className="text-xs font-bold text-blue-300 uppercase mb-2">Soft Skills</h4>
                  <ul className="text-sm space-y-1 text-slate-300">
                    <li>💡 Logic-Oriented</li>
                    <li>🤝 Team Collaboration</li>
                    <li>🔍 Detail Focused</li>
                  </ul>
               </div>
               <div>
                  <h4 className="text-xs font-bold text-blue-300 uppercase mb-2">Fokus Saat Ini</h4>
                  <p className="text-xs text-slate-400">Sedang mendalami API Integration dan State Management dalam React.</p>
               </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Novi;