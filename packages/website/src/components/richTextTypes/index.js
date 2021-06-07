import React from 'react';
import imageUrlBuilder from '@sanity/image-url';
import * as styles from './Serializers.module.css';
import * as Button from '../button';
import * as Icon from '../icon';

const projectId = 'mnr37rl0';
const dataset = 'production';
const filePath = `https://cdn.sanity.io/files/${projectId}/${dataset}/`;

const Video = ({ props, format }) => (
  <source
    src={`${filePath}${props.node.videoWebM.asset._ref.slice(
      5,
      props.node.videoWebM.asset._ref.length - 5
    )}.${format}`}
    type={`video/${format}`}
  />
);

const urlFor = (source) =>
  imageUrlBuilder({ projectId, dataset }).image(source);

const Image = ({ props }) => (
  <div
    alt={props.node.heading}
    className={styles.img}
    style={{
      backgroundImage: `url(${urlFor(props.node.image.asset)
        .width(700)
        .url()})`,
    }}
  />
);

const TextSection = ({ props }) => (
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
        <Button.CtaArrow>Learn More</Button.CtaArrow>
      </div>
    )}
  </div>
);

const VideoSection = ({ props }) => (
  <div className="relative">
    <video controls autoplay="true" className={styles.video} muted>
      {props.node.videoWebM && <Video props={props} format="webm" />}
      {props.node.videoMp4 && <Video props={props} format="mp4" />}
    </video>
  </div>
);

export const richTextTypes = {
  types: {
    cta: (props) => (
      <div className="relative">
        {!props.node.image && (
          <>
            <div className="absolute top-3 sm:right-18 right-3 transform scale-70 z-10 cursor-pointer">
              <Icon.Cross />
            </div>
            <input
              type="checkbox"
              className="absolute top-1 sm:right-16 right-3 h-10 w-10 transform scale-70 z-10 opacity-0 cursor-pointer"
            />
          </>
        )}
        <a
          href={props.node.link}
          className={`${
            props.node.image ? styles.wrapper : styles.videoWrapper
          }`}
        >
          {props.node.videoWebM || props.node.videoMp4 ? (
            <VideoSection props={props} />
          ) : (
            <Image props={props} />
          )}
          {props.node.description || props.node.heading ? (
            <TextSection props={props} />
          ) : null}
        </a>
      </div>
    ),
  },
};
