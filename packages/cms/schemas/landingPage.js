import React from "react";
const highlightIcon = () => <span style={{ background: "#eabb26" }}>G</span>;
const highlightRender = (props) => (
  <span style={{ color: "#eabb26", fontWeight: "bold", fontSize: "35px" }}>
    {props.children}
  </span>
);

export default {
  name: "landingPage",
  title: "Landing Page",
  type: "document",
  fields: [
    {
      name: "pageTitle",
      title: "Page Title (meta)",
      type: "string",
      options: {
        maxLength: 60,
      },
    },
    {
      name: "pageDescription",
      title: "Page Description (meta) topp-bar",
      type: "text",
      rows: 2,
      options: {
        maxLength: 160,
      },
    },

    {
      type: "image",
      title: "Bakgrunnsbilde introduksjon",
      name: "topBackgroundImage",
    },

    // Top page section
    {
      name: "introduction",
      title: "Introduksjons-tekst topp-bar",
      type: "array",
      of: [
        {
          type: "block",
          marks: {
            decorators: [
              {
                title: "ALV-GUL",
                value: "alv-yellow",
                blockEditor: {
                  icon: highlightIcon,
                  render: highlightRender,
                },
              },
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
          },
        },
      ],
    },
    {
      name: "introductionSubheader",
      title: "Introduksjon brødtekst topp-bar",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Yellow", value: "yellow" },
          ],
        },
      ],
    },
    {
      name: "contactSchemaVisible",
      title: "Vis kontaktskjema topp-bar",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "showCallToAction",
      title: "Vis Call to action",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "ctaPosition",
      title: "CTA posisjon",
      type: "string",
      options: {
        list: ["left", "center", "right"],
        layout: "radio",
        direction: "horizontal",
      },
    },
    {
      name: "callToAction",
      title: "Call to action topp-bar",
      type: "heroCta",
      options: {
        collapsible: false,
      },
    },

    // Hero section
    {
      name: "heroVideoWebm",
      title: "Hero Video: webm",
      type: "file",
    },
    {
      name: "heroVideoMp4",
      title: "Hero Video: mp4",
      type: "file",
    },
    {
      name: "videoWebm",
      title: "Video Introduction: webm",
      type: "file",
    },
    {
      name: "videoMp4",
      title: "Video Introduction: mp4",
      type: "file",
    },
    {
      name: "videoTextOverlay",
      title: "Video Text Overlay",
      type: "string",
      options: {
        maxLength: 60,
      },
    },
    {
      name: "aboutTitle",
      title: "About Title",
      type: "string",
      options: {
        maxLength: 60,
      },
    },
    {
      name: "aboutText",
      title: "About Text",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
        },
      ],
    },
    // Section 1
    {
      name: "flipSection1Image",
      title: "Section 1: image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "flipSection1Title",
      title: "Section 1: title",
      type: "string",
      options: {
        maxLength: 60,
      },
    },
    {
      name: "flipSection1Text",
      title: "Section 1: text",
      type: "text",
      rows: 2,
      options: {
        maxLength: 160,
      },
    },
    {
      name: "flipSection1ButtonText",
      title: "Section 1: button text",
      type: "string",
      options: {
        maxLength: 60,
      },
    },
    {
      name: "flipSection1ButtonLink",
      title: "Section 1: button link",
      type: "string",
      options: {
        maxLength: 60,
      },
    },
    // Section 2
    {
      name: "section2Services",
      title: "Section 2: Services",
      type: "servicesIntro",
    },
    {
      name: "brands",
      title: "Brands",
      type: "brands",
    },
    // Section 3
    {
      name: "flipSection3Image",
      title: "Section 3: image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "flipSection3Title",
      title: "Section 3: title",
      type: "string",
      options: {
        maxLength: 60,
      },
    },
    {
      name: "flipSection3Text",
      title: "Section 3: text",
      type: "text",
      rows: 2,
      options: {
        maxLength: 160,
      },
    },
    {
      name: "flipSection3TextOverImage",
      title: "Section 3: text over image",
      type: "string",
      options: {
        maxLength: 60,
      },
    },
    {
      name: "blogCarousel",
      title: "Section 4: Blog carousel",
      type: "blogCarousel",
    },
  ],
};
