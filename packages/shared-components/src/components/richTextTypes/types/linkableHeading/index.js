import React from 'react';

const LinkableHeading = (props) => {
  const formattedEl = props.node.Heading?.split(' ').join('-');
  const navElement = formattedEl?.toLowerCase();
  return <h2 id={navElement}>{props.node.Heading}</h2>;
};

export default LinkableHeading;
