const React = require("react");

const headerTags = [
  <script src="https://js.chatlio.com/widget.js" async></script>,
  <script
    defer
    data-domain="alv.no"
    src="https://plausible.io/js/script.tagged-events.js"
  ></script>,
];

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents(headerTags);
};
