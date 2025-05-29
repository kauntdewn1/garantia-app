import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { app, db } from '../firebase';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import toast from 'react-hot-toast';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const auth = getAuth(app);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      // Salvar/atualizar usuário no Firestore
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        lastLogin: serverTimestamp()
      }, { merge: true });
      toast.success('Login realizado com sucesso!');
      // Scroll to form after successful login
      document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' });
    } catch (error) {
      console.error('Error signing in:', error);
      toast.error('Erro ao fazer login. Tente novamente.');
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img
              src="/assets/lg_hrz_transp.png"
              alt="MG Riscos Logo"
              className="h-12"
            />
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-primary hover:text-secondary transition-colors">
              Recursos
            </a>
            <a href="#about" className="text-primary hover:text-secondary transition-colors">
              Sobre
            </a>
            <a href="#contact" className="text-primary hover:text-secondary transition-colors">
              Contato
            </a>
          </nav>
          <div>
            <button
              onClick={handleGoogleSignIn}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-secondary transition-colors duration-300"
            >
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5 mr-2" />
              Acessar agora
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;