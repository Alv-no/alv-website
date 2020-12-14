import React from 'react';
import * as Button from '.';

export default {
  title: 'components/button',
};

export const Arrow = () => <Button.Arrow>Test</Button.Arrow>;
export const line = () => (
  <Button.Line onClick={() => console.log('Click')}>Test</Button.Line>
);
export const OvalSimple = () => (
  <Button.OvalSimple onClick={() => console.log('Click')}>
    Test
  </Button.OvalSimple>
);
export const FormSelect = () => (
  <Button.FormSelect
    id="id"
    active={false}
    onClick={() => console.log('Click')}
  >
    Test
  </Button.FormSelect>
);
