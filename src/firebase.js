/**
 * Configuração central do Firebase para a aplicação
 * Este arquivo exporta as instâncias do Firebase para uso em toda a aplicação
 */

// Importar os módulos do Firebase (versão modular)
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Configuração do Firebase
const firebaseConfig = {
  // Substitua com suas credenciais do Firebase
  apiKey: process.env.FIREBASE_API_KEY || "SUA_API_KEY",
  authDomain: process.env.FIREBASE_AUTH_DOMAIN || "seu-projeto.firebaseapp.com",
  projectId: process.env.FIREBASE_PROJECT_ID || "seu-projeto",
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "seu-projeto.appspot.com",
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || "seu-messaging-sender-id",
  appId: process.env.FIREBASE_APP_ID || "seu-app-id"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

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