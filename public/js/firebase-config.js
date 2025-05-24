/**
 * Configuração e inicialização do Firebase
 */

// Configuração do Firebase
const firebaseConfig = {
  // Substitua com suas credenciais do Firebase
  apiKey: "AIzaSyBuh_XDxidMT-up0zyfUKYU1UgYya0DWzE",
  authDomain: "garantia-app-f58a1.firebaseapp.com",
  projectId: "garantia-app-f58a1",
  storageBucket: "garantia-app-f58a1.firebasestorage.app",
  messagingSenderId: "1091373923185",
  appId: "1:1091373923185:web:a6de403ac2dd86b80f14d0",
  measurementId: "G-P64FT10769"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Exportar instâncias para uso em outros arquivos
const db = firebase.firestore();
const storage = firebase.storage();