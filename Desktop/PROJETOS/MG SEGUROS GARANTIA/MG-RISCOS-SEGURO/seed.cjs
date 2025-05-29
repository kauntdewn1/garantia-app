// Debug desativado por não ser compatível com firebase-admin
const { initializeApp, applicationDefault } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

if (!process.env.GOOGLE_APPLICATION_CREDENTIALS) {
  console.error("Credenciais não encontradas. Defina GOOGLE_APPLICATION_CREDENTIALS.");
  process.exit(1);
}

initializeApp({ credential: applicationDefault() });
const db = getFirestore();

async function seed() {
  try {
    const userRef = db.collection('users').doc('testeuid');
    await userRef.set({
      uid: 'testeuid',
      name: 'João da Silva',
      email: 'joao@email.com',
      photoURL: 'https://via.placeholder.com/150',
      lastLogin: new Date()
    });

    const solicitacaoRef = await db.collection('solicitacoes').add({
      timestamp: new Date(),
      edital: '123/2024',
      licitacaoURL: 'https://exemplo.com/edital',
      tomador: {
        empresa: 'Empresa Tomadora',
        cnpj: '00.000.000/0000-00',
        endereco: 'Rua Exemplo, 123',
        cartaoCNPJURL: null
      },
      assegurado: {
        empresa: 'Empresa Assegurada',
        cnpj: '00.000.000/0000-00',
        endereco: 'Rua Exemplo, 456',
        cartaoCNPJURL: null
      },
      status: 'novo',
      observacoes: null,
      ultimaAtualizacao: new Date(),
      responsavel: null,
      usuario: 'joao@email.com',
      usuarioUid: 'testeuid'
    });

    console.log('✅ Seed concluído com sucesso!');

    // Testes básicos
    const userSnap = await userRef.get();
    const solicitacaoSnap = await solicitacaoRef.get();

    if (!userSnap.exists) throw new Error('Usuário não foi criado');
    if (!solicitacaoSnap.exists) throw new Error('Solicitação não foi criada');

    const userData = userSnap.data();
    if (userData.email !== 'joao@email.com') throw new Error('Email incorreto no usuário');

    console.log('✅ Testes de validação passaram com sucesso');

  } catch (error) {
    console.error('❌ Erro durante o seed ou testes:', error);
  }
}

seed();
