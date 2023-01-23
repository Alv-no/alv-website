import React from 'react';
import {
  Cta,
  ImageTextFlip,
  LinkableHeading,
  ProductCta,
  TextCta,
} from './types';

export const richTextTypesSerializer = (config) => ({
  types: {
    cta: (props) => <Cta {...props.node} config={config} />,
    textCta: (props) => <TextCta {...props.node} config={config} />,
    productCta: (props) => <ProductCta {...props.node} config={config} />,
    imageTextFlip: (props) => <ImageTextFlip {...props.node} config={config} />,
    linkableHeading: (props) => (
      <LinkableHeading {...props.node} config={config} />
    ),

    // for backwards compatibility
    // headingDescButtonCta can be safely removed after updating serialised data with a sanity script that replaces "headingDescButtonCta" with "textCta"
    // see https://www.sanity.io/docs/migrating-data for more info
    headingDescButtonCta: (props) => (
      <Cta ctaType="text" textSection={{ ...props.node }} />
    ),
  },
  marks: {
    'alv-yellow': ({ children }) => (
      <strong style={{ color: '#eabb26', fontSize: '120%' }}>{children}</strong>
    ),
  },
});
