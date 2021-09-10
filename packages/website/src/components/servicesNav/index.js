import React from 'react';
import * as Icon from '../icon';

export const ServicesNav = ({ nav, scrollTo }) => {
  return (
    <div className="max-w-1200 mx-auto py-10 mt-0 w-full">
      <nav className="mx-auto">
        <ul className="sm:flex sm:justify-center justify-between mx-5 sm:mx-0 text-base sm:text-lg list-style-none p-0">
          {nav.map((el) => (
            <button
              aria-label="Scroll Link"
              className="sm:mr-7 focus:outline-none w-full sm:w-auto justify-between flex items-center border-b-2 border-lightnavy pb-6px pt-1"
              onClick={scrollTo}
              name={el.id}
            >
              {el.label}
              <span className="block ml-3 transform scale-80">
                <Icon.Arrow />
              </span>
            </button>
          ))}
        </ul>
      </nav>
    </div>
  );
};
