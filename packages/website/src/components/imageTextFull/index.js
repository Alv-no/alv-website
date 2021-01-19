import React from 'react';
import { Title } from '../title';
import * as Button from '../button';
import Image from 'gatsby-image';

export const ImageTextFull = ({ image, flip }) => {
  return (
    <>
      <div className="w-full bg-white">
        <div
          className={`max-w-1440 mx-auto lg:grid gap-x-10 flex ${
            flip ? 'flex-col-reverse' : 'flex-col'
          } bg-white sm:py-10 lg:py-15`}
          style={{
            gridTemplateColumns: '1fr 1fr',
            order: '-1',
            gridAutoFlow: 'dense',
          }}
        >
          {!flip && <Image fluid={image} className="sm:h-40vh lg:h-auto" />}
          <div className="sm:px-12 lg:pr-20 font-light flex flex-col justify-between sm:h-full h-100 overflow-hidden">
            <div
              className="absolute h-100 w-full sm:hidden flex justify-end"
              style={{
                background:
                  'linear-gradient(0deg, rgba(255,255,255,1) 20%, rgba(255,255,255,0) 100%, rgba(0,0,0,1) 100%)',
              }}
            >
              <div
                className={`items-end h-100 flex py-12 px-5 justify-end sm:hidden`}
              >
                <Button.CtaArrow>Lær Mer</Button.CtaArrow>
              </div>
            </div>
            <div className="px-5 sm:px-0">
              <Title
                align="left mt-5 sm:mt-8"
                classes="text-nav sm:text-3xl"
                color="text-navy"
              >
                Prosjektledelse
              </Title>
              <p className="mb-8 sm:mt-6 mt-3 lg:mt-6">
                Culpa qui officia deserunt mollit anim id est laborum. Sed ut
                perspiciatis unde omnis iste natus error sit voluptartem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi ropeior architecto
                beatae vitae dicta sunt explicabo. Nemo eniem ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur.
              </p>
              <p className="mb-8">
                Magni dolores eosep quiklop ratione voluptatem sequi nesciunt.
                Neque porro quisquam est, quepi dolorem ipsum quia dolor srit
                amet, consectetur adipisci velit, seid quia non numquam eiuris
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                iope voluptatem.
              </p>
              <p className="mb-8">
                Lorem ipsum dolor sit amet, consectetur adipisifwcing elit, sed
                do eiusmod tempor incididunt ut labore et dolore roipi.
              </p>
            </div>
            <div
              className={`w-full hidden sm:flex justify-end sm:relative lg:justify-${
                flip ? 'start' : 'end'
              }`}
            >
              <Button.CtaArrow>Lær Mer</Button.CtaArrow>
            </div>
          </div>
          {flip && <Image fluid={image} className="sm:h-40vh lg:h-auto" />}
        </div>
      </div>
    </>
  );
};
