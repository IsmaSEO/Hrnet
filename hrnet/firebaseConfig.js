import { initializeApp } from "firebase/app";
import {
  getFirestore,
  initializeFirestore,
  persistentLocalCache,
  persistentMultipleTabManager,
} from "firebase/firestore";

// Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDYqzg_EJ-yA5htZFCFuVQg9PBQ5toRrf4",
  authDomain: "hrnet-isma.firebaseapp.com",
  projectId: "hrnet-isma",
  storageBucket: "hrnet-isma.firebasestorage.app",
  messagingSenderId: "691860214203",
  appId: "1:691860214203:web:40a6f592bab173b4a1349e",
  measurementId: "G-9ZG81LSX88",
};

// Initialisation de Firebase
const app = initializeApp(firebaseConfig);

// Optimisation de Firestore avec cache persistant
initializeFirestore(app, {
  localCache: persistentLocalCache({
    tabManager: persistentMultipleTabManager(),
  }),
});

const db = getFirestore(app);

export { db };
