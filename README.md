# 🏛️ IX-H SPENSARI · Website Resmi Kelas Horor (Angkatan 2026)

**SMP NEGERI 1 · KELAS IX-H · ANGKATAN 2026**

*"Di mana bayangan merajut kebersamaan, dan setiap detik mengukir kenangan abadi."*

**Wali Kelas:** Ibu Siti Nur Syamsyiah, S.Pd · **Ketua Kelas:** Hikmal Syukri · **Penghuni:** 32 Siswa

---

## 📖 Tentang Kelas IX-H

Website resmi **IX-H SPENSARI** dibuat sebagai wadah digital eksklusif untuk mendokumentasikan kebersamaan, kepengurusan, karya, dan memori tak terlupakan seluruh penghuni kelas IX-H di bawah bimbingan **Ibu Siti Nur Syamsyiah, S.Pd**. Mengusung tema visual **Gothic Horror & Platinum Glassmorphism**, website ini menghadirkan pengalaman interaktif yang imersif dan modern.

---

## ✨ Fitur-Fitur Utama

### 👥 1. Profil 32 Penghuni & Kartu Pelajar 3D
- Direktori lengkap 32 siswa kelas IX-H (**18 Putra & 14 Putri**) nomor absen `#01` s.d. `#32`.
- Fitur pencarian instan nama siswa dan filter gender (Putra/Putri).
- **Kartu Pelajar 3D Flip Interaktif**: Klik pada kartu siswa untuk membuka kartu pelajar resmi yang dapat dibalik (menampilkan barcode, NISN, foto, tata tertib, dan tanda tangan).

### 🏛️ 2. Struktur Organisasi Kelas (12 Pengurus)
Bagan hierarki interaktif kepengurusan kelas:
- **Wali Kelas**: Ibu Siti Nur Syamsyiah, S.Pd
- **Ketua Kelas**: Hikmal Syukri Febriyanto
- **Wakil Ketua**: Rafi Azka Zaidan
- **Bendahara**: Sabrina Nur Salsabila & Afiqa Khairunnisa
- **Sekretaris**: Safa Nurul Afifah & Firsta Septiasa Nur Fitri
- **Seksi Kebersihan**: Aira Nisathaullah & Vanesh Amelia
- **Seksi Keamanan**: Awal Nur Ardiansyah, Fauzan Setiawan & Azam Setia

### 📅 3. Jadwal Pelajaran & Regu Piket
- Jadwal mingguan lengkap (Senin s.d. Sabtu) beserta guru pengampu dan ruang kelas.
- Sistem pembagian regu piket harian interaktif.

### 💬 4. Mading Pesan & Kesan Real-Time (Cloud Firestore)
- Wadah bagi teman sekelas dan pengunjung untuk menancapkan pesan anonim atau ucapan motivasi.
- Dilengkapi dengan 6 pilihan avatar mistis (`👻`, `💀`, `🕯️`, `🔮`, `🦇`, `🕷️`) dan tombol reaksi emoji.
- Terhubung secara langsung (*real-time*) ke database **Google Cloud Firestore**.

### 🎮 5. IX-H Dark Game Hub (6 Mini Games)
- **🔢 Mental Calculation**: Uji akurasi & kecepatan berhitung, soal digenerate otomatis, jumlah soal bisa dikustom.
- **⚡ Extreme Addition**: Jumlahkan angka dalam grid (semua/positif/negatif/kolom/kelipatan 3) sebelum waktu habis, ukuran grid & ronde bisa dikustom.
- **🧠 Grid Memory**: Ingat posisi ikon horor (👻💀🎃🕷️🦇) yang muncul sekilas, lalu tunjuk ulang posisinya.
- **🏎️ Math Dash**: Jawab soal matematika untuk memacu avatar 🏎️ menuju garis finish 🏁.
- **🔍 FixWord**: Temukan kata yang salah dalam cerita horor sebelum waktu habis.
- **🧩 IX-H Mystery**: Teka-Teki Silang (TTS) interaktif seputar misteri kelas, 24 soal.
- **🏆 Hall of Fame**: Papan skor bersama seluruh pemain (real-time via Firestore), bisa difilter per game.

