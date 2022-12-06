import imageUrlBuilder from '@sanity/image-url';
import React from 'react';
import * as Button from '../button';
import { Cross, DropdownArrow } from '../icon';
import * as styles from './Serializers.module.css';

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
      headingDescButtonCta: (props) => <HeadingDescButtonCta {...props} />,
    },
    marks: {
      'alv-yellow': ({ children }) => (
        <strong style={{ color: '#eabb26', fontSize: '120%' }}>
          {children}
        </strong>
      ),
    },
  };
}

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

const HeadingDescButtonCta = ({
  heading,
  description,
  buttonLink,
  buttonText,
  whiteOnBlue,
  layout,
}) => (
  <section
    className={`${whiteOnBlue ? 'bg-navy text-white' : 'bg-white text-navy'} ${
      layout === 'horizontal'
        ? ' justify-between items-center'
        : 'flex-col text-center'
    } md:flex md:px-8 py-8 px-4   my-8 md:gap-4`}
  >
    <div>
      <span
        className={`block ${
          layout === 'horizontal' ? 'mb-0' : 'mb-1'
        } font-thin`}
      >
        {description}
      </span>
      <h2 className="text-cta-section font-semibold">{heading}</h2>
    </div>
    <div>
      <a
        href={buttonLink}
        className={`block px-5 rounded-full font-semibold text-base uppercase tracking-wider py-1 md:mt-0 mt-3 border border-2 whitespace-nowrap ${
          whiteOnBlue ? 'border-white' : 'border-navy'
        } `}
      >
        {buttonText}
      </a>
    </div>
  </section>
);
