// Firebase Firestore integration for IX-H Guestbook, Kas, & Absensi Realtime
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js';
import { 
  getFirestore, 
  collection, 
  addDoc, 
  onSnapshot, 
  query, 
  orderBy, 
  doc, 
  setDoc,
  getDoc,
  updateDoc, 
  increment 
} from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js';

let db = null;
let isFirebaseReady = false;

// Default inline Firebase configuration as foolproof fallback for GitHub Pages & static hosting
const DEFAULT_FIREBASE_CONFIG = {
  projectId: "imperial-axis-blcf1",
  appId: "1:268508942926:web:04dace5c66d370219fe91f",
  apiKey: "AIzaSyApq67OBoL7QZh8lZ3rPA7_kO1-pYM-vR0",
  authDomain: "imperial-axis-blcf1.firebaseapp.com",
  firestoreDatabaseId: "ai-studio-classixh-b1d9e031-5ff2-43c3-9c4f-fa0f277f65de",
  storageBucket: "imperial-axis-blcf1.firebasestorage.app",
  messagingSenderId: "268508942926",
  measurementId: "",
  oAuthClientId: "268508942926-rtfeo6rk8fbm3j8tf19an09pg8d1ljkv.apps.googleusercontent.com",
  recaptchaSiteKey: ""
};

// Helper: Format tanggal dan waktu WIB Indonesia
export function getFormattedDateTime(d = new Date()) {
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

// Initialize Firebase with config
async function initFirebase() {
  let firebaseConfig = DEFAULT_FIREBASE_CONFIG;
  try {
    const response = await fetch('./firebase-applet-config.json');
    if (response.ok) {
      const loaded = await response.json();
      if (loaded.projectId) {
        firebaseConfig = loaded;
      }
    }
  } catch (err) {
    console.log('Firebase config loaded from inline preset');
  }

  try {
    const app = initializeApp(firebaseConfig);
    if (firebaseConfig.firestoreDatabaseId) {
      db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
    } else {
      db = getFirestore(app);
    }
    isFirebaseReady = true;
    window.isFirestoreConnected = true;
    console.log('🔮 Firebase Firestore connected successfully for IX-H (Guestbook, Kas & Absensi)');
    
    // Update live badge in UI
    const statusText = document.getElementById('firestoreStatusText');
    if (statusText) {
      statusText.innerHTML = '<span style="color:#22c55e; font-weight:bold;">● Cloud Live Realtime</span> (Semua Pengguna Terhubung)';
    }

    // Subscribe to real-time updates for guestbook
    subscribeToGuestbook();

    // Trigger initial callbacks if already registered by app.js
    if (window._pendingKasSubscription) {
      window._pendingKasSubscription();
    }
    if (window._pendingAbsensiSubscription) {
      window._pendingAbsensiSubscription();
    }

  } catch (error) {
    console.warn('⚠️ Firebase init failed, fallback to local storage:', error);
    window.isFirestoreConnected = false;
    const statusText = document.getElementById('firestoreStatusText');
    if (statusText) {
      statusText.textContent = 'Mode Offline (Lokal)';
    }
    if (window.renderFallbackGuestbook) {
      window.renderFallbackGuestbook();
    }
    if (window.onFirestoreOffline) {
      window.onFirestoreOffline();
    }
  }
}

/* ==========================================================================
   GUESTBOOK REALTIME
   ========================================================================== */
function subscribeToGuestbook() {
  if (!db) return;

  try {
    const q = query(collection(db, 'guestbook'), orderBy('createdAt', 'desc'));

    onSnapshot(q, (snapshot) => {
      if (snapshot.empty) {
        seedInitialMessages();
        return;
      }

      const messages = [];
      snapshot.forEach((docSnap) => {
        const data = docSnap.data();
        messages.push({
          id: docSnap.id,
          author: data.author || 'Anonim IX-H',
          avatar: data.avatar || '👻',
          text: data.text || '',
          date: data.dateFormatted || (data.createdAt?.toDate ? data.createdAt.toDate().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }) : 'Baru saja'),
          reactions: data.reactions || { ghost: 0, candle: 0, skull: 0 }
        });
      });

      if (window.updateGuestbookUI) {
        window.updateGuestbookUI(messages);
      }
    }, (err) => {
      console.error('Firestore snapshot error:', err);
      if (window.renderFallbackGuestbook) {
        window.renderFallbackGuestbook();
      }
    });
  } catch (e) {
    console.error('Failed to subscribe to guestbook:', e);
  }
}

export async function addGuestbookMessage(author, avatar, text) {
  if (!isFirebaseReady || !db) {
    throw new Error('Database belum siap');
  }

  const now = new Date();
  const dateFormatted = now.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });

  const docRef = await addDoc(collection(db, 'guestbook'), {
    author: author || 'Anonim IX-H',
    avatar: avatar || '👻',
    text: text,
    createdAt: now.toISOString(),
    dateFormatted: dateFormatted,
    reactions: {
      ghost: 1,
      candle: 0,
      skull: 0
    }
  });

  return docRef.id;
}

export async function incrementReaction(messageId, reactionType) {
  if (!isFirebaseReady || !db) return;

  try {
    const docRef = doc(db, 'guestbook', messageId);
    await updateDoc(docRef, {
      [`reactions.${reactionType}`]: increment(1)
    });
  } catch (e) {
    console.error('Failed to update reaction:', e);
  }
}

