import React from 'react';
import { MediaCta, ProductCta, TextCta } from './cta';
import { ImageTextFlip, LinkableHeading } from './layout';
import MediaComponent from './mediaComponent';

export const richTextTypesSerializer = (config) => ({
  types: {
    // CTAs
    cta: (props) => <TextCta {...props} config={config} />,
    mediaCta: (props) => <MediaCta {...props} config={config} />,
    emailCta: (props) => <ProductCta {...props} config={config} />,

    // Media
    image: (props) => (
      <MediaComponent type="image" {...props.node} config={config} />
    ),
    videoUpload: (props) => (
      <MediaComponent type="video" {...props} config={config} />
    ),
    youtube: (props) => (
      <MediaComponent type="youtube" {...props} config={config} />
    ),

    // Layout
    imageTextFlip: (props) => <ImageTextFlip {...props.node} config={config} />,
    linkableHeading: (props) => (
      <LinkableHeading heading={props.node?.Heading} config={config} />
    ),

    // for backwards compatibility
    // headingDescButtonCta can be safely removed after updating serialised data with a sanity script that replaces "headingDescButtonCta" with "textCta"
    // see https://www.sanity.io/docs/migrating-data for more info
    headingDescButtonCta: (props) => <TextCta {...props.node} />,
  },
  marks: {
    'alv-yellow': ({ children }) => (
      <strong style={{ color: '#eabb26', fontSize: '120%' }}>{children}</strong>
    ),
  },
});
