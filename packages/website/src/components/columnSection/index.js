import React from 'react';
import BackgroundImage from 'gatsby-background-image-es5';
import * as Icon from '../icon';

export const ColumnSection = ({ title, eyebrow, image }) => {
  return (
    <>
      <div className="py-12 tracking-wider">
        <div
          className="max-w-1200 mx-auto grid gap-x-10"
          style={{
            gridTemplateColumns: 'minmax(660px, 740px) auto',
          }}
        >
          <div>
            <div>
              <h4 className="text-lg mb-2">{eyebrow}</h4>
              <h3 className="text-4xl uppercase font-semibold mb-10">
                {title}
              </h3>
            </div>
            <div className="flex">
              <div className="font-light flex-1 mr-12">
                <div className="mb-8">
                  Culpa qui officia deserunt mollit anim id est laborum. Sed ut
                  perspiciatis unde omnis iste natus error sit voluptartem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi ropeior
                  architecto beatae vitae dicta sunt explicabo. Nemo eniem ipsam
                  voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                  sed quia consequuntur magni dolores eosep quiklop ratione
                  voluptatem sequi nesciunt. Neque porro quisquam est, quepi
                  dolorem ipsum quia dolor srit amet, consectetur adipisci
                  velit, seid quia non numquam eiuris modi tempora incidunt ut
                  labore et dolore magnam aliquam quaerat iope voluptatem.
                </div>
                <div className="">
                  Lorem ipsum dolor sit amet, consectetur adipisifwcing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore roipi.
                </div>
              </div>
              <div className="flex-1">
                <div className="font-light">
                  Lorem ipsum dolor sit amet, consectetur adipisifwcing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore roipi
                  magna aliqua. Ut enim ad minim veeniam, quis nostruklad
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in tufpoy
                  voluptate velit esse cillum.
                </div>
                <div className="my-10 h-2px bg-navy" />
                <div className="text-lg leading-normal italic">
                  “Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum. Sed ut
                  perspiciatis unde omnis iste natus error sit voluptatem.”
                </div>
              </div>
            </div>
          </div>
          <div className="pt-8 ml-5">
            <BackgroundImage fluid={image} className="h-full w-full">
              <div
                className="absolute inset-0 bg-navy text-white cursor-pointer"
                style={{ opacity: '30%' }}
              />
              <div className="h-full w-full w-full flex justify-center items-center text-white ">
                <div className="uppercase flex font-semibold w-full transform -rotate-90 -translate-y-10 -translate-x-35">
                  <div className="mr-20 whitespace-nowrap">CONSEQUAT</div>
                  <div className="">LOREMIPSUM</div>
                </div>
                <div>
                  <div className="flex justify-end w-full mr-12 absolute right-0">
                    <Icon.Arrow />
                  </div>
                </div>
              </div>
            </BackgroundImage>
          </div>
        </div>
      </div>
    </>
  );
};
