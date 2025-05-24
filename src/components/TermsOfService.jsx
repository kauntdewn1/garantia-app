import React from 'react';

function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Termos de Serviço</h1>
          <p className="text-sm text-gray-500 mb-6">Última atualização: 24 de maio de 2025</p>

          <div className="prose prose-blue max-w-none">
            <p className="mb-6">
              Bem-vindo ao nosso site. Ao acessar e utilizar nossos serviços, você concorda com os seguintes termos:
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Objeto</h2>
            <p className="mb-6">
              Oferecemos um serviço de intermediação e facilitação para emissão de apólices de Seguro Garantia com base na Lei 14.133/21.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Elegibilidade</h2>
            <p className="mb-4">Para utilizar nossos serviços, o usuário deve:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Ter mais de 18 anos</li>
              <li>Ser responsável legal por informações fornecidas</li>
              <li>Concordar integralmente com estes termos</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Responsabilidades do Usuário</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Fornecer dados corretos e atualizados</li>
              <li>Cumprir os prazos estabelecidos nas licitações</li>
              <li>Utilizar a apólice exclusivamente conforme finalidade descrita</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Isenção de Responsabilidade</h2>
            <p className="mb-4">Não nos responsabilizamos por:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Indeferimento de apólices pela seguradora</li>
              <li>Desclassificação por envio de dados incorretos</li>
              <li>Perdas indiretas, incidentais ou consequenciais</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">5. Propriedade Intelectual</h2>
            <p className="mb-6">
              Todo o conteúdo deste site, incluindo textos, marca, layout e elementos visuais, é de propriedade exclusiva da plataforma ou licenciado por parceiros.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">6. Encerramento</h2>
            <p className="mb-6">
              Reservamo-nos o direito de encerrar contas ou acessos a qualquer momento em caso de violação dos termos.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">7. Foro</h2>
            <p className="mb-6">
              Em caso de litígio, fica eleito o foro da comarca de São Paulo/SP, com renúncia a qualquer outro, por mais privilegiado que seja.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsOfService;