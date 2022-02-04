import React from 'react';
import { BlockContent } from 'shared-components';
import * as styles from './hero.module.css';
import Link from 'gatsby-link';
import { Button } from 'shared-components';
import { BgImage } from 'gbimage-bridge';

export const Hero = ({
  blocks,
  cta,
  backgroundImage,
  backgroundImageMobile,
}) => (
  <div>
    <span className="lg:block hidden">
      <HeroDesktop
        blocks={blocks}
        cta={cta}
        backgroundImage={backgroundImage}
      />
    </span>
    <span className="lg:hidden block">
      <HeroMobile
        blocks={blocks}
        cta={cta}
        backgroundImage={backgroundImageMobile}
      />
    </span>
  </div>
);

export const HeroDesktop = ({ blocks, cta, backgroundImage }) => (
  <BgImage
    image={backgroundImage}
    className="w-full h-screen flex flex-col justify-center -mt-20 "
  >
    <div className="grid lg:grid-cols-2 px-6 sm:px-10 lg:px-10 mt-15 max-w-1280 w-full mx-auto text-white">
      <div className="">
        <span className={styles.heroHeading}>
          <BlockContent blocks={blocks} noStyle />
        </span>
      </div>
    </div>
    <HeroCtaDesktop {...cta} />
  </BgImage>
);

const HeroCtaDesktop = ({ eyebrow, title, link }) => (
  <Link
    className="sm:mt-10 bottom-12 sm:bottom-5 uppercase text-white px-5 sm:px-10 z-30"
    to={link}
  >
    <div className="flex items-center w-full max-w-1200 mx-auto sm:mb-5 lg:mb-12">
      <div className="w-auto xs:text-left">
        <p className={styles.ctaEyebrow}>{eyebrow}</p>
        <h1 className={styles.ctaTitle}>{title}</h1>
      </div>
      <span className={styles.ctaButton}>
        <Button.CtaButton internalLink={link} />
      </span>
    </div>
  </Link>
);

export const HeroMobile = ({ blocks, cta, backgroundImage }) => (
  <BgImage
    image={backgroundImage}
    className="w-full h-screen relative flex justify-center -mt-20"
  >
    <div className="px-6 sm:px-10 mx-auto sm:pt-15 text-white relative transform pt-20 translate-y-25 md:translate-y-15 text-center">
      <span className={styles.heroHeading}>
        <BlockContent blocks={blocks} noStyle />
      </span>
    </div>
    <HeroCtaMobile {...cta} />
  </BgImage>
);

const HeroCtaMobile = ({ eyebrow, title, link }) => (
  <Link
    className="absolute sm:mt-10 bottom-0 uppercase text-white px-5 sm:px-10 z-30 bg-navy bg-opacity-40 w-full py-2 sm:py-4"
    to={link}
  >
    <div className="flex items-center w-full max-w-1200 mx-auto lg:mb-12">
      <div className="w-auto w-full xs:text-left">
        <p className={styles.ctaEyebrow}>{eyebrow}</p>
        <h1 className={styles.ctaTitle}>{title}</h1>
      </div>
      <span className={styles.ctaButton}>
        <Button.CtaButton internalLink={link} />
      </span>
    </div>
  </Link>
);
