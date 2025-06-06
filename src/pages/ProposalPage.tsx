import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Page from '../components/Page';

const ProposalPage: React.FC = () => {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [showPhoto, setShowPhoto] = useState(false);

  const moveNoButton = () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    setNoButtonPosition({ x, y });
  };

  const handleYesClick = () => {
    setShowPhoto(true);
  };

  return (
    <Page className="relative">
      <AnimatePresence>
        {showPhoto && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setShowPhoto(false)}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="relative max-w-lg w-full"
            >
              <img
                src="/foto.png"
                alt="Nosso momento especial"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <p className="text-center mt-4 handwriting text-2xl text-rose-gold">
                Nosso começo ❤️
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="space-y-12 text-center">
        <p className="text">
          Isabelle, posso escrever o resto dessa história com você?
        </p>
        <p className="handwriting text-3xl md:text-4xl">
          Quer namorar comigo? ❤️
        </p>
        <div className="flex flex-col gap-4 items-center mt-8">
          <button
            className="button bg-rose-gold"
            onClick={handleYesClick}
          >
            Sim, vamos escrever juntos
          </button>
          <button
            className="button bg-gold/90"
            onClick={handleYesClick}
          >
            Claro que sim!
          </button>
          <motion.button
            className="button bg-gray-500/50"
            animate={{
              x: noButtonPosition.x,
              y: noButtonPosition.y,
            }}
            transition={{ type: 'spring', duration: 0.5 }}
            onMouseEnter={moveNoButton}
            onTouchStart={moveNoButton}
          >
            Não
          </motion.button>
        </div>
      </div>
    </Page>
  );
};

export default ProposalPage;
