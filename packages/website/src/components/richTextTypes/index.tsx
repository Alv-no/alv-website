import React from 'react';
import imageUrlBuilder from '@sanity/image-url';
import * as styles from './Serializers.module.css';
import { Button, Icon } from 'shared-components';
const { Cross, DropdownArrow } = Icon;

const projectId = 'mnr37rl0';
const dataset = 'production';
const filePath = `https://cdn.sanity.io/files/${projectId}/${dataset}/`;

const urlFor = (source : any) =>
  imageUrlBuilder({ projectId, dataset }).image(source);

interface ImageProps {
  props: any;
  link: string
}

const Image : React.FC<ImageProps> = ({ props, link }) => (
  <a href={link} className={styles.wrapper}>
  {React.createElement("div", {
      role: "img",
      alt: props.node.heading,
      className: styles.img,
      style: {
        backgroundImage: `url(${urlFor(props.node.image.asset)
          .width(700)
          .url()})`,
      }
    })}
  </a>
);

interface TextSectionProps {
  props: any;
  link: string;
}

const TextSection : React.FC<TextSectionProps> = ({ props, link }) => (
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
          <Button.CtaArrow>Learn More</Button.CtaArrow>
        </div>
      )}
    </div>
  </a>
);

interface VideoProps {
  props: any;
  format: string;
}

const Video : React.FC<VideoProps> = ({ props, format }) => (
  <source
    src={`${filePath}${props.node.videoWebM.asset._ref.slice(
      5,
      props.node.videoWebM.asset._ref.length - 5
    )}.${format}`}
    type={`video/${format}`}
  />
);

interface VideoSectionProps {
  props: any;
  link: string;
}

const VideoSection : React.FC<VideoSectionProps> = ({ props, link }) => (
  <a href={link} className={styles.videoWrapper}>
    <div className="relative">
      <video controls autoPlay={true} className={styles.video} muted>
        {props.node.videoWebM && <Video props={props} format="webm" />}
        {props.node.videoMp4 && <Video props={props} format="mp4" />}
      </video>
    </div>
  </a>
);

export const richTextTypes = {
  types: {
    cta: (props : any) => (
      <div className={styles.ctaContainer}>
        {!props.node.image && <ShowMediaToggle />}
        <span className={styles.mediaWrapper}>
          {props.node.videoWebM || props.node.videoMp4 ? (
            <VideoSection props={props} link={props.node.link} />
          ) : (
            <Image props={props} link={props.node.link} />
          )}
        </span>
        {props.node.description || props.node.heading ? (
          <TextSection props={props} link={props.node.link} />
        ) : null}
      </div>
    ),
  },
};

const ShowMediaToggle : React.FC = () => (
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
