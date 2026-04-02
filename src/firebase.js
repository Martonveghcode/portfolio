import { getApp, getApps, initializeApp } from "firebase/app";
import { getDatabase, push, ref, serverTimestamp, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAJzfxqNklVi7IhqL6yPhlTPmHlVu4XXK8",
  authDomain: "leads-tracker-app-22d5f.firebaseapp.com",
  databaseURL: "https://leads-tracker-app-22d5f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "leads-tracker-app-22d5f",
  storageBucket: "leads-tracker-app-22d5f.firebasestorage.app",
  messagingSenderId: "132177249177",
  appId: "1:132177249177:web:6cf8974b2de5fd526cc908",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getDatabase(app);

function withTimeout(promise, timeoutMs = 8000) {
  return Promise.race([
    promise,
    new Promise((_, reject) => {
      window.setTimeout(() => {
        reject(new Error("Database write timed out."));
      }, timeoutMs);
    }),
  ]);
}

export async function saveLeadCapture(payload) {
  const entryRef = push(ref(db, "portfolioLeads"));

  await withTimeout(set(entryRef, {
    ...payload,
    createdAt: serverTimestamp(),
  }));
}
