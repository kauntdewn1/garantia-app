import React from "react";

const MainHeadline: React.FC = () => (
  <section className="pt-20 pb-16 relative overflow-visible" style={{fontFamily: 'Poppins'}}> 
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-full z-0 bg-gray-400 bg-gradient-to-b from-pink-100 via-orange-50 to-purple-100 pointer-events-none" aria-hidden="true"></div>
    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
          <span className="text-3xl md:text-4xl lg:text-5xl">✨</span>{" "}
          <span className="bg-gradient-to-r from-pink-400 via-orange-400 to-purple-400 bg-clip-text text-transparent italic font-semibold font-thin">
            Sente que algo especial está para acontecer na sua vida, mas ainda não encontrou o caminho?
          </span>
        </h1>
        <p className="mt-6 text-lg md:text-xl lg:text-2xl text-zinc-500 leading-relaxed font-light">
          Descubra, com carinho e intuição, os bloqueios invisíveis que te impedem de florescer e viver a vida que merece através do Tarot.
        </p>
      </div>
    </div>
  </section>
);

export default MainHeadline; 