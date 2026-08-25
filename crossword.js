/* =========================================================
   HORROR CROSSWORD (TTS) GAME ENGINE - MEGA HORROR EDITION
   35 Soal Misteri Horor, Mitos & Supranatural Nusantara
   ========================================================= */

const HORROR_WORDS_DATABASE = [
  // --- 18 Soal Mendatar (Across) ---
  { num: 1, dir: 'across', row: 0, col: 0, word: 'KUNTILANAK', clue: 'Hantu wanita bergaun putih dan berambut panjang yang suka tertawa melengking di atas dahan pohon.' },
  { num: 3, dir: 'across', row: 2, col: 0, word: 'POCONG', clue: 'Entitas terbungkus kain kafan putih yang bergerak meloncat karena tali simpul kepalanya belum dilepas.' },
  { num: 5, dir: 'across', row: 4, col: 1, word: 'GENDERUWO', clue: 'Makhluk halus bertubuh raksasa berbulu hitam legam penunggu pohon beringin tua yang angker.' },
  { num: 7, dir: 'across', row: 6, col: 0, word: 'BANASPATI', clue: 'Hantu berwujud bola api melayang yang membakar apa pun yang dilewatinya saat tengah malam.' },
  { num: 9, dir: 'across', row: 8, col: 2, word: 'SUNDELBOLONG', clue: 'Sosok wanita jelita bergaun malam dengan luka lubang menganga di bagian punggungnya.' },
  { num: 11, dir: 'across', row: 10, col: 0, word: 'SANTET', clue: 'Ilmu sihir hitam jarak jauh untuk mencelakai target dengan media benda tajam atau boneka gaib.' },
  { num: 13, dir: 'across', row: 12, col: 1, word: 'TUMBAL', clue: 'Sesaji persembahan nyawa atau darah dalam ritual perjanjian terlarang dengan entitas kegelapan.' },
  { num: 15, dir: 'across', row: 14, col: 0, word: 'JENGLOT', clue: 'Benda pusaka berwujud figur misterius mini bertaring panjang yang diyakini haus akan darah.' },
  { num: 17, dir: 'across', row: 1, col: 8, word: 'ARWAH', clue: 'Jiwa manusia yang telah terlepas dari raga dan masih bergentayangan di alam fana.' },
  { num: 19, dir: 'across', row: 3, col: 7, word: 'RITUAL', clue: 'Upacara pemanggilan atau persembahan magis yang diiringi asap dupa dan kidung mantra sakral.' },
  { num: 21, dir: 'across', row: 7, col: 7, word: 'ANGKER', clue: 'Suasana atau tempat wingit yang memancarkan aura dingin mencekam dan hawa mistis pekat.' },
  { num: 23, dir: 'across', row: 11, col: 7, word: 'MISTERI', clue: 'Segala rahasia tak terpecahkan yang menyelimuti dunia gaib dan fenomena supranatural.' },
  { num: 25, dir: 'across', row: 13, col: 8, word: 'SAKRAL', clue: 'Sesuatu yang dikeramatkan, suci, atau memiliki kekuatan magis yang pantang dilanggar.' },
  { num: 27, dir: 'across', row: 15, col: 2, word: 'PALASIK', clue: 'Ilmu hitam ilmu gaib Minangkabau berwujud kepala melayang mencari mangsa balita.' },
  { num: 29, dir: 'across', row: 16, col: 6, word: 'JELANGKUNG', clue: 'Boneka batok kelapa perantara arwah yang dipanggil dengan mantra datang tak dijemput.' },
  { num: 31, dir: 'across', row: 5, col: 10, word: 'MANTRA', clue: 'Kumpulan kata-kata atau kidung berkekuatan gaib yang dirapalkan dalam ritual spiritual.' },
  { num: 33, dir: 'across', row: 9, col: 11, word: 'SUSUK', clue: 'Jarum emas atau berlian gaib yang ditanam ke dalam tubuh untuk daya pikat dan pesona.' },
  { num: 35, dir: 'across', row: 17, col: 0, word: 'PESUGIHAN', clue: 'Perjanjian sesat meminta kekayaan instan kepada iblis dengan imbalan tumbal nyawa.' },

  // --- 17 Soal Menurun (Down) ---
  { num: 1, dir: 'down', row: 0, col: 0, word: 'KUYANG', clue: 'Siluman wanita berkepala terbang bersama organ dalam tubuh yang memburu darah di kegelapan.' },
  { num: 2, dir: 'down', row: 0, col: 4, word: 'TUYUL', clue: 'Makhluk gaib kerdil berkepala plontos pemuja pesugihan yang gemar mencuri lembaran uang.' },
  { num: 4, dir: 'down', row: 2, col: 2, word: 'LEAK', clue: 'Ilmu sihir kuno pemuja kegelapan di Pulau Dewata yang bisa mengubah wujud menjadi makhluk mengerikan.' },
  { num: 6, dir: 'down', row: 4, col: 6, word: 'WEWEGOMBEL', clue: 'Hantu wanita berambut gimbal lebat yang suka menculik dan menyembunyikan anak-anak di waktu magrib.' },
  { num: 8, dir: 'down', row: 6, col: 0, word: 'BEGUGANJANG', clue: 'Sosok gaib raksasa yang tubuhnya memanjang tinggi menjulang hingga melampaui puncak pepohonan.' },
  { num: 10, dir: 'down', row: 6, col: 8, word: 'PENGASIH', clue: 'Mantra pelet pemikat sukma agar orang lain tunduk dan jatuh cinta secara tidak wajar.' },
  { num: 12, dir: 'down', row: 9, col: 3, word: 'DUKUN', clue: 'Orang yang dipercaya memiliki mata batin, menguasai mantra spiritual, dan berkomunikasi dengan bangsa jin.' },
  { num: 14, dir: 'down', row: 8, col: 11, word: 'KEMENYAN', clue: 'Getah dupa wangi beraroma khas yang dibakar untuk mengundang kedatangan makhluk tak kasat mata.' },
  { num: 16, dir: 'down', row: 10, col: 5, word: 'KERAMAT', clue: 'Benda pusaka atau makam leluhur yang disucikan dan dipercaya menyimpan energi gaib tingkat tinggi.' },
  { num: 18, dir: 'down', row: 0, col: 9, word: 'KERANDA', clue: 'Tempat usungan jenazah berpenutup kain hijau yang sering menjadi teror mistis melayang di malam hari.' },
  { num: 20, dir: 'down', row: 2, col: 12, word: 'KERAUHAN', clue: 'Kondisi saat tubuh seseorang dimasuki atau dikendalikan sepenuhnya oleh roh halus (kesurupan).' },
  { num: 22, dir: 'down', row: 7, col: 14, word: 'MEDIASI', clue: 'Proses interaksi spiritual meminjam raga manusia sebagai perantara komunikasi dengan arwah gaib.' },
  { num: 24, dir: 'down', row: 11, col: 9, word: 'SAJIKAN', clue: 'Menghidangkan aneka kembang tujuh rupa dan sesaji di sudut ruangan wingit.' },
  { num: 26, dir: 'down', row: 12, col: 13, word: 'KHODAM', clue: 'Jin pendamping atau penjaga gaib yang bersemayam dalam tubuh manusia atau pusaka sakti.' },
  { num: 28, dir: 'down', row: 13, col: 1, word: 'PELET', clue: 'Ilmu guna-guna penakluk hati yang membuat korbannya linglung dan rindu setengah mati.' },
  { num: 30, dir: 'down', row: 12, col: 7, word: 'KERIS', clue: 'Senjata tikam berlekuk khas Jawa yang kerap dipercaya memiliki tuah dan pamor gaib.' },
  { num: 32, dir: 'down', row: 0, col: 15, word: 'WINGIT', clue: 'Karakter tempat yang sangat sunyi, angker, dan memancarkan wibawa gaib menakutkan.' },
  { num: 34, dir: 'down', row: 10, col: 16, word: 'TEROR', clue: 'Rasa takut mencekam yang dirasakan seseorang saat diganggu oleh kekuatan tak kasat mata.' }
];

