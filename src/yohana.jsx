import React from 'react';

const Yohana = () => {
  // --- KONFIGURASI DATA SKILL KAMU ---
  // Kamu bisa menambah atau mengubah skill di sini
  const mySkills = [
    'UI/UX Design',
    'HTML & CSS',
    'Tailwind CSS',
    'React.js',
    'Vite.js',
    'Responsive Design'
  ];

  return (
    <div className="max-w-2xl w-full bg-white/10 backdrop-blur-xl rounded-[40px] p-10 border border-white/20 shadow-2xl text-center transform hover:scale-[1.02] transition-all duration-500">
      
      {/* FOTO PROFIL */}
      <div className="relative inline-block mb-6">
        {/* Efek Glow Gradasi di Belakang Foto */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full blur opacity-75"></div>
        <img 
          // --- PENTING: Ganti dengan path foto kamu ---
          src="/yohana.jpg" // Misalnya jika fotonya ada di folder public
          alt="Yohana" 
          className="relative w-36 h-36 rounded-full border-4 border-slate-900 object-cover shadow-2xl mx-auto"
        />
        {/* Indikator Status (Misalnya Online) */}
        <div className="absolute bottom-2 right-2 w-7 h-7 bg-teal-400 border-4 border-slate-900 rounded-full shadow-lg"></div>
      </div>

      {/* NAMA & ROLE */}
      <h2 className="text-4xl font-extrabold text-white tracking-tight">Yohana</h2>
      {/* Warna teks diubah ke nuansa biru/cyan */}
      <p className="text-teal-400 font-semibold text-lg mt-1 tracking-widest uppercase italic">Front-End Developer & UI Specialist</p>
      
      {/* DESKRIPSI DEVELOPER */}
      <div className="mt-8 bg-black/20 rounded-3xl p-6 border border-white/5">
        <p className="text-slate-200 text-base leading-relaxed text-justify">
          "Saya adalah seorang Front-End Developer yang berfokus pada penciptaan antarmuka pengguna (UI) yang menarik, responsif, dan mudah digunakan. Di dalam tim ini, saya bertanggung jawab penuh untuk mengubah visi desain menjadi kode nyata yang fungsional menggunakan teknologi modern seperti React.js dan Tailwind CSS. Saya sangat menikmati tantangan dalam membangun tata letak yang bersih (Clean Layout), memastikan performa aplikasi yang optimal, dan menjaga agar tampilan web terlihat sempurna di berbagai perangkat. Melalui kolaborasi ini, saya berkomitmen untuk menghadirkan pengalaman pengguna (UX) terbaik dan membantu tim mencapai tujuan proyek dengan kualitas kode front-end standar industri."
        </p>
      </div>

      {/* SKILL TAGS (Mapping dari array 'mySkills') */}
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {mySkills.map((skill) => (
          <span key={skill} className="px-4 py-1.5 bg-teal-500/10 rounded-full text-xs text-teal-300 font-bold border border-teal-500/20 hover:bg-teal-500/20 transition-colors cursor-default">
            {skill}
          </span>
        ))}
      </div>

      {/* FOOTER */}
      <div className="mt-10 pt-6 border-t border-white/10">
        <p className="text-slate-400 text-xs font-medium tracking-[0.3em] uppercase">
          Dev Team • T2H Teknologi Informasi
        </p>
      </div>

    </div>
  );
};

export default Yohana;