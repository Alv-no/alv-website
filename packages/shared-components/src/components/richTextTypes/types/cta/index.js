import React from 'react';
import { getFilePath } from '../../../../utils';
import { CtaArrow } from '../../../button';
import { Cross, DropdownArrow } from '../../../icon';
import styles from './MediaCta.module.css';

const Video = ({ link, filePath, videoWebM, videoMp4 }) => {
  const isIOS = navigator.userAgent.match(/(iPhone|iPad)/);

  const videoFormat = isIOS ? 'video/mp4' : 'video/webm';
  const videoAsset = isIOS
    ? videoWebM.asset._ref.slice(5, videoWebM.asset._ref.length - 5)
    : videoMp4.asset._ref.slice();

  const videoPath = filePath + videoAsset;

  return (
    <a href={link} className={styles.videoWrapper}>
      <div className="relative">
        <video controls autoplay="true" className={styles.video} muted>
          <source src={videoPath} type={videoFormat} />
        </video>
      </div>
    </a>
  );
};

const YoutubeEmbed = ({ youtubeLink }) => (
  <div className="video-responsive">
    <iframe
      className={styles.video}
      src={youtubeLink}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

const Image = ({ heading, image, link, urlBuilder }) => (
  <a href={link} className={styles.wrapper}>
    <img
      alt={heading}
      className={styles.img}
      src={urlBuilder(image.asset).width(700).url()}
    />
  </a>
);

const ShowMediaToggle = () => (
  <>
    <input type="checkbox" className={styles.checkbox} />
    <div className={styles.iconWrapper}>
      <div className={styles.crossIcon}>
        <Cross />
      </div>
      <div className={styles.expandIcon}>
        <DropdownArrow />
      </div>
    </div>
  </>
);

const LinkableTextSection = ({ heading, description, link }) => (
  <a href={link} className={styles.wrapper}>
    <div className={styles.textWrapper}>
      <div>
        {heading && <p className={styles.heading}>{heading}</p>}
        {description && <p className={styles.description}>{description}</p>}
      </div>
      {link && (
        <div className={styles.buttonWrapper}>
          <CtaArrow path={link}>Se mer</CtaArrow>
        </div>
      )}
    </div>
  </a>
);

const MediaCta = (props) => {
  const {
    heading,
    description,
    ctaType,
    config,
    link,
    ...mediaProps
  } = props.node;

  const ComponentMapper = {
    image: Image,
    video: Video,
    youtube: YoutubeEmbed,
  };

  const MediaComponent = ComponentMapper[ctaType];

  const showTextSection = heading || description;

  return (
    <div className={styles.ctaContainer}>
      {showTextSection && <ShowMediaToggle />}
      <span className={styles.mediaWrapper}>
        <MediaComponent filePath={getFilePath(config)} {...mediaProps} />
      </span>
      {showTextSection && (
        <LinkableTextSection
          heading={heading}
          description={description}
          link={link}
        />
      )}
    </div>
  );
};

export default MediaCta;