class HorrorCrossword {
  constructor() {
    this.words = [...HORROR_WORDS_DATABASE];
    this.gridRows = 18;
    this.gridCols = 18;
    this.grid = [];
    this.placedWords = [];
    this.score = 0;
    this.timerSeconds = 0;
    this.timerInterval = null;
    this.hintsRemaining = 8;
    this.isCompleted = false;

    this.init();
  }

  init() {
    this.generateBoard();
    this.renderBoard();
    this.renderClues();
    this.startTimer();
    this.setupEventListeners();
  }

  generateBoard() {
    this.grid = Array(this.gridRows).fill(null).map(() => Array(this.gridCols).fill(null));
    this.placedWords = [];

    this.words.forEach(item => {
      this.placedWords.push(item);
      const wordLen = item.word.length;

      for (let i = 0; i < wordLen; i++) {
        const r = item.dir === 'across' ? item.row : item.row + i;
        const c = item.dir === 'across' ? item.col + i : item.col;

        if (r < this.gridRows && c < this.gridCols) {
          if (!this.grid[r][c]) {
            this.grid[r][c] = {
              char: item.word[i],
              num: i === 0 ? item.num : null,
              acrossNum: item.dir === 'across' ? item.num : null,
              downNum: item.dir === 'down' ? item.num : null
            };
          } else {
            if (i === 0 && !this.grid[r][c].num) {
              this.grid[r][c].num = item.num;
            }
            if (item.dir === 'across') this.grid[r][c].acrossNum = item.num;
            if (item.dir === 'down') this.grid[r][c].downNum = item.num;
          }
        }
      }
    });
  }

