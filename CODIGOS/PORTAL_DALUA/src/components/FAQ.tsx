import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Como funciona o atendimento online?",
      answer: "O método exclusivo da Ária foi desenvolvido especialmente para conexões à distância. Através da energia que você transmite pelas suas palavras e intenções, consigo me conectar com sua vibração e consultar as cartas do tarot. A distância não interfere na precisão - na verdade, muitas vezes a conexão fica ainda mais pura sem distrações físicas.",
      icon: "🔮"
    },
    {
      question: "É tão eficaz quanto presencial?",
      answer: "Sim, e em muitos casos até mais! Online você está no seu ambiente familiar, mais relaxada e receptiva. Além disso, pode guardar todas as orientações por escrito e reler sempre que precisar. Já atendi mais de [X] pessoas online com resultados transformadores.",
      icon: "✨"
    },
    {
      question: "Quanto tempo leva para ver resultados?",
      answer: "Cada pessoa tem seu tempo divino, mas geralmente as primeiras mudanças energéticas acontecem já nas primeiras 48h após nossa sessão. Mudanças concretas costumam aparecer entre 1 a 4 semanas, dependendo do seu nível de abertura e aplicação das orientações.",
      icon: "🌟"
    },
    {
      question: "Por que só atendo poucas pessoas por mês?",
      answer: "Meu método exige dedicação total para cada consulente. Não faço leituras \"de massa\" - cada sessão é única, personalizada e energeticamente intensa. Prefiro qualidade à quantidade, por isso limito meu atendimento para garantir que cada pessoa receba toda minha atenção e energia.",
      icon: "🔒"
    },
    {
      question: "O que torna seu método diferente?",
      answer: "Desenvolvi uma abordagem que combina tarot tradicional com técnicas de manifestação e limpeza energética. Não apenas revelo o que as cartas mostram - te ensino como transformar essa informação em ação prática. É uma consulta + um plano de transformação personalizado.",
      icon: "💎"
    },
    {
      question: "Funciona para qualquer área da vida?",
      answer: "Sim! Trabalho com questões amorosas, profissionais, familiares, financeiras e de propósito de vida. As cartas revelam os bloqueios em qualquer área, e meu método te ajuda a desbloqueá-los independente do tema.",
      icon: "🎯"
    },
    {
      question: "E se eu nunca acreditei em tarot?",
      answer: "Perfeito! Céticos costumam ter as melhores experiências porque chegam sem expectativas. O tarot funciona através da sincronicidade e energia, não da crença. Muitas das minhas melhores consulentes eram céticas no início.",
      icon: "🤔"
    },
    {
      question: "Como sei se é o momento certo para mim?",
      answer: "Se você chegou até aqui, o universo já está te dando sinais. Geralmente, quando nos sentimos \"perdidos\" ou sentimos que algo precisa mudar (mas não sabemos o quê), é exatamente o momento perfeito para uma consulta.",
      icon: "⏰"
    },
    {
      question: "Posso parcelar o investimento?",
      answer: "Sim, aceito pagamento facilitado porque acredito que orientação espiritual deve ser acessível para quem realmente precisa. Entre em contato para conhecer as opções disponíveis.",
      icon: "💰"
    },
    {
      question: "E se não ficar satisfeita?",
      answer: "Isso é muito raro, mas se por algum motivo você não sentir conexão com as orientações, conversamos para ajustar ou, em último caso, devolvemos seu investimento. Minha reputação é construída na confiança e satisfação de cada consulente.",
      icon: "🔄"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-zinc-900 to-zinc-950">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="gradient-text">Perguntas</span>{" "}
            <span className="text-white">Frequentes</span>
          </h2>

          <div className="grid gap-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-zinc-800/30 backdrop-blur-sm rounded-xl border border-zinc-700/50 hover:border-orange-500/50 transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-left p-6 flex items-start gap-4 focus:outline-none"
                >
                  <span className="text-2xl flex-shrink-0">{faq.icon}</span>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-orange-400 group-hover:text-orange-300 transition-colors">
                      {faq.question}
                    </h3>
                    <div
                      className={`mt-3 text-zinc-300 transition-all duration-300 overflow-hidden ${
                        openIndex === index ? 'max-h-96' : 'max-h-0'
                      }`}
                    >
                      {faq.answer}
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;