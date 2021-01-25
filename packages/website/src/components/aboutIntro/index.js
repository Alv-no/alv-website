import React from 'react';
import Image from 'gatsby-image';
import { Title } from '../title';

export const AboutIntro = ({ topImg, bottomImg }) => {
  return (
    <div
      className="max-w-1440 mx-auto lg:grid flex flex-col-reverse gap-x-20 lg:py-15"
      style={{
        gridTemplateColumns: '1fr 1fr',
      }}
    >
      <div className="w-full">
        <Image
          fluid={topImg}
          style={{ height: '600px', width: '100%' }}
          className="md:pl-56 lg:pl-0 pl-0"
        />
        <div className="sm:ml-12 lg:ml-30 mx-5 tracking-wider font-light text-xl -mt-30">
          <h2 className="text-white font-semibold uppercase text-4xl w-80 relative z-30">
            ÆRLIG. RÅ. ENGASJERT.
          </h2>
          <p className="mb-8 mt-6 sm:pr-15 w-full sm:pr-10 text-footer sm:text-xl">
            Vi tror alle utvikles best og raskest gjennom ærlige
            tilbakemeldinger. For å kunne være ærlige med hverandre må man være
            godt kjent. Derfor er sosiale aktiviteter en viktig del av kulturen
            i Alv.
          </p>
          <p className="mb-8 mt-6 sm:pr-15 w-full sm:pr-10 text-footer sm:text-xl">
            Råskap handler om å gi det lille ekstra. Både til kunde og til
            hverandre. Noen ganger krever det litt å si ting som det er. Noen
            ganger krever det råskap.
          </p>
          <p className="mb-15 sm:pr-10 text-footer sm:text-xl">
            Summen av råskap og ærlighet er med på å skape engasjement. Å være
            engasjert handler om å brenne for kundene og for medarbeiderne våre.
            For å beholde nødvendig engasjement fra alle, investerer vi tungt i
            våre medarbeidere både både faglig og sosialt.
          </p>
        </div>
      </div>
      <div className="font-light flex flex-col justify-between h-full text-xl">
        <div>
          <div className="pr-5 sm:pr-12 md:pl-64 lg:pl-0 sm:pl-12 pl-5">
            <div className="sm:h-auto h-screen w-4/6 sm:mt-20 md:mt-5 lg:mt-0 sm:w-full mx-auto sm:mx-0 sm:block flex justify-center items-center flex-col text-center sm:text-left">
              <Title classes="sm:text-left text-center">Om oss</Title>
              <p className="mb-8 mt-6 sm:pr-15 text-footer sm:text-xl">
                Alv er produktet av alle konsulentene som jobber i selskapet.
                Dyktige konsulenter gjør Alv til et bra produkt.{' '}
              </p>
            </div>
            <p className="uppercase font-semibold text-lg mb-7 sm:pr-20 text-about leading-snug text-footer sm:text-xl">
              VI BYGGER NORGES MEST ATTRAKTIVE KONSULENTSELSKAP
            </p>
            <p className="mb-15 text-footer sm:text-xl">
              I Alv har vi tro på at dyktige konsulenter er de som hele tiden
              ønsker å utvikle seg selv, og de rundt seg. Dette er grunnpilarene
              for hvordan vi bygger Alv. Gjennom dette vil vi bygge Norges mest
              attraktive konsulentselskap både for potensielle ansatte og
              kunder.
            </p>
          </div>

          <Image fluid={bottomImg} className="opacity-70 lg:block hidden " />
        </div>
      </div>
    </div>
  );
};