  renderBoard() {
    const container = document.getElementById('crosswordGrid');
    if (!container) return;

    container.style.gridTemplateColumns = `repeat(${this.gridCols}, 26px)`;
    container.innerHTML = '';

    for (let r = 0; r < this.gridRows; r++) {
      for (let c = 0; c < this.gridCols; c++) {
        const cellData = this.grid[r][c];
        const cellEl = document.createElement('div');
        cellEl.className = 'cw-cell ' + (cellData ? 'active' : 'empty');
        cellEl.dataset.row = r;
        cellEl.dataset.col = c;

        if (cellData) {
          if (cellData.num) {
            const numEl = document.createElement('span');
            numEl.className = 'cell-number';
            numEl.textContent = cellData.num;
            cellEl.appendChild(numEl);
          }

          const inputEl = document.createElement('input');
          inputEl.type = 'text';
          inputEl.maxLength = 1;
          inputEl.dataset.answer = cellData.char;
          inputEl.dataset.row = r;
          inputEl.dataset.col = c;
          inputEl.setAttribute('autocomplete', 'off');
          inputEl.setAttribute('spellcheck', 'false');

          inputEl.addEventListener('input', (e) => this.handleCellInput(e, r, c));
          inputEl.addEventListener('keydown', (e) => this.handleCellKeydown(e, r, c));
          inputEl.addEventListener('focus', () => this.highlightRelatedClue(r, c));

          cellEl.appendChild(inputEl);
        }

        container.appendChild(cellEl);
      }
    }
  }

