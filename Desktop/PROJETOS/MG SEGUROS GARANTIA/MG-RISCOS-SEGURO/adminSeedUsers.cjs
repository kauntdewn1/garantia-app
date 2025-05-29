// adminSeedUsers.cjs - Adiciona usuários específicos ao Firestore
const { initializeApp, applicationDefault } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

initializeApp({ credential: applicationDefault() });
const db = getFirestore();


function isAdmin() {
    return request.auth != null && request.auth.token.email in ['licitacao@mgriscos.com', 'segurgary@gmail.com'];
  }

  async function addAdminUsers() {
    const adminUsers = [
      {
        email: 'licitacao@mgriscos.com',
        role: 'admin'
      },
      {
        email: 'segurgary@gmail.com', 
        role: 'admin'
      }
    ];

    for (const user of adminUsers) {
      await db.collection('users').doc(user.email).set({
        ...user,
        isAdmin: true
      });
    }
  }

  addAdminUsers().catch(console.error);












