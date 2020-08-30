import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const ProfilePanel: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className="profile-cover"></div>
        <img
          src="https://github.com/walternj.png"
          alt="Avatar"
          className="profile-picture"
        />
        <h1>Walter Nunes Jr.</h1>
        <h2>Software Engineer @ DevLoop</h2>

        <div className="separator"></div>

        <div className="key-value">
          <span className="key">Vues de votre profil</span>
          <span className="value">1.558</span>
        </div>
        <div className="key-value">
          <span className="key">Vues des publications</span>
          <span className="value">388</span>
        </div>
      </Container>
    </Panel>
  );
};

export default ProfilePanel;