async function seedInitialMessages() {
  if (!db) return;
  const initial = [
    {
      author: 'Hikmal Syukri (Ketua Kelas)',
      avatar: '👻',
      text: 'Selamat datang di Markas Resmi Kelas IX-H Spensari! Mari jaga kekompakan, kebersihan, dan ukir kenangan terbaik di tahun terakhir ini! 🏆🔥',
      createdAt: new Date(Date.now() - 3600000 * 24 * 2).toISOString(),
      dateFormatted: '21 Ags 2026',
      reactions: { ghost: 18, candle: 12, skull: 5 }
    },
    {
      author: 'Wali Kelas IX-H',
      avatar: '🔮',
      text: 'Teruslah bersemangat anak-anakku tercinta. Raih cita-cita setinggi langit dengan kerja keras dan budi pekerti luhur.',
      createdAt: new Date(Date.now() - 3600000 * 24 * 3).toISOString(),
      dateFormatted: '20 Ags 2026',
      reactions: { ghost: 24, candle: 30, skull: 2 }
    },
    {
      author: 'Seksi Kebersihan',
      avatar: '💀',
      text: 'Piala Juara 1 Kebersihan adalah bukti kerja sama kita. Regu piket setiap hari jangan kendor yaa! 🧹✨',
      createdAt: new Date(Date.now() - 3600000 * 12).toISOString(),
      dateFormatted: '23 Ags 2026',
      reactions: { ghost: 14, candle: 9, skull: 7 }
    }
  ];

  for (const item of initial) {
    try {
      await addDoc(collection(db, 'guestbook'), item);
    } catch (err) {
      console.warn('Seeding error:', err);
    }
  }
}

/* ==========================================================================
   UANG KAS REALTIME CLOUD FIRESTORE
   ========================================================================== */
export function subscribeToKasState(onDataReceived) {
  const doSubscribe = () => {
    if (!db) return;
    const docRef = doc(db, 'kas_state', 'main');
    
    return onSnapshot(docRef, async (snap) => {
      if (snap.exists()) {
        const cloudData = snap.data();
        if (onDataReceived) onDataReceived(cloudData);
      } else {
        // Inisialisasi dokumen pertama kali dengan data default
        if (window.getInitialKasData) {
          const initData = window.getInitialKasData();
          initData.updatedAt = new Date().toISOString();
          initData.lastUpdatedFormatted = getFormattedDateTime(new Date());
          try {
            await setDoc(docRef, initData);
          } catch (e) {
            console.warn('Init kas doc error:', e);
          }
        }
      }
    }, (err) => {
      console.error('Kas subscription error:', err);
    });
  };

  if (isFirebaseReady && db) {
    return doSubscribe();
  } else {
    window._pendingKasSubscription = doSubscribe;
  }
}

export async function saveKasStateToFirestore(kasData) {
  if (!isFirebaseReady || !db) {
    console.log('Saved to localStorage (Firebase not ready yet)');
    return;
  }

  try {
    const docRef = doc(db, 'kas_state', 'main');
    const now = new Date();
    const payload = {
      payments: kasData.payments || {},
      mutations: kasData.mutations || [],
      updatedAt: now.toISOString(),
      lastUpdatedFormatted: getFormattedDateTime(now)
    };
    await setDoc(docRef, payload, { merge: true });
    console.log('✅ Kas state synchronized to Cloud Firestore');
  } catch (err) {
    console.error('Error saving kas state to Firestore:', err);
  }
}

/* ==========================================================================
   ABSENSI SISWA REALTIME CLOUD FIRESTORE
   ========================================================================== */
export function subscribeToAbsensiState(onDataReceived) {
  const doSubscribe = () => {
    if (!db) return;
    const docRef = doc(db, 'absensi_state', 'main');

    return onSnapshot(docRef, async (snap) => {
      if (snap.exists()) {
        const cloudData = snap.data();
        if (onDataReceived) onDataReceived(cloudData);
      } else {
        // Inisialisasi dokumen pertama kali
        if (window.getInitialAbsensiData) {
          const initData = window.getInitialAbsensiData();
          const now = new Date();
          const payload = {
            data: initData,
            updatedAt: now.toISOString(),
            lastUpdatedFormatted: getFormattedDateTime(now)
          };
          try {
            await setDoc(docRef, payload);
          } catch (e) {
            console.warn('Init absensi doc error:', e);
          }
        }
      }
    }, (err) => {
      console.error('Absensi subscription error:', err);
    });
  };

  if (isFirebaseReady && db) {
    return doSubscribe();
  } else {
    window._pendingAbsensiSubscription = doSubscribe;
  }
}

export async function saveAbsensiStateToFirestore(absData) {
  if (!isFirebaseReady || !db) {
    console.log('Saved to localStorage (Firebase not ready yet)');
    return;
  }

  try {
    const docRef = doc(db, 'absensi_state', 'main');
    const now = new Date();
    const payload = {
      data: absData || {},
      updatedAt: now.toISOString(),
      lastUpdatedFormatted: getFormattedDateTime(now)
    };
    await setDoc(docRef, payload, { merge: true });
    console.log('✅ Absensi state synchronized to Cloud Firestore');
  } catch (err) {
    console.error('Error saving absensi state to Firestore:', err);
  }
}

// Start connection immediately
if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', initFirebase);
} else {
  initFirebase();
}

// Expose globally for app.js
window.firebaseAddMessage = addGuestbookMessage;
window.addGuestbookMessage = addGuestbookMessage;
window.firebaseReactMessage = incrementReaction;
window.subscribeToKasState = subscribeToKasState;
window.saveKasStateToFirestore = saveKasStateToFirestore;
window.subscribeToAbsensiState = subscribeToAbsensiState;
window.saveAbsensiStateToFirestore = saveAbsensiStateToFirestore;
window.getFormattedDateTime = getFormattedDateTime;
