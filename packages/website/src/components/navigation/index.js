import React from 'react';
import Link from 'gatsby-link';
import * as Icon from '../icon';
import * as Logo from '../logo';
import { LargeLink, Subtitle, ListLink, List } from '../navItems';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const ConditionalWrapper = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children;

export const Navigation = ({ open, toggleClose }) => {
  const { width } = useWindowDimensions();
  return (
    <header
      className={`text-white tracking-wider fixed overflow-y-scroll z-50 h-screen w-screen bg-navy p-6 sm:p-8 left-0 top-0 transition duration-300 ${
        open ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      style={{ zIndex: 999 }}
    >
      <div className="eight:flex relative z-40 justify-between mx-auto auto eight:mb-0 2xl:mb-25 max-w-1200 items-center mb-12 eight:mb-0">
        <div className="w-32" />
        <span className="">
          <Link to="/">
            <Logo.White />
          </Link>
        </span>
        <div className="eight:flex w-32 hidden">
          <Icon.Instagram />
          <span className="mr-4 ml-6">
            <Icon.Twitter />
          </span>
          <Icon.Facebook />
        </div>
      </div>
      <div className="eight:flex eight:mx-auto justify-between max-w-1000 -mx-6 sm:-mx-8">
        <ConditionalWrapper
          condition={width >= 800}
          wrapper={(children) => <div>{children}</div>}
        >
          <LargeLink link="/vi-tilbyr" margin="eight:mb-10 2xl:mb-12">
            Vi Tilbyr
          </LargeLink>
          <div>
            <Subtitle link="/systemutvikling" margin="eight:mb-8 2xl:mb-10">
              Systemutvikling
            </Subtitle>
            <List>
              <ListLink link="/vi-tilbyr/c-utvikler">.Net Utvikler</ListLink>
              <ListLink link="/vi-tilbyr/c-utvikler">Java Utvikler</ListLink>
              <ListLink link="/vi-tilbyr/c-utvikler">c# Utvikler</ListLink>
              <ListLink link="/vi-tilbyr/c-utvikler">
                Agile &amp; Devops
              </ListLink>
              <ListLink link="/vi-tilbyr/c-utvikler">
                Applikasjonsutvikling
              </ListLink>
              <ListLink link="/vi-tilbyr/c-utvikler">Web Utvikler</ListLink>
              <ListLink link="/vi-tilbyr/c-utvikler">Teknisk Tester</ListLink>
            </List>
          </div>
          <div>
            <Subtitle link="/systemutvikling" margin="eight:mt-12">
              Prosjektledelse
            </Subtitle>
            <Subtitle link="/systemutvikling" margin="eight:mt-7">
              Digitalisering
            </Subtitle>
          </div>
        </ConditionalWrapper>
        <ConditionalWrapper
          condition={width >= 800}
          wrapper={(children) => (
            <div className="transform eight:translate-x-5 w-screen eight:w-auto cursor-pointer">
              {children}
            </div>
          )}
        >
          <div>
            <Subtitle margin="eight:mt-32 eight:pt-2 2xl:pt-4">
              Data &amp; Analyse
            </Subtitle>
            <List>
              <ListLink link="/vi-tilbyr/c-utvikler">
                Data Rådivning/Strategi
              </ListLink>
              <ListLink link="/vi-tilbyr/c-utvikler">
                Business Intelligence
              </ListLink>
              <ListLink link="/vi-tilbyr/c-utvikler">
                Maskinlæring &amp; AI
              </ListLink>
              <ListLink link="/vi-tilbyr/c-utvikler">
                Agile &amp; Devops
              </ListLink>
              <ListLink link="/vi-tilbyr/c-utvikler">Opplæring</ListLink>
            </List>
          </div>
          <div>
            <Subtitle margin="mt-12">Informasjonssikkerhet</Subtitle>
            <List>
              <ListLink link="/vi-tilbyr/c-utvikler">
                Sikkerhetstesting
              </ListLink>
              <ListLink link="/vi-tilbyr/c-utvikler">Cloud Security</ListLink>
            </List>
          </div>
        </ConditionalWrapper>
        <ConditionalWrapper
          condition={width >= 800}
          wrapper={(children) => (
            <div className="eight:relative absolute w-screen eight:w-auto">
              {children}
            </div>
          )}
        >
          <LargeLink
            link="/jobbe-i-alv"
            margin="eight:mb-10 2xl:mb-12 relative"
          >
            Jobbe i Alv
          </LargeLink>
          <div>
            <LargeLink margin="eight:mb-10 2xl:mb-12">Selskapet</LargeLink>
            <div>
              <Subtitle link="/om-oss" margin="eight:mb-5 2xl:mb-6">
                Om Oss
              </Subtitle>
              <Subtitle link="/" margin="eight:mb-5 2xl:mb-6">
                Aktuelt
              </Subtitle>
              <Subtitle link="/ansatte" margin="eight:mb-5 2xl:mb-6">
                Ansatte
              </Subtitle>
            </div>
          </div>
          <LargeLink link="/videoserie" margin="eight:mt-10 2xl:mt-12">
            Videoserie
          </LargeLink>
          <LargeLink link="/blogg" margin="eight:mt-10 2xl:mt-12">
            Blogg
          </LargeLink>
          <LargeLink link="/kontakt-oss" margin="eight:mt-1≤0 2xl:mt-12">
            Kontakt Oss
          </LargeLink>
        </ConditionalWrapper>
      </div>
      <div className="eight:flex justify-center eight:mt-0 2xl:mt-15 eight:mr-0 eight:relative absolute top-0 right-0 mt-5 mr-5 sm:mt-8 sm:mr-8 transform scale-70 sm:scale-80 eight:scale-90">
        <span className="cursor-pointer" onClick={toggleClose}>
          <Icon.Cross />
        </span>
      </div>
    </header>
  );
};
