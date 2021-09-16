import React, { useState } from 'react';
import Link from 'gatsby-link';
import * as Button from '../button';
import { BgImage } from 'gbimage-bridge';

export const OurServices = ({ text, image, title, darkFade, children }) => {
  const [activeItem, setActiveItem] = useState('1');

  const handleClick = (e) => {
    setActiveItem(e.target.id);
  };
  return (
    <>
      <div
        className="max-w-1440 sm:px-12 xl:px-0 mx-auto lg:grid xl:gap-x-10 lg:pb-12 pb-5 bg-theme-bg text-theme-text"
        style={{
          gridTemplateColumns: '1fr 1fr',
        }}
      >
        <div />
        <div className="sm:pl-0 lg:ml-0">
          <h2 className="sm:text-5xl text-4xl font-light mb-3 uppercase lg:w-full sm:w-full">
            {title || 'Våre Tjenester'}
          </h2>
          <p className="mb-5 sm:pr-15 font-light text-xl w-full text-theme-text sm:text-xl tracking-wider">
            {children || text}
          </p>

          <div className="lg:block flex justify-between">
            <div />
            <div>
              <Button.Arrow path="/vi-tilbyr">Les Mer</Button.Arrow>
            </div>
          </div>
        </div>
      </div>
      <div
        className="mx-auto lg:grid flex flex-col-reverse gap-x-10"
        style={{
          gridTemplateColumns: '1fr 1fr',
          maxWidth: '1300px',
        }}
      >
        {/* Map from array of list items */}
        <div className="w-full sm:mx-12 lg:mx-0 lg:pl-12 mt-9 text-lg sm:text-nav">
          <ul>
            <li
              className="tracking-wider font-semibold mb-8 cursor-pointer"
              id="1"
              onClick={handleClick}
            >
              <p className="uppercase pointer-events-none text-theme-text">
                Prosjektleder
              </p>
              {activeItem === '1' && (
                <ListContent link="/vi-tilbyr/prosjektledelse">
                  Kunden kjenner domenet, kravene og behovene, mens vi vet
                  hvordan vi raskest og best kan utvikle systemene som gir
                  høyest verdi, raskest mulig.
                </ListContent>
              )}
            </li>
            <li
              className="tracking-wider font-semibold mb-8 cursor-pointer"
              id="2"
              onClick={handleClick}
            >
              <p className="uppercase pointer-events-none text-theme-text">
                Systemutvikling
              </p>
              {activeItem === '2' && (
                <ListContent link="/vi-tilbyr/systemutvikling">
                  Systemutvikling er kjernen i det vi driver med. Det er jo der
                  vi faktisk lager noe. Det er kode som skaper systemene vi
                  utvikler for og sammen med kundene våre.
                </ListContent>
              )}
            </li>
            <li
              className="tracking-wider font-semibold mb-8 cursor-pointer"
              id="4"
              onClick={handleClick}
            >
              <p className="uppercase pointer-events-none text-theme-text">
                Data & Analyse
              </p>
              {activeItem === '4' && (
                <ListContent link="/vi-tilbyr/data-og-analyse">
                  I Alv tilbyr vi tjenester i spekteret fra rådgivning og
                  strategi til implementering og oppfølging, slik at enda flere
                  kan bli bedre på å utnytte de dataene de sitter på til sitt
                  fulle potensiale.
                </ListContent>
              )}
            </li>
            <li
              className="tracking-wider font-semibold mb-8 cursor-pointer"
              id="5"
              onClick={handleClick}
            >
              <p className="uppercase pointer-events-none text-theme-text">
                Informasjons<span className="xs:hidden">-</span>sikkerhet
              </p>
              {activeItem === '5' && (
                <ListContent link="/vi-tilbyr/informasjonssikkerhet">
                  Konsulentene innen informasjonssikkerhet hos Alv har god
                  erfaring med å både vurdere, teste og utvikle
                  sikkerhetstiltak.
                </ListContent>
              )}
            </li>
          </ul>
        </div>
        <div className="font-light flex flex-col justify-between h-full text-xl">
          <TextFadeImage image={image} darkFade={darkFade} />
        </div>
      </div>
    </>
  );
};

const TextFadeImage = ({ darkFade, image }) => (
  <div>
    <BgImage image={image} style={{ height: '530px' }}>
      <div
        className={`flex sm:justify-end items-center p-5 lg:pr-24 sm:p-16 ${
          darkFade && 'bg-black bg-opacity-50'
        }`}
        style={{ height: '530px' }}
      >
        <div className="text-theme-text sm:text-slider text-blog uppercase  text-left font-semibold tracking-wider leading-tighter w-5/6 sm:text-right">
          Bygget rundt systemutviklings
          <span className="">-</span>prosessen
        </div>
      </div>
    </BgImage>
  </div>
);

const ListContent = ({ children, link }) => (
  <div>
    <div className="w-12 mt-2 mb-8 h-2px bg-yellow" />
    <div className="sm:pl-10 pl-5 mb-15">
      <p className="tracking-wider text-theme-text sm:text-lg leading-snug font-extralight mb-4 sm:w-4/6 w-full lg:w-full">
        {children}
      </p>
      <div className="flex lg:-mr-24 z-40 relative items-center cursor-pointer">
        <p className="font-semibold tracking-wider uppercase text-base w-40 text-theme-text">
          <Link to={link}>Finn ut mer</Link>
        </p>
        <div className="h-2px bg-white sm:opacity-0 twelve:opacity-100 mt-1 w-1/2 lg:w-full hidden sm:block" />
      </div>
    </div>
  </div>
);
