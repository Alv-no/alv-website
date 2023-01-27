import React from 'react';
import MediaCta from './mediaCta';
import ProductCta from './productCta';
import TextCta from './textCta';

const Cta = ({ ctaType, config, ...rest }) => {
  switch (ctaType) {
    case 'text':
      return <TextCta config={config} />;
    case 'image':
      return <MediaCta type="image" config={config} {...rest} />;
    case 'video':
      return <MediaCta type="video" config={config} {...rest} />;
    case 'youtube':
      return <MediaCta type="youtube" config={config} {...rest} />;
    case 'email':
      return <ProductCta config={config} />;
    default:
      return null;
  }
};

export default Cta;
