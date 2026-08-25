// Firebase Firestore integration for IX-H Guestbook
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js';
import { 
  getFirestore, 
  collection, 
  addDoc, 
  onSnapshot, 
  query, 
  orderBy, 
  doc, 
  updateDoc, 
  increment 
} from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js';

let db = null;
let isFirebaseReady = false;

// Default inline Firebase configuration as foolproof fallback for GitHub Pages & static hosting
const DEFAULT_FIREBASE_CONFIG = {
  apiKey: "AIzaSyCwmcUb_tm8b4jm5DaVQR3T_JJV9DgoRlU",
  authDomain: "class-ix-h-v2.firebaseapp.com",
  projectId: "class-ix-h-v2",
  storageBucket: "class-ix-h-v2.firebasestorage.app",
  messagingSenderId: "674616169916",
  appId: "1:674616169916:web:a021b6bb5063066d9287b9"
};

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
    // Use the custom firestoreDatabaseId
    if (firebaseConfig.firestoreDatabaseId) {
      db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
    } else {
      db = getFirestore(app);
    }
    isFirebaseReady = true;
    console.log('🔮 Firebase Firestore connected successfully for IX-H');
    
    // Update live badge in UI
    const statusText = document.getElementById('firestoreStatusText');
    if (statusText) {
      statusText.innerHTML = '<span style="color:#22c55e; font-weight:bold;">● Cloud Live Realtime</span> (Semua Pengguna Terhubung)';
    }

    // Subscribe to real-time updates
    subscribeToGuestbook();
  } catch (error) {
    console.warn('⚠️ Firebase init failed, fallback to local storage:', error);
    const statusText = document.getElementById('firestoreStatusText');
    if (statusText) {
      statusText.textContent = 'Mode Offline (Lokal)';
    }
    if (window.renderFallbackGuestbook) {
      window.renderFallbackGuestbook();
    }
  }
}

// Real-time listener for mading messages
function subscribeToGuestbook() {
  if (!db) return;

  try {
    const q = query(collection(db, 'guestbook'), orderBy('createdAt', 'desc'));

    onSnapshot(q, (snapshot) => {
      if (snapshot.empty) {
        // If Firestore is empty, seed with initial welcome message
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
    console.error('Failed to subscribe:', e);
  }
}

// Add new message to Firestore
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

// Increment reaction on a message
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

// Seed initial messages if empty
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

// Start connection immediately
if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', initFirebase);
} else {
  initFirebase();
}

// Expose actions to window for app.js
window.firebaseAddMessage = addGuestbookMessage;
window.addGuestbookMessage = addGuestbookMessage;
window.firebaseReactMessage = incrementReaction;
