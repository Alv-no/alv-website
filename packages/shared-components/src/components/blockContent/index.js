import React from 'react';
import * as styles from './Blockcontent.module.css';
import { richTextTypesSerializer } from '../richTextTypes';
import PortableText from '@sanity/block-content-to-react';

export const BlockContent = ({
  blocks,
  noStyle,
  whiteText,
  darkText,
  config,
}) => (
  <span
    className={
      !noStyle &&
      (whiteText ? styles.whiteText : darkText ? styles.darkText : styles.body)
    }
  >
    <PortableText
      blocks={blocks}
      projectId={config.SANITY_PROJECT_ID}
      dataset={config.SANITY_DATASET}
      serializers={richTextTypesSerializer(config)}
    />
  </span>
);
