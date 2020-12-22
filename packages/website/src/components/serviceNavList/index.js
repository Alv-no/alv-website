import React from 'react';
import Link from 'gatsby-link';
import { Title } from '../title';

export const ServiceNavList = ({ nav }) => (
  <div className="px-12">
    <div className="max-w-1200 mx-auto pt-16 w-full tracking-wider">
      <nav className="mx-auto grid" style={{ gridTemplateColumns: '35% auto' }}>
        <ul className="text-lg list-style-none text-navynav opacity-80 tracking-wider">
          {nav.map((el) => (
            <li className="mb-7">
              <Link to={`#${el}`}>{el}</Link>
            </li>
          ))}
        </ul>
        <div className="font-light mb-15">
          <div>
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
