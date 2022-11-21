import Link from 'gatsby-link';
import { BgImage } from 'gbimage-bridge';
import React from 'react';
import { Arrow } from '../icon';

export const FeaturedCard = ({
  mainImage,
  slug,
  title,
  isEnLocale,
  description,
  fallbackImg,
}) => {
  let newDescription = description;
  if (description.length > 300) {
    const wordArr = description.split(' ').slice(0, 20);
    wordArr.push('...');
    newDescription = wordArr.join(' ');
    newDescription =
      newDescription.slice(0, newDescription.length - 4) +
      newDescription.slice(newDescription.length - 3);
  }

  return (
    <Link
      to={`/${isEnLocale ? 'blog' : 'blogg'}/${slug.current}`}
      className="relative"
      style={{ position: 'relative' }}
    >
      <BgImage
        image={mainImage ? mainImage.asset.gatsbyImageData : fallbackImg}
      >
        <div className="h-featured xs:hidden" />
        <div
          className="xs:block hidden h-featured"
          style={{
            background:
              'transparent linear-gradient(180deg, #1E92D000 0%, #061634 100%) 0% 0% no-repeat padding-box',
          }}
        >
          <div className="w-full z-50 h-full p-8 flex flex-col justify-between">
            <div />
            <div className="flex text-white tracking-wider">
              <div className="pl-1">
                <div className="uppercase text-base font-bold">
                  {isEnLocale
                    ? 'Our most recent article'
                    : 'Vår nyeste artikkel'}
                </div>
                <div className="w-12 h-2px bg-theme-accent mb-4 mt-3" />
                <div className="text-nav font-bold mt-4 mb-3">{title}</div>
                <div className="max-w-100">{newDescription}</div>
              </div>
              <div className="flex flex-col justify-between">
                <div />
                <div className="font-semibold uppercase w-32 flex text-right justify-end items-center">
                  {isEnLocale ? 'Read more' : 'Les Mer'}{' '}
                  <span className="ml-2">
                    <Arrow color="#fff" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BgImage>
      <div
        className="xs:hidden"
        style={{
          background:
            'transparent linear-gradient(180deg, #1E92D000 0%, #061634 100%) 0% 0% no-repeat padding-box',
        }}
      >
        <div className="w-full z-50 h-full p-6 flex flex-col justify-between">
          <div />
          <div className="flex text-white flex-col tracking-wider">
            <div className="pl-1">
              <div className="uppercase text-base font-bold">
                Vår nyeste artikkel
              </div>
              <div className="w-12 h-2px bg-theme-accent mb-4 mt-1" />
              <div className="text-nav font-bold mt-4 mb-3">{title}</div>
              <div className="max-w-100 font-light text-sm">{description}</div>
            </div>
            <div className="flex flex-col justify-between">
              <div />
              <div className="font-semibold uppercase w-full mt-4 flex text-right justify-end items-center">
                Les Mer{' '}
                <span className="ml-2">
                  <Arrow color="#fff" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
