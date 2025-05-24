import React from 'react';
import { motion } from 'framer-motion';

function Bullets() {
  const bullets = [
    {
      icon: '⚡',
      text: 'Aprovação em até 24h – \n Seguro entregue no seu e-mail, pronto para licitar.'
    },
    {
      icon: '🔐',
      text: 'Conformidade 100% Legal – \nApólice ajustada à Lei 14.133/21.'
    },
    {
      icon: '🛡️',
      text: 'Especialistas em Licitações Públicas – \n+15 anos protegendo contratos milionários.'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-secondary to-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-8 border border-white/20">
          <div className="grid md:grid-cols-3 gap-8">
            {bullets.map((bullet, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <span className="text-3xl">{bullet.icon}</span>
                <p className="text-white text-lg font-medium">{bullet.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bullets;