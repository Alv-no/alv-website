import React from 'react';
import Link from 'gatsby-link';
import * as Icon from '../icon';
import * as Logo from '../logo';

const LargeLink = ({ children, margin }) => (
  <h2
    className={`text-white font-bold tracking-widest ${margin} uppercase text-nav`}
  >
    {children}
    <span className="text-yellow">.</span>
  </h2>
);

const Subtitle = ({ children, margin }) => (
  <h2 className={`uppercase text-lg ${margin} tracking-widest`}>{children}</h2>
);

const ListLink = ({ children, link }) => (
  <li className="text-base uppercase font-light mb-4 tracking-wider">
    <Link to={link}>{children}</Link>
  </li>
);

export const Navigation = ({ open, toggleClose }) => {
  return (
    <header
      className={`text-white tracking-wider absolute z-50 h-full w-full bg-navy p-8 top-0 transition duration-300 ${
        open ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="flex justify-between mx-auto auto mb-25 max-w-1200 items-center">
        <div className="w-32" />
        <span className="">
          <Link to="/">
            <Logo.White />
          </Link>
        </span>
        <div className="flex w-32">
          <Icon.Instagram />
          <span className="mr-4 ml-6">
            <Icon.Twitter />
          </span>
          <Icon.Facebook />
        </div>
      </div>
      <div className="flex justify-between max-w-1000 mx-auto">
        <div>
          <LargeLink margin="mb-12">Vi Tilbyr</LargeLink>
          <Subtitle margin="mb-10">Systemutvikling</Subtitle>
          <ul className="">
            <ListLink link="/">.Net Utvikler</ListLink>
            <ListLink link="/">Java Utvikler</ListLink>
            <ListLink link="/">c# Utvikler</ListLink>
            <ListLink link="/">Agile &amp; Devops</ListLink>
            <ListLink link="/">Applikasjonsutvikling</ListLink>
            <ListLink link="/">Web Utvikler</ListLink>
            <ListLink link="/">Teknisk Tester</ListLink>
          </ul>
          <Subtitle margin="mt-12">Prosjektledelse</Subtitle>
          <Subtitle margin="mt-7">Digitalisering</Subtitle>
        </div>
        <div className="transform translate-x-5">
          <Subtitle margin="mt-20 pt-1">Data &amp; Analyse</Subtitle>
          <ul className="mt-10">
            <ListLink link="/">Data Rådivning/Strategi</ListLink>
            <ListLink link="/">Business Intelligence</ListLink>
            <ListLink link="/">Maskinlæring &amp; AI</ListLink>
            <ListLink link="/">Agile &amp; Devops</ListLink>
            <ListLink link="/">Opplæring</ListLink>
          </ul>
          <Subtitle margin="mt-12">Informasjonssikkerhet</Subtitle>
          <ul className="mt-10">
            <ListLink link="/">Sikkerhetstesting</ListLink>
            <ListLink link="/">Cloud Security</ListLink>
          </ul>
        </div>
        <div>
          <LargeLink margin="mb-12">Jobbe i Alv</LargeLink>
          <LargeLink margin="mb-12">Selskapet</LargeLink>
          <Subtitle margin="mb-6">Om Oss</Subtitle>
          <Subtitle margin="mb-6">Aktuelt</Subtitle>
          <Subtitle margin="mb-6">
            <Link to="/ansatte">Ansatte</Link>
          </Subtitle>
          <LargeLink margin="mt-12">Videoserie</LargeLink>
          <LargeLink margin="mt-12">Blogg</LargeLink>
          <LargeLink margin="mt-12">
            <Link to="kontakt-oss">Kontakt Oss</Link>
          </LargeLink>
        </div>
      </div>
      <div className="flex justify-center mt-24">
        <span className="cursor-pointer" onClick={toggleClose}>
          <Icon.Cross />
        </span>
      </div>
    </header>
  );
};
