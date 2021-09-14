import React from 'react';
import { Title } from '.';

export default {
  title: 'components/title',
};

export const Default = ({ children }) => <Title>{children}</Title>;
Default.args = { children: 'Hello world' };
Default.argType = {
  children: 'text',
};
