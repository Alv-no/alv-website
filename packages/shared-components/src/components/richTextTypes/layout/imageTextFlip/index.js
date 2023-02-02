import PortableText from '@sanity/block-content-to-react';
import React from 'react';
import { richTextTypesSerializer } from '../..';
import { urlBuilder } from '../../../../utils';
import * as styles from './ImageTextFlip.module.css';

const ImageTextFlip = ({ flip, image, heading, linkableBlock, config }) => {
  const flipClasses = flip ? 'sm:order-first sm:pr-8' : 'sm:pl-8';

  return (
    <section className="grid sm:grid-cols-2">
      <img
        alt={heading}
        src={urlBuilder(image.asset, config).width(700).height(700).url()}
        className="object-cover aspect-square"
        style={{ padding: 0, margin: 0 }}
      />
      <div className={`${flipClasses} flex flex-col font-thin`}>
        <PortableText
          blocks={linkableBlock}
          projectId={config.SANITY_PROJECT_ID}
          dataset={config.SANITY_DATASET}
          className={styles.imageTextFlip}
          serializers={richTextTypesSerializer(config)}
        />
      </div>
    </section>
  );
};

export default ImageTextFlip;
