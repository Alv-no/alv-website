import React from 'react';

export const companyRichTextTypes = {
  types: {
    linkableHeading: (props) => {
      const formattedEl = props.node.Heading.split(' ').join('-');
      const navElement = formattedEl.toLowerCase();
      return <h2 id={navElement}> {props.node.Heading}</h2>;
    },
  },
};
