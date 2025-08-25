import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Rápido e Eficiente',
    description: 'Apólices emitidas em até 24h, Não perca mais editais por burocracia ou seguradoras lentas.',
    icon: '⚡'
  },
  {
    title: 'Totalmente Digital',
    description: 'Sem papel, sem enrolação. Contratação 100% online, direto do seu celular ou desktop.',
    icon: '💻'
  },
  {
    title: 'Segurança Garantida',
    description: 'Proteção aprovada pela SUSEP. Trabalhamos apenas com seguradoras líderes no setor público.',
    icon: '🛡️'
  }
];

const partners = [
  {
    name: 'FENACOR',
    image: '/assets/fenacor.png'
  },
  {
    name: 'Grupo A2',
    image: '/assets/grupoa2.png'
  },
  {
    name: 'IBRACOR',
    image: '/assets/ibracor.png'
  },
  {
    name: 'SUSEP',
    image: '/assets/susep.png'
  }
];

function Features() {
  const handleImageError = (e, partner) => {
    // Instead of hiding the image, show the partner name as text
    const container = e.target.parentElement;
    const textElement = document.createElement('span');
    textElement.className = 'text-gray-400 text-lg font-semibold';
    textElement.textContent = partner.name;
    e.target.replaceWith(textElement);
  };

  return (
    <section id="features" className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Compacto */}
        <div className="text-center lg:text-right mb-8 sm:mb-12">
          <h2 className="text-xs sm:text-sm text-primary font-semibold tracking-wide uppercase mb-2">
            Benefícios
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-tight font-bold text-gray-900 mb-3">
            Porque dezenas de empresas estão migrando para a MG Riscos
          </p>
          <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto lg:ml-auto">
            Aceleramos sua participação em editais com seguro garantia digital, aprovado em horas.
          </p>
        </div>

        {/* Features - Layout Compacto */}
        <div className="space-y-4 sm:space-y-6 lg:space-y-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-gray-50 rounded-xl p-4 sm:p-5 lg:p-6 border border-gray-100"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="flex items-start space-x-3 sm:space-x-4">
                {/* Ícone Compacto */}
                <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 rounded-lg bg-primary text-white text-sm sm:text-base lg:text-lg shadow-sm">
                  {feature.icon}
                </div>
                
                {/* Conteúdo */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partners - Compacto */}
        <div className="mt-12 sm:mt-16">
          <h3 className="text-center text-sm sm:text-base lg:text-lg font-medium text-gray-500 mb-6 sm:mb-8">
            Parceiros e Certificações
          </h3>
          
          {/* Grid Compacto */}
          <div className="grid grid-cols-4 gap-3 sm:gap-4 lg:gap-6 items-center">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                className="flex justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="h-8 w-auto sm:h-10 lg:h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  onError={(e) => handleImageError(e, partner)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;