import React from "react";
import { Tagbar } from ".";
import jpg from "../../assets/fallback.jpg";

export default {
  title: "components/tagbar",
  decorators: [
    (Story) => (
      <div
        style={{
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const Default = ({ ...args }) => <Tagbar {...args} />;
Default.args = {
  sanityTags: [
    {
      node: {
        tag: "Data and analytics",
        id: "1",
      },
    },
    {
      node: {
        tag: "Information security",
        id: "2",
      },
    },
    {
      node: {
        tag: "Project management",
        id: "3",
      },
    },
    {
      node: {
        tag: "Development",
        id: "4",
      },
    },
  ],
  sanityEmployees: [
    {
      id: "123",
      firstname: "Eirik",
      lastname: "Helgesen",
      experience: 5,
      tags: ["Information Security"],
      title: "Leder",
      image: {
        asset: {
          fluid: {
            src: jpg,
          },
        },
      },
    },
  ],
};
