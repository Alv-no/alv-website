import React from 'react';
import Cta, { TextCta } from './cta';
import { ImageTextFlip, LinkableHeading } from './layout';
import MediaComponent from './mediaComponent';

export const richTextTypesSerializer = (config) => ({
  types: {
    cta: (props) => <Cta {...props.node} config={config} />,

    image: (props) => (
      <MediaComponent type="image" {...props.node} config={config} />
    ),
    video: (props) => (
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
