import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { BlockContent } from 'shared-components';
import * as styles from './hero.module.css';
import Link from 'gatsby-link';
import { Button } from 'shared-components';

export const Hero = ({ image, blocks, cta }) => (
  <section className="w-full h-screen flex items-center -mt-20">
    <div className="grid lg:grid-cols-2 lg:px-12 mx-auto max-w-1440 sm:pt-15 sm:pb-10 text-theme-text">
      <div className="flex items-center justify-center">
        <span className={styles.heroHeading}>
          <BlockContent blocks={blocks} noStyle />
        </span>
      </div>
      <GatsbyImage image={image} />
    </div>
    <HeroCta {...cta} />
  </section>
);

const HeroCta = ({ eyebrow, title, link }) => (
  <Link
    className="block absolute bottom-12 sm:bottom-5 w-full uppercase text-navy px-5 sm:px-10 z-30"
    to={link}
  >
    <div className="flex items-center lg:justify-end w-full max-w-1200 mx-auto sm:mb-5 lg:mb-12">
      <div className="lg:w-auto w-full xs:text-right">
        <p className={styles.ctaEyebrow}>{eyebrow}</p>
        <h1 className={styles.ctaTitle}>{title}</h1>
      </div>
      <span className={styles.ctaButton}>
        <Button.CtaButton internalLink={link} blue />
      </span>
    </div>
  </Link>
);
