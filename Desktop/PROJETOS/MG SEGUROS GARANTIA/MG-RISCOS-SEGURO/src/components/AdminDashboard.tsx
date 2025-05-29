import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import { getApps, initializeApp } from 'firebase/app';
import { app } from '../firebase';
import { motion } from 'framer-motion';

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

const auth = getAuth();
const db = getFirestore(app);
const q = query(
  collection(db, 'users'),
  where('isAdmin', '==', true)
);
const querySnapshot = await getDocs(q);
const users = querySnapshot.docs.map(doc => doc.data());
const provider = new GoogleAuthProvider();

const allowedEmails = ['licitacao@mgriscos.com', 'segurgary@gmail.com'];

function AdminDashboard() {
  const [user, setUser] = useState(null);
  const [usersByDate, setUsersByDate] = useState({});
  const [loading, setLoading] = useState(false);

  const signIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const signedInUser = result.user;
      if (!signedInUser.email || !allowedEmails.includes(signedInUser.email)) {
        alert('Acesso negado: este e-mail não tem permissão.');
        return;
      }
      setUser(signedInUser as any); // Type assertion para resolver o erro de tipo
    } catch (err) {
      console.error('Erro no login:', err);
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const usersRef = collection(db, 'users');
      query(collection(db, 'users'), where('isAdmin', '==', true))
      const snapshot = await getDocs(q);
      const grouped = {};

      snapshot.forEach(doc => {
        const data = doc.data();
        const dateKey = new Date(data.lastLogin?.toDate ? data.lastLogin.toDate() : data.lastLogin).toISOString().split('T')[0];
        if (!grouped[dateKey]) grouped[dateKey] = [];
        grouped[dateKey].push({ ...data, id: doc.id });
      });

      setUsersByDate(grouped);
      setLoading(false);
    };

    if (user) fetchUsers().catch(console.error);
  }, [user]);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <button onClick={signIn} className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 shadow">
          Acessar com Google
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">Dashboard de Usuários</h1>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <div className="space-y-6">
          {Object.keys(usersByDate).sort((a, b) => b.localeCompare(a)).map(date => (
            <motion.div
              key={date}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-4 rounded-lg shadow"
            >
              <h2 className="text-lg font-semibold mb-2">{new Date(date).toLocaleDateString()}</h2>
              <ul className="space-y-1 text-sm">
                {usersByDate[date].map(user => (
                  <li key={user.uid} className="flex justify-between border-b py-1">
                    <span>{user.name} ({user.email})</span>
                    <span className="text-gray-400">{user.uid}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;
