import React from 'react';
import * as styles from './Blockcontent.module.css';
import { richTextTypes } from '../richTextTypes';
import PortableText from '@sanity/block-content-to-react';

export const BlockContent = ({ blocks }) => (
  <span className={styles.wrapper}>
    <PortableText
      blocks={blocks}
      projectId="f79uyhzd"
      dataset="production"
      serializers={richTextTypes}
    />
  </span>
);
