import React from 'react';
import { Title } from '../title';
import { Description } from '../description';
import Link from 'gatsby-link';
import Image from 'gatsby-image';

export const NavyIntroImage = ({
  title,
  description,
  image,
  internalLink,
  headingSplit,
}) => (
  <div className="bg-navy w-full sm:pl-10 pt-10 sm:pt-16 sm:h-auto h-screen flex sm:block justify-center items-center flex-col relative">
    <div
      className="max-w-1200 mx-auto twelve:grid relative"
      style={{ gridTemplateColumns: '60% auto' }}
    >
      <div className="transform sm:-translate-x-5 sm:px-0 px-12 flex sm:block justify-center items-center flex-col">
        <Title align={`center twelve:text-left`}>
          <span
            className={`${
              headingSplit && 'hidden'
            } xs:inline sm:text-3xl lg:text-4xl`}
          >
            {title}
          </span>
          {headingSplit && <span className="xs:hidden">{headingSplit}</span>}
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
    <div className="block w-screem relative max-w-1440 mx-auto">
      <div
        style={{
          height: '20vw',
          width: '32vw',
          maxWidth: '540px',
          maxHeight: '340px',
        }}
        className="twelve:absolute twelve:block right-0 bottom-0 transform hidden translate-y-8"
      >
        <Image fluid={image} />
      </div>
    </div>
  </div>
);

export const Outline = ({ children, link }) => (
  <Link to={link}>
    <button
      type="button"
      aria-label={children}
      className="text-white px-10 rounded rounded-full font-semibold text-base uppercase py-2 border border-white border-2 tracking-wider"
    >
      {children}
    </button>
  </Link>
);
