import React from 'react';

import Panel from '../../Panel';

import {
  Container,
  WriteIcon,
  CameraIcon,
  VideoCameraIcon,
  DocumentIcon,
  ArticleIcon,
} from './styles';

const FeedShare: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className="write">
          <WriteIcon />
          <span>Commencer un post</span>
        </div>
        <div className="attachment">
          <button>
            <CameraIcon />
            Photo
          </button>
          <button>
            <VideoCameraIcon />
            Vidéo
          </button>
          <button>
            <DocumentIcon />
            Document
          </button>
          <button>
            <ArticleIcon />
            Rédiger un article
          </button>
        </div>
      </Container>
    </Panel>
  );
};

export default FeedShare;
