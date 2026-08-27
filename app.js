// ============================================================
// IX-H SPENSARI - CORE APP SCRIPT & DARK HORROR GAME HUB
// ============================================================

// ---------- 1. PARTIKEL BINTANG ----------
(function initStars() {
  const stars = document.getElementById('stars-');
  if (stars) {
    stars.innerHTML = '';
    for (let i = 0; i < 60; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      const size = Math.random() * 3 + 1;
      star.style.width = size + 'px';
      star.style.height = size + 'px';
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.position = 'fixed';
      star.style.background = 'rgba(255, 255, 255, 0.4)';
      star.style.borderRadius = '50%';
      star.style.pointerEvents = 'none';
      star.style.zIndex = '0';
      stars.appendChild(star);
    }
  }
})();

// ---------- 2. DATA STRUKTUR & 32 SISWA ----------
const strukturData = [
  { jabatan: 'Wali Kelas', nama: 'Ibu Siti Nur Syamsyiah, S.Pd', foto: 'wali.jpg', role: 'Pembina & Pelindung' },
  { jabatan: 'Ketua Kelas', nama: 'Hikmal Syukri Febriyanto', foto: 'ketua.jpg', role: 'Pemimpin Barisan' },
  { jabatan: 'Wakil Ketua', nama: 'Rafi Azka Zaidan', foto: 'wakil.jpg', role: 'Panglima Pendamping' },
  { jabatan: 'Bendahara 1', nama: 'Sabrina Nur Salsabila', foto: 'bendahara1.jpg', role: 'Pengelola Kas 1' },
  { jabatan: 'Bendahara 2', nama: 'Afiqa Khairunnisa', foto: 'bendahara2.jpg', role: 'Pengelola Kas 2' },
  { jabatan: 'Sekretaris 1', nama: 'Safa Nurul Afifah', foto: 'sekretaris1.jpg', role: 'Pencatat Sejarah 1' },
  { jabatan: 'Sekretaris 2', nama: 'Firsta Septiasa Nur Fitri', foto: 'sekretaris2.jpg', role: 'Pencatat Sejarah 2' },
  { jabatan: 'Seksi Kebersihan 1', nama: 'Aira Nisathaullah Mumtazah', foto: 'kebersihan1.jpg', role: 'Penjaga Kebersihan' },
  { jabatan: 'Seksi Kebersihan 2', nama: 'Vanesh Amelia Putri', foto: 'kebersihan2.jpg', role: 'Penjaga Kebersihan' },
  { jabatan: 'Seksi Keamanan 1', nama: 'Awal Nur Ardiansyah', foto: 'keamanan1.jpg', role: 'Pengawal Ketertiban' },
  { jabatan: 'Seksi Keamanan 2', nama: 'Fauzan Setiawan', foto: 'keamanan2.jpg', role: 'Pengawal Ketertiban' },
  { jabatan: 'Seksi Keamanan 3', nama: 'Azam Setia Pratama', foto: 'keamanan3.jpg', role: 'Pengawal Ketertiban' }
];

const siswaData = [
  { no: 1, nama: 'Afiqa Khairunnisa', gender: 'P', cita: 'Polwan', nisn: '2026.IXH.001', foto: 'https://res.cloudinary.com/og4nroyy/image/upload/siswa1.jpg' },
  { no: 2, nama: 'Agisti Safa Nur Ramadhani', gender: 'P', cita: 'Kriminolog', nisn: '2026.IXH.002', foto: 'https://res.cloudinary.com/og4nroyy/image/upload/siswa2.jpg' },
  { no: 3, nama: 'Aira Nisathaullah Mumtazah', gender: 'P', cita: 'Penulis', nisn: '2026.IXH.003', foto: 'https://res.cloudinary.com/og4nroyy/image/upload/siswa3.jpg' },
  { no: 4, nama: 'Awal Nur Ardiansyah', gender: 'L', cita: 'Pengusaha', nisn: '2026.IXH.004', foto: 'https://res.cloudinary.com/og4nroyy/image/upload/siswa4.jpg' },
  { no: 5, nama: 'Axzaan May Ash Haabal', gender: 'L', cita: 'Bos Muda', nisn: '2026.IXH.005', foto: 'https://res.cloudinary.com/og4nroyy/image/upload/siswa5.jpg' },
  { no: 6, nama: 'Azam Setia Pratama', gender: 'L', cita: 'Pengusaha', nisn: '2026.IXH.006', foto: 'https://res.cloudinary.com/og4nroyy/image/upload/siswa6.jpg' },
  { no: 7, nama: 'Fauzan Setiawan', gender: 'L', cita: 'Pengusaha', nisn: '2026.IXH.007', foto: 'https://res.cloudinary.com/og4nroyy/image/upload/siswa7.jpg' },
  { no: 8, nama: 'Firsta Septiasa Nur Fitri', gender: 'P', cita: 'Dokter', nisn: '2026.IXH.008', foto: 'https://res.cloudinary.com/og4nroyy/image/upload/siswa8.jpg' },
  { no: 9, nama: 'Ghani Putra Akmal Muazzam', gender: 'L', cita: 'Pengusaha', nisn: '2026.IXH.009', foto: 'https://res.cloudinary.com/og4nroyy/image/upload/siswa9.jpg' },
  { no: 10, nama: 'Haliza Lutfia Tunisa', gender: 'P', cita: 'Polwan', nisn: '2026.IXH.010', foto: 'https://res.cloudinary.com/og4nroyy/image/upload/siswa10.jpg' },
  { no: 11, nama: 'Herul Arifien', gender: 'L', cita: 'CEO', nisn: '2026.IXH.011', foto: 'https://res.cloudinary.com/og4nroyy/image/upload/siswa11.jpg' },
  { no: 12, nama: 'Hikmal Syukri Febriyanto', gender: 'L', cita: 'Hakim', nisn: '2026.IXH.012', foto: '' },
  { no: 13, nama: 'Intan Nuraeni', gender: 'P', cita: 'Koki', nisn: '2026.IXH.013', foto: 'https://res.cloudinary.com/og4nroyy/image/upload/siswa13.jpg' },
  { no: 14, nama: 'Ismia Arum', gender: 'P', cita: 'Dokter', nisn: '2026.IXH.014', foto: 'https://res.cloudinary.com/og4nroyy/image/upload/siswa14.jpg' },
  { no: 15, nama: 'Mahfiz Verona', gender: 'P', cita: 'Polwan', nisn: '2026.IXH.015', foto: 'https://res.cloudinary.com/og4nroyy/image/upload/siswa15.jpg' },
  { no: 16, nama: 'Maida Astagina Hernawayanto', gender: 'P', cita: 'Guru', nisn: '2026.IXH.016', foto: 'https://res.cloudinary.com/og4nroyy/image/upload/siswa16.jpg' },
  { no: 17, nama: 'Muhammad Ikhsan Maulana', gender: 'L', cita: 'Pengusaha', nisn: '2026.IXH.017', foto: 'https://res.cloudinary.com/og4nroyy/image/upload/siswa17.jpg' },
  { no: 18, nama: 'Muhammad Iqbal Nur Hidayat', gender: 'L', cita: 'Pengusaha', nisn: '2026.IXH.018', foto: 'https://res.cloudinary.com/og4nroyy/image/upload/siswa18.jpg' },
  { no: 19, nama: 'Rafael Dimas Saputra', gender: 'L', cita: 'Bos Muda', nisn: '2026.IXH.019', foto: 'https://res.cloudinary.com/og4nroyy/image/upload/siswa19.jpg' },
  { no: 20, nama: 'Rafi Azka Zaidan', gender: 'L', cita: 'TNI-AL', nisn: '2026.IXH.020', foto: 'https://res.cloudinary.com/og4nroyy/image/upload/siswa20.jpg' },
  { no: 21, nama: 'Reza Nur Pratama', gender: 'L', cita: 'CEO', nisn: '2026.IXH.021', foto: '' },
  { no: 22, nama: 'Reziqq Syah Nur Syarif', gender: 'L', cita: 'TNI-AD', nisn: '2026.IXH.022', foto: 'https://res.cloudinary.com/og4nroyy/image/upload/siswa22.jpg' },
  { no: 23, nama: 'Rifki Dias Aldiansah', gender: 'L', cita: 'Owner Bus', nisn: '2026.IXH.023', foto: 'https://res.cloudinary.com/og4nroyy/image/upload/siswa23.jpg' },
  { no: 24, nama: 'Rizky Afif Pratama', gender: 'L', cita: 'Pengusaha', nisn: '2026.IXH.024', foto: 'https://res.cloudinary.com/og4nroyy/image/upload/siswa24.jpg' },
  { no: 25, nama: 'Rizqa Ramadhani', gender: 'P', cita: 'Dokter', nisn: '2026.IXH.025', foto: 'https://res.cloudinary.com/og4nroyy/image/upload/siswa25.jpg' },
  { no: 26, nama: 'Rizqi Jilan Aprilian P', gender: 'L', cita: 'CEO', nisn: '2026.IXH.026', foto: 'https://res.cloudinary.com/og4nroyy/image/upload/siswa26.jpg' },
  { no: 27, nama: 'Sabian Hafizh Faiddlurahman', gender: 'L', cita: 'Masinis', nisn: '2026.IXH.027', foto: 'https://res.cloudinary.com/og4nroyy/image/upload/siswa27.jpg' },
  { no: 28, nama: 'Sabrina Nur Salsabila', gender: 'P', cita: 'Direktur Tambang', nisn: '2026.IXH.028', foto: 'https://res.cloudinary.com/og4nroyy/image/upload/siswa28.jpg' },
  { no: 29, nama: 'Safa Nurul Afifah', gender: 'P', cita: 'Pramugari', nisn: '2026.IXH.029', foto: 'https://res.cloudinary.com/og4nroyy/image/upload/siswa29.jpg' },
  { no: 30, nama: 'Syafii Nur Fadilah', gender: 'L', cita: 'Pemain Bola', nisn: '2026.IXH.030', foto: 'https://res.cloudinary.com/og4nroyy/image/upload/siswa30.jpg' },
  { no: 31, nama: 'Tria Nur Aisyahrani', gender: 'P', cita: 'Guru', nisn: '2026.IXH.031', foto: 'https://res.cloudinary.com/og4nroyy/image/upload/siswa31.jpg' },
  { no: 32, nama: 'Vanesh Amelia Putri', gender: 'P', cita: 'Polwan', nisn: '2026.IXH.032', foto: '' }
];

window.strukturData = strukturData;
window.siswaListData = siswaData;

// Render Organigram Tree
function renderStruktur() {
  const container = document.getElementById('strukturGrid');
  if (!container) return;
  container.innerHTML = '';

  function getAvatarHtml(item) {
    const inisial = item.nama.split(' ').map(n=>n[0]).slice(0,2).join('');
    // Check if item has student photo or match with student list
    const foundSiswa = siswaData.find(s => s.nama.toLowerCase().includes(item.nama.toLowerCase().split(' ')[0]) || item.nama.toLowerCase().includes(s.nama.toLowerCase()));
    const fotoUrl = item.foto && item.foto.includes('cloudinary') ? item.foto : (foundSiswa && foundSiswa.foto ? foundSiswa.foto : (item.foto || ''));
    if (fotoUrl && fotoUrl.startsWith('http')) {
      return `<img src="${fotoUrl}" alt="${item.nama}" class="student-avatar-img" onerror="this.onerror=null; this.parentElement.innerHTML='${inisial}';">`;
    }
    return inisial;
  }

  const level1 = document.createElement('div');
  level1.className = 'tree-level';
  const wali = strukturData[0];
  level1.innerHTML = `
    <div class="org-card leader">
      <div class="org-card-badge"><i class="fas fa-crown"></i> WALI KELAS</div>
      <div class="org-avatar-wrap">
        <div class="org-avatar">${getAvatarHtml(wali)}</div>
      </div>
      <div class="org-name">${wali.nama}</div>
      <div class="org-role">${wali.role}</div>
    </div>
  `;
  container.appendChild(level1);

  const level2 = document.createElement('div');
  level2.className = 'tree-level';
  const ketuaWakil = strukturData.slice(1, 3);
  ketuaWakil.forEach(item => {
    const isKetua = item.jabatan === 'Ketua Kelas';
    const card = document.createElement('div');
    card.className = 'org-card';
    card.innerHTML = `
      <div class="org-card-badge" style="background:${isKetua ? 'linear-gradient(90deg, #991b1b, #dc2626)' : 'linear-gradient(90deg, #1e3a8a, #3b82f6)'}">
        ${item.jabatan}
      </div>
      <div class="org-avatar-wrap">
        <div class="org-avatar">${getAvatarHtml(item)}</div>
      </div>
      <div class="org-name">${item.nama}</div>
      <div class="org-role">${item.role}</div>
    `;
    level2.appendChild(card);
  });
  container.appendChild(level2);

  const level3 = document.createElement('div');
  level3.className = 'tree-level';
  const lainnya = strukturData.slice(3);
  lainnya.forEach(item => {
    const card = document.createElement('div');
    card.className = 'org-card';
    card.innerHTML = `
      <div class="org-card-badge">${item.jabatan}</div>
      <div class="org-avatar-wrap">
        <div class="org-avatar">${getAvatarHtml(item)}</div>
      </div>
      <div class="org-name">${item.nama}</div>
      <div class="org-role">${item.role}</div>
    `;
    level3.appendChild(card);
  });
  container.appendChild(level3);
}

// Render 32 Siswa with Filter & 3D ID Card Trigger
let currentFilter = 'all';
let currentSearch = '';

function renderSiswa() {
  const grid = document.getElementById('siswaGrid');
  if (!grid) return;
  grid.innerHTML = '';

  const filtered = siswaData.filter(s => {
    const matchFilter = currentFilter === 'all' || s.gender === currentFilter;
    const matchSearch = s.nama.toLowerCase().includes(currentSearch.toLowerCase()) || String(s.no).includes(currentSearch);
    return matchFilter && matchSearch;
  });

  filtered.forEach(s => {
    const inisial = s.nama.split(' ').map(w=>w[0]).slice(0,2).join('').toUpperCase();
    const avatarContent = s.foto 
      ? `<img src="${s.foto}" alt="${s.nama}" class="student-avatar-img" onerror="this.onerror=null; this.parentElement.innerHTML='${inisial}';">` 
      : inisial;

    const card = document.createElement('div');
    card.className = 'student-card glass-panel';
    card.innerHTML = `
      <div class="student-no-badge">#${s.no}</div>
      <div class="student-gender-badge ${s.gender}">${s.gender === 'L' ? '♂️ Putra' : '♀️ Putri'}</div>
      <div class="student-avatar-wrap">
        <div class="student-avatar">${avatarContent}</div>
      </div>
      <div class="student-name">${s.nama}</div>
      <div class="student-dream"><i class="fas fa-bullseye"></i> ${s.cita}</div>
      <div class="card-hint"><i class="fas fa-id-card"></i> Klik untuk Buka Kartu Pelajar 3D</div>
    `;
    card.addEventListener('click', () => openStudentIdCard(s));
    grid.appendChild(card);
  });
}

window.openStudentIdCard = openStudentIdCard;
window.siswaData = siswaData;
function openStudentIdCard(s) {
  const modal = document.getElementById('idCardModal');
  const flip = document.getElementById('idCardFlip');
  if (!modal || !flip) return;

  flip.classList.remove('flipped');
  document.getElementById('idCardName').textContent = s.nama;
  document.getElementById('idCardAbsen').textContent = '#' + String(s.no).padStart(2, '0');
  document.getElementById('idCardGender').textContent = s.gender === 'L' ? 'Laki-laki (Putra)' : 'Perempuan (Putri)';
  document.getElementById('idCardCita').textContent = '🎯 ' + s.cita;
  document.getElementById('idCardNis').textContent = 'NISN: ' + s.nisn;

  const photoEl = document.getElementById('idCardPhoto');
  if (photoEl) {
    const avatarFallback = `https://ui-avatars.com/api/?name=${encodeURIComponent(s.nama)}&background=1e293b&color=38bdf8&size=256&bold=true`;
    photoEl.onerror = () => {
      photoEl.onerror = null;
      photoEl.src = avatarFallback;
    };
    if (s.foto && s.foto.trim() !== '') {
      photoEl.src = s.foto;
    } else {
      photoEl.src = avatarFallback;
    }
  }

  modal.classList.add('active');
}

// Student Search & Filter Events
document.getElementById('studentSearch')?.addEventListener('input', (e) => {
  currentSearch = e.target.value;
  renderSiswa();
});

document.querySelectorAll('.filter-btn[data-filter]').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.filter-btn[data-filter]').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    currentFilter = this.dataset.filter;
    renderSiswa();
  });
});

