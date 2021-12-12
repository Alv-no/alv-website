export const navItems = [
  {
    no: {
      text: 'Våre prosjekter',
      link: '/våre-prosjekter',
    },
    en: {
      text: 'Our projects',
      link: '/en/our-projects',
    },
  },
  {
    no: {
      text: 'Biobank',
      link: '/biobank',
    },
    en: {
      text: 'Biobank',
      link: '/en/biobank',
    },
  },
  {
    no: {
      text: 'Samarbeid med oss',
      children: [
        {
          text: 'Investering',
          link: '/samarbeid-med-oss/investering',
        },
      ],
    },
    en: {
      text: 'Collaborate with us',
      children: [{ text: 'Invest', link: '/en/collaborate-with-us/invest' }],
    },
  },
  {
    no: { text: 'Vårt team', link: '/vårt-team' },
    en: { text: 'Our team', link: '/en/our-team' },
  },
  {
    no: { text: 'Kunngjøringer og blogg', link: '/blogg' },
    en: { text: 'Announcements and blog', link: '/en/blog' },
  },
  {
    no: { text: 'Kontakt oss', link: '/kontakt-oss' },
    en: { text: 'Contact us', link: '/en/contact-us' },
  },
];
