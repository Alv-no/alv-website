const React = require("react");

const headerTags = [
  <script
    defer
    data-domain="alv.no"
    src="https://plausible.io/js/script.tagged-events.js"
  ></script>,
];

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents(headerTags);
};
