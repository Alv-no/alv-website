import React from 'react';
import { Title } from '../title';
import { Description } from '../description';
import Link from 'gatsby-link';
import Image from 'gatsby-image';

export const NavyIntroImage = ({ title, description, image, internalLink }) => (
  <div className="bg-navy w-full sm:pl-10 pt-10 sm:pt-16 sm:h-auto h-screen flex sm:block justify-center items-center flex-col relative">
    <div
      className="max-w-1200 mx-auto twelve:grid relative"
      style={{ gridTemplateColumns: '60% auto' }}
    >
      <div className="transform sm:-translate-x-5 sm:px-0 px-12 flex sm:block justify-center items-center flex-col">
        <Title align="center twelve:text-left text-blog sm:text-about-xl">
          {title}
        </Title>
        <div className="sm:h-8 h-4" />
        <div className="mb-10 flex twelve:block justify-center">
          <Description align="center twelve:text-left text-lg">
            {description}
          </Description>
        </div>
        <div className="w-full flex justify-center twelve:justify-start">
          <Outline link={internalLink}>Få et tilbud</Outline>
        </div>
        <div className="h-30 twelve:h-20" />
      </div>
    </div>
    <div
      style={{ height: '50vh', width: '70vh' }}
      className="twelve:absolute twelve:block overflow-hidden right-0 bottom-0 transform translate-y-18 hidden"
    >
      <Image fluid={image} />
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
