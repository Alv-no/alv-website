import React from 'react';
import * as Icon from '../icon';

export const BlogTagBar = () => {
  return (
    <div className="h-screen py-32 bg-white w-full">
      <div className="max-w-1200 mx-auto px-32">
        <div
          className="h-20 w-full rounded-lg flex items-center py-5 px-6 text-navy text-base font-semibold tracking-wider"
          style={{ boxShadow: '0px 0px 20px #00000015' }}
        >
          <input
            type="text"
            className="h-full border border-bordergray flex items-center px-3 placeholder-navy placeholder-font-bold w-25 rounded-md"
            placeholder="Search"
          />
          <div className="flex mr-4 tracking-wider h-full border border-bordergray items-center pl-2 pr-3 mx-2 rounded-md flex-grow">
            <span className="transform scale-10 -translate-y-6px h-5 -mx-32">
              <Icon.Tag />
            </span>
            {''}
            <span className="mr-3 -ml-1">Kategorier</span>
            <div className="my-1 py-1 mx-2px text-sm px-2 rounded-full bg-gray-200 font-normal font-gray-600">
              Alle kategorier
            </div>
            <div className="my-1 py-1 mx-2px text-sm px-2 rounded-full bg-gray-200 font-normal font-gray-600">
              Alle forfattere
            </div>
          </div>
          <div className="flex items-center h-full w-60">
            <span className="w-15">Sort by</span>
            <div className="relative h-full border border-bordergray flex items-center px-3 rounded-md ml-2 w-full">
              <span className="block font-normal text-base">
                Eldst til nyest
              </span>
              <ul>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
