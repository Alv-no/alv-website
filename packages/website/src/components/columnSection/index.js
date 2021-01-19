import React from 'react';
import BackgroundImage from 'gatsby-background-image-es5';
import * as Icon from '../icon';

export const ColumnSection = ({ title, eyebrow, image }) => {
  return (
    <>
      <div className="tracking-wider sm:pb-15">
        <div
          className="max-w-1200 mx-auto lg:grid gap-x-3 xl:gap-x-10 "
          style={{
            gridTemplateColumns: 'minmax(610px, 740px) minmax(320px, 400px)',
          }}
        >
          <div className="h-100 sm:h-auto overflow-hidden">
            <div
              className="absolute mt-10 h-100 w-full sm:hidden"
              style={{
                background:
                  'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%, rgba(0,0,0,1) 100%)',
              }}
            />
            <div>
              <h4 className="text-lg mb-2">{eyebrow}</h4>
              <h3 className="text-4xl uppercase font-semibold mb-3 lg:mb-10">
                {title}
              </h3>
            </div>
            <div className="lg:flex">
              <div className="font-light flex-1 sm:mr-6 xl:mr-12">
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
          <div className="pt-8 lg:ml-5 -mx-5 sm:mx-0">
            <BackgroundImage fluid={image} className="h-full w-full">
              <div
                className="absolute inset-0 bg-navy text-white cursor-pointer"
                style={{ opacity: '30%' }}
              />
              <div className="h-40vh lg:h-full w-full flex justify-between transform -translate-y-3 items-center text-white px-15">
                <div className="uppercase flex w-10 h-10 font-semibold">
                  <div className="whitespace-nowrap w-0 transform -rotate-90">
                    CONSEQUAT
                  </div>
                  <div className="transform -rotate-90 w-0 transform translate-y-32">
                    LOREMIPSUM
                  </div>
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
