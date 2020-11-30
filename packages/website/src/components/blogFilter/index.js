import React from 'react';
import * as Icon from '../icon';
import styles from './BlogFilter.module.css';

export const BlogFilter = () => {
  return (
    <div className="pt-32 mb-12 bg-white w-full">
      <div className="max-w-1200 mx-auto px-32">
        <div
          className="h-20 w-full rounded-lg flex items-center py-5 px-6 text-navy text-base font-semibold tracking-wider"
          style={{ boxShadow: '0px 0px 20px #00000015' }}
        >
          <div className={styles.search}>
            <input
              type="text"
              className="h-full border border-bordergray px-3 placeholder-navy placeholder-font-bold w-25 rounded-md"
              placeholder="Søk"
            />
            <span className="absolute transform translate-x-18">
              <Icon.Search />
            </span>
          </div>
          <div className="flex tracking-wider h-full border border-bordergray items-center pl-2 pr-3 mx-2 rounded-md flex-grow">
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
            <span className="w-25 text-right">Sorter</span>
            <div className="relative h-full border border-bordergray flex items-center px-3 rounded-md ml-2 w-full">
              <span className="block font-light text-sm flex items-center justify-between w-full">
                Eldst til nyest <Icon.DropdownMini />
              </span>
              <ul className="absolute transform translate-y-15 mt-1 border-t-0 -translate-x-3 list-style-none border border-bordergray rounded-md font-normal opacity-0">
                <li className="py-2 bg-white w-40 px-3">Nyest til eldst</li>
                <li className="py-2 bg-white w-full px-3">Eldst til nyest</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
