import React from 'react';
import * as Button from '.';

export default {
  title: 'components/button',
};

export const Arrow = (args) => <Button.Arrow {...args} />;
Arrow.args = {
  children: 'Test',
};

export const Line = (args) => <Button.Line {...args} />;
Line.args = {
  children: 'Test',
};

export const OvalSimple = (args) => <Button.OvalSimple {...args} />;
OvalSimple.args = {
  children: 'Test',
};
OvalSimple.argTypes = { onClick: { action: 'clicked' } };

export const FormSelect = (args) => <Button.FormSelect {...args} />;
FormSelect.args = {
  children: 'Test',
  active: false,
  id: 'id',
};
FormSelect.argTypes = { onClick: { action: 'clicked' } };
