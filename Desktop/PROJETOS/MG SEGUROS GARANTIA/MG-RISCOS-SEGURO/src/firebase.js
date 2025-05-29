/**
 * Configuração central do Firebase para a aplicação
 * Este arquivo exporta as instâncias do Firebase para uso em toda a aplicação
 */

// Importar os módulos do Firebase (versão modular)
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Configuração do Firebase
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Inicializar Firebase apenas uma vez
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Inicializar serviços
const db = getFirestore(app);
const storage = getStorage(app);

// Exportar instâncias para uso em outros arquivos
export { app, db, storage };

// Para compatibilidade com o código existente que usa a versão compat
export const compat = {
  db: db,
  storage: storage
};