import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { BlockContent } from 'shared-components';
import * as styles from './hero.module.css';

export const Hero = ({ image, blocks }) => (
  <section className="w-full sm:h-auto h-screen flex items-center">
    <div className="grid lg:grid-cols-2 lg:px-12 mx-auto max-w-1440 sm:pt-15 sm:pb-10 text-theme-text">
      <div className="flex items-center justify-center">
        <span className={styles.heroHeading}>
          <BlockContent blocks={blocks} noStyle />
        </span>
      </div>
      <GatsbyImage image={image} />
    </div>
  </section>
);
