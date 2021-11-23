export default {
  name: 'ourServicesPage',
  title: 'Our Services Page',
  type: 'document',
  fields: [
    {
      title: 'Meta data',
      name: 'meta',
      type: 'localeMeta',
    },
    // section 1: Hero
    {
      title: 'Section 1: Hero component',
      name: 'section1',
      type: 'titleTextImage',
    },
    // section 2: Title, block and image
    {
      name: 'section2',
      title: 'Section 2: Text left, image right',
      type: 'titleBlockImage',
    },
    {
      name: 'section3',
      title: 'Section 3: Image left, text right',
      type: 'titleBlockImage',
    },
    {
      name: 'section4',
      title: 'Section 4: Block',
      type: 'localeBlockContent',
    },
  ],
};
