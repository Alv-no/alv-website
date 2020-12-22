import React from 'react';
import { Title } from '../title';
import * as Button from '../button';
import Link from 'gatsby-link';
import BackgroundImage from 'gatsby-background-image-es5';

export const ImageTextListHero = ({ image }) => (
  <div className="bg-navy">
    <div
      className="max-w-1440 mx-auto text-white grid gap-x-10 tracking-wider"
      style={{ gridTemplateColumns: '25% auto' }}
    >
      <div className="h-full pt-25 flex items-end">
        <BackgroundImage fluid={image}>
          <div
            className="w-full h-full bg-black opacity-30"
            style={{ height: '620px', width: '386px' }}
          />
        </BackgroundImage>
      </div>
      <div>
        <div className="text-xl font-light items-end  flex text-blog">
          <div className="relative">
            <div className="font-semibold uppercase absolute transform -translate-y-40 tracking-wider -translate-x-32">
              Alv søker medarbeidere
            </div>
          </div>
          <div className="ml-56 mr-30 ">
            <Title align="left">Prosjektledelse</Title>
            <p className="mb-8 mt-6 text-xl pr-25">
              Vi bygger Norges mest attraktive konsulentselskap. For å lykkes
              med dette, trenger vi flere medarbeidere. Vi trenger all
              kompetanse relatert til systemutvikling.
            </p>
            <p className="text-xl pr-25">
              Det vil si blant annet systemutviklere, testledere, teknisk
              testere, funksjonelle arkitekter og prosjektledere. Hvis du tror
              du kan være rett for Alv, håper vi du sender oss en CV og søknad.
            </p>
          </div>
        </div>
        <div className="ml-18 mr-40 mt-15">
          <Title color="text-white" underline align="left" size="text-xl">
            Åpne stillinger
          </Title>
        </div>
        <div
          className="text-white flex mt-5 w-full ml-18 mr-40"
          style={{ maxWidth: '720px' }}
        >
          <div className="divide-y-2 divide-white divide-solid h-full pr-15 flex flex-col justify-end w-full flex-1">
            <Roles>Java utvikler</Roles>
            <Roles>c# utvikler</Roles>
            <Roles>Agile & Devops</Roles>
          </div>
          <div className="divide-y-2 divide-white divide-solid h-full flex flex-col justify-end w-full flex-1">
            <Roles>Applikasjonsutvikling</Roles>
            <Roles>WEB utvikler</Roles>
            <Roles>Teknisk Tester</Roles>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const Roles = ({ children }) => (
  <Link to="/systemutvikling">
    <div
      className={`flex w-full items-center my-2 h-10 uppercase text-white font-semibold justify-between`}
    >
      <p className="">{children}</p>
      <Button.CtaArrow />
    </div>
  </Link>
);
