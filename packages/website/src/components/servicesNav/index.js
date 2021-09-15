import React from 'react';
import * as Icon from '../../../../shared-components/src/components/icon';

export const ServicesNav = ({ nav, scrollTo }) => {
  return (
    <div className="max-w-1200 mx-auto py-10 mt-0 w-full">
      <nav className="mx-auto">
        <ul className="sm:flex sm:justify-center justify-between divide-y-2 divide-lightnavy sm:divide-none mx-5 sm:mx-0 text-base sm:text-lg list-style-none p-0">
          {nav.map((el) => (
            <button
              aria-label="Scroll Link"
              className="sm:mr-7 focus:outline-none w-full uppercase tracking-wider font-bold text-md sm:w-auto justify-between flex items-center pb-6px pt-1"
              onClick={scrollTo}
              name={el.id}
            >
              {el.label}
              <span className="block ml-2 transform scale-80">
                <Icon.Arrow />
              </span>
            </button>
          ))}
        </ul>
      </nav>
    </div>
  );
};
