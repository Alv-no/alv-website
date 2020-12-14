import React, { useState, useEffect } from 'react';
import * as Icon from '../icon';
import styles from './BlogFilter.module.css';
import { FilterContainer } from '../filterContainer';

// Input: content array and filter elements
// Output: filtered and sorted content array
export const BlogFilter = ({ allTags, allAuthors, allArticles, onChange }) => {
  const [active, setActive] = useState(allArticles);
  const [filter, setFilter] = useState([]);
  const [sort, setSort] = useState(null);

  // Process all available content based on sort and filter input.
  useEffect(() => {
    // Process articles here
    if (filter.length > 0) {
      const filteredArticles = allArticles.filter((article) => {
        let test = false;
        article.tags.forEach(({ tag }) =>
          filter.includes(tag) ? (test = true) : null
        );
        return (
          filter.includes(
            `${article.author.firstname} ${article.author.lastname}`
          ) || test
        );
      });
      setActive(filteredArticles);
    } else {
      setActive(allArticles);
    }
  }, [sort, filter, allArticles, onChange]);

  useEffect(() => {
    const sortedActive = active;

    if (sort === 'oldest') {
      sortedActive.sort((a, b) => {
        if (a.publishedAt > b.publishedAt) {
          return -1;
        } else {
          return 1;
        }
      });
    }

    onChange(sortedActive);
  }, [active, sort, onChange]);

  // Update sort state with selected sorting option
  const sortClick = (e) => {
    setSort(e.target.id);
  };

  // Add or remove a fiter option from state
  const filterClick = (e) => {
    const current = e.target.id;
    let newFilter = filter;
    if (!filter.includes(current)) {
      newFilter.push(current);
    } else {
      newFilter = filter.filter((el) => el !== current);
    }
    setFilter(newFilter);
  };

  return (
    <FilterContainer>
      <FilterField
        tags={allTags}
        authors={allAuthors}
        onClick={filterClick}
        active={filter}
      />
      <SortField sortClick={sortClick} sort={sort} />
    </FilterContainer>
  );
};

export const FilterField = ({ tags, authors, active, onClick }) => {
  return (
    <div className="flex relative tracking-wider h-full border border-bordergray items-center pl-2 pr-3 mx-2 rounded-md flex-grow">
      <input
        className={`${styles.filterCheckbox} absolute left-0 ml-2 w-full h-6 transform cursor-pointer`}
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
                    className={`${styles.checkbox} absolute  z-30 left-0 w-full transform -translate-x-5 h-5 cursor-pointer`}
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
      <div className="overflow-hidden">
        <div
          className="whitespace-pre w-full pl-2 rounded-full -ml-2 relative"
          style={{ scrollbarWidth: 'thin' }}
        >
          <span className="five:flex hidden">
            {active.length > 0 ? (
              active.map((tag) => (
                <div
                  className="my-1 py-1 mx-2px text-sm px-2 rounded-full bg-gray-200 font-normal font-gray-600"
                  key={tag}
                >
                  {tag}
                </div>
              ))
            ) : (
              <>
                <div className="my-1 py-1 mx-2px text-sm px-2 rounded-full bg-gray-200 font-normal font-gray-600">
                  Alle kategorier
                </div>
                <div className="my-1 py-1 mx-2px text-sm px-2 rounded-full bg-gray-200 font-normal font-gray-600">
                  Alle forfattere
                </div>
              </>
            )}
          </span>
        </div>
      </div>
      <span className="right-0 absolute mr-4 five:hidden">
        <Icon.DropdownMini />
      </span>
    </div>
  );
};

export const SortField = ({ sort, sortClick }) => {
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    sortClick(e);
    setOpen(!open);
  };

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="flex items-center h-full five:w-60 pr-2 pl-4 five:px-0">
      <span className="five:w-25 five:text-right">Sorter</span>
      <div className="relative h-full border border-bordergray flex items-center px-4 rounded-md ml-2 w-full">
        <span
          className={`${styles.sortSelected} block font-light ${
            open && 'font-bold'
          } text-sm flex items-center transition duration-100 justify-between w-full`}
        >
          {sort
            ? sort === 'oldest'
              ? 'Eldst til nyest'
              : sort === 'popular'
              ? 'Populæritet'
              : sort === 'newest'
              ? 'Nyest til eldst'
              : null
            : 'Nyest til eldst'}{' '}
          <Icon.DropdownMini />
        </span>
        <input
          className={`${styles.sortCheckbox} absolute left-0 w-full h-6 transform cursor-pointer opacity-0`}
          type="checkbox"
          onClick={toggleOpen}
        />
        <ul
          className={`${
            open ? 'opacity-100' : 'opacity-0 pointer-events-none'
          } absolute top-0 left-0 mt-9 bg-white pr-1 z-30 transition duration-100 -translate-x-px -translate-y-2px transform border-t-0 text-sm list-style-none border border-bordergray rounded-md font-light opacity-0 pb-6px`}
        >
          <li
            className="pb-2 pt-3 bg-white w-40 px-4 cursor-pointer"
            id="oldest"
            onClick={handleClick}
          >
            Eldst til nyest
          </li>
          <li
            className="py-2 bg-white w-full px-4 cursor-pointer"
            id="newest"
            onClick={handleClick}
          >
            Nyest til eldst
          </li>
          <li
            className="py-2 bg-white w-full px-4 cursor-pointer"
            id="popular"
            onClick={handleClick}
          >
            Populæritet
          </li>
        </ul>
      </div>
    </div>
  );
};
