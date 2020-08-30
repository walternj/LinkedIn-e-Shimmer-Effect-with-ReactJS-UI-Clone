import React from 'react';

import LoadingProfilPanel from '../Shimmer/LoadingProfilPanel';
import ProfilePanel from './ProfilePanel';
import HashtagPanel from './HashtagPanel';

import { Container } from './styles';

const LeftColumn: React.FC<LoadingProps> = ({isLoading}) => {
  return (
    <Container className="left-column">
      {isLoading ? (
        <LoadingProfilPanel />
      ): (
        <>
          <ProfilePanel />
          <HashtagPanel />
        </>
      )}

    </Container>
  );
};

export default LeftColumn;
