import React from 'react';
import Link from 'gatsby-link';
import * as Button from '../button';
import { Title } from '../title';
import { BgImage } from 'gbimage-bridge';

export const ImageTextListHero = ({
  image,
  positionsListRight,
  positionsListLeft,
}) => {
  return (
    <div className="bg-navy">
      <div
        className="max-w-1440 mx-auto flex flex-col-reverse sm:flex-row text-white twelve:grid gap-x-10 tracking-wider sm:px-12 px-5"
        style={{ gridTemplateColumns: '25% auto' }}
      >
        <div className="h-full sm:pt-25 sm:-ml-12 flex -ml-5 items-end sm:mt-32 twelve:mt-0">
          <BgImage image={image}>
            <div className="bg-black bg-opacity-30 flex sm:justify-end justify-start sm:items-center items-end px-5 py-7 sm:p-0 twelve:h-620 sm:h-60vh lg:w-386 sm:w-277 w-screen h-50vh">
              <div className="font-semibold twelve:hidden text-4xl w-5/6 sm:w-auto uppercase sm:hidden md:block absolute tracking-wider transform sm:translate-x-64 sm:translate-y-20">
                Alv søker medarbeidere
              </div>
            </div>
          </BgImage>
        </div>
        <div className="pb-10">
          <div className="text-xl twelve:ml-20 font-light items-end flex text-blog">
            <div className="relative hidden twelve:block -ml-20">
              <div className="font-semibold text-4xl uppercase absolute transform -translate-y-40 tracking-wider -translate-x-32">
                Alv søker medarbeidere
              </div>
            </div>
            <div className="twelve:ml-56 2xl:mr-30 h-screen sm:h-auto flex flex-col justify-center sm:block -mt-15 items-center sm:mt-0 text-center sm:text-left sm:px-0 xs:px-5">
              <Title align="center sm:text-left">Jobbe i alv</Title>
              <p className="mb-8 mt-6 text-xl twelve:pr-25">
                Vi bygger Norges mest attraktive konsulentselskap. For å lykkes
                med dette, trenger vi flere medarbeidere. Vi trenger all
                kompetanse relatert til systemutvikling.
              </p>
              <p className="text-xl twelve:pr-25 relative">
                Det vil si blant annet systemutviklere, testledere, teknisk
                testere, funksjonelle arkitekter og prosjektledere. Hvis du tror
                du kan være rett for Alv, håper vi du sender oss en CV og
                søknad.
              </p>
            </div>
          </div>
          <div className="ml-18 hidden twelve:block mr-40 mt-15 lg:pl-8 xl:pl-0">
            <Title color="text-white" underline align="left" size="text-xl">
              Åpne stillinger
            </Title>
          </div>
          <div className="text-white hidden twelve:flex grid sm:grid-cols-2 mt-5 w-full lg:pl-8 xl:pl-0 ml-18 mr-40 twelve:max-w-720">
            <div className="divide-y-2 divide-white divide-solid h-full lg:pr-7 xl:pr-15 flex flex-col justify-end w-full flex-1">
              {positionsListLeft.map((el) => (
                <Roles link={el.slug.current}>{el.pageTitle}</Roles>
              ))}
            </div>
            <div className="divide-y-2 divide-white divide-solid h-full flex flex-col justify-end w-full flex-1 mr-10">
              {positionsListRight.map((el) => (
                <Roles link={el.slug.current}>{el.pageTitle}</Roles>
              ))}
              <Mail link="mailto: hei@alv.no">Send inn åpen søknad</Mail>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-10 sm:px-12 twelve:hidden px-5 twelve:pl-8 xl:pl-0">
        <Title color="text-white" underline align="left" size="text-xl">
          Åpne stillinger
        </Title>
      </div>
      <div className="text-white  twelve:hidden grid gap-x-10 sm:grid-cols-2 sm:px-12 px-5 mt-5 sm:mt-5 pb-10">
        <div className="border-b-2 border-divide sm:border-none divide-y-2 divide-divide mr-10 divide-solid h-full lg:pr-7 xl:pr-15 flex flex-col justify-end w-full flex-1">
          {positionsListLeft.map((el) => (
            <Roles link={el.slug.current}>{el.pageTitle}</Roles>
          ))}
        </div>
        <div className="divide-y-2 divide-divide divide-solid h-full flex flex-col justify-end w-full flex-1 mr-10">
          {positionsListRight.map((el) => (
            <Roles link={el.slug.current}>{el.pageTitle}</Roles>
          ))}
          <Mail link="mailto: hei@alv.no">Send inn åpen søknad</Mail>
        </div>
      </div>
    </div>
  );
};

export const Roles = ({ children, link }) => (
  <Link to={link}>
    <div
      className={`flex w-full items-center my-2 h-10 uppercase text-white font-semibold justify-between`}
    >
      <p className="">{children}</p>
      <Button.CtaArrow />
    </div>
  </Link>
);
export const Mail = ({ children, link }) => (
  <a href={link} target="_blank" rel="noreferrer">
    <div
      className={`flex w-full items-center my-2 h-10 uppercase text-white font-semibold justify-between`}
    >
      <p className="">{children}</p>
      <Button.CtaArrow />
    </div>
  </a>
);
