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

function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
            Benefícios
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Porque dezenas de empresas estão migrando para a MG Licitações – e vencendo licitações com apólices emitidas rapidamente.
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
      </div>
    </section>
  );
}

export default Features;