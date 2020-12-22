import React from 'react';
import { Subtitle } from '.';

export default {
  title: 'components/subtitle',
};

export const Default = ({ children }) => <Subtitle>{children}</Subtitle>;
Default.args = { children: 'Hello world' };
Default.argType = {
  children: 'text',
};
