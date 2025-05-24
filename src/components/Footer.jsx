import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <img
              src="/assets/lg_hrz_transp.png"
              alt="MG Riscos Logo"
              className="h-10 brightness-0 invert"
            />
            <p className="mt-4 text-gray-400 text-sm">
              © {new Date().getFullYear()} MG Gestão de Riscos e Corretora de Seguros - CNPJ 41.455.034/0001-58 - SUSEP 212112830.
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <Link
              to="/politica-de-privacidade"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Política de Privacidade
            </Link>
            <Link
              to="/termos-de-servico"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Termos de Serviço
            </Link>
            <a
              href="mailto:licitacoes@mgriscos.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              licitacoes@mgriscos.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;