// ---------- 3. JADWAL PELAJARAN & PIKET ----------
const scheduleData = {
  senin: {
    title: "Senin · Semangat & Upacara",
    piketTitle: "Petugas Piket Senin (Absen 1 - 5)",
    piket: ['Afiqa Khairunnisa', 'Agisti Safa Nur Ramadhani', 'Aira Nisathaullah Mumtazah', 'Awal Nur Ardiansyah', 'Axzaan May Ash Haabal'],
    lessons: [
      { time: "07.00 - 07.45", subject: "Upacara Bendera", teacher: "Pembina Upacara", room: "Lapangan" },
      { time: "07.45 - 09.05", subject: "Bahasa Indonesia", teacher: "Dra. Hj. Nurjanah", room: "R. IX-H" },
      { time: "09.20 - 10.40", subject: "Matematika", teacher: "Budi Santoso, M.Pd", room: "R. IX-H" },
      { time: "10.40 - 12.00", subject: "Pendidikan Agama", teacher: "Ust. Ahmad S.Ag", room: "R. IX-H" },
      { time: "12.30 - 13.50", subject: "IPA (Fisika)", teacher: "Drs. Eko Wahyudi", room: "Lab IPA" }
    ]
  },
  selasa: {
    title: "Selasa · Logika & Budaya",
    piketTitle: "Petugas Piket Selasa (Absen 6 - 10)",
    piket: ['Azam Setia Pratama', 'Fauzan Setiawan', 'Firsta Septiasa Nur Fitri', 'Ghani Putra Akmal Muazzam', 'Haliza Lutfia Tunisa'],
    lessons: [
      { time: "07.00 - 08.20", subject: "Bahasa Inggris", teacher: "Siti Rahma, S.Pd", room: "R. IX-H" },
      { time: "08.20 - 09.40", subject: "PPKn", teacher: "Drs. Suwarno", room: "R. IX-H" },
      { time: "10.00 - 11.20", subject: "IPS", teacher: "Hj. Endang S.Pd", room: "R. IX-H" },
      { time: "11.20 - 12.40", subject: "Seni Budaya", teacher: "Yusuf S.Sn", room: "R. Kesenian" }
    ]
  },
  rabu: {
    title: "Rabu · Sains & Raga",
    piketTitle: "Petugas Piket Rabu (Absen 11 - 15)",
    piket: ['Herul Arifien', 'Hikmal Syukri Febriyanto', 'Intan Nuraeni', 'Ismia Arum', 'Mahfiz Verona'],
    lessons: [
      { time: "07.00 - 08.40", subject: "PJOK (Olahraga)", teacher: "Rahmat Hidayat, S.Pd", room: "Lapangan" },
      { time: "09.00 - 10.20", subject: "IPA (Biologi)", teacher: "Drs. Eko Wahyudi", room: "Lab IPA" },
      { time: "10.20 - 11.40", subject: "Matematika", teacher: "Budi Santoso, M.Pd", room: "R. IX-H" },
      { time: "12.15 - 13.35", subject: "Prakarya", teacher: "Sri Wahyuni, S.Pd", room: "R. IX-H" }
    ]
  },
  kamis: {
    title: "Kamis · Literasi & Teknologi",
    piketTitle: "Petugas Piket Kamis (Absen 16 - 20)",
    piket: ['Maida Astagina Hernawayanto', 'Muhammad Ikhsan Maulana', 'Muhammad Iqbal Nur Hidayat', 'Rafael Dimas Saputra', 'Rafi Azka Zaidan'],
    lessons: [
      { time: "07.00 - 08.20", subject: "Informatika", teacher: "Rian Pratama, S.Kom", room: "Lab Komputer" },
      { time: "08.20 - 09.40", subject: "Bahasa Indonesia", teacher: "Dra. Hj. Nurjanah", room: "R. IX-H" },
      { time: "10.00 - 11.20", subject: "Bahasa Jawa", teacher: "Dwi Astuti, S.Pd", room: "R. IX-H" },
      { time: "11.20 - 12.40", subject: "Bimbingan Konseling", teacher: "Ibu Siti Nur S., S.Pd", room: "R. IX-H" }
    ]
  },
  jumat: {
    title: "Jumat · Religi & Kebersihan",
    piketTitle: "Petugas Piket Jumat (Absen 21 - 26)",
    piket: ['Reza Nur Pratama', 'Reziqq Syah Nur Syarif', 'Rifki Dias Aldiansah', 'Rizky Afif Pratama', 'Rizqa Ramadhani', 'Rizqi Jilan Aprilian P'],
    lessons: [
      { time: "07.00 - 07.45", subject: "Jumat Bersih & Religi", teacher: "Wali Kelas & Guru", room: "Area IX-H" },
      { time: "07.45 - 09.05", subject: "Bahasa Inggris", teacher: "Siti Rahma, S.Pd", room: "R. IX-H" },
      { time: "09.20 - 10.40", subject: "IPS", teacher: "Hj. Endang S.Pd", room: "R. IX-H" }
    ]
  },
  sabtu: {
    title: "Sabtu · Pengembangan Diri",
    piketTitle: "Petugas Piket Sabtu (Absen 27 - 32)",
    piket: ['Sabian Hafizh Faiddlurahman', 'Sabrina Nur Salsabila', 'Safa Nurul Afifah', 'Syafii Nur Fadilah', 'Tria Nur Aisyahrani', 'Vanesh Amelia Putri'],
    lessons: [
      { time: "07.00 - 08.20", subject: "Pramuka Wajib", teacher: "Kak Pembina", room: "Lapangan" },
      { time: "08.20 - 09.40", subject: "Ekstrakurikuler Pilihan", teacher: "Pelatih Ekskul", room: "Area Spensari" },
      { time: "10.00 - 11.20", subject: "Evaluasi Mingguan Kelas", teacher: "Hikmal Syukri", room: "R. IX-H" }
    ]
  }
};

