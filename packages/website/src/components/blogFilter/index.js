import React, { useState, useEffect } from 'react';
import * as Icon from '../icon';
import styles from './BlogFilter.module.css';
import { FilterContainer } from '../filterContainer';

export const BlogFilter = ({ tags, authors }) => {
  const [filter, setFilter] = useState([]);

  const handleClick = (e) => {
    if (filter.indexOf(e.target.id) < 0) {
      const newFilter = filter;
      console.log(e.target.id);
      newFilter.push(e.target.id);
      setFilter(newFilter);
    }
  };

  useEffect(() => {
    console.log(filter);
    console.log(filter);
  }, [filter]);

  const handleChange = (e) => {
    return e.target.value;
  };
  return (
    <FilterContainer>
      <SearchField onChange={handleChange} />
      <FilterField tags={tags} authors={authors} onClick={handleClick} />
      <SortField onClick={handleClick} />
    </FilterContainer>
  );
};

export const SearchField = ({ onChange }) => {
  return (
    <div className={styles.search}>
      <input
        type="text"
        className="h-full border border-bordergray px-3 placeholder-navy placeholder-font-bold w-25 rounded-md"
        placeholder="Søk"
        onChange={onChange}
      />
      <span className="absolute transform translate-x-18">
        <Icon.Search />
      </span>
    </div>
  );
};

export const FilterField = ({ tags, authors, onClick }) => {
  return (
    <div className="flex relative tracking-wider h-full border border-bordergray items-center pl-2 pr-3 mx-2 rounded-md flex-grow">
      <input
        className={`${styles.filterCheckbox} absolute left-0 w-full h-6 transform cursor-pointer`}
        type="checkbox"
      />
      <div
        className={`${styles.filter} absolute w-full z-40 px-12 py-8 rounded-md bg-white mt-9 left-0 top-0 flex border-b border-l border-r border-bordergray`}
      >
        <div className="flex-1">
          <div className="tracking-wider uppercase mb-2 text-base">
            Kategorier
          </div>
          <div className={`${styles.line} bg-yellow w-7 mb-5`} />
          <ul>
            {tags.map((tag) => (
              <li className={styles.listItem}>
                <div className="text-sm text-gray-700 font-light relative mt-3 flex items-center">
                  <input
                    className={`${styles.checkbox} absolute left-0 w-full transform -translate-x-5 h-5 cursor-pointer`}
                    id={tag}
                    onChange={onClick}
                    type="checkbox"
                  />
                  <div
                    className={`${styles.dot} h-2 w-2 bg-yellow rounded-full mr-2 absolute mt-px`}
                  />
                  <span className={styles.itemSpan}>{tag}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <div className="tracking-wider uppercase mb-2 text-base">
            Forfattere
          </div>
          <div className={`${styles.line} bg-yellow w-7 mb-5`} />
          <ul>
            {authors.map((author) => (
              <li className={styles.listItem}>
                <div className="text-sm text-gray-700 font-light relative mt-3 flex items-center">
                  <input
                    className={`${styles.checkbox} absolute left-0 w-full transform -translate-x-5 h-5 cursor-pointer`}
                    id={author}
                    onChange={onClick}
                    type="checkbox"
                  />
                  <div
                    className={`${styles.dot} h-2 w-2 bg-yellow rounded-full mr-2 absolute mt-px`}
                  />
                  <span className={styles.itemSpan}>{author}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <span className="transform scale-10 -translate-y-6px h-5 -mx-32">
        <Icon.Tag />
      </span>
      {''}
      <span className="mr-3 -ml-1">Filter</span>
      <div className="my-1 py-1 mx-2px text-sm px-2 rounded-full bg-gray-200 font-normal font-gray-600">
        Alle kategorier
      </div>
      <div className="my-1 py-1 mx-2px text-sm px-2 rounded-full bg-gray-200 font-normal font-gray-600">
        Alle forfattere
      </div>
    </div>
  );
};

export const SortField = () => {
  return (
    <div className="flex items-center h-full w-60">
      <span className="w-25 text-right">Sorter</span>
      <div className="relative h-full border border-bordergray flex items-center px-4 rounded-md ml-2 w-full">
        <span
          className={`${styles.sortSelected} block font-light text-sm flex items-center justify-between w-full`}
        >
          Nyest til eldst <Icon.DropdownMini />
        </span>
        <input
          className={`${styles.sortCheckbox} absolute left-0 w-full h-6 transform cursor-pointer`}
          type="checkbox"
        />
        <ul
          className={`${styles.sort} absolute top-0 left-0 mt-9 bg-white pr-1 -translate-x-px -translate-y-2px transform border-t-0 text-sm list-style-none border border-bordergray rounded-md font-light opacity-0 pb-6px`}
        >
          <li
            className="pb-2 pt-3 bg-white w-40 px-4 cursor-pointer"
            id="newest"
          >
            Eldst til nyest
          </li>
          <li className="py-2 bg-white w-full px-4 cursor-pointer" id="oldest">
            Nyest til eldst
          </li>
          <li className="py-2 bg-white w-full px-4 cursor-pointer" id="popular">
            Populæritet
          </li>
        </ul>
      </div>
    </div>
  );
};
