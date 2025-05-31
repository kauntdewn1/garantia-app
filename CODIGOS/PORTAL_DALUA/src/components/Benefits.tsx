import React from 'react';
import { Sparkles, Brain, Moon, Heart, Star, Flower } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: Sparkles,
      title: "Sessão de Clareza Individual",
      description: "Nada de teoria. Você vai receber práticas reais pra mudar tua energia e atrair o que deseja: paz, ex de volta, foco, dinheiro — o que for.",
      accent: "Energia Transformadora"
    },
    {
      icon: Brain,
      title: "Guia de Manifestação Criativa",
      description: "Técnicas de visualização e práticas de manifestação para atrair o que se deseja com sabedoria ancestral.",
      accent: "Sabedoria Intuitiva"
    },
    {
      icon: Moon,
      title: "Kit de Ferramentas para Claridade Mental",
      description: "Trilhas, meditações e comandos espirituais pra limpar tua mente, silenciar a ansiedade e reconectar com tua intuição. Você vai dormir diferente na primeira noite.",
      accent: "Paz Interior"
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Dark Mystical Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/95 via-zinc-900/98 to-zinc-900/95">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(147,51,234,0.15),transparent)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(251,146,60,0.15),transparent)]"></div>
      </div>
      
      {/* Floating Gentle Elements */}
      <div className="absolute top-32 left-1/4 opacity-30">
        <Star className="w-4 h-4 text-orange-300 animate-pulse" style={{animationDuration: '3s'}} />
      </div>
      <div className="absolute top-48 right-1/3 opacity-40">
        <Flower className="w-5 h-5 text-purple-300 animate-pulse" style={{animationDuration: '4s', animationDelay: '1s'}} />
      </div>
      <div className="absolute bottom-40 left-1/3 opacity-20">
        <Heart className="w-3 h-3 text-pink-300 animate-pulse" style={{animationDuration: '5s', animationDelay: '2s'}} />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        {/* Gentle Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-zinc-800/80 backdrop-blur-sm border border-orange-300/20 rounded-full px-6 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-orange-300" />
            <span className="text-orange-200 font-light tracking-wide">Portal Sagrado</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
            <span className="text-white">O Que Você Vai </span>
            <span className="bg-gradient-to-r from-orange-300 via-orange-200 to-purple-300 bg-clip-text text-transparent font-normal">
              Receber
            </span>
            <br />
            <span className="text-white text-3xl md:text-4xl">Quando Entrar no Portal</span>
          </h2>
          
          <p className="text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed font-light">
            Ferramentas sagradas para despertar sua claridade interior
          </p>
        </div>

        {/* Delicate Benefits Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="group relative">
                {/* Soft Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-400/20 via-purple-400/20 to-pink-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-1000"></div>
                
                {/* Delicate Card */}
                <div className="relative bg-zinc-800/80 backdrop-blur-md rounded-3xl border border-zinc-700/30 p-8 hover:bg-zinc-800/90 transition-all duration-700 hover:border-orange-300/30 h-full">
                  {/* Gentle Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-300/20 to-purple-300/20 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-700 border border-zinc-600/30">
                    <Icon className="w-7 h-7 text-orange-200" />
                  </div>
                  
                  {/* Soft Accent */}
                  <div className="inline-block bg-zinc-700/50 backdrop-blur-sm border border-orange-200/20 rounded-full px-4 py-1.5 mb-5">
                    <span className="text-sm font-light text-orange-200/90 tracking-wide">{benefit.accent}</span>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-light text-white mb-5 leading-relaxed">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-zinc-300 leading-relaxed font-light text-base">
                    {benefit.description}
                  </p>
                  
                  {/* Subtle Bottom Border */}
                  <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-orange-300/20 to-transparent"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gentle Call to Action */}
        <div className="text-center mt-20">
          <div className="inline-block bg-gradient-to-r from-orange-400/90 to-orange-500/90 backdrop-blur-sm rounded-full px-10 py-4 font-light text-white text-lg hover:from-orange-300/90 hover:to-orange-400/90 transition-all duration-500 shadow-lg hover:shadow-orange-400/20 cursor-pointer border border-orange-300/30">
            Despertar Minha Claridade
          </div>
          
          <p className="text-zinc-300 mt-6 font-light italic">
            "Você vai dormir diferente na primeira noite"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;