Setiap game punya sistem tingkat kesulitan 🟢 Beginner → ⚫ Nightmare, skor & combo, level unlock otomatis, dan parameter yang bisa dikustomisasi sendiri oleh pemain.

### 🎵 6. Floating Mini Music Player (64 Lagu)
- Pemutar musik terapung dengan visualisator gelombang suara (*soundwave*).
- Pilihan 2 kategori playlist:
  - 🎧 **32 Lagu Santai / Populer**
  - 👻 **32 Breakbeat Horor Spesial IX-H**

### 📸 7. Galeri Kenangan & Berita Kelas
- Dokumentasi foto kegiatan (Lomba kebersihan juara 1, study tour museum, pentas seni budaya).
- Fitur Lightbox Zoom untuk melihat foto dalam resolusi penuh.

---

## 🛠️ Teknologi yang Digunakan

- **Frontend**:
  - HTML5 (Semantic Elements & Canvas API untuk efek kabut mistis)
  - CSS3 (Gothic Dark Theme, CSS Grid, Flexbox, 3D Transforms & Keyframes)
  - JavaScript ES6+ (Web Audio API, LocalStorage, DOM Engine)
- **Database & Cloud**:
  - Google Firebase SDK v10 (Cloud Firestore)
- **Icons & Fonts**:
  - Font Awesome 6.5
  - Google Fonts (*Cinzel, Creepster, JetBrains Mono, Plus Jakarta Sans*)

---

## 📂 Struktur Repositori

```text
ix-h-spensari/
├── index.html              # Halaman utama dan struktur konten
├── styles.css               # Seluruh styling, animasi, dan tema visual
├── app.js                   # Logika interaktif, musik, game, dan filter siswa
├── crossword.js              # Engine game Teka-Teki Silang (TTS)
├── firebase-client.js       # Konfigurasi dan koneksi ke Cloud Firestore
├── firebase-blueprint.json  # Skema blueprint database
├── firestore.rules          # Aturan keamanan database Firestore
├── acara1.jpg - dok6.jpg    # Foto dokumentasi dan galeri kelas
├── .gitignore                # Daftar file yang diabaikan Git
└── README.md                 # Dokumentasi proyek website
```

---

## 🚀 Menjalankan Secara Lokal

```bash
git clone https://github.com/class-ix-h-spensari/ix-h-spensari.git
cd ix-h-spensari
python3 -m http.server 8000
# buka http://localhost:8000
```

## ☁️ Deploy

Situs otomatis ter-deploy lewat **GitHub Pages** setiap ada perubahan di branch utama — tanpa proses build tambahan.

## 🔐 Konfigurasi Firebase

Fitur Mading Pesan, Dokumentasi, Berita, dan Hall of Fame membutuhkan koneksi ke **Firebase Firestore**. Konfigurasi project (`firebase-client.js`) perlu diisi dengan kredensial Firebase project kamu sendiri.

> ⚠️ Pastikan **Firestore Security Rules** (`firestore.rules`) membatasi siapa yang boleh menulis/menghapus data — misalnya pesan mading dan skor Hall of Fame hanya bisa dibuat (`create`), tidak bisa diubah atau dihapus sembarang orang.

---

## 🤝 Kontribusi

Proyek ini dikelola oleh siswa Kelas IX-H. Kalau kamu bagian dari kelas dan ingin menambahkan fitur atau memperbaiki bug:

1. Fork / buat branch baru
2. Lakukan perubahan pada file terkait
3. Uji coba di browser secara lokal
4. Ajukan Pull Request dengan deskripsi perubahan yang jelas

## 📜 Lisensi

Proyek internal Kelas IX-H — SMP Negeri 1 Bojongsari. Dibuat untuk kebutuhan kelas, bukan untuk distribusi komersial.

---

*"Uji Otakmu. Pecahkan Tantangannya. Taklukkan IX-H."*