  renderClues() {
    const acrossList = document.getElementById('cluesAcross') || document.getElementById('acrossClues');
    const downList = document.getElementById('cluesDown') || document.getElementById('downClues');
    if (!acrossList || !downList) return;

    acrossList.innerHTML = '';
    downList.innerHTML = '';

    const acrossWords = this.placedWords.filter(w => w.dir === 'across').sort((a, b) => a.num - b.num);
    const downWords = this.placedWords.filter(w => w.dir === 'down').sort((a, b) => a.num - b.num);

    acrossWords.forEach(w => {
      const li = document.createElement('li');
      li.className = 'clue-item';
      li.id = `clue-across-${w.num}`;
      li.innerHTML = `<strong>${w.num}.</strong> ${w.clue} <span style="opacity:0.6;font-size:0.72rem;color:var(--accent-crimson-glow);">(${w.word.length} huruf)</span>`;
      acrossList.appendChild(li);
    });

    downWords.forEach(w => {
      const li = document.createElement('li');
      li.className = 'clue-item';
      li.id = `clue-down-${w.num}`;
      li.innerHTML = `<strong>${w.num}.</strong> ${w.clue} <span style="opacity:0.6;font-size:0.72rem;color:var(--accent-crimson-glow);">(${w.word.length} huruf)</span>`;
      downList.appendChild(li);
    });

    this.updateProgressHud();
  }

