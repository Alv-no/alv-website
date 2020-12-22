import React from 'react';
import { Title } from '../title';
import * as Button from '../button';
import BackgroundImage from 'gatsby-background-image-es5';

export const ImageTextShifted = ({ image, flip }) => {
  return (
    <>
      <div className="w-full bg-white">
        <div
          className="max-w-1440 mx-auto grid bg-white py-15"
          style={{
            gridTemplateColumns: '40% auto',
          }}
        >
          <span className="relative z-0">
            <BackgroundImage fluid={image}>
              <div
                className="h-full w-full bg-white opacity-50 h-100"
                style={{ height: '560px', maxWidth: '580px' }}
              />
            </BackgroundImage>
          </span>
          <div className="p-8 pr-20 font-light flex flex-col h-full justify-center tracking-wider">
            <div className="font-light">
              <div className="-ml-25 relative z-30 pr-32 text-lg">
                <Title align="left" color="text-navy">
                  Intervjuprosessen
                </Title>
              </div>
              <p className="mb-8 mt-7 mr-32 text-xl">
                Vår viktigste jobb fremover, er å ansette de riktige
                medarbeiderne i Alv. Hva som er riktige medarbeidere, er en
                kombinasjon av faglig kompetanse innenfor
                systemutviklingsdomenet og riktig personalitet.
              </p>
              <p className="mb-7 mr-32 text-xl">
                Vi gjennomfører en grundig intervjuprosess for at alle som skal
                ansettes i Alv. Vi håper å høre fra deg!
              </p>
            </div>
            <div
              className={`w-full flex mr-40 justify-${flip ? 'start' : 'end'}`}
            >
              <Button.CtaArrow>Lær Mer</Button.CtaArrow>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
