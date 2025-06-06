import React from 'react';
import { ChevronDown } from 'lucide-react';
import Page from '../components/Page';

const OpeningPage: React.FC = () => {
  return (
    <Page>
      <h1 className="title">Capítulo Dois</h1>
      <p className="text">Porque a primeira página foi só o começo...</p>
      <ChevronDown 
        className="animate-bounce mt-12 text-rose-gold" 
        size={32} 
      />
      <p className="text-sm mt-4 text-rose-gold/80">
        Deslize para continuar
      </p>
    </Page>
  );
};

export default OpeningPage;