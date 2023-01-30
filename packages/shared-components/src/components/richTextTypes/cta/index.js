import React from 'react';
import MediaCta from './mediaCta';
import ProductCta from './productCta';
import TextCta from './textCta';

const Cta = (props) => {
  const { ctaType, config, textSection } = props;

  switch (ctaType) {
    case 'text':
      return <TextCta {...textSection} config={config} />;
    case 'image':
      return <MediaCta type="image" config={config} {...props} />;
    case 'video':
      return <MediaCta type="video" config={config} {...props} />;
    case 'youtube':
      return <MediaCta type="youtube" config={config} {...props} />;
    case 'email':
      return <ProductCta config={config} />;
    default:
      return null;
  }
};

export default Cta;
