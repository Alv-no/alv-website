import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { BlockContent } from 'shared-components';
import * as styles from './hero.module.css';
import Link from 'gatsby-link';
import { Button } from 'shared-components';
import { BgImage } from 'gbimage-bridge';

export const Hero = ({ blocks, cta, backgroundImage }) => (
  <BgImage image={backgroundImage} className="w-full h-screen flex flex-col justify-center -mt-20 ">
    <div className="grid lg:grid-cols-2 px-6 sm:px-10 lg:px-10 max-w-1280 w-full mx-auto sm:pt-15 sm:pb-10 text-white">
      <div className="">
        <span className={styles.heroHeading}>
          <BlockContent blocks={blocks} noStyle />
        </span>
      </div>
    </div>
    <HeroCta {...cta} />
  </BgImage>
);

const HeroCta = ({ eyebrow, title, link }) => (
  <Link
    className="absolute sm:relative sm:mt-10 bottom-12 sm:bottom-5 uppercase text-white px-5 sm:px-10 z-30"
    to={link}
  >
    <div className="flex items-center w-full max-w-1200 mx-auto sm:mb-5 lg:mb-12">
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
