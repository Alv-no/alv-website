import React, { useState } from 'react';
import Link from 'gatsby-link';
import * as Button from '../button';
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
    <>
      <div
        className="max-w-1440 mx-auto lg:grid gap-x-10 lg:pb-12 pb-5 bg-navy text-white"
        style={{
          gridTemplateColumns: '1fr 1fr',
        }}
      >
        <div />
        <div className="px-5 sm:pl-0 sm:mx-12 lg:ml-0">
          <h2 className="text-5xl font-light mb-3 uppercase lg:w-full sm:w-full">
            Våre Tjenester
          </h2>
          <p className="mb-5 pr-15 w-full font-light text-xl lg:w-full sm:w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut.
          </p>
          <div className="lg:block flex justify-between">
            <div />
            <div>
              <Link to="/om-oss">
                <Button.CtaArrow>Les Mer</Button.CtaArrow>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className="max-w-1440 mx-auto lg:grid flex flex-col-reverse gap-x-10 bg-navy text-white"
        style={{
          gridTemplateColumns: '1fr 1fr',
        }}
      >
        {/* Map from array of list items */}
        <div className="w-full px-5 sm:mx-12 lg:mx-0 lg:pl-12 mt-9">
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
    </>
  );
};

const ListContent = ({ description, link }) => (
  <div>
    <div className="w-12 mt-2 mb-8 h-2px bg-yellow" />
    <div className="pl-10 mb-15">
      <p className="tracking-wider text-lg leading-snug font-thin mb-4 sm:w-4/6 w-5/6 lg:w-full">
        {description}
      </p>
      <div className="flex lg:-mr-24 z-40 relative items-center cursor-pointer">
        <p className="font-semibold tracking-wider uppercase text-base w-40">
          <Link to={link}>Find out more</Link>
        </p>
        <div className="h-2px bg-white mt-1 w-1/2 lg:w-full hidden sm:block" />
      </div>
    </div>
  </div>
);
