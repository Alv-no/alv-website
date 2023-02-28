import Link from "gatsby-link";
import { BgImage } from "gbimage-bridge";
import React from "react";
import * as Button from "../../../../shared-components/src/components/button";
import { Title } from "../../../../shared-components/src/components/title";

export const ImageTextListHero = ({
  image,
  positionsListRight,
  positionsListLeft,
}) => {
  return (
    <div className="bg-navy tracking-wider text-white">
      <div className="twelve:grid gap-x-16 grid-cols-[30%_auto]">
        <div className="h-full hidden twelve:block pt-20">
          <BgImage image={image}>
            <div className="font-semibold text-4xl uppercase relative z-10 transform translate-x-60 translate-y-28 h-[610px]">
              <span className="inline-block">Alv søker medarbeidere</span>
            </div>
            <div className="bg-black opacity-30 absolute h-full w-full top-0" />
          </BgImage>
        </div>
        <div>
          <div className="-mt-12 sm:mt-0 twelve:ml-44 text-blog font-light h-screen sm:h-auto flex flex-col justify-center sm:block items-center sm:mt-0 text-center sm:text-left">
            <Title align="text-center sm:text-left mb-5 sm:mt-5 twelve:mt-0">
              Jobbe i alv
            </Title>
            <p className="mb-8 text-xl">
              Vi bygger Norges mest attraktive konsulentselskap. For å lykkes
              med dette, trenger vi flere medarbeidere. Vi trenger all
              kompetanse relatert til systemutvikling.
            </p>
            <p className="text-xl relative">
              Det vil si blant annet systemutviklere, testledere, teknisk
              testere, funksjonelle arkitekter og prosjektledere. Hvis du tror
              du kan være rett for Alv, håper vi du sender oss en CV og søknad.
            </p>
          </div>

          <div className="hidden twelve:block mt-15">
            <Title
              color="text-white"
              underline
              align="text-left"
              size="text-xl"
            >
              Åpne stillinger
            </Title>
          </div>
          <div className="text-white hidden twelve:flex grid sm:grid-cols-2 mt-5 w-full mb-8 relative">
            <div className="divide-y-2 divide-white divide-solid h-full lg:pr-7 xl:pr-15 flex flex-col justify-end w-full flex-1">
              {positionsListLeft?.map((el) => (
                <Roles link={el.slug.current}>{el.pageTitle}</Roles>
              ))}
            </div>
            <div className="divide-y-2 divide-white divide-solid h-full flex flex-col justify-end w-full flex-1">
              {positionsListRight?.map((el) => (
                <Roles link={el.slug.current}>{el.pageTitle}</Roles>
              ))}
              <Mail link="mailto: hei@alv.no">Send inn åpen søknad</Mail>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 twelve:hidden">
        <Title color="text-white" underline align="text-left" size="text-xl">
          Åpne stillinger
        </Title>
      </div>
      <div className="text-white  twelve:hidden grid gap-x-5 sm:grid-cols-2 mt-5 sm:mt-5 pb-10">
        <div className="border-b-2 border-divide sm:border-none divide-y-2 divide-divide mr-10 divide-solid h-full lg:pr-7 xl:pr-15 flex flex-col justify-end w-full flex-1">
          {positionsListLeft?.map((el) => (
            <Roles link={el.slug.current}>{el.pageTitle}</Roles>
          ))}
        </div>
        <div className="divide-y-2 divide-divide divide-solid h-full flex flex-col justify-end w-full flex-1 mr-10">
          {positionsListRight?.map((el) => (
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
