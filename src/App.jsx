import React from 'react';

// 1. KOMPONEN CARD PROFIL (Sudah mendukung foto)
const ProfileCard = ({ nama, peran, domisili, tentang, warna, foto }) => (
  <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
    {/* Header Warna */}
    <div className={`h-32 bg-gradient-to-r ${warna}`}></div>
    
    <div className="px-8 pb-8">
      {/* Bagian Foto Profil */}
      <div className="relative flex justify-center">
        <div className="absolute -top-16 w-32 h-32 bg-slate-200 border-4 border-white rounded-full overflow-hidden shadow-lg">
          <img 
            src={foto || "https://via.placeholder.com/150"} 
            alt={nama} 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>

      {/* Nama & Detail */}
      <div className="text-center mt-20">
        <h1 className="text-3xl font-extrabold text-slate-800">{nama}</h1>
        <p className="text-indigo-600 font-semibold text-lg">{peran}</p>
        <p className="text-slate-500 italic">Domisili: {domisili}</p>
      </div>

      {/* Deskripsi */}
      <div className="mt-8 border-t border-slate-100 pt-6">
        <h2 className="text-xl font-bold text-slate-800 mb-3">Tentang Diri</h2>
        <p className="text-slate-600 leading-relaxed text-justify">{tentang}</p>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center py-12 px-4 gap-16">
      
      {/* Judul Kelompok */}
      <div className="max-w-4xl w-full text-center text-white mb-10">
        <h1 className="text-5xl font-black mb-4">PROFILE KELOMPOK TERSERAH</h1>
        <p className="text-slate-400 text-lg">Project Implementasi ReactJS & Tailwind CSS</p>
      </div>

      {/* 2. PROFIL NOVI */}
      <ProfileCard 
        nama="Novi" 
        peran="Teknologi Informasi - Kelas T2H"
        domisili="Malang, Jawa Timur"
        warna="from-blue-600 to-indigo-700"
        foto="/novi.jpg" // Sesuaikan dengan nama file di folder public
        tentang="Halo, saya Novi. Saya adalah mahasiswa yang sangat antusias dalam mempelajari pengembangan web, khususnya menggunakan ReactJS dan Tailwind CSS. Melalui proyek kolaborasi tim ini, saya belajar banyak mengenai manajemen repository di GitHub."
      />

      {/* 3. PROFIL NINDI */}
      <ProfileCard 
        nama="Nindi" 
        peran="Teknologi Informasi - Kelas T2H"
        domisili="Malang, Jawa Timur"
        warna="from-purple-600 to-pink-600"
        foto="/nindi.jpg" // Sesuaikan dengan nama file di folder public
        tentang="Halo, saya Nindi. Saya fokus pada bagian fungsionalitas dan struktur komponen dalam tim ini. Bagi saya, belajar React memberikan tantangan tersendiri namun sangat menyenangkan saat melihat komponen yang kita buat berhasil berjalan."
      />

      {/* 4. PROFIL YOHANA */}
      <ProfileCard 
        nama="Yohana" 
        peran="Teknologi Informasi - Kelas T2H"
        domisili="Malang, Jawa Timur"
        warna="from-emerald-500 to-teal-700"
        foto="/yohana.jpg" // Sesuaikan dengan nama file di folder public
        tentang="Halo, saya Yohana. Dalam proyek ini, saya berkontribusi dalam menyusun konten dan merapikan elemen-elemen visual agar sesuai dengan kriteria desain yang modern dan responsif."
      />

    </div>
  );
}

export default App;