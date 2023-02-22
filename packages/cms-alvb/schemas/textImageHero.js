export default {
  title: "Hero - text/image split",
  name: "textImageHero",
  type: "object",
  options: {
    collapsible: true,
  },
  fields: [
    {
      name: "heroText",
      title: "Text",
      type: "localeHeroBlockContent",
    },
    {
      name: "localeCta",
      title: "CTA",
      type: "localeCta",
    },
    {
      name: "backgroundImage",
      title: "Background image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "backgroundImageMobile",
      title: "Background image (mobile)",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
