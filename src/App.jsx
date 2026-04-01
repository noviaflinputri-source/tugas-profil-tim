import React from 'react';

// Komponen Card Profil (Bisa digunakan berulang)
const ProfileCard = ({ nama, peran, domisili, tentang, warna }) => (
  <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
    <div className={`h-32 bg-gradient-to-r ${warna}`}></div>
    <div className="px-8 pb-8">
      <div className="relative flex justify-center">
        <div className="absolute -top-16 w-32 h-32 bg-slate-300 border-4 border-white rounded-full overflow-hidden shadow-lg">
          <img src="https://via.placeholder.com/150" alt={nama} className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="text-center mt-20">
        <h1 className="text-3xl font-extrabold text-slate-800">{nama}</h1>
        <p className="text-indigo-600 font-semibold text-lg">{peran}</p>
        <p className="text-slate-500 italic">Domisili: {domisili}</p>
      </div>
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
      
      {/* 1. SEKSI PROFIL KELOMPOK */}
      <div className="max-w-4xl w-full text-center text-white mb-10">
        <h1 className="text-5xl font-black mb-4">PROFILE KELOMPOK Terserah</h1>
        <p className="text-slate-400 text-lg">
          Website ini merupakan hasil dari project implementasi ReactJS yang dirancang untuk menampilkan profil kelompok secara modern dan inovatif.
        </p>
      </div>

      {/* 2. PROFIL NOVI */}
      <ProfileCard 
        nama="Novi" 
        peran="Informatika - Kelas X"
        domisili="Malang, Jawa Timur"
        warna="from-blue-600 to-indigo-700"
        tentang="Halo, saya Novi. Saya adalah mahasiswa yang sangat antusias dalam mempelajari pengembangan web, khususnya menggunakan ReactJS dan Tailwind CSS. Melalui proyek kolaborasi tim ini, saya belajar banyak mengenai manajemen repository di GitHub dan bagaimana membangun UI yang modern serta responsif. (Tambahkan teks ini sampai 100 kata ya!)."
      />

      {/* 3. PROFIL NINDI */}
      <ProfileCard 
        nama="Nindi" 
        peran="Informatika - Kelas X"
        domisili="Malang, Jawa Timur"
        warna="from-purple-600 to-pink-600"
        tentang="Halo, saya Nindi. Saya fokus pada bagian fungsionalitas dan struktur komponen dalam tim ini. Bagi saya, belajar React memberikan tantangan tersendiri namun sangat menyenangkan saat melihat komponen yang kita buat berhasil berjalan dengan baik. Kami bekerja sama untuk memastikan tugas ini selesai tepat waktu. (Tambahkan teks ini sampai 100 kata ya!)."
      />

      {/* 4. PROFIL YOHANA */}
      <ProfileCard 
        nama="Yohana" 
        peran="Informatika - Kelas X"
        domisili="Malang, Jawa Timur"
        warna="from-emerald-500 to-teal-700"
        tentang="Halo, saya Yohana. Dalam proyek ini, saya berkontribusi dalam menyusun konten dan merapikan elemen-elemen visual agar sesuai dengan kriteria penilaian dosen. Kerja sama tim sangat penting bagi kami untuk memahami alur kerja Git mulai dari clone hingga merge pull request. (Tambahkan teks ini sampai 100 kata ya!)."
      />

    </div>
  );
}

export default App;