export default {
  name: "openPostionPage",
  title: "Open Position Pages",
  type: "document",
  initialValue: {
    formHeader:
      "LEGG IGJEN KONTAKTINFORMASJONEN DIN HER, SÅ TAR VI KONTAKT MED DEG!",
    formDescription:
      "Vi kommer til å be deg sende over CV og eventuelt andre ting vi trenger for å vurdere deg for stillingen. Du kan gjerne sende din CV til oss på hei@alv.no allerede nå. Vi gleder oss til å høre fra deg!",
  },
  fields: [
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "pageTitle",
        maxLength: 96,
      },
      validation: (Rule) =>
        Rule.required().warning("This field cannot be empty"),
    },
    {
      name: "pageTitle",
      title: "Page Title",
      type: "string",
      options: {
        maxLength: 60,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "pageDescription",
      title: "Page Description",
      type: "text",
      rows: 2,
      options: {
        maxLength: 160,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "heroImage",
      title: "Hero Background Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "formHeader",
      title: "Form Header",
      type: "text",
      rows: 2,
      validation: (Rule) => Rule.required(),
    },
    {
      name: "formDescription",
      title: "Form Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    },
    {
      name: "jobDescription",
      title: "Job Description",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    },
  ],
};
