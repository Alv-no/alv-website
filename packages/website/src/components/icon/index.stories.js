import React from 'react';
import * as Icon from '.';

export default {
  title: 'components/icon',
  decorators: [
    (Story) => (
      <div style={{ background: 'gray', padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
};

export const tag = () => <Icon.Tag />;
export const shade = () => <Icon.Shade />;
export const cv = () => <Icon.Cv />;
export const cross = () => <Icon.Cross />;
export const ctaArrow = () => <Icon.CtaArrow />;
export const dropdown = () => <Icon.Dropdown />;
export const contactArrow = () => <Icon.ContactArrow />;
