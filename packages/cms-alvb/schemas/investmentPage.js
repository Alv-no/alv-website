export default {
  name: 'investmentPage',
  title: 'Investment',
  type: 'document',
  fields: [
    {
      title: 'Meta data',
      name: 'meta',
      type: 'localeMeta',
    },
    // section 1: Page title and description
    {
      name: 'section1',
      title: 'Section 1: Hero',
      type: 'titleText',
    },
    // section 2: images
    {
      name: 'section2',
      title: 'Section 2: Two images',
      type: 'twoImages',
    },
    // section 3: text
    {
      name: 'section3',
      title: 'Section 3: Block text',
      type: 'localeBlockContent',
    },
    // section 3: cta
    {
      name: 'section4',
      title: 'Section 4: Call to action',
      type: 'titleTextButton',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Pages - Investment',
      };
    },
  },
};