function renderSchedule(day) {
  const data = scheduleData[day] || scheduleData.senin;
  const tbody = document.getElementById('scheduleTableBody');
  const title = document.getElementById('currentDayScheduleTitle');
  const piketTitle = document.getElementById('piketDayTitle');
  const piketList = document.getElementById('piketList');

  if (title) title.textContent = data.title;
  if (piketTitle) piketTitle.textContent = data.piketTitle;

  if (tbody) {
    tbody.innerHTML = '';
    data.lessons.forEach(l => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><span class="schedule-time-badge">${l.time}</span></td>
        <td><strong>${l.subject}</strong></td>
        <td>${l.teacher}</td>
        <td><span style="color:var(--text-muted); font-size:0.8rem;"><i class="fas fa-map-marker-alt"></i> ${l.room}</span></td>
      `;
      tbody.appendChild(tr);
    });
  }

  if (piketList) {
    piketList.innerHTML = '';
    data.piket.forEach(name => {
      const item = document.createElement('div');
      item.className = 'piket-item';
      item.innerHTML = `
        <div class="piket-avatar">${name.split(' ').map(n=>n[0]).slice(0,2).join('')}</div>
        <div style="font-size:0.88rem; color:#fff; font-weight:600;">${name}</div>
      `;
      piketList.appendChild(item);
    });
  }
}

document.querySelectorAll('.schedule-tab-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.schedule-tab-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    renderSchedule(this.dataset.day);
  });
});

// Auto select today schedule
const daysMap = ['minggu', 'senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu'];
const todayName = daysMap[new Date().getDay()];
const validDay = scheduleData[todayName] ? todayName : 'senin';
const todayTab = document.querySelector(`.schedule-tab-btn[data-day="${validDay}"]`);
if (todayTab) {
  document.querySelectorAll('.schedule-tab-btn').forEach(b => b.classList.remove('active'));
  todayTab.classList.add('active', 'today-highlight');
  renderSchedule(validDay);
} else {
  renderSchedule('senin');
}

// ---------- 4. COUNTDOWN WIDGET ----------
(function initCountdown() {
  const events = {
    ujian: new Date('2026-05-18T07:00:00'),
    perpisahan: new Date('2026-06-20T08:00:00'),
    hut: new Date('2026-08-15T07:00:00')
  };

  let targetDate = events.ujian;
  const selector = document.getElementById('eventSelector');
  selector?.addEventListener('change', (e) => {
    targetDate = events[e.target.value] || events.ujian;
    updateCD();
  });

  function updateCD() {
    const now = new Date();
    const diff = targetDate - now;
    if (diff <= 0) {
      document.getElementById('cdDays').textContent = '00';
      document.getElementById('cdHours').textContent = '00';
      document.getElementById('cdMinutes').textContent = '00';
      document.getElementById('cdSeconds').textContent = '00';
      return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const dEl = document.getElementById('cdDays');
    const hEl = document.getElementById('cdHours');
    const mEl = document.getElementById('cdMinutes');
    const sEl = document.getElementById('cdSeconds');

    if (dEl) dEl.textContent = String(days).padStart(2, '0');
    if (hEl) hEl.textContent = String(hours).padStart(2, '0');
    if (mEl) mEl.textContent = String(minutes).padStart(2, '0');
    if (sEl) sEl.textContent = String(seconds).padStart(2, '0');
  }

  updateCD();
  setInterval(updateCD, 1000);
})();

// ---------- 5. DOKUMENTASI & LIGHTBOX (SLIDER 2 FOTO) ----------
const defaultDokData = [
  { img: 'motion_photo_2750394923095169353.jpg', fallback: 'dok7.jpg', caption: 'Parade Horor Karnaval Spensari IX-H (Pocong & Pasukan Mistis)', cat: 'horor' },
  { img: 'motion_photo_7593812545193736550.jpg', fallback: 'dok8.jpg', caption: 'Pose Ikonik Pocong & Squad Horor di Depan Gerbang Spensari', cat: 'horor' },
  { img: 'motion_photo_4250468760433741694.jpg', fallback: 'dok9.jpg', caption: 'Aksi Kompak Mengawal Pocong & Karakter Keramat IX-H', cat: 'kegiatan' },
  { img: 'motion_photo_7701151599699610734.jpg', fallback: 'dok10.jpg', caption: 'Potret Kebersamaan Lengkap Penghuni IX-H & Wali Kelas', cat: 'prestasi' },
  { img: 'dok1.jpg', fallback: 'acara1.jpg', caption: 'Kekompakan Penghuni IX-H di Lapangan Utama Spensari', cat: 'kegiatan' },
  { img: 'dok2.jpg', fallback: 'acara2.jpg', caption: 'Penyerahan Piala Juara 1 Lomba Kebersihan Kelas', cat: 'prestasi' },
  { img: 'dok3.jpg', fallback: 'acara3.jpg', caption: 'Dekorasi Horror Class Spensari Halloween Special', cat: 'horor' },
  { img: 'dok4.jpg', fallback: 'dok2.jpg', caption: 'Sesi Belajar Bersama & Persiapan Ujian Sekolah', cat: 'kegiatan' },
  { img: 'dok5.jpg', fallback: 'acara2.jpg', caption: 'Kunjungan Edukasi Museum & Cagar Budaya', cat: 'kegiatan' },
  { img: 'dok6.jpg', fallback: 'acara1.jpg', caption: 'Kenangan Manis Kebersamaan Seluruh Penghuni IX-H', cat: 'horor' }
];

let galleryCurrentPage = 0;
const PHOTOS_PER_PAGE = 2; // Tepat 2 foto per slide agar rapi & tidak menumpuk
let galleryActiveFilter = 'all';
let currentLightboxIndex = 0;
let currentLightboxList = [];

function getDokData() {
  const custom = JSON.parse(localStorage.getItem('ixh_custom_photos') || '[]');
  return [...custom, ...defaultDokData];
}

function updateGalleryFilterCounts() {
  const allPhotos = getDokData();
  document.querySelectorAll('.gallery-filter-bar .filter-btn').forEach(btn => {
    const filter = btn.dataset.gallery;
    const count = allPhotos.filter(d => filter === 'all' || d.cat === filter).length;
    let label = 'Semua Foto';
    if (filter === 'kegiatan') label = 'Kegiatan';
    else if (filter === 'prestasi') label = 'Prestasi';
    else if (filter === 'horor') label = 'Tema Horor';
    btn.textContent = `${label} (${count})`;
  });
}

function openLightbox(index, list) {
  currentLightboxIndex = index;
  currentLightboxList = list;
  const modal = document.getElementById('lightboxModal');
  const img = document.getElementById('lightboxImg');
  const cap = document.getElementById('lightboxCaption');
  if (!modal || !img || !cap || list.length === 0) return;

  const item = list[currentLightboxIndex];
  const fallbackSrc = item.fallback || 'acara1.jpg';
  img.src = item.img;
  img.onerror = () => { img.src = fallbackSrc; };
  cap.textContent = `${item.caption} (${currentLightboxIndex + 1}/${list.length})`;
  modal.classList.add('active');
}

function stepLightbox(delta) {
  if (currentLightboxList.length === 0) return;
  currentLightboxIndex = (currentLightboxIndex + delta + currentLightboxList.length) % currentLightboxList.length;
  const img = document.getElementById('lightboxImg');
  const cap = document.getElementById('lightboxCaption');
  const item = currentLightboxList[currentLightboxIndex];
  const fallbackSrc = item.fallback || 'acara1.jpg';
  if (img && cap && item) {
    img.style.opacity = '0';
    setTimeout(() => {
      img.src = item.img;
      img.onerror = () => { img.src = fallbackSrc; };
      cap.textContent = `${item.caption} (${currentLightboxIndex + 1}/${currentLightboxList.length})`;
      img.style.opacity = '1';
    }, 120);
  }
}

function renderGaleri(filter = galleryActiveFilter) {
  galleryActiveFilter = filter;
  updateGalleryFilterCounts();

  const grid = document.getElementById('dokumentasiGrid');
  if (!grid) return;

  const allPhotos = getDokData();
  const filtered = allPhotos.filter(d => filter === 'all' || d.cat === filter);
  
  const totalPages = Math.max(1, Math.ceil(filtered.length / PHOTOS_PER_PAGE));
  if (galleryCurrentPage >= totalPages) {
    galleryCurrentPage = 0;
  } else if (galleryCurrentPage < 0) {
    galleryCurrentPage = totalPages - 1;
  }

  const startIdx = galleryCurrentPage * PHOTOS_PER_PAGE;
  const visiblePhotos = filtered.slice(startIdx, startIdx + PHOTOS_PER_PAGE);

  // Animasi transisi halus saat berganti foto
  grid.style.opacity = '0';
  grid.style.transform = 'translateY(6px)';

  setTimeout(() => {
    grid.innerHTML = '';

    if (visiblePhotos.length === 0) {
      grid.innerHTML = '<div style="grid-column:1/-1; text-align:center; padding:30px; color:var(--text-silver);">Tidak ada foto dalam kategori ini.</div>';
    } else {
      visiblePhotos.forEach((d, vIdx) => {
        const card = document.createElement('div');
        card.className = 'gallery-card';
        const fallbackSrc = d.fallback || 'acara1.jpg';
        const globalIdx = startIdx + vIdx;
        card.innerHTML = `
          <img src="${d.img}" class="gallery-img" alt="${d.caption}" onerror="this.onerror=null; this.src='${fallbackSrc}';">
          <div class="gallery-overlay">
            <div class="gallery-caption">${d.caption}</div>
            <div class="gallery-zoom-icon"><i class="fas fa-search-plus"></i></div>
          </div>
        `;
        card.addEventListener('click', () => {
          openLightbox(globalIdx, filtered);
        });
        grid.appendChild(card);
      });
    }

    grid.style.opacity = '1';
    grid.style.transform = 'translateY(0)';
  }, 140);

  // Update info slide teks & tombol
  const slideText = document.getElementById('gallerySlideText');
  const dotsContainer = document.getElementById('galleryDots');

  if (slideText) {
    const endPhotoIdx = Math.min(startIdx + PHOTOS_PER_PAGE, filtered.length);
    const startPhotoIdx = filtered.length > 0 ? startIdx + 1 : 0;
    slideText.textContent = `Slide ${galleryCurrentPage + 1} / ${totalPages} (Foto ${startPhotoIdx}-${endPhotoIdx} dari ${filtered.length})`;
  }

  // Render pagination dots
  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalPages; i++) {
      const dot = document.createElement('button');
      dot.className = `gallery-dot ${i === galleryCurrentPage ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Slide ${i + 1}`);
      dot.addEventListener('click', () => {
        galleryCurrentPage = i;
        renderGaleri(galleryActiveFilter);
      });
      dotsContainer.appendChild(dot);
    }
  }
}

// Navigasi Tombol < (Sebelumnya) dan > (Berikutnya) dengan Loop Otomatis
document.getElementById('galleryPrevBtn')?.addEventListener('click', () => {
  const allPhotos = getDokData();
  const filtered = allPhotos.filter(d => galleryActiveFilter === 'all' || d.cat === galleryActiveFilter);
  const totalPages = Math.max(1, Math.ceil(filtered.length / PHOTOS_PER_PAGE));
  galleryCurrentPage = (galleryCurrentPage - 1 + totalPages) % totalPages;
  renderGaleri(galleryActiveFilter);
});

document.getElementById('galleryNextBtn')?.addEventListener('click', () => {
  const allPhotos = getDokData();
  const filtered = allPhotos.filter(d => galleryActiveFilter === 'all' || d.cat === galleryActiveFilter);
  const totalPages = Math.max(1, Math.ceil(filtered.length / PHOTOS_PER_PAGE));
  galleryCurrentPage = (galleryCurrentPage + 1) % totalPages;
  renderGaleri(galleryActiveFilter);
});

// Lightbox Navigation Listeners
document.getElementById('lightboxPrevBtn')?.addEventListener('click', (e) => {
  e.stopPropagation();
  stepLightbox(-1);
});

document.getElementById('lightboxNextBtn')?.addEventListener('click', (e) => {
  e.stopPropagation();
  stepLightbox(1);
});

document.querySelectorAll('.gallery-filter-bar .filter-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.gallery-filter-bar .filter-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    galleryCurrentPage = 0; // reset ke slide pertama
    renderGaleri(this.dataset.gallery);
  });
});

document.getElementById('closeLightboxBtn')?.addEventListener('click', () => {
  document.getElementById('lightboxModal')?.classList.remove('active');
});

// Keyboard Navigation untuk Gallery & Lightbox
window.addEventListener('keydown', (e) => {
  const lightboxModal = document.getElementById('lightboxModal');
  if (lightboxModal && lightboxModal.classList.contains('active')) {
    if (e.key === 'ArrowLeft') stepLightbox(-1);
    else if (e.key === 'ArrowRight') stepLightbox(1);
    else if (e.key === 'Escape') lightboxModal.classList.remove('active');
  }
});

// Touch Swipe Support pada Slider Galeri
let touchStartX = 0;
let touchEndX = 0;
const galleryWrap = document.querySelector('.gallery-slider-wrap');
if (galleryWrap) {
  galleryWrap.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  galleryWrap.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 40) {
      if (diff < 0) {
        document.getElementById('galleryNextBtn')?.click();
      } else {
        document.getElementById('galleryPrevBtn')?.click();
      }
    }
  }, { passive: true });
}

// ---------- 6. BERITA ACARA ----------
const beritaList = [
  {
    judul: '🏆 Juara 1 Lomba Kebersihan Kelas!',
    tanggal: '10 Agustus 2026',
    deskripsi: 'Kelas IX-H berhasil meraih juara 1 lomba kebersihan kelas! Kerja keras menata ruangan, menghias tema horor, dan menjaga kebersihan membuahkan hasil membanggakan. Selamat untuk seluruh penghuni!',
    foto: 'acara1.jpg'
  },
  {
    judul: 'Study Tour Edukasi ke Museum Sejarah',
    tanggal: '14 September 2026',
    deskripsi: 'Petualangan seru mendalami jejak peradaban masa lampau. Banyak artefak kuno dan wawasan sejarah baru yang membuat kami terpukau!',
    foto: 'acara2.jpg'
  },
  {
    judul: 'Pentas Seni & Gelar Budaya Spensari',
    tanggal: '28 Oktober 2026',
    deskripsi: 'Penghuni IX-H tampil memukau dalam paduan suara dan teater drama mistis yang menyihir seluruh penonton di aula utama.',
    foto: 'acara3.jpg'
  }
];

function renderBerita() {
  const grid = document.getElementById('beritaGrid');
  if (!grid) return;
  grid.innerHTML = '';

  const customNews = JSON.parse(localStorage.getItem('ixh_custom_news') || '[]');
  const allBerita = [...customNews.map(n => ({
    judul: n.title,
    tanggal: n.date,
    deskripsi: n.desc,
    foto: n.img || 'acara1.jpg'
  })), ...beritaList];

  allBerita.forEach(b => {
    const card = document.createElement('div');
    card.className = 'news-card';
    card.innerHTML = `
      <div class="news-thumb-wrap">
        <img src="${b.foto}" class="news-thumb" alt="${b.judul}" onerror="this.src='dok2.jpg';">
      </div>
      <div class="news-body">
        <div class="news-date"><i class="fas fa-calendar-alt"></i> ${b.tanggal}</div>
        <div class="news-title">${b.judul}</div>
        <div class="news-excerpt">${b.deskripsi}</div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ---------- 7. MADING FALLBACK & SUBMIT ----------
let selectedAvatar = '👻';
document.querySelectorAll('#avatarSelector .avatar-option').forEach(opt => {
  opt.addEventListener('click', function() {
    document.querySelectorAll('#avatarSelector .avatar-option').forEach(o => o.classList.remove('selected'));
    this.classList.add('selected');
    selectedAvatar = this.dataset.avatar;
  });
});

const defaultGuestbook = [
  { id: '1', author: 'Ibu Siti Nur Syamsyiah', avatar: '👑', text: 'Teruslah bersemangat anak-anakku IX-H tercinta! Raih cita-cita setinggi langit dan tetaplah rendah hati.', date: 'Baru saja', reactions: { ghost: 24, candle: 18, skull: 12 } },
  { id: '2', author: 'Hikmal Syukri (Ketua Kelas)', avatar: '👻', text: 'Solidaritas kita abadi! Jangan pernah ada yang menyerah sebelum garis finish.', date: '1 hari lalu', reactions: { ghost: 19, candle: 15, skull: 8 } },
  { id: '3', author: 'Penghuni Rahasia IX-H', avatar: '🔮', text: 'Kelas terseru sepanjang masa di Spensari. Bangga jadi bagian dari IX-H!', date: '2 hari lalu', reactions: { ghost: 14, candle: 9, skull: 5 } }
];

function renderFallbackGuestbook() {
  const localMessages = JSON.parse(localStorage.getItem('ixh_local_mading') || 'null') || defaultGuestbook;
  window.updateGuestbookUI(localMessages);
}
window.renderFallbackGuestbook = renderFallbackGuestbook;

window.updateGuestbookUI = function(messages) {
  const feed = document.getElementById('guestbookFeed');
  if (!feed) return;
  feed.innerHTML = '';

  messages.forEach(m => {
    const card = document.createElement('div');
    card.className = 'message-card';
    card.innerHTML = `
      <div class="message-header">
        <div class="message-author">
          <span style="font-size:1.2rem;">${m.avatar || '👻'}</span>
          <span>${m.author}</span>
        </div>
        <div class="message-date">${m.date}</div>
      </div>
      <div class="message-body">${m.text}</div>
      <div class="message-reactions">
        <button class="reaction-btn" data-id="${m.id || ''}" data-type="ghost">👻 <span>${m.reactions?.ghost || 0}</span></button>
        <button class="reaction-btn" data-id="${m.id || ''}" data-type="candle">🕯️ <span>${m.reactions?.candle || 0}</span></button>
        <button class="reaction-btn" data-id="${m.id || ''}" data-type="skull">💀 <span>${m.reactions?.skull || 0}</span></button>
      </div>
    `;
    card.querySelectorAll('.reaction-btn').forEach(btn => {
      btn.addEventListener('click', async function() {
        const type = this.dataset.type;
        const msgId = this.dataset.id;
        const span = this.querySelector('span');
        span.textContent = parseInt(span.textContent, 10) + 1;
        this.style.borderColor = 'var(--accent-crimson-glow)';
        
        if (msgId && window.firebaseReactMessage) {
          try {
            await window.firebaseReactMessage(msgId, type);
          } catch(e) {
            console.warn('Realtime reaction error:', e);
          }
        }
      });
    });
    feed.appendChild(card);
  });
};

document.getElementById('madingSubmitBtn')?.addEventListener('click', async function() {
  const authorInput = document.getElementById('madingAuthor');
  const textInput = document.getElementById('madingText');
  const author = authorInput?.value.trim() || 'Anonim IX-H';
  const text = textInput?.value.trim();

  if (!text) {
    alert('Silakan tuliskan pesan terlebih dahulu!');
    return;
  }

  this.disabled = true;
  this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Menancapkan...';

  try {
    const addFn = window.firebaseAddMessage || window.addGuestbookMessage;
    if (addFn) {
      await addFn(author, selectedAvatar, text);
    } else {
      throw new Error('Database realtime belum siap');
    }
  } catch (err) {
    console.warn('Simpan ke lokal sebagai cadangan:', err);
    const local = JSON.parse(localStorage.getItem('ixh_local_mading') || 'null') || defaultGuestbook;
    local.unshift({
      id: Date.now().toString(),
      author,
      avatar: selectedAvatar,
      text,
      date: 'Baru saja',
      reactions: { ghost: 1, candle: 0, skull: 0 }
    });
    localStorage.setItem('ixh_local_mading', JSON.stringify(local));
    window.updateGuestbookUI(local);
  }

  authorInput.value = '';
  textInput.value = '';
  this.disabled = false;
  this.innerHTML = '<i class="fas fa-paper-plane"></i> Tancapkan di Mading';
});

// ---------- 8. PLAYLIST MUSIK 64 LAGU + CUSTOM ADMIN SONGS ----------
(function initMusic() {
  const defaultSongsNormal = [];
  for (let i = 1; i <= 32; i++) {
    defaultSongsNormal.push({
      id: `norm_${i}`,
      title: `Lagu Normal #${i}`,
      artist: `Artis Hits Spensari ${i}`,
      file: `lagu${i}.mp3`
    });
  }

  const defaultSongsHoror = [];
  for (let i = 1; i <= 32; i++) {
    defaultSongsHoror.push({
      id: `hor_${i}`,
      title: `Breakbeat Horor IX-H #${i}`,
      artist: `DJ Misteri Spensari ${i}`,
      file: `horor${i}.mp3`
    });
  }

  // Load custom added songs from storage
  function getCustomSongs(category) {
    try {
      const stored = JSON.parse(localStorage.getItem('ixh_custom_songs') || '[]');
      return stored.filter(s => s.category === category);
    } catch(e) { return []; }
  }

  let songsNormal = [...getCustomSongs('normal'), ...defaultSongsNormal];
  let songsHoror = [...getCustomSongs('horor'), ...defaultSongsHoror];

  let currentMode = 'horor';
  let songs = songsHoror;
  let currentIndex = 0;
  let isPlaying = false;
  const PER_PAGE = 8;
  let currentPage = 0;
  let totalPages = Math.ceil(songs.length / PER_PAGE);

  const audio = new Audio();
  audio.src = songs[currentIndex]?.file || 'horor1.mp3';

  const playPauseBtn = document.getElementById('playPauseBtn');
  const playIcon = document.getElementById('playIcon');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const currentSongDisplay = document.getElementById('currentSongDisplay');
  const playerStatusText = document.getElementById('playerStatusText');
  const soundwave = document.getElementById('soundwaveAnim');
  const playlist = document.getElementById('daftarLaguList');
  const pagination = document.getElementById('pagination');
  const modeNormalBtn = document.getElementById('modeNormalBtn');
  const modeHororBtn = document.getElementById('modeHororBtn');

  function reloadSongLists() {
    songsNormal = [...getCustomSongs('normal'), ...defaultSongsNormal];
    songsHoror = [...getCustomSongs('horor'), ...defaultSongsHoror];
    songs = currentMode === 'normal' ? songsNormal : songsHoror;
    totalPages = Math.max(1, Math.ceil(songs.length / PER_PAGE));
    renderPlaylist();
  }

  window.adminReloadSongs = reloadSongLists;

  function switchMode(mode) {
    if (mode === currentMode) return;
    currentMode = mode;
    songs = mode === 'normal' ? songsNormal : songsHoror;
    totalPages = Math.ceil(songs.length / PER_PAGE);
    currentPage = 0;
    currentIndex = 0;
    audio.src = songs[currentIndex]?.file || '';
    audio.pause();
    isPlaying = false;
    updateUI();
    renderPlaylist();
    updateSongInfo();

    if (modeNormalBtn && modeHororBtn) {
      if (mode === 'normal') {
        modeNormalBtn.classList.add('active');
        modeHororBtn.classList.remove('active');
      } else {
        modeHororBtn.classList.add('active');
        modeNormalBtn.classList.remove('active');
      }
    }
  }

  function renderPlaylist() {
    if (!playlist) return;
    playlist.innerHTML = '';
    const start = currentPage * PER_PAGE;
    const end = Math.min(start + PER_PAGE, songs.length);
    const pageSongs = songs.slice(start, end);

    pageSongs.forEach((song, idx) => {
      const globalIndex = start + idx;
      const item = document.createElement('div');
      item.className = 'lagu-item' + (globalIndex === currentIndex ? ' active' : '');
      item.style.padding = '8px 12px';
      item.style.borderRadius = '8px';
      item.style.background = globalIndex === currentIndex ? 'rgba(220,38,38,0.2)' : 'rgba(255,255,255,0.03)';
      item.style.border = '1px solid ' + (globalIndex === currentIndex ? 'rgba(220,38,38,0.5)' : 'rgba(255,255,255,0.05)');
      item.style.cursor = 'pointer';
      item.style.display = 'flex';
      item.style.justifyContent = 'space-between';
      item.style.alignItems = 'center';
      item.style.fontSize = '0.85rem';
      item.innerHTML = `
        <div>
          <span style="color:var(--accent-crimson-glow); font-family:var(--font-mono); margin-right:8px;">${globalIndex + 1}.</span>
          <span style="color:#fff; font-weight:600;">${song.title}</span>
          <span style="color:var(--text-muted); font-size:0.75rem; margin-left:6px;">- ${song.artist}</span>
        </div>
        ${globalIndex === currentIndex && isPlaying ? '<span style="color:#22c55e;">▶️ Memutar</span>' : ''}
      `;
      item.addEventListener('click', () => playSong(globalIndex));
      playlist.appendChild(item);
    });

    if (pagination) {
      pagination.innerHTML = `
        <button class="gh-btn" id="prevPageBtn" style="width:auto; padding:4px 10px;" ${currentPage === 0 ? 'disabled' : ''}>◀ Prev</button>
        <span style="color:var(--text-muted);">Hal ${currentPage + 1}/${totalPages}</span>
        <button class="gh-btn" id="nextPageBtn" style="width:auto; padding:4px 10px;" ${currentPage === totalPages - 1 ? 'disabled' : ''}>Next ▶</button>
      `;
      document.getElementById('prevPageBtn')?.addEventListener('click', () => {
        if (currentPage > 0) { currentPage--; renderPlaylist(); }
      });
      document.getElementById('nextPageBtn')?.addEventListener('click', () => {
        if (currentPage < totalPages - 1) { currentPage++; renderPlaylist(); }
      });
    }
  }

  function playSong(index) {
    currentIndex = index;
    audio.src = songs[currentIndex].file;
    audio.play().catch(() => {});
    isPlaying = true;
    updateUI();
    updateSongInfo();
    renderPlaylist();
  }

  function updateUI() {
    if (playIcon) {
      playIcon.className = isPlaying ? 'fas fa-pause' : 'fas fa-play';
    }
    if (soundwave) {
      if (isPlaying) soundwave.classList.add('playing');
      else soundwave.classList.remove('playing');
    }
    if (playerStatusText) {
      playerStatusText.textContent = isPlaying ? 'Sedang Dimainkan' : 'Dijeda';
    }
  }

  function updateSongInfo() {
    if (currentSongDisplay) {
      currentSongDisplay.textContent = '🎵 ' + songs[currentIndex].title;
    }
  }

  playPauseBtn?.addEventListener('click', () => {
    if (isPlaying) {
      audio.pause();
      isPlaying = false;
    } else {
      audio.play().catch(() => {});
      isPlaying = true;
    }
    updateUI();
    renderPlaylist();
  });

  prevBtn?.addEventListener('click', () => {
    let nextIdx = currentIndex - 1;
    if (nextIdx < 0) nextIdx = songs.length - 1;
    playSong(nextIdx);
  });

  nextBtn?.addEventListener('click', () => {
    let nextIdx = (currentIndex + 1) % songs.length;
    playSong(nextIdx);
  });

  audio.addEventListener('ended', () => {
    let nextIdx = (currentIndex + 1) % songs.length;
    playSong(nextIdx);
  });

  modeNormalBtn?.addEventListener('click', () => switchMode('normal'));
  modeHororBtn?.addEventListener('click', () => switchMode('horor'));

  renderPlaylist();
  updateSongInfo();
})();

// ---------- 9. DARK GAME HUB (ALL 8 GAMES ENGINE) ----------
(function initGameHub() {
  function ghGet(key, def) {
    try {
      const raw = localStorage.getItem(key);
      if (raw === null) return def;
      return JSON.parse(raw);
    } catch (e) { return def; }
  }
  function ghSet(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); return true; } catch (e) { return false; }
  }

  function randInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

  const GAMES = [
    { id: "mental-calculation", icon: "🔢", title: "MENTAL CALCULATION", desc: "Uji akurasi & kecepatan berhitung, soal otomatis, jumlah soal bisa dikustom." },
    { id: "extreme-addition", icon: "⚡", title: "EXTREME ADDITION", desc: "Jumlahkan angka dalam grid (semua/positif/negatif/kolom) sebelum waktu habis." },
    { id: "grid-memory", icon: "🧠", title: "GRID MEMORY", desc: "Ingat posisi ikon horor (👻💀🎃🕷️🦇) yang muncul sekilas, lalu tunjuk ulang." },
    { id: "math-dash", icon: "🏎️", title: "MATH DASH", desc: "Jawab soal matematika cepat untuk memacu avatar 🏎️ menuju garis finish 🏁." },
    { id: "fixword", icon: "🔍", title: "FIXWORD", desc: "Temukan kata yang salah dalam cerita horor misterius sebelum waktu habis." },
    { id: "ix-h-mystery", icon: "🧩", title: "IX-H MYSTERY", desc: "Teka-Teki Silang (TTS) interaktif seputar misteri kelas dan hal gaib (24 Soal)." },
    { id: "ghost-reflex", icon: "👻", title: "GHOST REFLEX", desc: "Tes kecepatan reaksi instan dalam milidetik (ms) saat sinyal gaib muncul!" },
    { id: "oracle-sequence", icon: "🔮", title: "ORACLE SEQUENCE", desc: "Ritual mengingat urutan kilatan 4 simbol mistis yang semakin panjang." }
  ];

  const TIERS = [
    { key: "beginner", label: "🟢 Beginner", cls: "diff-beginner", mult: 1 },
    { key: "intermediate", label: "🟡 Intermediate", cls: "diff-intermediate", mult: 1.5 },
    { key: "expert", label: "🔴 Expert", cls: "diff-expert", mult: 2 },
    { key: "nightmare", label: "⚫ Nightmare", cls: "diff-nightmare", mult: 3 }
  ];

  function renderHub() {
    const grid = document.getElementById("ghGrid");
    if (!grid) return;
    grid.innerHTML = "";
    GAMES.forEach((g) => {
      const card = document.createElement("div");
      card.className = "gh-card";
      card.innerHTML = `
        <div class="gh-card-icon">${g.icon}</div>
        <div class="gh-card-title">${g.title}</div>
        <div class="gh-card-desc">${g.desc}</div>
        <button class="gh-btn gh-btn-primary" data-game="${g.id}">MAINKAN</button>
      `;
      grid.appendChild(card);
      card.querySelector("button[data-game]").addEventListener("click", () => openGame(g.id));
    });

    const statPlayed = document.getElementById("ghStatPlayed");
    if (statPlayed) statPlayed.textContent = ghGet("ixh_games_played", 0);
    renderHOFTable("all");
  }

  function hideAllPlayAreas() {
    document.querySelectorAll(".gh-play-area").forEach(el => el.classList.remove("active"));
    document.getElementById("ghHub").style.display = "none";
  }

  window.openGame = openGame;
  function openGame(gameId) {
    hideAllPlayAreas();
    let played = ghGet("ixh_games_played", 0);
    ghSet("ixh_games_played", played + 1);

    if (gameId === "mental-calculation") {
      document.getElementById("ghPlayArea")?.classList.add("active");
      showScreen("ghScreenStart");
      renderStartScreenMC();
    } else if (gameId === "extreme-addition") {
      document.getElementById("ghExtremeArea")?.classList.add("active");
      showScreen("ghExtremeScreenStart");
      renderStartScreenExtreme();
    } else if (gameId === "grid-memory") {
      document.getElementById("ghMemoryArea")?.classList.add("active");
      showScreen("ghMemoryScreenStart");
      renderStartScreenMemory();
    } else if (gameId === "math-dash") {
      document.getElementById("ghDashArea")?.classList.add("active");
      showScreen("ghDashScreenStart");
      renderStartScreenDash();
    } else if (gameId === "fixword") {
      document.getElementById("ghFixwordArea")?.classList.add("active");
      showScreen("ghFixwordScreenStart");
      renderStartScreenFixword();
    } else if (gameId === "ix-h-mystery") {
      document.getElementById("ghMysteryArea")?.classList.add("active");
    } else if (gameId === "ghost-reflex") {
      document.getElementById("ghReflexArea")?.classList.add("active");
      showScreen("ghReflexScreenStart");
      renderStartScreenReflex();
    } else if (gameId === "oracle-sequence") {
      document.getElementById("ghSeqArea")?.classList.add("active");
      showScreen("ghSeqScreenStart");
      renderStartScreenSeq();
    }
  }

  function backToHub() {
    hideAllPlayAreas();
    document.getElementById("ghHub").style.display = "block";
    renderHub();
  }

  function showScreen(id) {
    document.querySelectorAll(".gh-screen").forEach(s => s.classList.remove("active"));
    const target = document.getElementById(id);
    if (target) target.classList.add("active");
  }

  // --- GAME 1: MENTAL CALCULATION ---
  let selectedTierMC = 0;
  let stateMC = null;

  function renderStartScreenMC() {
    const row = document.getElementById("ghDifficultyRow");
    if (!row) return;
    row.innerHTML = "";
    TIERS.forEach((t, i) => {
      const btn = document.createElement("button");
      btn.className = `gh-diff-btn ${t.cls}` + (i === selectedTierMC ? " active" : "");
      btn.textContent = t.label;
      btn.addEventListener("click", () => { selectedTierMC = i; renderStartScreenMC(); });
      row.appendChild(btn);
    });
    document.getElementById("ghStartLevel").textContent = `${selectedTierMC + 1}/${TIERS.length}`;
    document.getElementById("ghStartBest").textContent = ghGet(`best_mc_${TIERS[selectedTierMC].key}`, "—");
  }

  function startMC() {
    const count = parseInt(document.getElementById("ghQuestionCountInput").value, 10) || 10;
    stateMC = { count, timeLeft: 60, currentQ: 0, score: 0, combo: 0, correct: 0, timer: null, answer: 0 };
    showScreen("ghScreenPlay");
    nextQuestionMC();
    clearInterval(stateMC.timer);
    stateMC.timer = setInterval(() => {
      stateMC.timeLeft--;
      document.getElementById("ghPlayTimer").textContent = String(Math.max(0, stateMC.timeLeft)).padStart(2, "0");
      if (stateMC.timeLeft <= 0) endMC();
    }, 1000);
  }

  function nextQuestionMC() {
    if (stateMC.currentQ >= stateMC.count) { endMC(); return; }
    const tier = selectedTierMC;
    let a, b, isMul, isSub;
    if (tier === 0) {
      a = randInt(2, 20); b = randInt(1, 15);
      stateMC.answer = a + b;
      document.getElementById("ghQuestionText").textContent = `${a} + ${b}`;
    } else if (tier === 1) {
      a = randInt(5, 50); b = randInt(3, 25);
      isSub = Math.random() < 0.5;
      stateMC.answer = isSub ? a - b : a + b;
      document.getElementById("ghQuestionText").textContent = isSub ? `${a} - ${b}` : `${a} + ${b}`;
    } else if (tier === 2) {
      a = randInt(4, 15); b = randInt(3, 12);
      isMul = Math.random() < 0.6;
      stateMC.answer = isMul ? a * b : a * 5 + b;
      document.getElementById("ghQuestionText").textContent = isMul ? `${a} × ${b}` : `${a} × 5 + ${b}`;
    } else {
      a = randInt(12, 35); b = randInt(6, 18);
      const c = randInt(2, 9);
      stateMC.answer = (a * b) - c;
      document.getElementById("ghQuestionText").textContent = `(${a} × ${b}) - ${c}`;
    }
    document.getElementById("ghPlayProgress").textContent = `${stateMC.currentQ + 1}/${stateMC.count}`;
    document.getElementById("ghPlayScore").textContent = stateMC.score;
    document.getElementById("ghPlayCombo").textContent = `×${Math.max(1, stateMC.combo)}`;
    const input = document.getElementById("ghAnswerInput");
    input.value = "";
    input.focus();
  }

  function submitMC() {
    if (!stateMC) return;
    const val = parseInt(document.getElementById("ghAnswerInput").value, 10);
    if (isNaN(val)) return;
    if (val === stateMC.answer) {
      stateMC.combo++;
      stateMC.correct++;
      stateMC.score += Math.round(100 * TIERS[selectedTierMC].mult * Math.max(1, stateMC.combo));
    } else {
      stateMC.combo = 0;
    }
    stateMC.currentQ++;
    nextQuestionMC();
  }

  function endMC() {
    clearInterval(stateMC.timer);
    const key = `best_mc_${TIERS[selectedTierMC].key}`;
    const curBest = ghGet(key, 0);
    if (stateMC.score > curBest) ghSet(key, stateMC.score);
    saveHOFRecord("Mental Calculation", "Hikmal (IX-H)", TIERS[selectedTierMC].label, stateMC.score);

    document.getElementById("ghResultScore").textContent = stateMC.score;
    document.getElementById("ghResultBest").textContent = Math.max(stateMC.score, curBest);
    document.getElementById("ghResultAccuracy").textContent = Math.round((stateMC.correct / stateMC.count) * 100) + "%";
    document.getElementById("ghResultCombo").textContent = stateMC.combo;
    document.getElementById("ghResultRank").textContent = stateMC.score > 1200 ? "SS" : stateMC.score > 700 ? "S" : "A";
    showScreen("ghScreenResult");
  }

  // --- GAME 2: EXTREME ADDITION ---
  let selectedTierExt = 0;
  let stateExt = null;

  function renderStartScreenExtreme() {
    const row = document.getElementById("ghExtremeDiffRow");
    if (!row) return;
    row.innerHTML = "";
    TIERS.forEach((t, i) => {
      const btn = document.createElement("button");
      btn.className = `gh-diff-btn ${t.cls}` + (i === selectedTierExt ? " active" : "");
      btn.textContent = t.label;
      btn.addEventListener("click", () => { selectedTierExt = i; renderStartScreenExtreme(); });
      row.appendChild(btn);
    });
  }

  function startExtreme() {
    const gridSize = parseInt(document.getElementById("ghExtremeGridSize").value, 10) || 3;
    const totalRounds = parseInt(document.getElementById("ghExtremeRoundsInput").value, 10) || 5;
    stateExt = {
      gridSize, totalRounds, round: 1, score: 0, combo: 0, correct: 0,
      timeLeft: 15, timer: null, answer: 0, gridNumbers: []
    };
    showScreen("ghExtremeScreenPlay");
    nextExtremeRound();
  }

  function nextExtremeRound() {
    if (stateExt.round > stateExt.totalRounds) { endExtreme(); return; }
    clearInterval(stateExt.timer);
    stateExt.timeLeft = selectedTierExt === 3 ? 10 : 15;
    document.getElementById("ghExtremeTimer").textContent = stateExt.timeLeft;
    document.getElementById("ghExtremeRound").textContent = `${stateExt.round}/${stateExt.totalRounds}`;
    document.getElementById("ghExtremeScore").textContent = stateExt.score;
    document.getElementById("ghExtremeCombo").textContent = `×${Math.max(1, stateExt.combo)}`;

    const size = stateExt.gridSize;
    const totalCells = size * size;
    stateExt.gridNumbers = [];
    const minVal = selectedTierExt >= 2 ? -9 : 1;
    const maxVal = selectedTierExt === 3 ? 25 : 15;

    for (let i = 0; i < totalCells; i++) {
      stateExt.gridNumbers.push(randInt(minVal, maxVal));
    }

    // Rules
    const rules = [
      { text: "Jumlahkan SEMUA angka di dalam grid!", filter: (n) => true },
      { text: "Jumlahkan HANYA angka POSITIF (> 0)!", filter: (n) => n > 0 },
      { text: "Jumlahkan angka KELIPATAN 3!", filter: (n) => n % 3 === 0 && n !== 0 },
      { text: `Jumlahkan BARIS ke-1 saja!`, filter: (n, idx) => Math.floor(idx / size) === 0 },
      { text: `Jumlahkan KOLOM ke-2 saja!`, filter: (n, idx) => idx % size === 1 }
    ];
    const chosenRule = rules[randInt(0, rules.length - 1)];
    document.getElementById("ghExtremeRuleText").textContent = chosenRule.text;

    stateExt.answer = stateExt.gridNumbers.reduce((sum, n, idx) => {
      return chosenRule.filter(n, idx) ? sum + n : sum;
    }, 0);

    const gridEl = document.getElementById("ghExtremeGrid");
    gridEl.className = `gh-extreme-grid grid-${size}x${size}`;
    gridEl.innerHTML = "";
    stateExt.gridNumbers.forEach(n => {
      const cell = document.createElement("div");
      cell.className = "gh-extreme-cell";
      cell.textContent = n;
      gridEl.appendChild(cell);
    });

    const input = document.getElementById("ghExtremeAnswerInput");
    input.value = "";
    input.focus();

    stateExt.timer = setInterval(() => {
      stateExt.timeLeft--;
      document.getElementById("ghExtremeTimer").textContent = stateExt.timeLeft;
      if (stateExt.timeLeft <= 0) {
        stateExt.combo = 0;
        stateExt.round++;
        nextExtremeRound();
      }
    }, 1000);
  }

  function submitExtreme() {
    if (!stateExt) return;
    const val = parseInt(document.getElementById("ghExtremeAnswerInput").value, 10);
    if (isNaN(val)) return;
    if (val === stateExt.answer) {
      stateExt.combo++;
      stateExt.correct++;
      stateExt.score += Math.round(150 * TIERS[selectedTierExt].mult * Math.max(1, stateExt.combo));
    } else {
      stateExt.combo = 0;
    }
    stateExt.round++;
    nextExtremeRound();
  }

  function endExtreme() {
    clearInterval(stateExt.timer);
    saveHOFRecord("Extreme Addition", "Hikmal (IX-H)", TIERS[selectedTierExt].label, stateExt.score);
    document.getElementById("ghExtremeResultScore").textContent = stateExt.score;
    document.getElementById("ghExtremeAccuracy").textContent = Math.round((stateExt.correct / stateExt.totalRounds) * 100) + "%";
    document.getElementById("ghExtremeRank").textContent = stateExt.score > 800 ? "SS" : stateExt.score > 400 ? "S" : "A";
    showScreen("ghExtremeScreenResult");
  }

  // --- GAME 3: GRID MEMORY ---
  let selectedTierMem = 0;
  let stateMem = null;
  const ICONS_MEM = ["👻", "💀", "🎃", "🕷️", "🦇"];

  function renderStartScreenMemory() {
    const row = document.getElementById("ghMemoryDiffRow");
    if (!row) return;
    row.innerHTML = "";
    TIERS.forEach((t, i) => {
      const btn = document.createElement("button");
      btn.className = `gh-diff-btn ${t.cls}` + (i === selectedTierMem ? " active" : "");
      btn.textContent = t.label;
      btn.addEventListener("click", () => { selectedTierMem = i; renderStartScreenMemory(); });
      row.appendChild(btn);
    });
  }

  function startMemory() {
    stateMem = { level: 1, score: 0, accepting: false, targetIcons: [], gridData: [] };
    showScreen("ghMemoryScreenPlay");
    nextMemoryRound();
  }

  function nextMemoryRound() {
    const size = selectedTierMem >= 2 ? 4 : 3;
    const totalCells = size * size;
    stateMem.accepting = false;
    document.getElementById("ghMemoryLevel").textContent = stateMem.level;
    document.getElementById("ghMemoryScore").textContent = stateMem.score;
    document.getElementById("ghMemoryStatus").textContent = "Perhatikan posisi...";

    stateMem.gridData = Array(totalCells).fill(null);
    const countToPlace = Math.min(3 + stateMem.level + selectedTierMem, totalCells - 1);
    const chosenIndices = [];
    while (chosenIndices.length < countToPlace) {
      const idx = randInt(0, totalCells - 1);
      if (!chosenIndices.includes(idx)) chosenIndices.push(idx);
    }

    chosenIndices.forEach(idx => {
      stateMem.gridData[idx] = ICONS_MEM[randInt(0, ICONS_MEM.length - 1)];
    });

    const targetIcon = ICONS_MEM[randInt(0, ICONS_MEM.length - 1)];
    const targetCount = stateMem.gridData.filter(icon => icon === targetIcon).length || 1;
    // ensure at least 1 target icon exists
    if (!stateMem.gridData.includes(targetIcon)) {
      stateMem.gridData[chosenIndices[0]] = targetIcon;
    }

    const gridEl = document.getElementById("ghMemoryGrid");
    gridEl.className = `gh-memory-grid grid-${size}x${size}`;
    gridEl.innerHTML = "";

    stateMem.gridData.forEach((icon, i) => {
      const cell = document.createElement("div");
      cell.className = "gh-memory-cell revealed";
      cell.textContent = icon || "";
      gridEl.appendChild(cell);
    });

    const flashDuration = Math.max(1200, 2600 - (selectedTierMem * 400));
    setTimeout(() => {
      document.querySelectorAll(".gh-memory-cell").forEach((c, idx) => {
        c.className = "gh-memory-cell";
        c.textContent = "❓";
        c.addEventListener("click", () => handleMemoryCellClick(idx, targetIcon, c));
      });
      stateMem.accepting = true;
      document.getElementById("ghMemoryStatus").textContent = "Cari sekarang!";
      document.getElementById("ghMemoryPrompt").innerHTML = `Temukan semua posisi ikon <span style="font-size:1.4rem;">${targetIcon}</span>`;
    }, flashDuration);
  }

  function handleMemoryCellClick(index, targetIcon, cellEl) {
    if (!stateMem.accepting || cellEl.classList.contains("found")) return;
    const actual = stateMem.gridData[index];
    if (actual === targetIcon) {
      cellEl.className = "gh-memory-cell found";
      cellEl.textContent = targetIcon;
      stateMem.score += Math.round(100 * TIERS[selectedTierMem].mult * stateMem.level);
      document.getElementById("ghMemoryScore").textContent = stateMem.score;

      // check if all targets found
      const remaining = stateMem.gridData.filter((ic, idx) => ic === targetIcon && !document.querySelectorAll(".gh-memory-cell")[idx].classList.contains("found")).length;
      if (remaining === 0) {
        stateMem.level++;
        stateMem.accepting = false;
        setTimeout(nextMemoryRound, 900);
      }
    } else {
      cellEl.className = "gh-memory-cell wrong";
      cellEl.textContent = actual || "❌";
      stateMem.accepting = false;
      setTimeout(endMemory, 1000);
    }
  }

  function endMemory() {
    saveHOFRecord("Grid Memory", "Hikmal (IX-H)", TIERS[selectedTierMem].label, stateMem.score);
    document.getElementById("ghMemoryResultScore").textContent = stateMem.score;
    document.getElementById("ghMemoryResultLevel").textContent = "Level " + stateMem.level;
    document.getElementById("ghMemoryResultRank").textContent = stateMem.level > 5 ? "SS" : stateMem.level > 3 ? "S" : "A";
    showScreen("ghMemoryScreenResult");
  }

  // --- GAME 4: MATH DASH ---
  let selectedTierDash = 0;
  let stateDash = null;

  function renderStartScreenDash() {
    const row = document.getElementById("ghDashDiffRow");
    if (!row) return;
    row.innerHTML = "";
    TIERS.forEach((t, i) => {
      const btn = document.createElement("button");
      btn.className = `gh-diff-btn ${t.cls}` + (i === selectedTierDash ? " active" : "");
      btn.textContent = t.label;
      btn.addEventListener("click", () => { selectedTierDash = i; renderStartScreenDash(); });
      row.appendChild(btn);
    });
  }

  function startDash() {
    stateDash = {
      playerDist: 5, ghostDist: 0, score: 0, combo: 0,
      startTime: performance.now(), timer: null, answer: 0
    };
    showScreen("ghDashScreenPlay");
    nextDashQuestion();
    clearInterval(stateDash.timer);
    const ghostSpeed = 1.2 + (selectedTierDash * 0.6);
    stateDash.timer = setInterval(() => {
      stateDash.ghostDist += ghostSpeed;
      document.getElementById("ghDashGhost").style.left = `${Math.min(90, stateDash.ghostDist)}%`;
      if (stateDash.ghostDist >= stateDash.playerDist && stateDash.playerDist < 85) {
        endDash(false);
      }
    }, 400);
  }

  function nextDashQuestion() {
    const a = randInt(4, 20 + selectedTierDash * 10);
    const b = randInt(2, 15 + selectedTierDash * 5);
    const isMul = Math.random() < 0.4;
    stateDash.answer = isMul ? a * b : a + b;
    document.getElementById("ghDashQuestion").textContent = isMul ? `${a} × ${b}` : `${a} + ${b}`;
    document.getElementById("ghDashDistance").textContent = `${Math.round(stateDash.playerDist)}%`;
    document.getElementById("ghDashScore").textContent = stateDash.score;
    document.getElementById("ghDashCombo").textContent = `×${Math.max(1, stateDash.combo)}`;

    const choices = [stateDash.answer];
    while (choices.length < 4) {
      const offset = randInt(-10, 10);
      const wrong = stateDash.answer + (offset === 0 ? 3 : offset);
      if (!choices.includes(wrong) && wrong > 0) choices.push(wrong);
    }
    choices.sort(() => Math.random() - 0.5);

    const choicesContainer = document.getElementById("ghDashChoices");
    choicesContainer.innerHTML = "";
    choices.forEach(val => {
      const btn = document.createElement("button");
      btn.className = "gh-dash-choice-btn";
      btn.textContent = val;
      btn.addEventListener("click", () => handleDashAnswer(val));
      choicesContainer.appendChild(btn);
    });
  }

  function handleDashAnswer(val) {
    if (val === stateDash.answer) {
      stateDash.combo++;
      stateDash.score += Math.round(120 * TIERS[selectedTierDash].mult * Math.max(1, stateDash.combo));
      stateDash.playerDist += 16;
      document.getElementById("ghDashCar").style.left = `${Math.min(88, stateDash.playerDist)}%`;
      if (stateDash.playerDist >= 85) {
        endDash(true);
        return;
      }
    } else {
      stateDash.combo = 0;
      stateDash.ghostDist += 8;
    }
    nextDashQuestion();
  }

  function endDash(won) {
    clearInterval(stateDash.timer);
    const elapsed = ((performance.now() - stateDash.startTime) / 1000).toFixed(1);
    if (won) saveHOFRecord("Math Dash", "Hikmal (IX-H)", TIERS[selectedTierDash].label, stateDash.score);

    document.getElementById("ghDashResultIcon").textContent = won ? "🏆" : "👻";
    document.getElementById("ghDashResultTitle").textContent = won ? "Berhasil Sampai Finish!" : "Tertangkap Hantu Gaib!";
    document.getElementById("ghDashResultScore").textContent = stateDash.score;
    document.getElementById("ghDashResultTime").textContent = `${elapsed} detik`;
    document.getElementById("ghDashResultRank").textContent = won ? "SS" : "B";
    showScreen("ghDashScreenResult");
  }

  // --- GAME 5: FIXWORD ---
  let selectedTierFix = 0;
  let stateFix = null;
  const STORIES_FIX = [
    { text: "Malam itu lonceng tua berbunyi tigabelas kali padahal hanya ada dua belas jam.", wrongWord: "tigabelas" },
    { text: "Kuntilanak terbang melayang melewati lemari_es angker di belakang sekolah.", wrongWord: "lemari_es" },
    { text: "Suara langkah misterius terdengar jelas di kolam renang yang kering kerontang.", wrongWord: "renang" },
    { text: "Pocong melompat cepat sambil membawa kalkulator untuk menghitung hutang.", wrongWord: "kalkulator" },
    { text: "Bayangan hitam di koridor IX-H tersenyum manis memegang mikrofon karaoke.", wrongWord: "karaoke" },
    { text: "Lilin menyala dengan kobaran api dingin berwarna ungu kehitaman.", wrongWord: "dingin" }
  ];

  function renderStartScreenFixword() {
    const row = document.getElementById("ghFixwordDiffRow");
    if (!row) return;
    row.innerHTML = "";
    TIERS.forEach((t, i) => {
      const btn = document.createElement("button");
      btn.className = `gh-diff-btn ${t.cls}` + (i === selectedTierFix ? " active" : "");
      btn.textContent = t.label;
      btn.addEventListener("click", () => { selectedTierFix = i; renderStartScreenFixword(); });
      row.appendChild(btn);
    });
  }

  function startFixword() {
    stateFix = { round: 0, total: 5, score: 0, correct: 0, timeLeft: 15, timer: null };
    showScreen("ghFixwordScreenPlay");
    nextFixwordRound();
  }

  function nextFixwordRound() {
    if (stateFix.round >= stateFix.total) { endFixword(); return; }
    clearInterval(stateFix.timer);
    stateFix.timeLeft = 15 - selectedTierFix * 2;
    document.getElementById("ghFixwordTimer").textContent = stateFix.timeLeft;
    document.getElementById("ghFixwordProgress").textContent = `${stateFix.round + 1}/${stateFix.total}`;
    document.getElementById("ghFixwordScore").textContent = stateFix.score;

    const item = STORIES_FIX[stateFix.round % STORIES_FIX.length];
    const words = item.text.split(" ");
    const container = document.getElementById("ghFixwordStory");
    container.innerHTML = "";

    words.forEach(w => {
      const span = document.createElement("span");
      span.className = "gh-fixword-token";
      span.textContent = w;
      span.addEventListener("click", () => handleFixwordClick(w, item.wrongWord, span));
      container.appendChild(span);
    });

    stateFix.timer = setInterval(() => {
      stateFix.timeLeft--;
      document.getElementById("ghFixwordTimer").textContent = stateFix.timeLeft;
      if (stateFix.timeLeft <= 0) {
        stateFix.round++;
        nextFixwordRound();
      }
    }, 1000);
  }

  function handleFixwordClick(clickedWord, targetWrong, el) {
    clearInterval(stateFix.timer);
    const cleanClicked = clickedWord.replace(/[^a-zA-Z0-9_]/g, "");
    const cleanTarget = targetWrong.replace(/[^a-zA-Z0-9_]/g, "");

    if (cleanClicked.toLowerCase() === cleanTarget.toLowerCase()) {
      el.classList.add("correct");
      stateFix.correct++;
      stateFix.score += Math.round(150 * TIERS[selectedTierFix].mult);
    } else {
      el.classList.add("wrong");
    }
    stateFix.round++;
    setTimeout(nextFixwordRound, 800);
  }

  function endFixword() {
    clearInterval(stateFix.timer);
    saveHOFRecord("FixWord", "Hikmal (IX-H)", TIERS[selectedTierFix].label, stateFix.score);
    document.getElementById("ghFixwordResultScore").textContent = stateFix.score;
    document.getElementById("ghFixwordCorrectCount").textContent = `${stateFix.correct}/${stateFix.total}`;
    document.getElementById("ghFixwordResultRank").textContent = stateFix.correct >= 4 ? "SS" : "A";
    showScreen("ghFixwordScreenResult");
  }

  // --- HALL OF FAME LEADERBOARD MANAGEMENT ---
  const DEFAULT_HOF = [
    { game: "Mental Calculation", player: "Hikmal Syukri", level: "⚫ Nightmare", score: 1850 },
    { game: "Extreme Addition", player: "Rafi Azka", level: "🔴 Expert", score: 1420 },
    { game: "Grid Memory", player: "Sabrina Nur", level: "🟡 Intermediate", score: 1100 },
    { game: "Math Dash", player: "Afiqa Khairunnisa", level: "⚫ Nightmare", score: 1650 },
    { game: "FixWord", player: "Safa Nurul", level: "🔴 Expert", score: 950 },
    { game: "IX-H Mystery", player: "Awal Nur", level: "🟢 Beginner", score: "24 Kata" },
    { game: "Ghost Reflex", player: "Azam Setia", level: "⚫ Nightmare", score: "198 ms" },
    { game: "Oracle Sequence", player: "Vanesh Amelia", level: "🔴 Expert", score: "Ronde 12" }
  ];

  function getHOFRecords() {
    return ghGet("ixh_hof_records", DEFAULT_HOF);
  }

  function saveHOFRecord(gameName, playerName, levelName, scoreVal) {
    let records = getHOFRecords();
    records.unshift({ game: gameName, player: playerName, level: levelName, score: scoreVal });
    records = records.slice(0, 30);
    ghSet("ixh_hof_records", records);
  }

  function renderHOFTable(filterGame) {
    const tbody = document.getElementById("hofTableBody");
    if (!tbody) return;
    tbody.innerHTML = "";
    const records = getHOFRecords();

    const filtered = filterGame === "all" ? records : records.filter(r => {
      const gId = r.game.toLowerCase().replace(/[^a-z]/g, "");
      const fId = filterGame.toLowerCase().replace(/[^a-z]/g, "");
      return gId.includes(fId) || fId.includes(gId);
    });

    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; color:var(--text-muted); padding:16px;">Belum ada rekor untuk kategori ini.</td></tr>`;
      return;
    }

    filtered.forEach((r, idx) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><strong>#${idx + 1}</strong></td>
        <td><strong>${r.game}</strong></td>
        <td>${r.player}</td>
        <td><span class="schedule-time-badge">${r.level}</span></td>
        <td><strong class="text-crimson">${r.score}</strong></td>
      `;
      tbody.appendChild(tr);
    });
  }

  // Bind HOF filter tabs
  document.querySelectorAll(".gh-hof-tab").forEach(tab => {
    tab.addEventListener("click", function() {
      document.querySelectorAll(".gh-hof-tab").forEach(t => t.classList.remove("active"));
      this.classList.add("active");
      renderHOFTable(this.dataset.game);
    });
  });

  // --- ATTACH EVENT LISTENERS FOR ALL GAMES ---
  renderHub();

  document.getElementById("ghHOFBtn")?.addEventListener("click", () => {
    hideAllPlayAreas();
    document.getElementById("ghHOFArea")?.classList.add("active");
    renderHOFTable("all");
  });

  document.querySelectorAll("[id$='BackBtn']").forEach(btn => {
    btn.addEventListener("click", backToHub);
  });

  // Extreme Addition
  document.getElementById("ghExtremeEnterBtn")?.addEventListener("click", startExtreme);
  document.getElementById("ghExtremeSubmitBtn")?.addEventListener("click", submitExtreme);
  document.getElementById("ghExtremeAnswerInput")?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") submitExtreme();
  });
  document.getElementById("ghExtremePlayAgainBtn")?.addEventListener("click", () => {
    showScreen("ghExtremeScreenStart");
    renderStartScreenExtreme();
  });

  // Memory
  document.getElementById("ghMemoryEnterBtn")?.addEventListener("click", startMemory);
  document.getElementById("ghMemoryPlayAgainBtn")?.addEventListener("click", () => {
    showScreen("ghMemoryScreenStart");
    renderStartScreenMemory();
  });

  // Math Dash
  document.getElementById("ghDashEnterBtn")?.addEventListener("click", startDash);
  document.getElementById("ghDashPlayAgainBtn")?.addEventListener("click", () => {
    showScreen("ghDashScreenStart");
    renderStartScreenDash();
  });

  // FixWord
  document.getElementById("ghFixwordEnterBtn")?.addEventListener("click", startFixword);
  document.getElementById("ghFixwordPlayAgainBtn")?.addEventListener("click", () => {
    showScreen("ghFixwordScreenStart");
    renderStartScreenFixword();
  });

  // --- GAME 6: GHOST REFLEX ---
  let reflexState = { round: 1, maxRounds: 5, times: [], startTime: 0, timerId: null, phase: 'idle' };

  function renderStartScreenReflex() {
    const best = ghGet("best_reflex_ms");
    document.getElementById("ghReflexStartBest").textContent = best ? best + " ms" : "—";
  }

  function startReflexGame() {
    reflexState = { round: 1, maxRounds: 5, times: [], startTime: 0, timerId: null, phase: 'waiting' };
    showScreen("ghReflexScreenPlay");
    nextReflexRound();
  }

  function nextReflexRound() {
    if (reflexState.round > reflexState.maxRounds) { endReflexGame(); return; }
    document.getElementById("ghReflexRoundProgress").textContent = `${reflexState.round}/${reflexState.maxRounds}`;
    const target = document.getElementById("ghReflexTarget");
    const icon = document.getElementById("ghReflexIcon");
    const instruct = document.getElementById("ghReflexInstruction");
    const sub = document.getElementById("ghReflexSubtext");

    target.className = "gh-reflex-target-area wait";
    icon.textContent = "🔴";
    instruct.textContent = "Tunggu aba-aba...";
    sub.textContent = "Jangan klik dulu sebelum layar berubah hijau!";
    reflexState.phase = 'waiting';

    const delay = randInt(1500, 3800);
    clearTimeout(reflexState.timerId);
    reflexState.timerId = setTimeout(() => {
      reflexState.phase = 'ready';
      reflexState.startTime = performance.now();
      target.className = "gh-reflex-target-area ready";
      icon.textContent = "👻";
      instruct.textContent = "KLIK SEKARANG JUGA!";
      sub.textContent = "Reaksi secepat kilat!";
    }, delay);
  }

  function handleReflexClick() {
    const target = document.getElementById("ghReflexTarget");
    const instruct = document.getElementById("ghReflexInstruction");
    const sub = document.getElementById("ghReflexSubtext");

    if (reflexState.phase === 'waiting') {
      clearTimeout(reflexState.timerId);
      target.className = "gh-reflex-target-area early";
      instruct.textContent = "Terlalu Cepat! (Penalti +400ms)";
      sub.textContent = "Tunggu sinyal hijau muncul.";
      reflexState.times.push(999);
      reflexState.round++;
      setTimeout(nextReflexRound, 1200);
    } else if (reflexState.phase === 'ready') {
      const reactionTime = Math.round(performance.now() - reflexState.startTime);
      reflexState.times.push(reactionTime);
      document.getElementById("ghReflexLastTime").textContent = reactionTime + " ms";
      const avg = Math.round(reflexState.times.reduce((a, b) => a + b, 0) / reflexState.times.length);
      document.getElementById("ghReflexAvgTime").textContent = avg + " ms";
      target.className = "gh-reflex-target-area";
      instruct.textContent = `Hebat! ${reactionTime} ms`;
      reflexState.round++;
      setTimeout(nextReflexRound, 900);
    }
  }

  function endReflexGame() {
    const validTimes = reflexState.times.filter(t => t < 900);
    const avg = validTimes.length ? Math.round(validTimes.reduce((a, b) => a + b, 0) / validTimes.length) : 999;
    const best = Math.min(...reflexState.times);

    const curBest = ghGet("best_reflex_ms", 999);
    if (avg < curBest) ghSet("best_reflex_ms", avg);
    saveHOFRecord("Ghost Reflex", "Hikmal (IX-H)", "Refleks", `${avg} ms`);

    document.getElementById("ghReflexResultScore").textContent = avg + " ms";
    document.getElementById("ghReflexResultBest").textContent = best + " ms";
    document.getElementById("ghReflexResultSpeed").textContent = avg < 250 ? "Kilat Dewa" : avg < 350 ? "Refleks Tajam" : "Normal";
    document.getElementById("ghReflexResultRank").textContent = avg < 220 ? "SS" : avg < 280 ? "S" : avg < 350 ? "A" : "B";
    showScreen("ghReflexScreenResult");
  }

  // --- GAME 7: ORACLE SEQUENCE ---
  let seqState = { sequence: [], playerIndex: 0, round: 1, score: 0, acceptingInput: false };

  function renderStartScreenSeq() {
    const best = ghGet("best_seq_round");
    document.getElementById("ghSeqStartBest").textContent = best ? "Ronde " + best : "—";
  }

  function startSeqGame() {
    seqState = { sequence: [], playerIndex: 0, round: 1, score: 0, acceptingInput: false };
    showScreen("ghSeqScreenPlay");
    nextSeqRound();
  }

  function nextSeqRound() {
    seqState.playerIndex = 0;
    seqState.acceptingInput = false;
    seqState.sequence.push(randInt(0, 3));
    document.getElementById("ghSeqRoundProgress").textContent = `Ronde ${seqState.round}`;
    document.getElementById("ghSeqScore").textContent = seqState.score;
    document.getElementById("ghSeqStatus").textContent = "Perhatikan polanya...";

    let step = 0;
    const interval = setInterval(() => {
      if (step >= seqState.sequence.length) {
        clearInterval(interval);
        seqState.acceptingInput = true;
        document.getElementById("ghSeqStatus").textContent = "Giliranmu! Tekan simbol sesuai urutan.";
        return;
      }
      flashSeqButton(seqState.sequence[step]);
      step++;
    }, 700);
  }

  function flashSeqButton(index) {
    const btn = document.querySelector(`.gh-sequence-btn[data-seq="${index}"]`);
    if (btn) {
      btn.classList.add("active-glow");
      setTimeout(() => btn.classList.remove("active-glow"), 350);
    }
  }

  function handleSeqClick(index) {
    if (!seqState.acceptingInput) return;
    flashSeqButton(index);
    if (index === seqState.sequence[seqState.playerIndex]) {
      seqState.playerIndex++;
      seqState.score += 50 * seqState.round;
      document.getElementById("ghSeqScore").textContent = seqState.score;
      if (seqState.playerIndex >= seqState.sequence.length) {
        seqState.acceptingInput = false;
        seqState.round++;
        document.getElementById("ghSeqStatus").textContent = "Benar! Bersiap ronde berikutnya...";
        setTimeout(nextSeqRound, 1000);
      }
    } else {
      endSeqGame();
    }
  }

  function endSeqGame() {
    const best = ghGet("best_seq_round", 0);
    if (seqState.round > best) ghSet("best_seq_round", seqState.round);
    saveHOFRecord("Oracle Sequence", "Hikmal (IX-H)", "Ritual", `Ronde ${seqState.round}`);

    document.getElementById("ghSeqResultScore").textContent = seqState.score;
    document.getElementById("ghSeqResultRound").textContent = "Ronde " + seqState.round;
    document.getElementById("ghSeqResultRank").textContent = seqState.round > 10 ? "SS" : seqState.round > 6 ? "S" : seqState.round > 3 ? "A" : "B";
    showScreen("ghSeqScreenResult");
  }

  // Reflex Events
  document.getElementById("ghReflexEnterBtn")?.addEventListener("click", startReflexGame);
  document.getElementById("ghReflexTarget")?.addEventListener("click", handleReflexClick);
  document.getElementById("ghReflexPlayAgainBtn")?.addEventListener("click", () => {
    showScreen("ghReflexScreenStart");
    renderStartScreenReflex();
  });

  // Sequence Events
  document.getElementById("ghSeqEnterBtn")?.addEventListener("click", startSeqGame);
  document.querySelectorAll(".gh-sequence-btn").forEach(btn => {
    btn.addEventListener("click", function() {
      handleSeqClick(parseInt(this.dataset.seq, 10));
    });
  });
  document.getElementById("ghSeqPlayAgainBtn")?.addEventListener("click", () => {
    showScreen("ghSeqScreenStart");
    renderStartScreenSeq();
  });

  // MC Events
  document.getElementById("ghEnterBtn")?.addEventListener("click", startMC);
  document.getElementById("ghSubmitAnswerBtn")?.addEventListener("click", submitMC);
  document.getElementById("ghAnswerInput")?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") submitMC();
  });
  document.getElementById("ghPlayAgainBtn")?.addEventListener("click", () => {
    showScreen("ghScreenStart");
    renderStartScreenMC();
  });
})();

// ---------- 10. ADMIN & NAVBAR INITIALIZATION ----------
(function initNavAndAdmin() {
  // Smooth scroll
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href')?.slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.offsetTop - 75,
          behavior: 'smooth'
        });
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
      }
    });
  });

  // Comfort Mode Toggle
  document.getElementById('modeToggleNav')?.addEventListener('click', function() {
    document.body.classList.toggle('comfort');
    const isComfort = document.body.classList.contains('comfort');
    this.innerHTML = isComfort ? '<i class="fas fa-sun"></i> <span>Mode Horor</span>' : '<i class="fas fa-moon"></i> <span>Mode Nyaman</span>';
  });

  // Admin Login & Management System
  const loginBtn = document.getElementById('loginBtn');
  const logoutBtn = document.getElementById('logoutBtn');
  const loginForm = document.getElementById('loginForm');
  const adminPanel = document.getElementById('adminPanel');
  const loginError = document.getElementById('loginError');

  // Admin Tab Elements
  const adminTabMusik = document.getElementById('adminTabMusik');
  const adminTabBerita = document.getElementById('adminTabBerita');
  const adminTabFoto = document.getElementById('adminTabFoto');
  const adminTabMading = document.getElementById('adminTabMading');
  const adminSecMusik = document.getElementById('adminSecMusik');
  const adminSecBerita = document.getElementById('adminSecBerita');
  const adminSecFoto = document.getElementById('adminSecFoto');
  const adminSecMading = document.getElementById('adminSecMading');

  function switchAdminTab(tab) {
    [adminTabMusik, adminTabBerita, adminTabFoto, adminTabMading].forEach(btn => btn?.classList.remove('active'));
    if (adminSecMusik) adminSecMusik.style.display = 'none';
    if (adminSecBerita) adminSecBerita.style.display = 'none';
    if (adminSecFoto) adminSecFoto.style.display = 'none';
    if (adminSecMading) adminSecMading.style.display = 'none';

    if (tab === 'musik') {
      adminTabMusik?.classList.add('active');
      if (adminSecMusik) adminSecMusik.style.display = 'block';
    } else if (tab === 'berita') {
      adminTabBerita?.classList.add('active');
      if (adminSecBerita) adminSecBerita.style.display = 'block';
    } else if (tab === 'foto') {
      adminTabFoto?.classList.add('active');
      if (adminSecFoto) adminSecFoto.style.display = 'block';
    } else if (tab === 'mading') {
      adminTabMading?.classList.add('active');
      if (adminSecMading) adminSecMading.style.display = 'block';
    }
  }

  adminTabMusik?.addEventListener('click', () => switchAdminTab('musik'));
  adminTabBerita?.addEventListener('click', () => switchAdminTab('berita'));
  adminTabFoto?.addEventListener('click', () => switchAdminTab('foto'));
  adminTabMading?.addEventListener('click', () => switchAdminTab('mading'));

  function renderAdminSongList() {
    const listEl = document.getElementById('adminCustomSongList');
    if (!listEl) return;
    const songs = JSON.parse(localStorage.getItem('ixh_custom_songs') || '[]');
    if (songs.length === 0) {
      listEl.innerHTML = '<div style="font-size:0.75rem; color:var(--text-muted); font-style:italic;">Belum ada lagu kustom yang ditambahkan.</div>';
      return;
    }
    listEl.innerHTML = '';
    songs.forEach((s, idx) => {
      const row = document.createElement('div');
      row.style.cssText = 'display:flex; justify-content:space-between; align-items:center; background:rgba(255,255,255,0.04); padding:4px 8px; border-radius:6px; font-size:0.75rem;';
      row.innerHTML = `
        <div style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width:240px;">
          <strong style="color:#fff;">${s.title}</strong> <span style="color:var(--text-muted);">(${s.category})</span>
        </div>
        <button data-del-song="${idx}" style="background:transparent; border:none; color:#ef4444; cursor:pointer; font-size:0.8rem;" title="Hapus Lagu"><i class="fas fa-trash"></i></button>
      `;
      row.querySelector('[data-del-song]').addEventListener('click', function() {
        const delIdx = parseInt(this.dataset.delSong, 10);
        songs.splice(delIdx, 1);
        localStorage.setItem('ixh_custom_songs', JSON.stringify(songs));
        renderAdminSongList();
        if (window.adminReloadSongs) window.adminReloadSongs();
        alertToast('🗑️ Lagu berhasil dihapus dari playlist');
      });
      listEl.appendChild(row);
    });
  }

  function renderAdminPhotoList() {
    const listEl = document.getElementById('adminCustomPhotoList');
    if (!listEl) return;
    const photos = JSON.parse(localStorage.getItem('ixh_custom_photos') || '[]');
    if (photos.length === 0) {
      listEl.innerHTML = '<div style="font-size:0.75rem; color:var(--text-muted); font-style:italic;">Belum ada foto kustom.</div>';
      return;
    }
    listEl.innerHTML = '';
    photos.forEach((p, idx) => {
      const row = document.createElement('div');
      row.style.cssText = 'display:flex; justify-content:space-between; align-items:center; background:rgba(255,255,255,0.04); padding:4px 8px; border-radius:6px; font-size:0.75rem;';
      row.innerHTML = `
        <div style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width:240px;">
          <strong style="color:#fff;">${p.caption}</strong> <span style="color:var(--text-muted);">(${p.cat})</span>
        </div>
        <button data-del-photo="${idx}" style="background:transparent; border:none; color:#ef4444; cursor:pointer; font-size:0.8rem;" title="Hapus Foto"><i class="fas fa-trash"></i></button>
      `;
      row.querySelector('[data-del-photo]').addEventListener('click', function() {
        const delIdx = parseInt(this.dataset.delPhoto, 10);
        photos.splice(delIdx, 1);
        localStorage.setItem('ixh_custom_photos', JSON.stringify(photos));
        renderAdminPhotoList();
        renderGaleri();
        alertToast('🗑️ Foto berhasil dihapus dari galeri');
      });
      listEl.appendChild(row);
    });
  }

  // Admin Add Custom Song
  document.getElementById('adminAddSongBtn')?.addEventListener('click', function() {
    const title = document.getElementById('adminSongTitle')?.value.trim();
    const artist = document.getElementById('adminSongArtist')?.value.trim() || 'Artis IX-H';
    const url = document.getElementById('adminSongUrl')?.value.trim();
    const category = document.getElementById('adminSongCategory')?.value || 'horor';

    if (!title || !url) {
      alertToast('⚠️ Mohon isi judul lagu dan link/file audio');
      return;
    }

    const songs = JSON.parse(localStorage.getItem('ixh_custom_songs') || '[]');
    songs.unshift({
      id: 'custom_' + Date.now(),
      title: title,
      artist: artist,
      file: url,
      category: category
    });
    localStorage.setItem('ixh_custom_songs', JSON.stringify(songs));

    document.getElementById('adminSongTitle').value = '';
    document.getElementById('adminSongArtist').value = '';
    document.getElementById('adminSongUrl').value = '';

    renderAdminSongList();
    if (window.adminReloadSongs) window.adminReloadSongs();
    alertToast('✅ Lagu berhasil ditambahkan ke pemutar musik!');
  });

  // Admin Add News
  document.getElementById('adminAddNewsBtn')?.addEventListener('click', function() {
    const title = document.getElementById('adminNewsTitle')?.value.trim();
    const date = document.getElementById('adminNewsDate')?.value.trim() || 'Hari Ini';
    const body = document.getElementById('adminNewsBody')?.value.trim();

    if (!title || !body) {
      alertToast('⚠️ Mohon isi judul dan ringkasan berita');
      return;
    }

    const customNews = JSON.parse(localStorage.getItem('ixh_custom_news') || '[]');
    customNews.unshift({
      id: Date.now().toString(),
      title: title,
      date: date,
      img: 'acara1.jpg',
      desc: body,
      fullStory: body,
      category: 'Info Kelas'
    });
    localStorage.setItem('ixh_custom_news', JSON.stringify(customNews));

    document.getElementById('adminNewsTitle').value = '';
    document.getElementById('adminNewsDate').value = '';
    document.getElementById('adminNewsBody').value = '';

    alertToast('🎉 Berita acara baru berhasil dipublikasikan!');
    renderBerita();
  });

  // Admin Add Photo
  document.getElementById('adminAddPhotoBtn')?.addEventListener('click', function() {
    const caption = document.getElementById('adminPhotoCaption')?.value.trim();
    const url = document.getElementById('adminPhotoUrl')?.value.trim();
    const category = document.getElementById('adminPhotoCategory')?.value || 'horor';

    if (!caption || !url) {
      alertToast('⚠️ Mohon isi judul keterangan dan nama/link file foto');
      return;
    }

    const photos = JSON.parse(localStorage.getItem('ixh_custom_photos') || '[]');
    photos.unshift({
      img: url,
      caption: caption,
      cat: category,
      fallback: 'acara1.jpg'
    });
    localStorage.setItem('ixh_custom_photos', JSON.stringify(photos));

    document.getElementById('adminPhotoCaption').value = '';
    document.getElementById('adminPhotoUrl').value = '';

    renderAdminPhotoList();
    renderGaleri();
    alertToast('📸 Foto kenangan berhasil ditambahkan ke Galeri Dokumentasi!');
  });

  // Admin Reset Local Mading
  document.getElementById('adminClearMadingLocalBtn')?.addEventListener('click', function() {
    if (confirm('Yakin ingin mereset arsip mading lokal?')) {
      localStorage.removeItem('ixh_local_mading');
      alertToast('🧹 Mading lokal berhasil di-reset!');
      setTimeout(() => location.reload(), 800);
    }
  });

  if (localStorage.getItem('isAdmin') === 'true' && adminPanel && loginForm) {
    adminPanel.style.display = 'block';
    loginForm.style.display = 'none';
    renderAdminSongList();
    renderAdminPhotoList();
  }

  loginBtn?.addEventListener('click', function() {
    const user = document.getElementById('loginUsername').value;
    const pass = document.getElementById('loginPassword').value;
    if (user === 'admin' && pass === 'admin123') {
      localStorage.setItem('isAdmin', 'true');
      adminPanel.style.display = 'block';
      loginForm.style.display = 'none';
      if (loginError) loginError.textContent = '';
      renderAdminSongList();
      renderAdminPhotoList();
      alertToast('👑 Selamat datang di Portal Penguasa IX-H!');
    } else if (loginError) {
      loginError.textContent = '❌ Username atau password salah!';
    }
  });

  logoutBtn?.addEventListener('click', function() {
    localStorage.removeItem('isAdmin');
    adminPanel.style.display = 'none';
    loginForm.style.display = 'block';
    alertToast('Sesi admin telah keluar');
  });

  // Initial calls
  renderStruktur();
  renderSiswa();
  renderGaleri('all');
  renderBerita();
})();

// ---------- 12. GOOGLE MAPS & SCHOOL LOCATION HELPERS ----------
window.switchMapView = function(mode) {
  const staticView = document.getElementById('staticMapView');
  const embedView = document.getElementById('embedMapView');
  const staticBtn = document.getElementById('mapStaticToggleBtn');
  const embedBtn = document.getElementById('mapEmbedToggleBtn');

  if (!staticView || !embedView) return;

  if (mode === 'embed') {
    staticView.style.display = 'none';
    embedView.style.display = 'block';
    staticBtn?.classList.remove('active');
    embedBtn?.classList.add('active');
  } else {
    embedView.style.display = 'none';
    staticView.style.display = 'block';
    embedBtn?.classList.remove('active');
    staticBtn?.classList.add('active');
  }
};

window.copySchoolAddress = function() {
  const addressText = "SMP Negeri 1 Bojongsari, Jl. Raya Bojongsari, Dusun 1, Bojongsari, Kec. Bojongsari, Kabupaten Purbalingga, Jawa Tengah 53362";
  const btnText = document.getElementById('copyAddressBtnText');
  
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(addressText).then(() => {
      if (btnText) {
        btnText.textContent = "Tersalin! ✓";
        setTimeout(() => { btnText.textContent = "Salin Alamat"; }, 2000);
      }
      alertToast("📍 Alamat SMPN 1 Bojongsari berhasil disalin!");
    }).catch(() => {
      prompt("Salin alamat sekolah:", addressText);
    });
  } else {
    prompt("Salin alamat sekolah:", addressText);
  }
};

window.copyCoordinates = function() {
  const coords = "-7.348842, 109.349635";
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(coords).then(() => {
      alertToast("📍 Koordinat GPS berhasil disalin!");
    }).catch(() => {
      prompt("Salin koordinat GPS:", coords);
    });
  } else {
    prompt("Salin koordinat GPS:", coords);
  }
};

window.copySosmedLink = function(url, message) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url).then(() => {
      alertToast(message || 'Link berhasil disalin!');
    }).catch(() => {
      prompt('Salin link berikut:', url);
    });
  } else {
    prompt('Salin link berikut:', url);
  }
};

window.openPlaylistDrawer = function() {
  const modal = document.getElementById('playlistModal');
  if (modal) modal.classList.add('active');
};

window.playSelectedTrack = function(titleKeyword) {
  const modal = document.getElementById('playlistModal');
  if (modal) modal.classList.add('active');
  const playPauseBtn = document.getElementById('playPauseBtn');
  if (playPauseBtn) playPauseBtn.click();
  alertToast('🎵 Memutar: ' + titleKeyword);
};

function alertToast(msg) {
  let toast = document.getElementById('globalToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'globalToast';
    toast.style.cssText = 'position:fixed; bottom:90px; left:50%; transform:translateX(-50%); background:rgba(0,0,0,0.85); color:#fff; border:1px solid var(--accent-crimson-glow); padding:10px 20px; border-radius:100px; font-size:0.85rem; font-weight:700; z-index:9999; box-shadow:0 10px 25px rgba(220,38,38,0.4); pointer-events:none; transition:opacity 0.3s;';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.opacity = '1';
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => {
    toast.style.opacity = '0';
  }, 2500);
}

// ---------- 13. MOBILE NAV TOGGLE & SCROLL SPY ----------
(function initMobileNav() {
  const toggleBtn = document.getElementById('mobileNavToggle');
  const menuWrapper = document.getElementById('navMenuWrapper');
  const navLinks = document.querySelectorAll('.nav-link');

  if (toggleBtn && menuWrapper) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      menuWrapper.classList.toggle('open');
      const icon = toggleBtn.querySelector('i');
      if (icon) {
        if (menuWrapper.classList.contains('open')) {
          icon.className = 'fas fa-times';
        } else {
          icon.className = 'fas fa-bars';
        }
      }
    });

    // Close when clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (menuWrapper.classList.contains('open')) {
          menuWrapper.classList.remove('open');
          const icon = toggleBtn.querySelector('i');
          if (icon) icon.className = 'fas fa-bars';
        }
      });
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (menuWrapper.classList.contains('open') && !menuWrapper.contains(e.target) && !toggleBtn.contains(e.target)) {
        menuWrapper.classList.remove('open');
        const icon = toggleBtn.querySelector('i');
        if (icon) icon.className = 'fas fa-bars';
      }
    });
  }
})();

/* ==========================================================================
   1. SISTEM MANAJEMEN UANG KAS & ABSENSI KELAS IX-H (32 SISWA)
   - Tarif Kas: Rp 1.000 / Hari (Senin - Sabtu = Rp 6.000 / Pekan)
   - Bendahara: Sabrina Nur Salsabila & Afiqa Khairunnisa
   - PIN Bendahara: 9191
   ========================================================================== */
const BENDAHARA_PIN = "9191";
let isBendaharaLoggedIn = false;

// 32 Siswa Sinkron 100% dari siswaData
const studentsData = (typeof siswaData !== 'undefined' && Array.isArray(siswaData) && siswaData.length > 0)
  ? siswaData.map(s => ({
      id: 'siswa-' + s.no,
      no: s.no,
      abs: s.no,
      name: s.nama,
      nama: s.nama,
      gender: s.gender,
      nisn: s.nisn,
      cita: s.cita,
      foto: s.foto
    }))
  : [];

// Helper modal show/hide yang aman & handal
function openAppModal(modalEl) {
  if (!modalEl) return;
  modalEl.style.display = 'flex';
  modalEl.classList.add('active');
  modalEl.style.opacity = '1';
}

function closeAppModal(modalEl) {
  if (!modalEl) return;
  modalEl.classList.remove('active');
  modalEl.style.display = 'none';
  modalEl.style.opacity = '0';
}

// Helper Format Waktu Indonesia Lengkap
function getIndonesianNowDateTime(d = new Date()) {
  const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Ags', 'Sep', 'Okt', 'Nov', 'Des'];
  
  const dayName = days[d.getDay()];
  const dateNum = d.getDate();
  const monthName = months[d.getMonth()];
  const year = d.getFullYear();
  
  const hours = String(d.getHours()).padStart(2, '0');
  const minutes = String(d.getMinutes()).padStart(2, '0');
  const seconds = String(d.getSeconds()).padStart(2, '0');
  
  return `${dayName}, ${dateNum} ${monthName} ${year} • ${hours}:${minutes}:${seconds} WIB`;
}

function getFormattedDateOnly(d = new Date()) {
  const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

// Default data mutasi jurnal kas lengkap dengan tanggal dan waktu
const defaultKasMutations = [
  { id: 'tx-1', type: 'masuk', title: 'Saldo Awal Kas Semester Genap IX-H', amount: 350000, category: 'Kas Awal', date: '2026-08-01', time: '07:30', dateTimeFormatted: 'Sabtu, 1 Ags 2026 • 07:30 WIB', reporter: 'Sabrina (Bendahara 1)' },
  { id: 'tx-2', type: 'keluar', title: 'Beli 3 Pcs Spidol Snowman Boardmarker & 1 Botol Tinta', amount: 35000, category: 'Alat Tulis', date: '2026-08-08', time: '09:45', dateTimeFormatted: 'Sabtu, 8 Ags 2026 • 09:45 WIB', reporter: 'Afiqa (Bendahara 2)' },
  { id: 'tx-3', type: 'keluar', title: 'Beli Sapu Ijuk Baru, Pengki & Kemoceng Bulu Ayam', amount: 48000, category: 'Kebersihan', date: '2026-08-14', time: '13:15', dateTimeFormatted: 'Jumat, 14 Ags 2026 • 13:15 WIB', reporter: 'Sabrina (Bendahara 1)' },
  { id: 'tx-4', type: 'keluar', title: 'Sumbangan Kas & Menjenguk Teman Sakit', amount: 50000, category: 'Sosial', date: '2026-08-18', time: '15:20', dateTimeFormatted: 'Selasa, 18 Ags 2026 • 15:20 WIB', reporter: 'Pengurus Kelas IX-H' },
  { id: 'tx-5', type: 'masuk', title: 'Sisa Uang Hadiah Juara Lomba Kebersihan Kelas', amount: 100000, category: 'Lain-lain', date: '2026-08-20', time: '11:00', dateTimeFormatted: 'Kamis, 20 Ags 2026 • 11:00 WIB', reporter: 'Hikmal Syukri (Ketua Kelas)' },
  { id: 'tx-6', type: 'keluar', title: 'Beli Kain Pel Microfiber & Cairan Pembersih Lantai Wipol', amount: 26000, category: 'Kebersihan', date: '2026-08-22', time: '08:10', dateTimeFormatted: 'Sabtu, 22 Ags 2026 • 08:10 WIB', reporter: 'Sabrina (Bendahara 1)' }
];

function getInitialKasData() {
  const saved = localStorage.getItem('ixh_kas_data_v1');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (parsed && parsed.payments && parsed.mutations) {
        return parsed;
      }
    } catch(e) {}
  }

  const studentPayments = {};
  studentsData.forEach((s, idx) => {
    studentPayments[s.id] = {
      w1: [true, true, true, true, true, true],
      w2: [true, true, true, true, true, true],
      w3: [true, true, true, true, true, true],
      w4: [
        true, 
        true, 
        idx % 5 !== 0, 
        idx % 4 !== 0, 
        idx % 6 !== 0, 
        idx % 7 !== 0
      ]
    };
  });

  const initialData = {
    payments: studentPayments,
    mutations: defaultKasMutations,
    lastUpdatedFormatted: getIndonesianNowDateTime(new Date())
  };
  localStorage.setItem('ixh_kas_data_v1', JSON.stringify(initialData));
  return initialData;
}
window.getInitialKasData = getInitialKasData;

let kasState = getInitialKasData();
let currentKasWeek = 'w4';
let currentKasFilter = 'all';
let kasSearchQuery = '';

function saveKasState() {
  kasState.lastUpdatedFormatted = getIndonesianNowDateTime(new Date());
  localStorage.setItem('ixh_kas_data_v1', JSON.stringify(kasState));
  
  // Sinkronisasi realtime ke Firebase Firestore
  if (typeof window.saveKasStateToFirestore === 'function') {
    window.saveKasStateToFirestore(kasState);
  }

  // Update tampilan label waktu terakhir
  const lastUpdatedEl = document.getElementById('kasLastUpdatedVal');
  if (lastUpdatedEl) {
    lastUpdatedEl.textContent = kasState.lastUpdatedFormatted;
  }
}

function formatRupiah(num) {
  return 'Rp ' + Number(num || 0).toLocaleString('id-ID');
}

function updateKasSummary() {
  let totalIuranCollected = 0;
  let currentWeekPaidStudents = 0;

  studentsData.forEach(s => {
    const p = kasState.payments[s.id];
    if (p) {
      ['w1', 'w2', 'w3', 'w4'].forEach(wk => {
        if (p[wk]) {
          const daysPaid = p[wk].filter(Boolean).length;
          totalIuranCollected += daysPaid * 1000;
        }
      });

      if (p[currentKasWeek]) {
        const daysInCur = p[currentKasWeek].filter(Boolean).length;
        if (daysInCur === 6) {
          currentWeekPaidStudents++;
        }
      }
    }
  });

  let totalMasuk = 0;
  let countMasuk = 0;
  let totalKeluar = 0;
  let countKeluar = 0;

  (kasState.mutations || []).forEach(m => {
    if (m.type === 'masuk') {
      totalMasuk += Number(m.amount);
      countMasuk++;
    } else {
      totalKeluar += Number(m.amount);
      countKeluar++;
    }
  });

  const grandTotalMasuk = totalMasuk + totalIuranCollected;
  const totalSaldo = grandTotalMasuk - totalKeluar;

  const totalStudents = studentsData.length || 32;
  const compliancePercent = Math.round((currentWeekPaidStudents / totalStudents) * 100);

  const elSaldo = document.getElementById('kasTotalSaldo');
  const elMasuk = document.getElementById('kasTotalMasuk');
  const elKeluar = document.getElementById('kasTotalKeluar');
  const elMasukCount = document.getElementById('kasMasukCount');
  const elKeluarCount = document.getElementById('kasKeluarCount');
  const elComplianceRate = document.getElementById('kasComplianceRate');
  const elProgressBar = document.getElementById('kasProgressBar');
  const elComplianceText = document.getElementById('kasComplianceText');

  if (elSaldo) elSaldo.textContent = formatRupiah(totalSaldo);
  if (elMasuk) elMasuk.textContent = formatRupiah(grandTotalMasuk);
  if (elKeluar) elKeluar.textContent = formatRupiah(totalKeluar);
  if (elMasukCount) elMasukCount.textContent = `${countMasuk} Mutasi + Iuran Siswa`;
  if (elKeluarCount) elKeluarCount.textContent = `${countKeluar} Pengeluaran Kelas`;
  if (elComplianceRate) elComplianceRate.textContent = `${compliancePercent}%`;
  if (elProgressBar) elProgressBar.style.width = `${compliancePercent}%`;
  if (elComplianceText) elComplianceText.textContent = `${currentWeekPaidStudents} dari ${totalStudents} Siswa Lunas`;
}

function renderKasTable() {
  const tbody = document.getElementById('kasTableBody');
  if (!tbody) return;

  let html = '';
  const filteredStudents = studentsData.filter(s => {
    const studentName = (s.name || s.nama || '').toLowerCase();
    const matchSearch = studentName.includes(kasSearchQuery.toLowerCase()) || 
                        String(s.abs || s.no).includes(kasSearchQuery);
    if (!matchSearch) return false;

    const p = kasState.payments[s.id] && kasState.payments[s.id][currentKasWeek];
    const daysPaid = p ? p.filter(Boolean).length : 0;
    const isLunas = daysPaid === 6;

    if (currentKasFilter === 'lunas') return isLunas;
    if (currentKasFilter === 'nunggak') return !isLunas;
    return true;
  });

  if (filteredStudents.length === 0) {
    tbody.innerHTML = `<tr><td colspan="10" style="text-align:center; padding: 24px; color: #94a3b8;">Tidak ada data siswa yang cocok dengan pencarian.</td></tr>`;
    return;
  }

  filteredStudents.forEach(s => {
    const studentP = (kasState.payments[s.id] && kasState.payments[s.id][currentKasWeek]) || [false, false, false, false, false, false];
    const daysCount = studentP.filter(Boolean).length;
    const totalBayar = daysCount * 1000;
    const isLunas = daysCount === 6;
    const absNum = s.abs || s.no;

    const daysHtml = studentP.map((paid, dayIdx) => {
      const dayIcon = paid ? '<i class="fas fa-check"></i>' : '<i class="fas fa-minus"></i>';
      const cls = paid ? 'paid' : 'unpaid';
      const cursorStyle = isBendaharaLoggedIn ? 'cursor:pointer;' : 'cursor:default;';
      return `<td style="text-align:center;">
        <div class="kas-day-check ${cls}" data-studentid="${s.id}" data-day="${dayIdx}" style="${cursorStyle}" title="${paid ? 'Sudah Bayar Rp 1.000' : 'Belum Bayar'} (Klik dalam mode bendahara)">
          ${dayIcon}
        </div>
      </td>`;
    }).join('');

    const statusBadge = isLunas 
      ? `<span class="kas-status-badge lunas"><i class="fas fa-check-circle"></i> Lunas</span>`
      : `<span class="kas-status-badge nunggak"><i class="fas fa-clock"></i> Kurang Rp ${(6 - daysCount) * 1000}</span>`;

    html += `
      <tr>
        <td style="font-weight:700; color:var(--text-silver); text-align:center;">#${absNum < 10 ? '0' + absNum : absNum}</td>
        <td>
          <div style="font-weight:600; color:#fff;">${s.name || s.nama}</div>
        </td>
        ${daysHtml}
        <td style="text-align:right; font-family:var(--font-mono); font-weight:700; color:${isLunas ? '#34d399' : '#f87171'};">
          ${formatRupiah(totalBayar)}
        </td>
        <td style="text-align:center;">
          ${statusBadge}
        </td>
      </tr>
    `;
  });

  tbody.innerHTML = html;

  // Interaksi centang kas
  tbody.querySelectorAll('.kas-day-check').forEach(btn => {
    btn.addEventListener('click', () => {
      if (!isBendaharaLoggedIn) {
        alert("🔒 Mode Bendahara terkunci! Klik tombol 'Kelola Kas (PIN)' di atas dan masukkan PIN 9191 untuk mengedit status pembayaran siswa.");
        const pinModal = document.getElementById('kasPinModal');
        openAppModal(pinModal);
        const pinInput = document.getElementById('kasPinInput');
        if (pinInput) { pinInput.value = ''; pinInput.focus(); }
        return;
      }

      const studentId = btn.getAttribute('data-studentid');
      const dayIdx = parseInt(btn.getAttribute('data-day'));
      
      if (!kasState.payments[studentId]) {
        kasState.payments[studentId] = {
          w1: [false, false, false, false, false, false],
          w2: [false, false, false, false, false, false],
          w3: [false, false, false, false, false, false],
          w4: [false, false, false, false, false, false]
        };
      }
      if (!kasState.payments[studentId][currentKasWeek]) {
        kasState.payments[studentId][currentKasWeek] = [false, false, false, false, false, false];
      }

      kasState.payments[studentId][currentKasWeek][dayIdx] = !kasState.payments[studentId][currentKasWeek][dayIdx];
      saveKasState();
      renderKasTable();
      updateKasSummary();
    });
  });
}

function renderKasTransactions() {
  const container = document.getElementById('kasTransactionsList');
  if (!container) return;

  if (!kasState.mutations || kasState.mutations.length === 0) {
    container.innerHTML = `<div style="text-align:center; padding: 30px; color:#94a3b8;">Belum ada riwayat transaksi pengeluaran.</div>`;
    return;
  }

  const sorted = [...kasState.mutations].reverse();
  let html = '';

  sorted.forEach(m => {
    const isKeluar = m.type === 'keluar';
    const icon = isKeluar ? '<i class="fas fa-arrow-up"></i>' : '<i class="fas fa-arrow-down"></i>';
    const sign = isKeluar ? '- ' : '+ ';
    const dateFormatted = m.dateTimeFormatted || (m.date ? `${m.date} ${m.time || ''}` : 'Terbaru');
    const reporter = m.reporter ? `<span class="tag-reporter"><i class="fas fa-user-check"></i> ${m.reporter}</span>` : '';

    html += `
      <div class="kas-tx-item ${m.type}">
        <div class="kas-tx-left">
          <div class="kas-tx-badge-icon">${icon}</div>
          <div class="kas-tx-info">
            <h5>${m.title}</h5>
            <div class="kas-tx-meta-p">
              <span><i class="fas fa-tag text-crimson"></i> ${m.category || 'Umum'}</span>
              <span><i class="fas fa-clock text-crimson"></i> ${dateFormatted}</span>
              ${reporter}
            </div>
          </div>
        </div>
        <div class="kas-tx-amount">
          ${sign}${formatRupiah(m.amount)}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

function generateWATagihan() {
  const unpaidStudents = [];
  studentsData.forEach(s => {
    const p = kasState.payments[s.id] && kasState.payments[s.id][currentKasWeek];
    const daysPaid = p ? p.filter(Boolean).length : 0;
    if (daysPaid < 6) {
      unpaidStudents.push(`• ${s.abs || s.no}. ${s.name || s.nama} (Kurang: ${formatRupiah((6 - daysPaid) * 1000)})`);
    }
  });

  const weekName = document.getElementById('kasWeekSelect')?.selectedOptions[0]?.text || 'Pekan Ini';
  const nowStr = getIndonesianNowDateTime(new Date());
  
  let text = `📢 *REKAP TAGIHAN UANG KAS KELAS IX-H*\n`;
  text += `🗓 *Periode:* ${weekName}\n`;
  text += `⏰ *Waktu Cetak:* ${nowStr}\n`;
  text += `💰 *Tarif Kas:* Rp 1.000 / Hari (Rp 6.000 / Minggu)\n`;
  text += `👩‍💼 *Bendahara:* Sabrina Nur Salsabila & Afiqa Khairunnisa\n`;
  text += `🟢 *Status Sistem:* Cloud Database Live Synced\n\n`;

  if (unpaidStudents.length === 0) {
    text += `🎉 *Luar biasa! Seluruh 32 siswa IX-H sudah LUNAS uang kas pekan ini!* Terima kasih atas ketertiban teman-teman semua. ✨`;
  } else {
    text += `Berikut daftar teman-teman yang belum melunasi kas:\n\n`;
    text += unpaidStudents.join('\n') + `\n\n`;
    text += `⚠️ *Harap segera membayar ke Bendahara (Sabrina/Afiqa) besok pagi sebelum jam pelajaran dimulai.* Terima kasih atas kerjasamanya! 🙏`;
  }

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      alert("✅ Format tagihan WhatsApp berhasil disalin ke clipboard lengkap dengan tanggal dan waktu real-time!");
    }).catch(() => {
      prompt("Salin manual teks tagihan WhatsApp berikut:", text);
    });
  } else {
    prompt("Salin manual teks tagihan WhatsApp berikut:", text);
  }
}

function exportKasToCSV() {
  const nowStr = getIndonesianNowDateTime(new Date());
  let csv = `# LAPORAN KAS IX-H SPENSARI - Diekspor pada: ${nowStr}\n`;
  csv += "No,Nama Siswa,Senin,Selasa,Rabu,Kamis,Jumat,Sabtu,Total Bayar,Status\n";
  studentsData.forEach(s => {
    const p = (kasState.payments[s.id] && kasState.payments[s.id][currentKasWeek]) || [false, false, false, false, false, false];
    const days = p.filter(Boolean).length;
    const total = days * 1000;
    const status = days === 6 ? "Lunas" : `Belum Lunas (Kurang ${6 - days} Hari)`;
    const dayVals = p.map(v => v ? "1000" : "0").join(",");
    csv += `${s.abs || s.no},"${s.name || s.nama}",${dayVals},${total},"${status}"\n`;
  });

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Laporan_Kas_IX-H_${currentKasWeek}_${new Date().toISOString().slice(0,10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

/* ==========================================================================
   2. SISTEM REKAPITULASI & ABSENSI KELAS IX-H (H / S / I / A)
   - Status: H (Hadir), S (Sakit), I (Izin), A (Alpa)
   - 32 Siswa Lengkap dengan Riwayat Waktu
   ========================================================================== */
function getInitialAbsensiData() {
  const saved = localStorage.getItem('ixh_absensi_data_v1');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (parsed && typeof parsed === 'object') {
        return parsed;
      }
    } catch(e) {}
  }

  const months = ['jan', 'feb', 'mar', 'apr', 'mei', 'jun', 'jul', 'agu', 'sep', 'okt', 'nov', 'des'];
  const initialAbs = {};

  months.forEach(m => {
    initialAbs[m] = {};
    studentsData.forEach((s, idx) => {
      let h = 24;
      let sCount = 0;
      let iCount = 0;
      let aCount = 0;

      if (idx === 3 || idx === 11 || idx === 20) {
        h = 23; sCount = 1;
      } else if (idx === 7 || idx === 18) {
        h = 23; iCount = 1;
      } else if (idx === 14 && m === 'agu') {
        h = 22; sCount = 1; iCount = 1;
      }

      initialAbs[m][s.id] = { 
        h, 
        s: sCount, 
        i: iCount, 
        a: aCount,
        lastUpdated: '2026-08-20 08:00',
        lastUpdatedFormatted: 'Kamis, 20 Ags 2026 • 08:00 WIB',
        notes: sCount > 0 ? 'Sakit demam' : (iCount > 0 ? 'Izin acara keluarga' : '')
      };
    });
  });

  localStorage.setItem('ixh_absensi_data_v1', JSON.stringify(initialAbs));
  return initialAbs;
}
window.getInitialAbsensiData = getInitialAbsensiData;

let absensiState = getInitialAbsensiData();
let currentAbsMonth = 'agu';
let currentAbsFilter = 'all';
let absSearchQuery = '';

function saveAbsensiState() {
  localStorage.setItem('ixh_absensi_data_v1', JSON.stringify(absensiState));
  
  // Sinkronisasi realtime ke Firebase Firestore
  if (typeof window.saveAbsensiStateToFirestore === 'function') {
    window.saveAbsensiStateToFirestore(absensiState);
  }

  const lastUpdatedEl = document.getElementById('absLastUpdatedVal');
  if (lastUpdatedEl) {
    lastUpdatedEl.textContent = getIndonesianNowDateTime(new Date());
  }
}

function updateAbsensiSummary() {
  const monthData = absensiState[currentAbsMonth] || {};
  let totalHadir = 0;
  let totalSakit = 0;
  let totalIzin = 0;
  let totalAlpa = 0;
  let totalDaysAll = 0;

  studentsData.forEach(s => {
    const rec = monthData[s.id] || { h: 24, s: 0, i: 0, a: 0 };
    totalHadir += Number(rec.h || 0);
    totalSakit += Number(rec.s || 0);
    totalIzin += Number(rec.i || 0);
    totalAlpa += Number(rec.a || 0);
    totalDaysAll += Number(rec.h || 0) + Number(rec.s || 0) + Number(rec.i || 0) + Number(rec.a || 0);
  });

  const percentage = totalDaysAll > 0 ? ((totalHadir / totalDaysAll) * 100).toFixed(1) : '100.0';

  const elPercentage = document.getElementById('absTotalPercentage');
  const elSakit = document.getElementById('absTotalSakit');
  const elIzin = document.getElementById('absTotalIzin');
  const elAlpa = document.getElementById('absTotalAlpa');

  if (elPercentage) elPercentage.textContent = `${percentage}%`;
  if (elSakit) elSakit.textContent = totalSakit;
  if (elIzin) elIzin.textContent = totalIzin;
  if (elAlpa) elAlpa.textContent = totalAlpa;
}

function renderAbsensiTable() {
  const tbody = document.getElementById('absTableBody');
  if (!tbody) return;

  const monthData = absensiState[currentAbsMonth] || {};

  const filtered = studentsData.filter(s => {
    const studentName = (s.name || s.nama || '').toLowerCase();
    const matchSearch = studentName.includes(absSearchQuery.toLowerCase()) || 
                        String(s.abs || s.no).includes(absSearchQuery);
    if (!matchSearch) return false;

    const rec = monthData[s.id] || { h: 24, s: 0, i: 0, a: 0 };
    const totalDays = rec.h + rec.s + rec.i + rec.a;
    const is100 = totalDays > 0 && rec.h === totalDays;
    const hasSI = rec.s > 0 || rec.i > 0;
    const hasA = rec.a > 0;

    if (currentAbsFilter === 'rajin') return is100;
    if (currentAbsFilter === 'sakit-izin') return hasSI;
    if (currentAbsFilter === 'alpa') return hasA;
    return true;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="9" style="text-align:center; padding: 24px; color: #94a3b8;">Tidak ada data siswa yang cocok dengan filter absensi.</td></tr>`;
    return;
  }

  let html = '';
  filtered.forEach(s => {
    const rec = monthData[s.id] || { h: 24, s: 0, i: 0, a: 0 };
    const totalDays = rec.h + rec.s + rec.i + rec.a;
    const pct = totalDays > 0 ? ((rec.h / totalDays) * 100).toFixed(1) : '100.0';
    const absNum = s.abs || s.no;
    const notes = rec.notes ? `<small class="abs-notes-tooltip"><i class="fas fa-info-circle text-crimson"></i> ${rec.notes}</small>` : '';

    let predikat = '<span class="abs-predikat-badge predikat-sempurna">100% Sempurna</span>';
    if (rec.a > 0) {
      predikat = '<span class="abs-predikat-badge predikat-perhatian">Perlu Perhatian</span>';
    } else if (Number(pct) < 100) {
      predikat = '<span class="abs-predikat-badge predikat-baik">Sangat Baik</span>';
    }

    html += `
      <tr>
        <td style="font-weight:700; color:var(--text-silver); text-align:center;">#${absNum < 10 ? '0' + absNum : absNum}</td>
        <td>
          <div style="font-weight:600; color:#fff;">${s.name || s.nama}</div>
          ${notes}
        </td>
        <td class="abs-val-cell" style="color:#34d399;">${rec.h}</td>
        <td class="abs-val-cell" style="color:#fbbf24;">${rec.s}</td>
        <td class="abs-val-cell" style="color:#38bdf8;">${rec.i}</td>
        <td class="abs-val-cell" style="color:#f87171;">${rec.a}</td>
        <td class="abs-val-cell" style="color:#cbd5e1;">${totalDays} Hari</td>
        <td style="text-align:center; font-family:var(--font-mono); font-weight:700; color:${Number(pct) >= 95 ? '#34d399' : '#fbbf24'};">
          ${pct}%
        </td>
        <td style="text-align:center;">
          ${predikat}
        </td>
      </tr>
    `;
  });

  tbody.innerHTML = html;
}

function generateWAAbsensi() {
  const monthName = document.getElementById('absMonthSelect')?.selectedOptions[0]?.text || 'Bulan Ini';
  const monthData = absensiState[currentAbsMonth] || {};
  const nowStr = getIndonesianNowDateTime(new Date());

  let text = `📋 *LAPORAN REKAPITULASI ABSENSI SISWA KELAS IX-H*\n`;
  text += `🗓 *Periode:* ${monthName}\n`;
  text += `⏰ *Waktu Cetak:* ${nowStr}\n`;
  text += `🏫 *Kelas:* IX-H SPENSARI (32 Siswa)\n`;
  text += `👩‍🏫 *Wali Kelas:* Ibu Siti Nur Syamsyiah, S.Pd\n`;
  text += `🟢 *Status Sistem:* Cloud Database Live Synced\n\n`;

  let totalH = 0, totalS = 0, totalI = 0, totalA = 0;
  const catatanSiswa = [];

  studentsData.forEach(s => {
    const rec = monthData[s.id] || { h: 24, s: 0, i: 0, a: 0 };
    totalH += Number(rec.h || 0);
    totalS += Number(rec.s || 0);
    totalI += Number(rec.i || 0);
    totalA += Number(rec.a || 0);

    if (rec.s > 0 || rec.i > 0 || rec.a > 0) {
      let rincian = [];
      if (rec.s > 0) rincian.push(`Sakit: ${rec.s}`);
      if (rec.i > 0) rincian.push(`Izin: ${rec.i}`);
      if (rec.a > 0) rincian.push(`Alpa: ${rec.a}`);
      const extraNote = rec.notes ? ` [${rec.notes}]` : '';
      catatanSiswa.push(`• ${s.abs || s.no}. ${s.name || s.nama} (${rincian.join(', ')})${extraNote}`);
    }
  });

  text += `📊 *Ringkasan Kehadiran Kelas:*\n`;
  text += `• Total Hadir (H): ${totalH}\n`;
  text += `• Total Sakit (S): ${totalS}\n`;
  text += `• Total Izin (I): ${totalI}\n`;
  text += `• Total Alpa (A): ${totalA}\n\n`;

  if (catatanSiswa.length > 0) {
    text += `📌 *Daftar Siswa dengan Catatan (S / I / A):*\n`;
    text += catatanSiswa.join('\n') + `\n\n`;
  } else {
    text += `✨ *Seluruh 32 Siswa IX-H Hadir 100% tanpa keterangan Sakit/Izin/Alpa.* Luar biasa!\n\n`;
  }

  text += `_Laporan diarsipkan secara otomatis melalui Cloud Website Resmi Kelas IX-H._`;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      alert("✅ Format laporan absensi WhatsApp berhasil disalin ke clipboard lengkap dengan tanggal dan waktu!");
    }).catch(() => {
      prompt("Salin manual teks laporan absensi WhatsApp berikut:", text);
    });
  } else {
    prompt("Salin manual teks laporan absensi WhatsApp berikut:", text);
  }
}

function exportAbsensiCSV() {
  const monthData = absensiState[currentAbsMonth] || {};
  const nowStr = getIndonesianNowDateTime(new Date());
  let csv = `# REKAP ABSENSI IX-H SPENSARI - Diekspor pada: ${nowStr}\n`;
  csv += "No,Nama Siswa,Hadir (H),Sakit (S),Izin (I),Alpa (A),Total Hari,Persentase Kehadiran,Keterangan\n";

  studentsData.forEach(s => {
    const rec = monthData[s.id] || { h: 24, s: 0, i: 0, a: 0 };
    const totalDays = rec.h + rec.s + rec.i + rec.a;
    const pct = totalDays > 0 ? ((rec.h / totalDays) * 100).toFixed(1) : '100.0';
    const notes = rec.notes ? `"${rec.notes.replace(/"/g, '""')}"` : '""';
    csv += `${s.abs || s.no},"${s.name || s.nama}",${rec.h},${rec.s},${rec.i},${rec.a},${totalDays},"${pct}%",${notes}\n`;
  });

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Rekap_Absensi_IX-H_${currentAbsMonth}_${new Date().toISOString().slice(0,10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

// Inisialisasi Event Handlers untuk Uang Kas & Absensi
function initKasAndAbsensi() {
  // Set initial labels
  const nowText = getIndonesianNowDateTime(new Date());
  const kasLastEl = document.getElementById('kasLastUpdatedVal');
  if (kasLastEl) kasLastEl.textContent = kasState.lastUpdatedFormatted || nowText;
  const absLastEl = document.getElementById('absLastUpdatedVal');
  if (absLastEl) absLastEl.textContent = nowText;

  updateKasSummary();
  renderKasTable();
  renderKasTransactions();

  updateAbsensiSummary();
  renderAbsensiTable();

  // Hubungkan Firestore Realtime Subscriptions
  if (typeof window.subscribeToKasState === 'function') {
    window.subscribeToKasState((cloudKas) => {
      console.log('🔄 Menerima update realtime Uang Kas dari Cloud Firestore');
      if (cloudKas && cloudKas.payments) {
        kasState.payments = cloudKas.payments;
        kasState.mutations = cloudKas.mutations || [];
        kasState.lastUpdatedFormatted = cloudKas.lastUpdatedFormatted || getIndonesianNowDateTime(new Date());
        
        if (kasLastEl) kasLastEl.textContent = kasState.lastUpdatedFormatted;
        
        updateKasSummary();
        renderKasTable();
        renderKasTransactions();
      }
    });
  }

  if (typeof window.subscribeToAbsensiState === 'function') {
    window.subscribeToAbsensiState((cloudAbs) => {
      console.log('🔄 Menerima update realtime Absensi dari Cloud Firestore');
      if (cloudAbs && (cloudAbs.data || cloudAbs.jan)) {
        absensiState = cloudAbs.data || cloudAbs;
        const lastUpdated = cloudAbs.lastUpdatedFormatted || getIndonesianNowDateTime(new Date());
        if (absLastEl) absLastEl.textContent = lastUpdated;

        updateAbsensiSummary();
        renderAbsensiTable();
      }
    });
  }

  // Tab Kas Switcher
  document.querySelectorAll('.kas-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.kas-tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.kas-tab-content').forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      const target = btn.getAttribute('data-kastab');
      if (target === 'iuran') document.getElementById('kasTabIuran')?.classList.add('active');
      if (target === 'riwayat') document.getElementById('kasTabRiwayat')?.classList.add('active');
    });
  });

  // Minggu Kas Selector
  document.getElementById('kasWeekSelect')?.addEventListener('change', (e) => {
    currentKasWeek = e.target.value;
    renderKasTable();
    updateKasSummary();
  });

  // Pencarian Siswa Kas
  document.getElementById('kasSearchInput')?.addEventListener('input', (e) => {
    kasSearchQuery = e.target.value;
    renderKasTable();
  });

  // Filter Chips Kas
  document.querySelectorAll('.kas-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.kas-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentKasFilter = chip.getAttribute('data-kasfilter');
      renderKasTable();
    });
  });

  // WhatsApp & CSV Kas
  document.getElementById('btnSalinTagihanWA')?.addEventListener('click', generateWATagihan);
  document.getElementById('btnExportKasCSV')?.addEventListener('click', exportKasToCSV);

  // Modal PIN Bendahara
  const pinModal = document.getElementById('kasPinModal');
  const pinForm = document.getElementById('kasPinForm');
  const pinInput = document.getElementById('kasPinInput');
  const pinError = document.getElementById('kasPinError');
  const alertBox = document.getElementById('bendaharaActiveAlert');
  const tableContainer = document.querySelector('.kas-table-container');

  const btnToggleBendahara = document.getElementById('btnToggleBendaharaModal');
  if (btnToggleBendahara) {
    btnToggleBendahara.addEventListener('click', () => {
      if (isBendaharaLoggedIn) {
        alert("ℹ️ Anda sedang dalam mode Bendahara Aktif. Anda dapat langsung mencentang iuran siswa pada tabel atau klik 'Tambah Transaksi'.");
      } else {
        openAppModal(pinModal);
        if (pinInput) { pinInput.value = ''; pinInput.focus(); }
        if (pinError) pinError.style.display = 'none';
      }
    });
  }

  document.getElementById('closePinModalBtn')?.addEventListener('click', () => {
    closeAppModal(pinModal);
  });

  pinForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (pinInput && pinInput.value.trim() === BENDAHARA_PIN) {
      isBendaharaLoggedIn = true;
      closeAppModal(pinModal);
      if (alertBox) alertBox.style.display = 'flex';
      if (tableContainer) tableContainer.classList.add('editable-mode');
      const bendaharaBtnText = document.getElementById('bendaharaBtnText');
      if (bendaharaBtnText) bendaharaBtnText.textContent = 'Bendahara Terbuka';
      renderKasTable();
      alert("🔓 Akses Bendahara Terbuka! Sekarang Anda bisa mencentang pembayaran kas pada tabel dan mencatat transaksi baru.");
    } else {
      if (pinError) pinError.style.display = 'flex';
      if (pinInput) {
        pinInput.value = '';
        pinInput.focus();
      }
    }
  });

  document.getElementById('btnLogoutBendahara')?.addEventListener('click', () => {
    isBendaharaLoggedIn = false;
    if (alertBox) alertBox.style.display = 'none';
    if (tableContainer) tableContainer.classList.remove('editable-mode');
    const bendaharaBtnText = document.getElementById('bendaharaBtnText');
    if (bendaharaBtnText) bendaharaBtnText.textContent = 'Kelola Kas (PIN)';
    renderKasTable();
    alert("🔒 Mode Bendahara telah dikunci kembali.");
  });

  // Tambah Transaksi Kas Modal
  const addTxModal = document.getElementById('kasAddTxModal');
  const inputTxDate = document.getElementById('txDate');
  const inputTxTime = document.getElementById('txTime');

  document.getElementById('btnOpenAddModal')?.addEventListener('click', () => {
    const now = new Date();
    if (inputTxDate) inputTxDate.value = now.toISOString().slice(0, 10);
    if (inputTxTime) inputTxTime.value = String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0');
    openAppModal(addTxModal);
  });
  
  document.getElementById('closeAddTxModalBtn')?.addEventListener('click', () => {
    closeAppModal(addTxModal);
  });

  document.getElementById('kasAddTxForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const type = document.getElementById('txType')?.value || 'keluar';
    const title = document.getElementById('txTitle')?.value;
    const amount = parseInt(document.getElementById('txAmount')?.value || '0');
    const category = document.getElementById('txCategory')?.value || 'Umum';
    const txDateVal = document.getElementById('txDate')?.value || new Date().toISOString().slice(0, 10);
    const txTimeVal = document.getElementById('txTime')?.value || '12:00';
    const reporter = document.getElementById('txReporter')?.value || 'Sabrina / Afiqa (Bendahara IX-H)';

    const dObj = new Date(`${txDateVal}T${txTimeVal}:00`);
    const dateFormatted = getIndonesianNowDateTime(isNaN(dObj.getTime()) ? new Date() : dObj);

    if (title && amount > 0) {
      const newTx = {
        id: 'tx-' + Date.now(),
        type,
        title,
        amount,
        category,
        date: txDateVal,
        time: txTimeVal,
        dateTimeFormatted: dateFormatted,
        reporter: reporter,
        createdAt: new Date().toISOString()
      };

      kasState.mutations.push(newTx);
      saveKasState();
      updateKasSummary();
      renderKasTransactions();

      closeAppModal(addTxModal);
      document.getElementById('kasAddTxForm').reset();
      alert("✅ Transaksi kas berhasil dicatat dan disinkronkan ke seluruh pengguna secara real-time!");
    }
  });

  // Absensi Month Selector
  document.getElementById('absMonthSelect')?.addEventListener('change', (e) => {
    currentAbsMonth = e.target.value;
    updateAbsensiSummary();
    renderAbsensiTable();
  });

  // Absensi Search
  document.getElementById('absSearchInput')?.addEventListener('input', (e) => {
    absSearchQuery = e.target.value;
    renderAbsensiTable();
  });

  // Absensi Filter Chips
  document.querySelectorAll('.abs-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.abs-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentAbsFilter = chip.getAttribute('data-absfilter');
      renderAbsensiTable();
    });
  });

  // Absensi WhatsApp & CSV
  document.getElementById('btnSalinAbsensiWA')?.addEventListener('click', generateWAAbsensi);
  document.getElementById('btnExportAbsensiCSV')?.addEventListener('click', exportAbsensiCSV);

  // Absensi Edit Modal
  const absModal = document.getElementById('absEditModal');
  const absStudentSelect = document.getElementById('absStudentSelect');
  const inputH = document.getElementById('inputAbsH');
  const inputS = document.getElementById('inputAbsS');
  const inputI = document.getElementById('inputAbsI');
  const inputA = document.getElementById('inputAbsA');
  const inputAbsDate = document.getElementById('inputAbsDate');
  const inputAbsTime = document.getElementById('inputAbsTime');
  const inputAbsNotes = document.getElementById('inputAbsNotes');
  const inputAbsReporter = document.getElementById('inputAbsReporter');

  // Populate Siswa Dropdown dengan 32 siswa lengkap
  if (absStudentSelect) {
    absStudentSelect.innerHTML = studentsData.map(s => `
      <option value="${s.id}">${s.abs || s.no}. ${s.name || s.nama}</option>
    `).join('');
  }

  function syncModalValues() {
    if (!absStudentSelect) return;
    const sId = absStudentSelect.value;
    const monthData = absensiState[currentAbsMonth] || {};
    const rec = monthData[sId] || { h: 24, s: 0, i: 0, a: 0 };
    if (inputH) inputH.value = rec.h ?? 24;
    if (inputS) inputS.value = rec.s ?? 0;
    if (inputI) inputI.value = rec.i ?? 0;
    if (inputA) inputA.value = rec.a ?? 0;
    if (inputAbsNotes) inputAbsNotes.value = rec.notes || '';

    const now = new Date();
    if (inputAbsDate) inputAbsDate.value = now.toISOString().slice(0, 10);
    if (inputAbsTime) inputAbsTime.value = String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0');
  }

  absStudentSelect?.addEventListener('change', syncModalValues);

  const btnOpenAbsModal = document.getElementById('btnOpenAbsensiEditModal');
  if (btnOpenAbsModal) {
    btnOpenAbsModal.addEventListener('click', () => {
      syncModalValues();
      openAppModal(absModal);
    });
  }

  document.getElementById('closeAbsEditModalBtn')?.addEventListener('click', () => {
    closeAppModal(absModal);
  });

  document.getElementById('absEditForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!absStudentSelect) return;
    const sId = absStudentSelect.value;
    if (!absensiState[currentAbsMonth]) {
      absensiState[currentAbsMonth] = {};
    }

    const absDateVal = inputAbsDate?.value || new Date().toISOString().slice(0, 10);
    const absTimeVal = inputAbsTime?.value || '07:30';
    const notesVal = inputAbsNotes?.value || '';
    const reporterVal = inputAbsReporter?.value || 'Sekretaris / Pengurus IX-H';
    const dObj = new Date(`${absDateVal}T${absTimeVal}:00`);
    const dateFormatted = getIndonesianNowDateTime(isNaN(dObj.getTime()) ? new Date() : dObj);

    absensiState[currentAbsMonth][sId] = {
      h: parseInt(inputH?.value || '0') || 0,
      s: parseInt(inputS?.value || '0') || 0,
      i: parseInt(inputI?.value || '0') || 0,
      a: parseInt(inputA?.value || '0') || 0,
      lastUpdated: `${absDateVal} ${absTimeVal}`,
      lastUpdatedFormatted: dateFormatted,
      notes: notesVal,
      reporter: reporterVal
    };

    saveAbsensiState();
    updateAbsensiSummary();
    renderAbsensiTable();

    closeAppModal(absModal);
    alert("✅ Data presensi siswa berhasil diperbarui dan disinkronkan ke seluruh pengguna secara real-time!");
  });

  // Klik di area luar modal untuk menutup
  [pinModal, addTxModal, absModal].forEach(modal => {
    if (!modal) return;
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeAppModal(modal);
      }
    });
  });

  // Tombol Escape menutup semua modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAppModal(pinModal);
      closeAppModal(addTxModal);
      closeAppModal(absModal);
    }
  });
}

// Jalankan saat DOM Ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initKasAndAbsensi);
} else {
  initKasAndAbsensi();
}




