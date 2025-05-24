import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import toast, { Toaster } from 'react-hot-toast';

function LeadMagnet() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error('Por favor, insira um e-mail válido');
      return;
    }

    setLoading(true);
    try {
      await addDoc(collection(db, 'leads'), {
        email,
        timestamp: new Date(),
        source: 'editais_newsletter'
      });
      
      toast.success('Cadastro realizado com sucesso!');
      setEmail('');
    } catch (error) {
      console.error('Error adding lead:', error);
      toast.error('Erro ao cadastrar. Tente novamente.');
    }
    setLoading(false);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-primary to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="backdrop-blur-sm bg-white/10 rounded-2xl p-8 border border-white/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">
              Quer receber editais que exigem seguro no seu e-mail?
            </h2>
            <p className="text-white/90 mb-8">
              Cadastre-se e receba em primeira mão oportunidades de licitação que exigem seguro garantia.
            </p>
            
            <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-300 disabled:opacity-50"
              >
                {loading ? 'Cadastrando...' : 'Cadastrar'}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
      <Toaster position="top-right" />
    </section>
  );
}

export default LeadMagnet;