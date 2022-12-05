import Link from 'gatsby-link';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { Description } from '../description';
import { Title } from '../title';

export const NavyIntroImage = ({
  title,
  description,
  image,
  internalLink,
  buttonText,
  white = false,
}) => (
  <div className="bg-navy w-full sm:pl-10 pt-10 sm:pt-16 sm:h-auto h-screen flex sm:block justify-center items-center flex-col relative">
    <div
      className="max-w-1200 mx-auto twelve:grid relative"
      style={{ gridTemplateColumns: '60% auto' }}
    >
      <div className="transform sm:-translate-x-5 sm:px-0 px-12 flex sm:block justify-center items-center flex-col">
        <Title align={`text-center twelve:text-left`}>
          <span
            className={`xs:inline sm:text-3xl lg:text-4xl hyphenate ${
              white ? 'text-white' : ''
            }`}
          >
            {title}
          </span>
        </Title>
        <div className="sm:h-8 h-4" />
        <div className="mb-10 flex twelve:block justify-center">
          <Description align="center twelve:text-left text-lg">
            {description}
          </Description>
        </div>
        <div className="w-full flex justify-center twelve:justify-start">
          <Outline link={internalLink}>{buttonText || 'Få et tilbud'}</Outline>
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
        <GatsbyImage image={image} alt="" />
      </div>
    </div>
  </div>
);

export const Outline = ({ children, link }) => (
  <Link to={link}>
    <button
      type="button"
      aria-label={children}
      className="text-white px-10 rounded-full font-semibold text-base uppercase py-2 border border-white border-2 tracking-wider"
    >
      {children}
    </button>
  </Link>
);
