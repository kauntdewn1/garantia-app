import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon, ClockIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Rápido e Eficiente',
    description: 'Emissão de apólice em até 24 horas após aprovação.',
    icon: ClockIcon,
  },
  {
    name: 'Totalmente Digital',
    description: 'Processo 100% online, sem necessidade de documentos físicos.',
    icon: CheckCircleIcon,
  },
  {
    name: 'Segurança Garantida',
    description: 'Seguradoras de primeira linha, reguladas pela SUSEP.',
    icon: ShieldCheckIcon,
  },
];

function Features() {
  return (
    <section id="features" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Benefícios</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Por que escolher a MG Riscos?
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Oferecemos soluções completas em seguro garantia para sua empresa participar de licitações com tranquilidade.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export default Features;