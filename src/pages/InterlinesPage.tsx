import React from 'react';
import Page from '../components/Page';

const InterlinesPage: React.FC = () => {
  return (
    <Page>
      <div className="space-y-12">
        <p className="text">
          Talvez o que a gente tem nem precise de rótulo, mas…
        </p>
        <p className="handwriting">
          Eu quero dar um nome bonito pra isso.
        </p>
      </div>
    </Page>
  );
};

export default InterlinesPage;