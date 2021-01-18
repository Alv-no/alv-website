import React from 'react';
import Link from 'gatsby-link';

export const ServicesNav = ({ nav }) => (
  <div className="max-w-1200 mx-auto py-10 mt-2 w-full">
    <nav className="mx-auto">
      <ul className="flex justify-between mx-5 sm:mx-0 text-base sm:text-lg list-style-none p-0">
        {nav.map((el) => (
          <li className="lg:mx-8 sm:mx-5">
            <Link to={`#${el}`}>{el}</Link>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);
