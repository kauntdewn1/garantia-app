import React from 'react';
import VideoPlayer from './VideoPlayer';
import { motion } from 'framer-motion';

const bullets = [
  {
    icon: '🔍',
    text: 'Entenda como o seguro garante sua participação',
  },
  {
    icon: '🕒',
    text: 'Veja o passo a passo da emissão em menos de 3 minutos',
  },
  {
    icon: '📜',
    text: 'Conheça os critérios da Lei 14.133/21 aplicados',
  },
];

const VideoSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-primary">
          Veja como sua empresa pode destravar licitações em menos de 3 minutos
        </h2>
        <VideoPlayer
          src="https://youtu.be/3KqQogkX0Lw"
          title="Demonstração Seguro Garantia"
        />
        <div className="flex justify-center mt-10">
          <a
            href="#cotacao"
            className="px-8 py-4 rounded-lg bg-primary text-white font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg text-lg"
          >
            Quero Solicitar Minha Apólice
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoSection; 