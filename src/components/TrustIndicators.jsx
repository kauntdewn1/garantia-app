import React from 'react';
import { motion } from 'framer-motion';

function TrustIndicators() {
  const indicators = [
    {
      icon: '✅',
      title: 'Seguro pela Lei 14.133/21',
      description: 'Em total conformidade com a legislação'
    },
    {
      icon: '📊',
      title: '+1.400 apólices emitidas',
      description: 'Empresas confiam em nossa solução'
    },
    {
      icon: '🔐',
      title: 'Seus dados estão protegidos',
      description: 'Em conformidade com a LGPD'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {indicators.map((indicator, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-4 p-6 rounded-lg bg-gray-50 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <span className="text-3xl">{indicator.icon}</span>
              <div>
                <h3 className="font-semibold text-gray-900">{indicator.title}</h3>
                <p className="text-sm text-gray-600">{indicator.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustIndicators;