import React from 'react';
import Link from 'gatsby-link';
import Image from 'gatsby-image';
import { Title } from '../title';

export const ServiceNavList = ({ nav, image }) => (
  <div className="px-5 sm:px-12">
    <div className="max-w-1200 mx-auto pt-10 sm:pt-16 w-full tracking-wider">
      <nav className="mx-auto sm:grid sm:gap-x-4 lg:grid-cols-navlist sm:grid-cols-navlist-sm">
        <ul className="text-lg list-style-none text-navynav opacity-80 tracking-wider">
          {nav.map((el) => (
            <li className="mb-7">
              <Link to={`#${el}`}>{el}</Link>
            </li>
          ))}
        </ul>
        <div className="font-light sm:mb-15 sm:h-auto h-80 -mb-10 relative overflow-hidden">
          <div
            className="absolute sm:hidden bg-white w-full h-80 mt-15 "
            style={{
              background:
                'linear-gradient(0deg, rgba(255,255,255,1) 8%, rgba(255,255,255,0.1) 100%, rgba(0,0,0,1) 100%)',
            }}
          />
          <div>
            <div className="z-20 relative">
              <Image fluid={image} className="hidden -mt-40 z-20" />
            </div>
            <div className="mb-10">
              <Title align="left" underline color="text-navy">
                Om C#-Utvikler
              </Title>
            </div>
            <p className="mb-7">
              Dolor sit amet, consectetur adipisifwcing elit, sed do eiusmod
              tempor incididunt ut labore et dolore roipi magna.dolor sit amet,
              consectetur adipisifwcing elit, sed do eiusmod tempor incididunt
              ut labore et dolore roipi magna.dolor sit amet, consectetur
              adipisifwcing elit, sed do eiusmod tempor incididunt ut labore et
              dolore roipi magna.
            </p>
            <p>
              Sed do eiusmod tempor incididunt ut labore et dolore roipi
              magna.dolor sit amet, consectetur adipisifwcing elit, sed do
              eiusmod tempor incididunt ut labore et dolore roipi magna.
            </p>
          </div>
          <div>
            <div className="mb-2 mt-12">
              <h3 className="text-blog font-semibold w-4/6">
                Excepteur sint occaeuiecat cupidatat.
              </h3>
            </div>
            <p className="mb-7">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut ero labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco poriti
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in uienply voluptate velit esse cillum
              dolore eu fugiat nulla pariatur.
            </p>
            <p className="mb-7">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut ero labore et dolore magna aliqua.
            </p>
            <p className="font-lg font-light italic">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
        </div>
      </nav>
    </div>
  </div>
);
