import React from 'react';

export const ServicesNav = ({ nav, scrollTo }) => {
  return (
    <div className="max-w-1200 mx-auto py-10 mt-2 w-full">
      <nav className="mx-auto">
        <ul className="flex justify-center mx-5 sm:mx-0 text-base sm:text-lg list-style-none p-0">
          {nav.map((el) => (
            <button
              aria-label="Scroll Link"
              className="block sm:mr-0 mx-7"
              onClick={scrollTo}
              name={el.id}
            >
              {el.label}
            </button>
          ))}
        </ul>
      </nav>
    </div>
  );
};
