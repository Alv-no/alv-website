import React from 'react';
import * as Icon from '../icon';
import Link from 'gatsby-link';

export const EmployeeBio = ({
  handleCloseClick,
  videoLink,
  firstname,
  lastname,
  pdfLink,
  title,
  bio,
  id,
}) => (
  <section
    className="bg-darkblue text-white lg:py-18 py-15 mt-12 mb-12 sm:px-5"
    id={id}
  >
    <div className="max-w-1200 mx-auto px-5">
      <div className="w-full flex flex-end justify-between">
        <div />
        <div>
          <span
            className="transform block -translate-y-5 -translate-x-8 scale-60 cursor-pointer absolute"
            onClick={handleCloseClick}
          >
            <Icon.Cross />
          </span>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col">
        <div className="mx-auto flex-1 lg:pr-15">
          <div className="h-80 overflow-hidden mb-5">
            <iframe
              className="h-80 w-100 sm:w-140 mr-0"
              title={firstname}
              src={videoLink}
            />
          </div>
          <div className="flex justify-between text-base tracking-wider mb-5 lg:mb-0">
            <a href={pdfLink} target="_blank" rel="noreferrer">
              <div className="flex">
                <span className="mr-3">
                  <Icon.Cv />
                </span>
                <span className="transform -translate-y-2">SE CV</span>
              </div>
            </a>
            <Link to="/contact">
              <div className="flex cursor-pointer">
                <div className="w-8 h-2px bg-yellow mr-4 transform translate-y-1" />
                <span className="transform -translate-y-2">GET IN TOUCH</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <h4 className="text-4xl leading-none font-thin mb-4 uppercase tracking-wider text-center lg:text-left">
            <span className="font-bold block">{firstname}</span>
            {lastname}
          </h4>
          <h5 className="text-lg font-thin tracking-wider mb-8 text-center lg:text-left">
            {title}
          </h5>
          <p className="tracking-wider lg:px-0 sm:px-10">{bio}</p>
        </div>
      </div>
    </div>
  </section>
);
