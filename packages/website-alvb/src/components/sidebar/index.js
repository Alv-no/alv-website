import Link from 'gatsby-link';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { Icon, Title } from 'shared-components';
import { BlogHeader, MobileHeader } from '../header';

const Sidebar = ({
  children,
  servicePages,
  categoryPages,
  firstname,
  lastname,
  isEmployee,
  authorSlug,
  fallbackImg,
  title,
  image,
  id,
  logo,
  cv,
  white,
}) => {
  const pdfLink = cv ? cv.asset.url : false;
  return (
    <>
      <MobileHeader
        servicePages={servicePages}
        categoryPages={categoryPages}
        logo={logo}
        white={white}
        whiteIcons={white}
      />
      <div
        className="hidden sm:grid"
        style={{ gridTemplateColumns: 'minmax(430px, 33%) auto' }}
      >
        <div className="h-full bg-navy flex flex-col justify-between pr-12 2xl:pl-5 text-white">
          {/* HEADER SECTION */}
          <div
            className="pr-10 fixed z-10 sm:max-w-430 lg:max-w-seven"
            style={{ maxWidth: '430px' }}
          >
            <BlogHeader
              servicePages={servicePages}
              categoryPages={categoryPages}
              logo={logo}
              white={white}
            />
            <div className="ml-6 lg:ml-10">
              <div className="uppercase text-base tracking-wider font-semibold my-10">
                <Link to="/blogg">
                  <div className="flex">
                    <span className="transform rotate-180 -translate-y-1 text-theme-accent mr-3">
                      <Icon.Arrow />
                    </span>
                    Se alle artikler
                  </div>
                </Link>
              </div>
              <Title align="left">
                <span className="text-white">BLOGG</span>
              </Title>
            </div>
          </div>
          {/* AUTHOR SECTION */}
          <div
            className="flex mb-12 ml-10 fixed z-0 bottom-0"
            style={{ zIndex: 1 }}
          >
            <div className="mr-5">
              <Link
                to={`/ansatte#${authorSlug}`}
                state={{ activeCard: id, employee: authorSlug }}
              >
                <GatsbyImage
                  image={(image && image.asset.gatsbyImageData) || fallbackImg}
                  className="w-32 h-40 object-contain filter-grayscale opacity-70 transition duration-300 hover:opacity-100 hover:filter-grayscale-0"
                  alt="author"
                />
                <div className="absolute transform scale-60 -translate-y-8">
                  {isEmployee && logo.White()}
                </div>
              </Link>
            </div>
            <div
              className={`text-white tracking-wider flex flex-col ${
                isEmployee ? 'justify-between' : 'justify-end'
              }`}
            >
              <div>
                <h4 className="text-xl font-semibold leading-snug">
                  {firstname}
                </h4>
                <h4 className="text-xl font-light leading-tight">{lastname}</h4>
              </div>
              <p className="font-light mb-1 w-5/6">{title}</p>
              {isEmployee && (
                <div className="flex items-center font-semibold text-sm mb-2">
                  <Link
                    to={`/ansatte#${authorSlug}`}
                    state={{ activeCard: id, employee: authorSlug }}
                  >
                    <div className="uppercase">Se intro</div>
                  </Link>
                  {pdfLink && (
                    <a href={pdfLink} className="flex items-center">
                      <div className="h-2px w-8 bg-theme-accent ml-6 mr-3" />
                      <div className="uppercase">Se CV</div>
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </>
  );
};

export default Sidebar;
