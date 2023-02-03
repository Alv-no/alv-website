import React from 'react';
import MediaCta from './mediaCta';
import ProductCta from './productCta';
import TextCta from './textCta';
import FormCta from './formCta';

const Cta = (props) => {
  const { ctaType, config, textSection, form } = props;

  switch (ctaType) {
    case 'text':
      return <TextCta {...textSection} config={config} />;
    case 'form':
      return <FormCta {...form} config={config} />;
    case 'email':
      return <ProductCta {...props} config={config} />;
    case 'image':
      return <MediaCta type="image" config={config} {...props} />;
    case 'video':
      return <MediaCta type="video" config={config} {...props} />;
    case 'youtube':
      return <MediaCta type="youtube" config={config} {...props} />;

    default:
      return null;
  }
};

export default Cta;
