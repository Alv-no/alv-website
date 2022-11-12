import * as styles from './StyledBlockContent.module.css';
import { BlockContent } from 'shared-components';
import React from 'react';
import config from '../../config';

interface Props {
  blocks: any;
}

export const StyledBlockContent : React.FC<Props> = ({
  blocks
}) => (
  <span className={styles.body}>
    <BlockContent blocks={blocks} config={config} />
  </span>
);
