import React from "react";
import { Facebook, Linkedin } from "shared-components/src/components/icon";

export const SocialLinks = ({ blue }) => (
  <div className="eight:flex hidden">
    <span className="mr-4 ml-5 pl-2px">
      <a
        href="https://www.linkedin.com/company/alv-b-as/"
        target="_blank"
        rel="noreferrer"
      >
        <Linkedin blue={blue} />
      </a>
    </span>
    <a
      href="https://www.facebook.com/AlvBNorge"
      target="_blank"
      rel="noreferrer"
    >
      <Facebook blue={blue} />
    </a>
  </div>
);
