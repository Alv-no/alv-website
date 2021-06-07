import React from 'react';
import * as styles from './videoEpisode.module.css';

export const VideoEpisode = ({ title, description, subtitle, videoId }) => {
  return (
    <div>
      <div>
        <div className={styles.videoContainer}>
          <iframe
            className={styles.iframe}
            title="video"
            src={`https://www.youtube.com/embed/${
              videoId || 'w41C6nB_pYM'
            }?autoplay=1&mute=0&enablejsapi=1`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="mt-6 px-5 seven:px-0">
        <div className="">
          <h2 className="text-lg tracking-wider font-light">{title}</h2>
          <h4 className="leading-none mt-4 mb-2 text-blog leading-tight tracking-wider">
            {subtitle}
          </h4>
          <p className="tracking-wider">{description}</p>
        </div>
      </div>
    </div>
  );
};
