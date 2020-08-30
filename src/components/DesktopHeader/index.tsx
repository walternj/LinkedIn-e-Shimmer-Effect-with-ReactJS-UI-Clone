import React from 'react';

import { Container, Wrapper, LinkedInIcon, SearchInput, HomeIcon, NotificationsIcon, ProfileCircle, CaretDownIcon } from './styles';

const DesktopHeader: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <div className="left">
          <LinkedInIcon />
          <SearchInput placeholder="Rechercher" />
        </div>

        <div className="right">
          <nav>
            <button className="active">
              <HomeIcon />
              <span>Home</span>
            </button>
            <button>
              <NotificationsIcon />
              <span>Notifications</span>
            </button>
            <button>
              <ProfileCircle src="https://github.com/walternj.png" />
              <span>
                Moi <CaretDownIcon />
              </span> 
            </button>
          </nav>
        </div>
      </Wrapper>
    </Container>
  );
}

export default DesktopHeader;