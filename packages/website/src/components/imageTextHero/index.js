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
              Vi bygger Norges mest attraktive konsulentselskap. Alt vi gjør i
              Alv bygger opp under visjonen vår. Vi ønsker å være et sted du har
              muligheten til å utvikle deg raskere enn du har andre steder.
            </p>
            <p className=" mb-8 text-xl relative">
              Engasjement og utvikling står i sentrum av kulturen vår, derfor
              har du i Alv en unik mulighet til medbestemmelse og påvirkning på
              områder som interesserer deg.
            </p>
            <p className="mb-8 text-xl">
              Å være konsulent betyr mer enn bare timeføring. Bli bedre kjent
              med oss under.
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
                <RoleLink link={el.slug.current}>{el.pageTitle}</RoleLink>
              ))}
            </div>
            <div className="divide-y-2 divide-white divide-solid h-full flex flex-col justify-end w-full flex-1">
              {positionsListRight?.map((el) => (
                <RoleLink link={el.slug.current}>{el.pageTitle}</RoleLink>
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
            <RoleLink link={el.slug.current}>{el.pageTitle}</RoleLink>
          ))}
        </div>
        <div className="divide-y-2 divide-divide divide-solid h-full flex flex-col justify-end w-full flex-1 mr-10">
          {positionsListRight?.map((el) => (
            <RoleLink link={el.slug.current}>{el.pageTitle}</RoleLink>
          ))}
          <Mail link="mailto: hei@alv.no">Send inn åpen søknad</Mail>
        </div>
      </div>
    </div>
  );
};

export const RoleLink = ({ children, link }) => (
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
