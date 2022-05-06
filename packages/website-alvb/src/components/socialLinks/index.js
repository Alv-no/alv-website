import React from 'react';
import { Icon } from 'shared-components';

export const SocialLinks = ({ blue }) => (
  <div className="eight:flex hidden">
    <span className="mr-4 ml-5 pl-2px">
      <a
        href="https://www.linkedin.com/company/alv-b-as/"
        target="_blank"
        rel="noreferrer"
      >
        <Icon.Linkedin blue={blue} />
      </a>
    </span>
    <a
      href="https://www.facebook.com/AlvBNorge"
      target="_blank"
      rel="noreferrer"
    >
      <Icon.Facebook blue={blue} />
    </a>
  </div>
);
