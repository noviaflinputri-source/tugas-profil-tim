import React from 'react';

const Nindi = () => {
  return (
    <div className="max-w-4xl w-full bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 text-white shadow-2xl transition-all hover:border-pink-400/50 my-10">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* KOLOM KIRI: FOTO & KONTAK */}
        <div className="md:w-1/3 flex flex-col items-center border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-8">
          <div className="relative inline-block mb-4 group">
            {/* Foto mengambil dari folder public sesuai strukturmu */}
            <img 
              src="/nindi.jpg" 
              alt="Nindi" 
              className="w-40 h-40 rounded-2xl border-4 border-pink-400 object-cover shadow-lg transition-transform group-hover:scale-105"
            />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 border-4 border-slate-900 rounded-full shadow-md animate-pulse"></div>
          </div>
          
          <h2 className="text-2xl font-bold italic">Nindi</h2>
          <p className="text-pink-400 font-medium mb-6">UI/UX Designer</p>

          {/* SOSIAL MEDIA */}
          <div className="w-full space-y-3 text-left">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 px-2">Hubungi Saya</h3>
            <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl hover:bg-pink-400/20 transition cursor-pointer border border-white/5">
              <span className="text-xl">📸</span>
              <p className="text-xs font-medium">@nindrdn._</p>
            </div>
            <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl hover:bg-pink-400/20 transition cursor-pointer border border-white/5">
              <span className="text-xl">📧</span>
              <p className="text-xs font-medium truncate">nindiramadhani@gmail.com</p>
            </div>
          </div>

          {/* SOFTWARE & TOOLS */}
          <div className="w-full mt-8 space-y-3 text-left">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 px-2">Software</h3>
            <div className="flex gap-4 p-2 bg-white/5 rounded-xl border border-white/5 justify-center">
                <img src="https://cdn.worldvectorlogo.com/logos/figma-1.svg" className="h-6 hover:scale-110 transition" alt="Figma" title="Figma" />
                <img src="https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg" className="h-6 hover:scale-110 transition" alt="VSCode" title="VS Code" />
                <img src="https://cdn.worldvectorlogo.com/logos/canva-1.svg" className="h-6 hover:scale-110 transition" alt="Canva" title="Canva" />
            </div>
          </div>
        </div>

        {/* KOLOM KANAN: DETAIL INFO */}
        <div className="md:w-2/3 space-y-8 text-left">
          
          {/* TENTANG DIRI */}
          <section>
            <h3 className="text-xl font-bold border-b-2 border-pink-400 inline-block mb-4">Tentang Diri</h3>
            <p className="text-slate-200 leading-relaxed text-sm italic bg-white/5 p-5 rounded-2xl border-l-4 border-pink-400">
              "Halo! Saya Nindi, mahasiswi Teknologi Informasi yang memiliki ketertarikan mendalam di dunia UI/UX Design. Bagi saya, desain bukan sekadar tentang estetika visual, melainkan bagaimana menciptakan solusi digital yang intuitif dan memudahkan pengguna dalam berinteraksi. Saya sangat gemar mengeksplorasi tren desain terbaru, melakukan riset pengguna untuk memahami kebutuhan mereka, hingga menuangkan ide-ide kreatif ke dalam bentuk wireframe dan prototype high-fidelity yang interaktif menggunakan Figma. 
            
              Saat ini, saya berusaha mengasah kemampuan teknis saya dalam menyusun Design Systems yang konsisten dan memperhatikan aspek aksesibilitas. Saya adalah pribadi yang sangat memperhatikan detail, senang berkolaborasi dalam tim untuk memecahkan masalah kompleks, serta memiliki komitmen tinggi untuk terus belajar mengikuti perkembangan teknologi industri kreatif. Fokus utama saya adalah memberikan pengalaman pengguna yang berkesan dan bermakna melalui produk digital yang user-friendly dan fungsional."
            </p>
          </section>

          {/* SKILLS */}
          <section>
            <h3 className="text-xl font-bold border-b-2 border-pink-400 inline-block mb-4">Design Skills</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-pink-400/20 text-pink-300 px-4 py-1.5 rounded-full text-xs font-semibold border border-pink-400/30">User Research</span>
              <span className="bg-pink-400/20 text-pink-300 px-4 py-1.5 rounded-full text-xs font-semibold border border-pink-400/30">Wireframing</span>
              <span className="bg-pink-400/20 text-pink-300 px-4 py-1.5 rounded-full text-xs font-semibold border border-pink-400/30">Visual Prototyping</span>
              <span className="bg-blue-400/20 text-blue-300 px-4 py-1.5 rounded-full text-xs font-semibold border border-blue-400/30">Tailwind CSS</span>
              <span className="bg-yellow-400/20 text-yellow-300 px-4 py-1.5 rounded-full text-xs font-semibold border border-yellow-400/30">React.js</span>
            </div>
          </section>

          {/* SOFT SKILLS & FOKUS */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className="bg-white/5 p-5 rounded-2xl border border-white/10">
                <h4 className="text-xs font-bold text-pink-300 uppercase mb-3 tracking-widest">Soft Skills</h4>
                <ul className="text-sm space-y-2 text-slate-300">
                  <li className="flex items-center gap-2">✨ <span>Empathy & User-Centric</span></li>
                  <li className="flex items-center gap-2">🎨 <span>Creative Problem Solving</span></li>
                  <li className="flex items-center gap-2">🤝 <span>Team Collaboration</span></li>
                </ul>
             </div>
             <div className="bg-pink-400/10 p-5 rounded-2xl border border-pink-400/20">
                <h4 className="text-xs font-bold text-pink-300 uppercase mb-3 tracking-widest">Fokus Belajar</h4>
                <p className="text-sm text-slate-200 leading-relaxed">
                  Saat ini sedang mendalami <strong>Micro-interactions</strong> dan <strong>Design Systems</strong> untuk meningkatkan kualitas visual produk digital.
                </p>
             </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Nindi;