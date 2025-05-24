import React, { useState } from 'react';
import { motion } from 'framer-motion';

function RequestForm() {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Form submission logic will be implemented here
  };

  return (
    <section id="form" className="py-12 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="bg-white shadow-xl rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="px-6 py-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Solicite sua Cotação
            </h2>
            
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
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
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
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
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
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
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
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
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
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                      placeholder="00.000.000/0000-00"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  Enviar Solicitação
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default RequestForm;