  highlightRelatedClue(r, c) {
    document.querySelectorAll('.clue-item').forEach(el => el.classList.remove('active-clue'));
    const cell = this.grid[r][c];
    if (!cell) return;

    if (cell.acrossNum) {
      const el = document.getElementById(`clue-across-${cell.acrossNum}`);
      if (el) {
        el.classList.add('active-clue');
        el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
    if (cell.downNum) {
      const el = document.getElementById(`clue-down-${cell.downNum}`);
      if (el) {
        el.classList.add('active-clue');
        el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  }

  handleCellInput(e, r, c) {
    const val = e.target.value.toUpperCase();
    e.target.value = val;

    if (val.length === 1) {
      this.moveToNextCell(r, c);
    }
    this.checkCompletion();
  }

  handleCellKeydown(e, r, c) {
    if (e.key === 'Backspace' && !e.target.value) {
      this.moveToPrevCell(r, c);
    } else if (e.key === 'ArrowRight') {
      this.focusCell(r, c + 1);
    } else if (e.key === 'ArrowLeft') {
      this.focusCell(r, c - 1);
    } else if (e.key === 'ArrowDown') {
      this.focusCell(r + 1, c);
    } else if (e.key === 'ArrowUp') {
      this.focusCell(r - 1, c);
    }
  }

  focusCell(r, c) {
    if (r >= 0 && r < this.gridRows && c >= 0 && c < this.gridCols) {
      const input = document.querySelector(`.cw-cell[data-row="${r}"][data-col="${c}"] input`);
      if (input) input.focus();
    }
  }

  moveToNextCell(r, c) {
    if (c + 1 < this.gridCols && this.grid[r][c + 1]) {
      this.focusCell(r, c + 1);
    } else if (r + 1 < this.gridRows && this.grid[r + 1][c]) {
      this.focusCell(r + 1, c);
    }
  }

  moveToPrevCell(r, c) {
    if (c - 1 >= 0 && this.grid[r][c - 1]) {
      this.focusCell(r, c - 1);
    } else if (r - 1 >= 0 && this.grid[r - 1][c]) {
      this.focusCell(r - 1, c);
    }
  }

  updateProgressHud() {
    const totalWords = this.placedWords.length;
    let solvedWords = 0;

    this.placedWords.forEach(pw => {
      let isWordSolved = true;
      for (let i = 0; i < pw.word.length; i++) {
        const r = pw.dir === 'across' ? pw.row : pw.row + i;
        const c = pw.dir === 'across' ? pw.col + i : pw.col;
        const input = document.querySelector(`.cw-cell[data-row="${r}"][data-col="${c}"] input`);
        if (!input || input.value.trim().toUpperCase() !== pw.word[i]) {
          isWordSolved = false;
          break;
        }
      }
      if (isWordSolved) solvedWords++;
    });

    const progressEl = document.getElementById('cwProgress') || document.getElementById('ttsProgress');
    if (progressEl) {
      progressEl.textContent = `${solvedWords}/${totalWords}`;
    }
  }

  checkCompletion() {
    let allCorrect = true;
    let totalActive = 0;

    const inputs = document.querySelectorAll('.cw-cell.active input');
    inputs.forEach(input => {
      totalActive++;
      const userVal = input.value.trim().toUpperCase();
      const answer = input.dataset.answer;

      if (userVal === answer) {
        input.parentElement.classList.add('correct');
        input.parentElement.classList.remove('wrong-input');
      } else {
        input.parentElement.classList.remove('correct');
        if (userVal.length > 0) {
          input.parentElement.classList.add('wrong-input');
        } else {
          input.parentElement.classList.remove('wrong-input');
        }
        allCorrect = false;
      }
    });

    this.updateProgressHud();

    const correctCount = document.querySelectorAll('.cw-cell.correct').length;
    this.score = correctCount * 15;
    const scoreEl = document.getElementById('ttsScore');
    if (scoreEl) scoreEl.textContent = this.score;

    if (allCorrect && totalActive > 0 && !this.isCompleted) {
      this.isCompleted = true;
      clearInterval(this.timerInterval);
      
      try {
        if (typeof window.saveHOFScore === 'function') {
          window.saveHOFScore('ix-h-mystery', '35 Soal Horor Terpecahkan', this.score, 'Master Supranatural');
        }
      } catch (e) {}

      this.showVictoryModal();
    }
  }

  giveHint() {
    if (this.hintsRemaining <= 0 || this.isCompleted) return;

    const emptyOrWrongInputs = Array.from(document.querySelectorAll('.cw-cell.active input'))
      .filter(input => input.value.trim().toUpperCase() !== input.dataset.answer);

    if (emptyOrWrongInputs.length > 0) {
      const randomInput = emptyOrWrongInputs[Math.floor(Math.random() * emptyOrWrongInputs.length)];
      randomInput.value = randomInput.dataset.answer;
      randomInput.parentElement.classList.add('correct');
      randomInput.parentElement.classList.remove('wrong-input');
      this.hintsRemaining--;

      const hintCountEl = document.getElementById('cwHints') || document.getElementById('hintCount');
      if (hintCountEl) hintCountEl.textContent = this.hintsRemaining;

      this.checkCompletion();
    }
  }

  startTimer() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.timerSeconds = 0;
    const timerEl = document.getElementById('cwTimer') || document.getElementById('ttsTimer');

    this.timerInterval = setInterval(() => {
      this.timerSeconds++;
      const mins = Math.floor(this.timerSeconds / 60).toString().padStart(2, '0');
      const secs = (this.timerSeconds % 60).toString().padStart(2, '0');
      if (timerEl) timerEl.textContent = `${mins}:${secs}`;
    }, 1000);
  }

  showVictoryModal() {
    const mins = Math.floor(this.timerSeconds / 60);
    const secs = this.timerSeconds % 60;
    const msg = `🎉 LUAR BIASA! Kamu berhasil menaklukkan seluruh 35 Teka-Teki Silang Horor Nusantara Kelas IX-H dalam waktu ${mins}m ${secs}s!\n\nSkor Ritual: ${this.score} Poin 👻🕯️`;
    if (typeof window.alertToast === 'function') {
      window.alertToast('🏆 Semua 35 teka-teki silang horor terpecahkan sempurna!');
    }
    setTimeout(() => {
      alert(msg);
    }, 300);
  }

  setupEventListeners() {
    const hintBtn = document.getElementById('cwHintBtn') || document.getElementById('hintBtn');
    if (hintBtn) {
      hintBtn.replaceWith(hintBtn.cloneNode(true));
      const newHintBtn = document.getElementById('cwHintBtn') || document.getElementById('hintBtn');
      newHintBtn?.addEventListener('click', () => this.giveHint());
    }

    const resetBtn = document.getElementById('resetTtsBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        this.isCompleted = false;
        this.hintsRemaining = 8;
        const hintCountEl = document.getElementById('cwHints') || document.getElementById('hintCount');
        if (hintCountEl) hintCountEl.textContent = '8';
        this.generateBoard();
        this.renderBoard();
        this.startTimer();
      });
    }
  }
}

window.HorrorCrossword = HorrorCrossword;

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('crosswordGrid')) {
    window.horrorCrosswordInstance = new HorrorCrossword();
  }
});
