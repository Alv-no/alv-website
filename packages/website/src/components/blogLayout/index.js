import React from 'react';
import { MobileHeader, BlogHeader } from '../header';
import { Title } from '../title';
import Link from 'gatsby-link';
import * as Icon from '../icon';
import '../../layout.css';

const BlogLayout = ({
  children,
  firstname,
  lastname,
  title,
  image,
  id,
  pdfLink,
}) => {
  return (
    <>
      <MobileHeader />
      <div
        className="hidden sm:grid"
        style={{ gridTemplateColumns: '33% auto' }}
      >
        <div className="h-full bg-navy flex flex-col items-end justify-between pr-12 text-white">
          {/* HEADER SECTION */}
          <div className="pr-10">
            <BlogHeader />
            <div className="ml-10">
              <div className="uppercase text-base tracking-wider font-semibold my-10">
                <Link to="/blogg">
                  <div className="flex">
                    <span className="transform rotate-180 -translate-y-1 text-yellow mr-3">
                      <Icon.Arrow />
                    </span>
                    Se alle artikler
                  </div>
                </Link>
              </div>
              <Title align="left">BLOGG</Title>
            </div>
          </div>
          {/* AUTHOR SECTION */}
          <div className="flex mb-12">
            <div className="mr-5 w-32 h-40">
              <img
                src={image.asset.fluid.src}
                className="object-cover"
                alt="author"
              />
            </div>
            <div className="text-white tracking-wider flex flex-col justify-between">
              <div>
                <h4 className="text-xl font-semibold leading-snug">
                  {firstname}
                </h4>
                <h4 className="text-xl font-light mb-3 leading-tight">
                  {lastname}
                </h4>
                <p className="font-light mb-4">{title}</p>
              </div>
              <div className="flex items-center font-semibold text-sm mb-1">
                <Link to={`/ansatte#${lastname}`} state={{ activeCard: id }}>
                  <div className="uppercase">Se intro</div>
                </Link>
                <a href={pdfLink} className="flex items-center">
                  <div className="h-2px w-8 bg-yellow ml-6 mr-3" />
                  <div className="uppercase">Se CV</div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </>
  );
};

export default BlogLayout;
