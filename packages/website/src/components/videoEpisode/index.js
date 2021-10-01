import React from 'react';
import * as styles from './videoEpisode.module.css';
import ReactMarkdown from 'react-markdown';

export const VideoEpisode = ({ title, description, subtitle, videoId }) => {
  const formattedMarkdown = description.includes('____')
    ? description.slice(0, description.indexOf('____'))
    : description;
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
          <div className="uppercase text-lg tracking-wider font-semibold pb-px">
            {title}
          </div>
          <div className="h-3px w-12 bg-theme-accent mt-2 mb-4" />
          <h4 className="leading-none mt-4 mb-2 text-blog leading-tight tracking-wider">
            {subtitle}
          </h4>
          <p className="tracking-wider mb-25">
            <span className={styles.md}>
              <ReactMarkdown children={formattedMarkdown} />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
