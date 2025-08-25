import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import { submitForm, uploadFile, validateCNPJ, formatCNPJ } from '../utils/netlify';

function RequestForm() {
  const [formData, setFormData] = useState({
    edital: '',
    empresa_tomador: '',
    cnpj_tomador: '',
    endereco_tomador: '',
    empresa_assegurado: '',
    cnpj_assegurado: '',
    endereco_assegurado: '',
  });

  const [files, setFiles] = useState({
    licitacao: null,
    cartao_cnpj_tomador: null,
    cartao_cnpj_assegurado: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const { name, files: fileList } = e.target;
    if (fileList && fileList[0]) {
      setFiles(prev => ({
        ...prev,
        [name]: fileList[0]
      }));
    }
  };

  const handleCNPJChange = (e, field) => {
    const value = e.target.value;
    const formatted = formatCNPJ(value);
    setFormData(prev => ({
      ...prev,
      [field]: formatted
    }));
  };

  const validateForm = () => {
    if (!formData.edital.trim()) {
      toast.error('Informe o número do edital');
      return false;
    }
    if (!formData.empresa_tomador.trim()) {
      toast.error('Informe o nome da empresa tomadora');
      return false;
    }
    if (!validateCNPJ(formData.cnpj_tomador)) {
      toast.error('CNPJ do tomador inválido');
      return false;
    }
    if (!formData.empresa_assegurado.trim()) {
      toast.error('Informe o nome da empresa assegurada');
      return false;
    }
    if (!validateCNPJ(formData.cnpj_assegurado)) {
      toast.error('CNPJ do assegurado inválido');
      return false;
    }
    if (!files.licitacao) {
      toast.error('Anexe o PDF da licitação');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    toast.loading('Enviando solicitação...');

    try {
      // Preparar dados para o webhook
      const webhookData = {
        edital: formData.edital,
        empresa_tomador: formData.empresa_tomador,
        cnpj_tomador: formData.cnpj_tomador,
        endereco_tomador: formData.endereco_tomador,
        empresa_assegurado: formData.empresa_assegurado,
        cnpj_assegurado: formData.cnpj_assegurado,
        endereco_assegurado: formData.endereco_assegurado,
        submitted_at: new Date().toISOString()
      };

      // Upload dos arquivos primeiro
      const uploadPromises = [];
      const fileUrls = {};

      if (files.licitacao) {
        uploadPromises.push(
          uploadFile(files.licitacao).then(url => {
            fileUrls.licitacao = url;
          })
        );
      }

      if (files.cartao_cnpj_tomador) {
        uploadPromises.push(
          uploadFile(files.cartao_cnpj_tomador).then(url => {
            fileUrls.cartao_cnpj_tomador = url;
          })
        );
      }

      if (files.cartao_cnpj_assegurado) {
        uploadPromises.push(
          uploadFile(files.cartao_cnpj_assegurado).then(url => {
            fileUrls.cartao_cnpj_assegurado = url;
          })
        );
      }

      // Aguardar uploads
      await Promise.all(uploadPromises);

      // Adicionar URLs dos arquivos aos dados
      Object.assign(webhookData, fileUrls);

      // Enviar para o webhook do Netlify
      const response = await fetch('/.netlify/functions/process-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookData),
      });

      if (response.ok) {
        const result = await response.json();
        
        if (result.success) {
          toast.dismiss();
          toast.success('Solicitação enviada com sucesso! Entraremos em contato em breve.');
          
          // Limpar formulário
          setFormData({
            edital: '',
            empresa_tomador: '',
            cnpj_tomador: '',
            endereco_tomador: '',
            empresa_assegurado: '',
            cnpj_assegurado: '',
            endereco_assegurado: '',
          });
          setFiles({
            licitacao: null,
            cartao_cnpj_tomador: null,
            cartao_cnpj_assegurado: null,
          });
        } else {
          throw new Error(result.message || 'Erro no processamento');
        }
      } else {
        // Tratamento de erro mais específico
        let errorMessage = 'Erro ao enviar solicitação';
        
        if (response.status === 400) {
          errorMessage = 'Dados inválidos. Verifique as informações.';
        } else if (response.status === 500) {
          errorMessage = 'Erro interno do servidor. Tente novamente.';
        } else if (response.status === 502) {
          errorMessage = 'Serviço temporariamente indisponível. Tente novamente.';
        } else {
          errorMessage = `Erro ${response.status}: ${response.statusText}`;
        }
        
        throw new Error(errorMessage);
      }

    } catch (error) {
      console.error('Erro no envio:', error);
      toast.dismiss();
      toast.error(error.message || 'Erro ao enviar solicitação. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary bg-gray-150";

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
          <div className="px-6 py-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Solicite sua Cotação
              </h2>
              <p className="text-gray-600 mt-2">
                Preencha os dados abaixo e receba sua cotação em até 24h
              </p>
            </div>
            
            <form 
              name="cotacao-seguro" 
              method="POST" 
              netlify="true"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Campo oculto para Netlify */}
              <input type="hidden" name="form-name" value="cotacao-seguro" />
              
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Dados da Licitação
                </h3>
                <div className="grid grid-cols-1 gap-1">
                  <div>
                    <label htmlFor="edital" className="block text-sm font-medium text-gray-700">
                      Número do Edital *
                    </label>
                    <input
                      type="text"
                      id="edital"
                      name="edital"
                      value={formData.edital}
                      onChange={handleInputChange}
                      className={inputClasses}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="licitacao" className="block text-sm font-medium text-gray-700 mb-2">
                      PDF da Licitação *
                    </label>
                    <input
                      type="file"
                      id="licitacao"
                      name="licitacao"
                      accept="application/pdf"
                      onChange={handleFileChange}
                      className="mt-1 block w-full mb-2"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Dados do Tomador
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div>
                    <label htmlFor="empresa_tomador" className="block text-sm font-medium text-gray-700">
                      Nome da Empresa *
                    </label>
                    <input
                      type="text"
                      id="empresa_tomador"
                      name="empresa_tomador"
                      value={formData.empresa_tomador}
                      onChange={handleInputChange}
                      className={inputClasses}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="cnpj_tomador" className="block text-sm font-medium text-gray-700 mb-2">
                      CNPJ *
                    </label>
                    <input
                      type="text"
                      id="cnpj_tomador"
                      name="cnpj_tomador"
                      value={formData.cnpj_tomador}
                      onChange={(e) => handleCNPJChange(e, 'cnpj_tomador')}
                      className={inputClasses}
                      placeholder="00.000.000/0000-00"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="endereco_tomador" className="block text-sm font-medium text-gray-700">
                      Endereço
                    </label>
                    <input
                      type="text"
                      id="endereco_tomador"
                      name="endereco_tomador"
                      value={formData.endereco_tomador}
                      onChange={handleInputChange}
                      className={inputClasses}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="cartao_cnpj_tomador" className="block text-sm font-medium text-gray-700">
                      Cartão CNPJ (opcional)
                    </label>
                    <input
                      type="file"
                      id="cartao_cnpj_tomador"
                      name="cartao_cnpj_tomador"
                      accept="application/pdf,image/*"
                      onChange={handleFileChange}
                      className="mt-1 block w-full mb-2"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Dados do Assegurado
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div>
                    <label htmlFor="empresa_assegurado" className="block text-sm font-medium text-gray-700">
                      Nome da Empresa *
                    </label>
                    <input
                      type="text"
                      id="empresa_assegurado"
                      name="empresa_assegurado"
                      value={formData.empresa_assegurado}
                      onChange={handleInputChange}
                      className={inputClasses}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="cnpj_assegurado" className="block text-sm font-medium text-gray-700 mb-2">
                      CNPJ *
                    </label>
                    <input
                      type="text"
                      id="cnpj_assegurado"
                      name="cnpj_assegurado"
                      value={formData.cnpj_assegurado}
                      onChange={(e) => handleCNPJChange(e, 'cnpj_assegurado')}
                      className={inputClasses}
                      placeholder="00.000.000/0000-00"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="endereco_assegurado" className="block text-sm font-medium text-gray-700">
                      Endereço
                    </label>
                    <input
                      type="text"
                      id="endereco_assegurado"
                      name="endereco_assegurado"
                      value={formData.endereco_assegurado}
                      onChange={handleInputChange}
                      className={inputClasses}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="cartao_cnpj_assegurado" className="block text-sm font-medium text-gray-700">
                      Cartão CNPJ (opcional)
                    </label>
                    <input
                      type="file"
                      id="cartao_cnpj_assegurado"
                      name="cartao_cnpj_assegurado"
                      accept="application/pdf,image/*"
                      onChange={handleFileChange}
                      className="mt-1 block w-full mb-2"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Solicitação'}
                </button>
                
                {/* Benefícios */}
                <div className="mt-2 grid grid-cols-3 gap-2 text-sm text-gray-600">
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