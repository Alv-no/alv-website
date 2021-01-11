import React, { useState } from 'react';
import Link from 'gatsby-link';
import BackgroundImage from 'gatsby-background-image-es5';

const dummyLink = '/';
const dummyText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt';

export const OurServices = ({ image }) => {
  const [activeItem, setActiveItem] = useState('1');

  const handleClick = (e) => {
    setActiveItem(e.target.id);
  };
  return (
    <div
      className="max-w-1440 mx-auto grid gap-x-10 pb-20 bg-navy text-white"
      style={{
        gridTemplateColumns: '1fr 1fr',
      }}
    >
      {/* Map from array of list items */}
      <div className="w-full pl-12">
        <ul>
          <li
            className="text-nav tracking-wider font-semibold mb-8 cursor-pointer"
            id="1"
            onClick={handleClick}
          >
            <p className="uppercase pointer-events-none">Systemutvikling</p>
            {activeItem === '1' && (
              <ListContent description={dummyText} link={dummyLink} />
            )}
          </li>
          <li
            className="text-nav tracking-wider font-semibold mb-8 cursor-pointer"
            id="2"
            onClick={handleClick}
          >
            <p className="uppercase pointer-events-none">Prosjektledelse</p>
            {activeItem === '2' && (
              <ListContent description={dummyText} link={dummyLink} />
            )}
          </li>
          <li
            className="text-nav tracking-wider font-semibold mb-8 cursor-pointer"
            id="3"
            onClick={handleClick}
          >
            <p className="uppercase pointer-events-none">Digitalisering</p>
            {activeItem === '3' && (
              <ListContent description={dummyText} link={dummyLink} />
            )}
          </li>
          <li
            className="text-nav tracking-wider font-semibold mb-8 cursor-pointer"
            id="4"
            onClick={handleClick}
          >
            <p className="uppercase pointer-events-none">Data & Analyse</p>
            {activeItem === '4' && (
              <ListContent description={dummyText} link={dummyLink} />
            )}
          </li>
          <li
            className="text-nav tracking-wider font-semibold mb-8 cursor-pointer"
            id="5"
            onClick={handleClick}
          >
            <p className="uppercase pointer-events-none">
              Informasjonssikkerhet
            </p>
            {activeItem === '5' && (
              <ListContent description={dummyText} link={dummyLink} />
            )}
          </li>
        </ul>
      </div>
      <div className="font-light flex flex-col justify-between h-full text-xl">
        <div>
          <BackgroundImage fluid={image} style={{ height: '530px' }}>
            <div
              className="flex justify-end items-center p-16 bg-black bg-opacity-50"
              style={{ height: '530px' }}
            >
              <div className="text-slider uppercase font-semibold tracking-wider leading-tighter w-5/6 text-right">
                Quis autem vel eum iure reprehende
              </div>
            </div>
          </BackgroundImage>
        </div>
      </div>
    </div>
  );
};

const ListContent = ({ description, link }) => (
  <div>
    <div className="w-12 mt-2 mb-12 h-2px bg-yellow" />
    <div className="pl-10 mb-15">
      <p className="tracking-wider text-lg leading-snug font-thin mb-4">
        {description}
      </p>
      <div className="flex -mr-24 z-40 relative items-center cursor-pointer">
        <p className="font-semibold tracking-wider uppercase text-base w-54">
          <Link to={link}>Find out more</Link>
        </p>
        <div className="h-2px bg-white w-full" />
      </div>
    </div>
  </div>
);
