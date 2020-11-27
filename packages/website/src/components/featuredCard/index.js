import React from 'react';
import Link from 'gatsby-link';
import BackgroundImage from 'gatsby-background-image-es5';

export const FeaturedCard = ({
  children,
  mainImage,
  slug,
  title,
  description,
}) => {
  return (
    <div className="bg-navy w-full pt-5 px-5">
      <div className="max-w-1200 mx-auto flex">
        <div className="flex-1">
          <div className="pl-8 pb-10 mr-10 lg:pr-32 pt-20">{children}</div>
        </div>
        <div className="flex-1">
          <div className="transform translate-y-16">
            <Link
              to={`/blog/${slug.current}`}
              className="relative"
              style={{ position: 'relative' }}
            >
              <BackgroundImage fluid={mainImage.asset.fluid}>
                <div style={{ height: '343px' }}>
                  <div className="w-full z-50 h-full p-8 flex flex-col justify-between">
                    <div />
                    <div className="text-white tracking-wider">
                      <div className="uppercase my-4 text-base font-bold">
                        Vår nyeste artikkel
                      </div>
                      <div className="w-12 h-2px bg-yellow my-4" />
                      <div className="text-nav font-bold mt-4 mb-3">
                        {title}
                      </div>
                      <div className="">{description}</div>
                    </div>
                  </div>
                </div>
              </BackgroundImage>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
