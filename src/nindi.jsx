import React from 'react';

const Nindi = () => {
  return (
    <div className="max-w-4xl w-full bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 text-white shadow-2xl transition-all hover:border-pink-400/50">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* KOLOM KIRI: FOTO & KONTAK */}
        <div className="md:w-1/3 flex flex-col items-center border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-8">
          <div className="relative inline-block mb-4 group">
            <img 
              src="/nindi.jpg" 
              alt="Nindi" 
              className="w-40 h-40 rounded-2xl border-4 border-pink-400 object-cover shadow-lg transition-transform group-hover:scale-105"
            />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 border-4 border-slate-900 rounded-full shadow-md animate-pulse"></div>
          </div>
          
          <h2 className="text-2xl font-bold">Nindi</h2>
          <p className="text-pink-400 font-medium mb-6">UI/UX Designer</p>

          {/* SOSIAL MEDIA */}
          <div className="w-full space-y-3 text-left">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Hubungi Saya</h3>
            <div className="flex items-center gap-3 bg-white/5 p-2 rounded-xl hover:bg-pink-400/20 transition cursor-pointer">
              <span className="text-xl">📸</span>
              <p className="text-xs">@nindiramadhani_</p>
            </div>
            <div className="flex items-center gap-3 bg-white/5 p-2 rounded-xl hover:bg-pink-400/20 transition cursor-pointer">
              <span className="text-xl">📧</span>
              <p className="text-xs truncate">nindi@gmail.com</p>
            </div>
          </div>

          {/* SOFTWARE (Menggunakan Ikon SVG Langsung) */}
          <div className="w-full mt-6 space-y-3 text-left">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Software</h3>
            <div className="flex gap-4 opacity-80">
                <img src="https://cdn.worldvectorlogo.com/logos/figma-1.svg" className="h-6 hover:opacity-100 transition" alt="Figma" title="Figma" />
                <img src="https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg" className="h-6 hover:opacity-100 transition" alt="VSCode" title="VS Code" />
                <img src="https://cdn.worldvectorlogo.com/logos/canva-1.svg" className="h-6 hover:opacity-100 transition" alt="Canva" title="Canva" />
            </div>
          </div>
        </div>

        {/* KOLOM KANAN: DETAIL INFO */}
        <div className="md:w-2/3 space-y-6 text-left">
          
          {/* TENTANG DIRI (TEKS PILIHAN KAMU) */}
          <section>
            <h3 className="text-xl font-bold border-b-2 border-pink-400 inline-block mb-3">Tentang Diri</h3>
            <p className="text-slate-200 leading-relaxed text-sm italic">
              "Mahasiswa Teknologi Informasi yang antusias dalam bidang UI/UX Design. Gemar mengeksplorasi tren desain terbaru, melakukan riset pengguna, dan menuangkan ide kreatif ke dalam wireframe serta high-fidelity prototype. Berkomitmen untuk terus belajar dan berkolaborasi dalam menciptakan produk digital yang user-friendly."
            </p>
          </section>

          {/* SKILLS */}
          <section>
            <h3 className="text-xl font-bold border-b-2 border-pink-400 inline-block mb-3">Skills</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-pink-400/20 text-pink-300 px-3 py-1 rounded-full text-xs border border-pink-400/30">User Research</span>
              <span className="bg-pink-400/20 text-pink-300 px-3 py-1 rounded-full text-xs border border-pink-400/30">Wireframing</span>
              <span className="bg-pink-400/20 text-pink-300 px-3 py-1 rounded-full text-xs border border-pink-400/30">Prototyping</span>
              <span className="bg-blue-400/20 text-blue-300 px-3 py-1 rounded-full text-xs border border-blue-400/30">Tailwind CSS</span>
              <span className="bg-yellow-400/20 text-yellow-300 px-3 py-1 rounded-full text-xs border border-yellow-400/30">React.js</span>
            </div>
          </section>

          {/* SOFT SKILLS */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white/5 p-4 rounded-2xl">
               <div>
                  <h4 className="text-xs font-bold text-pink-300 uppercase mb-2">Soft Skills</h4>
                  <ul className="text-sm space-y-1 text-slate-300">
                    <li>✨ Team Collaboration</li>
                    <li>🎨 Creative Problem Solving</li>
                    <li>📈 Fast Learner</li>
                  </ul>
               </div>
               <div>
                  <h4 className="text-xs font-bold text-pink-300 uppercase mb-2">Fokus Belajar</h4>
                  <p className="text-xs text-slate-400">Saat ini sedang mendalami Micro-interactions dan Design Systems.</p>
               </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Nindi;