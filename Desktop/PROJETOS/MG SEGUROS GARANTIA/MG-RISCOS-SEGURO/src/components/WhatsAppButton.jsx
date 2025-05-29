import React from 'react';
import { motion } from 'framer-motion';

function WhatsAppButton() {
  const whatsappLink = "https://api.whatsapp.com/send?phone=556296862769&text=Olá%2C%20estou%20vindo%20do%20site%20e%20gostaria%20de%20ser%20atendo%28a%29%20por%20aqui.";

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors duration-300"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path
          fillRule="evenodd"
          d="M12 2C6.48 2 2 6.48 2 12c0 2.17.7 4.19 1.89 5.83L2.29 22l4.17-1.59C7.88 21.44 9.89 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.85 0-3.65-.54-5.19-1.56l-.37-.22-3.83 1.46 1.46-3.83-.22-.37C2.54 15.65 2 13.85 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm-3.46-5.92l-.37-.22-3.83 1.46 1.46-3.83-.22-.37C2.54 15.65 2 13.85 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10c-1.85 0-3.65-.54-5.19-1.56l-.37-.22-3.83 1.46 1.46-3.83-.22-.37z"
          clipRule="evenodd"
        />
      </svg>
    </motion.a>
  );
}

export default WhatsAppButton;