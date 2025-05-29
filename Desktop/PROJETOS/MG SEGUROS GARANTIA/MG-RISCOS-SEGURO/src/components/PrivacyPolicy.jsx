import React from 'react';

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Política de Privacidade</h1>
          <p className="text-sm text-gray-500 mb-6">Última atualização: 24 de maio de 2025</p>

          <div className="prose prose-blue max-w-none">
            <p className="mb-6">
              A sua privacidade é importante para nós. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos as suas informações ao utilizar nosso site e serviços relacionados à emissão de Seguro Garantia para Licitações.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Coleta de Informações</h2>
            <p className="mb-4">Coletamos dados pessoais como:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Nome completo</li>
              <li>CPF/CNPJ</li>
              <li>E-mail</li>
              <li>Telefone</li>
              <li>Informações sobre licitações</li>
              <li>Documentos para emissão da apólice</li>
            </ul>
            <p className="mb-6">Esses dados são coletados por meio de formulários, cookies e integrações com parceiros.</p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Uso das Informações</h2>
            <p className="mb-4">As informações são utilizadas para:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Emissão da apólice de seguro</li>
              <li>Contato comercial</li>
              <li>Cumprimento de exigências legais (Lei 14.133/21)</li>
              <li>Envio de informações relevantes (com seu consentimento)</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Compartilhamento</h2>
            <p className="mb-4">Compartilhamos seus dados apenas com:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Corretora MG Gestão de Riscos</li>
              <li>Seguradoras parceiras</li>
              <li>Plataformas contratadas para operacionalização do serviço</li>
            </ul>
            <p className="mb-6">Jamais vendemos seus dados.</p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Segurança</h2>
            <p className="mb-6">
              Adotamos medidas de segurança técnica e organizacional para proteger suas informações contra acesso não autorizado, perda ou destruição.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">5. Seus Direitos</h2>
            <p className="mb-4">Você tem direito de:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Acessar e corrigir seus dados</li>
              <li>Solicitar exclusão</li>
              <li>Revogar consentimento</li>
            </ul>
            <p className="mb-6">
              Entre em contato pelo e-mail: <a href="mailto:licitacoes@mgriscos.com" className="text-primary hover:text-secondary">licitacoes@mgriscos.com</a>
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">6. Alterações</h2>
            <p className="mb-6">
              Esta Política pode ser atualizada a qualquer momento. Recomendamos que a revise periodicamente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;