export default {
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  fields: [
    {
      title: 'Meta data',
      name: 'meta',
      type: 'localeMeta',
    },
    // Section 1: Hero section
    {
      title: 'Section 1: Hero component',
      name: 'section1',
      type: 'textImageHero',
    },
    // section 2: video and block text
    {
      title: 'Section 2: Image and text',
      name: 'section2',
      type: 'localeImageText',
    },
    // section 3: title, text and button
    {
      title: 'Section 3: Title, text and button',
      name: 'section3',
      type: 'titleBlockCtaColumn',
    },
    // section 4: image, title, text and button
    {
      title: 'Section 4: Title, text, button and image',
      name: 'section4',
      type: 'imageTitleTextButton',
    },
    // section 5: title, text and services
    {
      title: 'Section 5: Services',
      name: 'section5',
      type: 'servicesIntro',
    },
    // section 6: founder component
    {
      title: 'Section 6: Founder',
      name: 'section6',
      type: 'founder',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Pages - Landing page',
      };
    },
  },
};
