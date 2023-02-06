import React from 'react';
import * as styles from './Blockcontent.module.css';

import PortableText from '@sanity/block-content-to-react';
import { richTextTypesSerializer } from 'shared-components/src/components/richTextTypes';

export const BlockContent = ({ blocks }) => (
  <span className={styles.wrapper}>
    <PortableText
      blocks={blocks}
      projectId="f79uyhzd"
      dataset="production"
      serializers={richTextTypesSerializer}
    />
  </span>
);
