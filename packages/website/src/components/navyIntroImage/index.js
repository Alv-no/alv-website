import React from 'react';
import { Title } from '../title';
import { Description } from '../description';
import Link from 'gatsby-link';
import Image from 'gatsby-image';

export const NavyIntroImage = ({ title, description, image, internalLink }) => (
  <div className="bg-navy w-full sm:pl-10 pt-10 sm:pt-16 sm:pb-15 sm:h-auto h-screen flex sm:block justify-center items-center flex-col">
    <div
      className="max-w-1440 mx-auto sm:grid sm:pl-30"
      style={{ gridTemplateColumns: '60% auto' }}
    >
      <div className="transform sm:-translate-x-5 sm:px-0 px-12 flex sm:block justify-center items-center flex-col">
        <Title align="center sm:text-left text-blog sm:text-about-xl">
          {title}
        </Title>
        <div className="sm:h-8 h-4" />
        <div className="mb-10">
          <Description align="center sm:text-left text-lg">
            {description}
          </Description>
        </div>

        <Outline link={internalLink}>Få et tilbud</Outline>
        <div className="h-20" />
      </div>
      <div className="transform 2xl:translate-y-48 twelve:translate-y-40 translate-y-56  hidden lg:block">
        <Image fluid={image} />
      </div>
    </div>
  </div>
);

export const Outline = ({ children, link }) => (
  <Link to={link}>
    <button className="text-white px-10 rounded rounded-full font-semibold text-base uppercase py-2 border border-white border-2 tracking-wider">
      {children}
    </button>
  </Link>
);
