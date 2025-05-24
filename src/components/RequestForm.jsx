import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { app } from '../firebase';
import toast, { Toaster } from 'react-hot-toast';

function RequestForm() {
  const auth = getAuth(app);
  const [user, loading] = useAuthState(auth);
  const [formData, setFormData] = useState({
    edital: '',
    licitacao: null,
    empresa_tomador: '',
    cnpj_tomador: '',
    endereco_tomador: '',
    cartao_cnpj_tomador: null,
    empresa_assegurado: '',
    cnpj_assegurado: '',
    endereco_assegurado: '',
    cartao_cnpj_assegurado: null,
  });

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      toast.success('Login realizado com sucesso!');
    } catch (error) {
      console.error('Error signing in:', error);
      toast.error('Erro ao fazer login. Tente novamente.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Form submission logic will be implemented here
  };

  const inputClasses = "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary bg-gray-150";

  if (loading) {
    return (
      <section id="form" className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">Carregando...</div>
        </div>
      </section>
    );
  }

  if (!user) {
    return (
      <section id="form" className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-white shadow-xl rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="px-6 py-8 text-center">
              <h1 className="text-2xl font-bold text-gray-900 mb-3">
                Sua próxima licitação começa aqui.
              </h1>
              <p className="text-2xl font-medium text-gray-400 mb-8">
                Receba sua apólice de Seguro Garantia em até 24h. Sem papelada. Sem enrolação. 100% legal e digital.
              </p>
              <button
                onClick={handleGoogleSignIn}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-secondary transition-colors duration-300"
              >
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5 mr-2" />
                Acessar agora
              </button>
              
              {/* Miniaturized benefits */}
              <div className="mt-8 grid grid-cols-3 gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🕐</span>
                  <span>Resposta em até 12h</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg">🔒</span>
                  <span>Garantia aprovada</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg">📄</span>
                  <span>Zero burocracia</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="form" className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="bg-white shadow-xl rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="px-6 py-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Solicite sua Cotação
              </h2>
              <button
                onClick={() => auth.signOut()}
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                Sair
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Dados da Licitação
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label htmlFor="edital" className="block text-sm font-medium text-gray-700">
                      Número do Edital
                    </label>
                    <input
                      type="text"
                      id="edital"
                      name="edital"
                      className={inputClasses}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="licitacao" className="block text-sm font-medium text-gray-700">
                      PDF da Licitação
                    </label>
                    <input
                      type="file"
                      id="licitacao"
                      name="licitacao"
                      accept="application/pdf"
                      className="mt-1 block w-full"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Dados do Tomador
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="empresa_tomador" className="block text-sm font-medium text-gray-700">
                      Nome da Empresa
                    </label>
                    <input
                      type="text"
                      id="empresa_tomador"
                      name="empresa_tomador"
                      className={inputClasses}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="cnpj_tomador" className="block text-sm font-medium text-gray-700">
                      CNPJ
                    </label>
                    <input
                      type="text"
                      id="cnpj_tomador"
                      name="cnpj_tomador"
                      className={inputClasses}
                      placeholder="00.000.000/0000-00"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Dados do Assegurado
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="empresa_assegurado" className="block text-sm font-medium text-gray-700">
                      Nome da Empresa
                    </label>
                    <input
                      type="text"
                      id="empresa_assegurado"
                      name="empresa_assegurado"
                      className={inputClasses}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="cnpj_assegurado" className="block text-sm font-medium text-gray-700">
                      CNPJ
                    </label>
                    <input
                      type="text"
                      id="cnpj_assegurado"
                      name="cnpj_assegurado"
                      className={inputClasses}
                      placeholder="00.000.000/0000-00"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Enviar Solicitação
                </button>
                
                {/* Miniaturized benefits */}
                <div className="mt-4 grid grid-cols-3 gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🕐</span>
                    <span>Resposta em até 24h</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🔒</span>
                    <span>Garantia aprovada pela SUSEP</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">📄</span>
                    <span>Zero burocracia</span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
      <Toaster position="top-right" />
    </section>
  );
}

export default RequestForm;