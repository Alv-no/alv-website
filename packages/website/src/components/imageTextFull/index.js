import React from 'react';
import { Title } from '../title';
import * as Button from '../button';
import Image from 'gatsby-image';

export const ImageTextFull = ({ image, flip }) => {
  return (
    <>
      <div className="w-full bg-white">
        <div
          className="max-w-1440 mx-auto grid gap-x-10 bg-white py-15"
          style={{
            gridTemplateColumns: '1fr 1fr',
            order: '-1',
            gridAutoFlow: 'dense',
          }}
        >
          {!flip && <Image fluid={image} />}
          <div className="p-12 pr-20 font-light flex flex-col justify-between h-full">
            <div>
              <Title align="left" color="text-navy">
                Prosjektledelse
              </Title>
              <p className="mb-8 mt-6">
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
            <div className={`w-full flex justify-${flip ? 'start' : 'end'}`}>
              <Button.CtaArrow>Lær Mer</Button.CtaArrow>
            </div>
          </div>
          {flip && <Image fluid={image} />}
        </div>
      </div>
    </>
  );
};
