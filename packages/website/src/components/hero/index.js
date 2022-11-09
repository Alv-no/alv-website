import React from 'react';
import { Title, Button } from 'shared-components';
import { Typewriter } from '../typewriter';
import Link from 'gatsby-link';
import * as styles from './hero.module.css';

export const Hero = ({
  videoMp4,
  videoWebm,
  linesAndClasses,
  delay,
  heroCta,
}) => {
  return (
    <div className="h-screen relative sm:-mt-20 -mt-16 transform">
      <MobileAnimation linesAndClasses={linesAndClasses} delay={delay} />
      <GradientLayer />
      <div className={styles.videoContainer}>
        <video
          title="reel"
          className="w-full eight:block hidden"
          muted
          autoPlay={true}
        >
          <source src={videoWebm} type="video/webm" />
          <source src={videoMp4} type="video/mp4" />
        </video>
      </div>
      {heroCta.link && <HeroCta {...heroCta} />}
    </div>
  );
};

const MobileAnimation = ({ linesAndClasses, delay }) => (
  <div className="h-full flex items-center justify-center px-5">
    <span className="transform xs:scale-100 scale-90 -mt-5">
      <Title
        bold={false}
        size="lg:text-5xl sm:text-hero-tablet text-hero-sm leading-tight eight:hidden"
        noDot
      >
        <Typewriter linesAndClasses={linesAndClasses} delay={delay} />
      </Title>
    </span>
  </div>
);

const GradientLayer = () => (
  <div
    className="absolute bottom-0 h-3/6 w-full z-20"
    style={{
      background:
        'linear-gradient(180deg, rgba(0,0,0,0) 5%, rgba(6,24,56,1) 100%)',
    }}
  />
);

const HeroCta = ({ link, eyebrow, title }) => (
  <Link
    className="block absolute bottom-12 sm:bottom-5 w-full uppercase text-white px-5 sm:px-10 z-30"
    to={link}
  >
    <div className="flex items-center lg:justify-end w-full max-w-1200 mx-auto sm:mb-5 lg:mb-12">
      <div className="lg:w-auto w-full xs:text-right">
        <p className={styles.ctaEyebrow}>{eyebrow}</p>
        <h1 className={styles.ctaTitle}>{title}</h1>
      </div>
      <span className={styles.ctaButton}>
        <Button.CtaButton internalLink={link} />
      </span>
    </div>
  </Link>
);
