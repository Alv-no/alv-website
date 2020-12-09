import React from 'react';
import Link from 'gatsby-link';
import BackgroundImage from 'gatsby-background-image-es5';
import * as Icon from '../icon';

export const FeaturedCard = ({
  mainImage,
  slug,
  title,
  description,
  fallbackImg,
}) => {
  return (
    <Link
      to={`/blogg/${slug.current}`}
      className="relative"
      style={{ position: 'relative' }}
    >
      <BackgroundImage
        fluid={mainImage ? mainImage.asset.fluid : fallbackImg.asset.fluid}
      >
        <div
          style={{
            height: '343px',
            background:
              'transparent linear-gradient(180deg, #1E92D000 0%, #061634 100%) 0% 0% no-repeat padding-box',
          }}
        >
          <div className="w-full z-50 h-full p-8 flex flex-col justify-between">
            <div />
            <div className="flex text-white tracking-wider">
              <div className="pl-1">
                <div className="uppercase text-base font-bold">
                  Vår nyeste artikkel
                </div>
                <div className="w-12 h-2px bg-yellow mb-4 mt-3" />
                <div className="text-nav font-bold mt-4 mb-3">{title}</div>
                <div className="max-w-100">{description}</div>
              </div>
              <div className="flex flex-col justify-between">
                <div />
                <div className="font-semibold uppercase w-32 flex text-right justify-end items-center">
                  Les Mer{' '}
                  <span className="ml-2">
                    <Icon.Arrow color="#fff" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BackgroundImage>
    </Link>
  );
};
