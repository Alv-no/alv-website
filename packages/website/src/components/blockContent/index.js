import React from 'react';
import * as styles from './Blockcontent.module.css';
import { richTextTypes } from '../richTextTypes';
import PortableText from '@sanity/block-content-to-react';

export const BlockContent = ({ blocks, noStyle }) => (
  <span className={!noStyle && styles.body}>
    <PortableText
      blocks={blocks}
      projectId="mnr37rl0"
      dataset="production"
      serializers={richTextTypes}
    />
  </span>
);
