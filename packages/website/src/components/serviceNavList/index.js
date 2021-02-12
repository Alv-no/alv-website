import React, { useState } from 'react';
import Image from 'gatsby-image';
import { Title } from '../title';
import PortableText from '@sanity/block-content-to-react';
import styles from './ServiceNavList.module.css';

export const ServiceNavList = ({ nav, image, raw, heading, scrollTo }) => {
  const [showText, setShowText] = useState(false);

  const revealText = () => {
    setShowText(!showText);
  };

  return (
    <div className="px-5 sm:px-12" id="oversikt">
      <div className="max-w-1200 mx-auto pt-10 sm:pt-16 w-full tracking-wider">
        <nav className="mx-auto sm:grid sm:gap-x-4 2xl:grid-cols-navlist sm:grid-cols-navlist-sm">
          <ul className="text-lg  mt-3 list-style-none text-navynav opacity-80 tracking-wider">
            {nav.map((el) => (
              <button className="mb-7 block" onClick={scrollTo} name={el.id}>
                {el.label}
              </button>
            ))}
          </ul>
          <button
            type="button"
            onClick={revealText}
            className={`font-light block sm:mb-15 sm:h-auto ${
              showText ? 'h-auto' : 'h-80'
            } h-80 -mb-10 relative overflow-hidden`}
          >
            <div
              className={`absolute ${
                showText ? 'opacity-0' : ''
              } sm:hidden bg-white w-full h-80 mt-15`}
              style={{
                background:
                  'linear-gradient(0deg, rgba(255,255,255,1) 8%, rgba(255,255,255,0.1) 100%, rgba(0,0,0,1) 100%)',
              }}
            />
            <div className="cursor-text text-left">
              <div className="z-20 relative">
                <Image fluid={image} className="hidden -mt-40 z-20" />
              </div>
              <div className="mb-10">
                <Title
                  align="left sm:text-index"
                  noDot
                  underline
                  color="text-navy"
                >
                  {heading}
                </Title>
              </div>
              <div className={styles.body}>
                <PortableText
                  blocks={raw}
                  projectId="mnr37rl0"
                  dataset="production"
                />
              </div>
            </div>
          </button>
        </nav>
      </div>
    </div>
  );
};
