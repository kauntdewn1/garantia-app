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
    image: `${import.meta.env.VITE_FIREBASE_STORAGE_BUCKET}/fenacor.png?alt=media&token=85e04073-5b81-481e-950e-0c07e2e48a25`
  },
  {
    name: 'Grupo A2',
    image: `${import.meta.env.VITE_FIREBASE_STORAGE_BUCKET}/grupoa2.png?alt=media&token=efcfd161-2bd3-4407-837b-d4dbe7065859`
  },
  {
    name: 'IBRACOR',
    image: `${import.meta.env.VITE_FIREBASE_STORAGE_BUCKET}/ibracor.png?alt=media&token=f5656961-b567-4415-8d9e-1d8cd2938869`
  },
  {
    name: 'SUSEP',
    image: `${import.meta.env.VITE_FIREBASE_STORAGE_BUCKET}/susep.png?alt=media&token=21704588-30fc-4d0d-adcd-8ece7f19e2b6`
  }
];

function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
            Benefícios
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Porque dezenas de empresas estão migrando para a Gestão de Riscos e Corretora de Seguros – e vencendo licitações com apólices emitidas rapidamente.
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Aceleramos sua participação em editais com seguro garantia digital, aprovado em horas e aceito em todo o Brasil. Simples e rápido.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-white text-2xl mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Partners Section */}
        <div className="mt-24">
          <h3 className="text-center text-2xl font-semibold text-gray-200 mb-12">
            Parceiros e Certificações
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                className="flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
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