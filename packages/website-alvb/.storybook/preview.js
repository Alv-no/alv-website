export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },

  backgrounds: {
    default: "dark",
    values: [
      {
        name: "white",
        value: "#fff",
      },
      {
        name: "dark",
        value: "#061838",
      },
    ],
  },
};

import "../src/layout/layout.css";
