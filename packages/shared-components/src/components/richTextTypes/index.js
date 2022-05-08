import React from 'react';
import imageUrlBuilder from '@sanity/image-url';
import * as styles from './Serializers.module.css';
import * as Button from '../button';
import * as Icon from '../icon';

const Image = ({ props, link, urlBuilder }) => (
  <a href={link} className={styles.wrapper}>
    <img
      alt={props.node.heading}
      className={styles.img}
      src={urlBuilder(props.node.image.asset).width(700).url()}
    />
  </a>
);

const TextSection = ({ props, link }) => (
  <a href={link} className={styles.wrapper}>
    <div className={styles.textWrapper}>
      <div className="">
        {props.node.heading && (
          <p className={styles.heading}>{props.node.heading}</p>
        )}
        {props.node.description && (
          <p className={styles.description}>{props.node.description}</p>
        )}
      </div>
      {props.node.image && (
        <div className={styles.buttonWrapper}>
          <Button.CtaArrow path={link}>Se mer</Button.CtaArrow>
        </div>
      )}
    </div>
  </a>
);

const Video = ({ props, format, filePath }) => (
  <source
    src={`${filePath}${props.node.videoWebM.asset._ref.slice(
      5,
      props.node.videoWebM.asset._ref.length - 5
    )}.${format}`}
    type={`video/${format}`}
  />
);

const VideoSection = ({ props, link, filePath }) => (
  <a href={link} className={styles.videoWrapper}>
    <div className="relative">
      <video
        controls
        autoplay="true"
        className={styles.video}
        filePath={filePath}
        muted
      >
        {props.node.videoWebM && <Video props={props} format="webm" />}
        {props.node.videoMp4 && <Video props={props} format="mp4" />}
      </video>
    </div>
  </a>
);

export function richTextTypesSerializer(config) {
  const filePath = `https://cdn.sanity.io/files/${config.projectId}/${config.dataset}/`;

  const urlBuilder = (source) =>
    imageUrlBuilder({
      projectId: config.SANITY_PROJECT_ID,
      dataset: config.SANITY_DATASET,
    }).image(source);

  return {
    types: {
      cta: (props) => (
        <div className={styles.ctaContainer}>
          {!props.node.image && <ShowMediaToggle />}
          <span className={styles.mediaWrapper}>
            {props.node.videoWebM || props.node.videoMp4 ? (
              <VideoSection
                filePath={filePath}
                props={props}
                link={props.node.link}
              />
            ) : (
              <Image
                urlBuilder={urlBuilder}
                props={props}
                link={props.node.link}
              />
            )}
          </span>
          {props.node.description || props.node.heading ? (
            <TextSection props={props} link={props.node.link} />
          ) : null}
        </div>
      ),
    },
  };
}

const ShowMediaToggle = () => (
  <>
    <input type="checkbox" className={styles.checkbox} />
    <div className={styles.iconWrapper}>
      <div className={styles.crossIcon}>
        <Icon.Cross />
      </div>
      <div className={styles.expandIcon}>
        <Icon.DropdownArrow />
      </div>
    </div>
  </>
);
