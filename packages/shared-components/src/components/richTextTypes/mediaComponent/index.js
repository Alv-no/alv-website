import React from 'react';
import { getFilePath, urlBuilder } from '../../../utils';

import * as styles from './MediaComponent.module.css';

const Video = ({ videoWebM, videoMp4, config }) => {
  const isIOS = navigator.userAgent.match(/(iPhone|iPad)/);

  const videoFormat = isIOS ? 'video/mp4' : 'video/webm';
  const videoAsset = isIOS
    ? videoWebM.asset._ref.slice(5, videoWebM.asset._ref.length - 5) + '.webm'
    : videoMp4.asset._ref.slice(5, videoMp4.asset._ref.length - 4) + '.mp4';

  const filePath = getFilePath(config);
  const videoPath = filePath + videoAsset;

  return (
    <div className={styles.videoContainer}>
      <video controls autoplay="true" className={styles.video} muted>
        <source src={videoPath} type={videoFormat} />
      </video>
    </div>
  );
};

const YoutubeEmbed = ({ videoId }) => {
  return (
    <div className={styles.videoContainer}>
      <iframe
        className={styles.video}
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};

const Image = ({ heading, asset, config }) => {
  return <img alt={heading} src={urlBuilder(asset, config).width(700).url()} />;
};

const MediaComponent = (props) => {
  const { type, ...rest } = props;

  const ComponentMapper = {
    image: Image,
    video: Video,
    youtube: YoutubeEmbed,
  };

  const MediaComponent = ComponentMapper[type];

  return (
    <span className={styles.mediaWrapper}>
      <MediaComponent {...rest} />
    </span>
  );
};

export default MediaComponent;
