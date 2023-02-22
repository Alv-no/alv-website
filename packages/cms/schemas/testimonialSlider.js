export default {
  title: "Testimonial Slider",
  name: "testimonialSlider",
  type: "object",
  fields: [
    {
      name: "heading",
      type: "string",
      options: {
        maxLength: 40,
      },
    },
    {
      name: "testimonials",
      type: "array",
      of: [{ type: "reference", to: { type: "testimonial" } }],
    },
  ],
};
