import React from 'react';
import { Title } from '../title';
import { Description } from '../description';
import Link from 'gatsby-link';
import Image from 'gatsby-image';

export const NavyIntroImage = ({ title, description, image }) => (
  <div className="bg-navy w-full pl-10 pt-10 sm:pt-16 sm:pb-15 pb-4">
    <div
      className="max-w-1440 mx-auto grid pl-30"
      style={{ gridTemplateColumns: '60% auto' }}
    >
      <div className="transform -translate-x-5">
        <Title align="left">{title}</Title>
        <div className="sm:h-8 h-4" />
        <div className="mb-10">
          <Description align="left">{description}</Description>
        </div>

        <Outline>Få et tilbud</Outline>
      </div>
      <div className="transform translate-y-30">
        <Image fluid={image} />
      </div>
    </div>
  </div>
);

export const Outline = ({ children, link }) => (
  <Link link={link}>
    <button className="text-white px-10 rounded rounded-full font-semibold text-base uppercase py-2 border border-white border-2 tracking-wider">
      {children}
    </button>
  </Link>
);
