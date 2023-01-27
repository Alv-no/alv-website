import React from 'react';
import MediaComponent from '../../mediaComponent';
import TextCta from '../textCta';
import * as styles from './MediaCta.module.css';

const MediaCta = (props) => {
  const { textSection, config } = props;

  return (
    <div className={styles.ctaContainer}>
      <MediaComponent {...props} config={config} />
      <TextCta withMedia {...textSection} />
    </div>
  );
};

export default MediaCta;
