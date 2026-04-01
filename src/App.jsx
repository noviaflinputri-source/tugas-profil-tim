import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      {/* Card Profil */}
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
        <div className="h-32 bg-gradient-to-r from-blue-600 to-indigo-700"></div>
        <div className="px-8 pb-8">
          <div className="relative flex justify-center">
            <div className="absolute -top-16 w-32 h-32 bg-slate-300 border-4 border-white rounded-full overflow-hidden shadow-lg">
              {/* Ganti URL ini dengan foto kamu nanti */}
              <img src="https://via.placeholder.com/150" alt="Foto Profil" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="text-center mt-18">
            <h1 className="text-3xl font-extrabold text-slate-800">Nama Lengkap Kamu</h1>
            <p className="text-indigo-600 font-semibold text-lg">Jurusan Informatika - Kelas X</p>
            <p className="text-slate-500 italic">Domisili: Malang, Jawa Timur</p>
          </div>

          <div className="mt-8 border-t border-slate-100 pt-6">
            <h2 className="text-xl font-bold text-slate-800 mb-3">Tentang Diri</h2>
            {/* Pastikan bagian ini lebih dari 100 kata agar nilai maksimal */}
            <p className="text-slate-600 leading-relaxed text-justify">
              Halo, saya adalah mahasiswa yang sangat antusias dalam mempelajari pengembangan web, khususnya menggunakan ReactJS dan Tailwind CSS. Melalui proyek kolaborasi tim ini, saya belajar banyak mengenai manajemen repository di GitHub dan bagaimana membangun UI yang modern serta responsif. Saya memiliki ketertarikan pada dunia teknologi karena inovasinya yang tidak pernah berhenti. Selain kuliah, saya juga aktif mengeksplorasi library-library baru di ekosistem JavaScript untuk meningkatkan efisiensi pengerjaan proyek. Saya berharap dengan tugas ini, kemampuan teknis saya semakin terasah dan saya bisa berkontribusi lebih baik dalam tim kerja di masa depan. (Tambahkan terus sampai 100 kata ya!).
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App