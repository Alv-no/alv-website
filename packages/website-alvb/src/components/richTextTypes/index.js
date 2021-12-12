import React from 'react';
import imageUrlBuilder from '@sanity/image-url';
import * as styles from './StyledBlockContent.module.css';

const projectId = 'f79uyhzd';
const dataset = 'production';

const urlFor = (source) =>
  imageUrlBuilder({ projectId, dataset }).image(source);

const Image = ({ props }) => (
  <div className={styles.wrapper}>
    <img
      alt={props.node.heading}
      className={styles.img}
      src={urlFor(props.node.asset).url()}
    />
  </div>
);

export const richTextTypes = {
  types: {
    image: (props) => <Image props={props} />,
  },
};
