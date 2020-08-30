import React from 'react';

import { Container } from './styles';

const AdBanner: React.FC = () => {
  return (
    <Container className="ad-banner">
      <span>DevLoop - </span>
      À la recherche du Next Level.
    </Container>
  );
};

export default AdBanner;
