import React from 'react';
import { Title } from '../title';
import * as Button from '../button';
import Image from 'gatsby-image';

export const ImageTextCards = ({ image, flip, children }) => {
  return (
    <>
      <div className="w-full">
        <div className="w-full h-15 bg-white" />
        <div
          className="max-w-1440 mx-auto grid bg-servicesgray pb-15"
          style={{
            gridTemplateColumns: '1fr 1fr',
          }}
        >
          <div className="h-full bg-servicesgray">
            {!flip && <Image fluid={image} style={{ maxHeight: '555px' }} />}
          </div>
          <div className="font-light h-full">
            <div className="flex flex-col justify-between">
              <div className="px-10 pb-9 bg-white">
                <div className="">
                  <Title align="left" color="text-navy">
                    Prosjektledelse
                  </Title>
                  <p className="mb-8 mt-6">
                    Culpa qui officia deserunt mollit anim id est laborum. Sed
                    ut perspiciatis unde omnis iste natus error sit voluptartem
                    accusantium doloremque laudantium, totam rem aperiam, eaque
                    ipsa quae ab illo inventore veritatis et quasi ropeior
                    architecto beatae vitae dicta sunt explicabo. Nemo eniem
                    ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                    fugit, sed quia consequuntur.
                  </p>
                </div>
                <div
                  className={`w-full flex justify-${flip ? 'start' : 'end'}`}
                >
                  <Button.CtaArrow>Lær Mer</Button.CtaArrow>
                </div>
              </div>
              <div className="grid grid-cols-2 px-10 pt-10 gap-x-4 justify-center bg-servicesgray ">
                {children}
              </div>
            </div>
            {flip && <Image fluid={image} className="pr-10" />}
          </div>
        </div>
      </div>
    </>
  );
};
