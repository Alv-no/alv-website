import React from 'react';
import imageUrlBuilder from '@sanity/image-url';
import * as styles from './StyledBlockContent.module.css';
import { Document } from 'shared-components/src/components/icon';

const projectId = 'f79uyhzd';
const dataset = 'production';

const imageUrlFor = (source) =>
  imageUrlBuilder({ projectId, dataset }).image(source);

const fileUrl = (_ref) => {
  const baseUrl = 'https://cdn.sanity.io/files';
  const ref = _ref.split('-');
  const asset = ref[1];
  const extension = `${ref[2]}`;

  return `${baseUrl}/${projectId}/${dataset}/${asset}.${extension}`;
};

const Image = ({ props }) => (
  <div className={styles.wrapper}>
    <img
      alt={props.node.heading}
      className={styles.img}
      src={imageUrlFor(props.node.asset).url()}
    />
  </div>
);

export const richTextTypes = {
  types: {
    image: (props) => <Image props={props} />,
    download: (props) => (
      <div className={styles.downloadWrapper}>
        <a
          className={styles.downloadButton}
          href={fileUrl(props.node.file.asset._ref)}
          style={{ textDecoration: 'none' }}
        >
          <Document />
          <span>{props.node.buttonText}</span>
        </a>
      </div>
    ),
  },
};
