import React from 'react';
import * as Icon from '../../../../shared-components/src/components/icon';

export const ServicesNav = ({ nav, scrollTo }) => {
  return (
    <nav className="mx-auto">
      <ul className="sm:grid grid-flow-col gap-x-7 auto-cols-min sm:justify-center justify-between divide-y-2 divide-lightnavy sm:divide-none text-lg list-style-none p-0">
        {nav.map((el) => (
          <button
            aria-label="Scroll Link"
            className="focus:outline-none w-full uppercase tracking-wider font-bold sm:w-auto justify-between flex items-center pb-6px pt-2"
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
  );
};
