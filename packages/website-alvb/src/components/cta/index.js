import React from 'react';
import Link from 'gatsby-link';

export const Cta = ({ title, text, buttonText, buttonLink }) => (
  <div className="w-full mt-12 mb-8 sm:mb-20">
    <div className="py-4 border-l-4 pl-6 border-navy max-w-1000 mx-auto flex justify-between items-center">
      <div>
        <h4 className="uppercase text-xl font-bold tracking-wider leading-none mb-2">
          {title}
        </h4>
        <div className="h-2px w-10 bg-theme-accent" />
        <p className="lg:hidden tracking-wider text-base mt-1">{text}</p>
      </div>
      <div className="flex items-center">
        <p className="hidden lg:block tracking-wider text-base">{text}</p>
        <Link
          to={buttonLink}
          className="bg-navy text-white py-2 px-4 uppercase rounded-md mx-5"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  </div>
);
