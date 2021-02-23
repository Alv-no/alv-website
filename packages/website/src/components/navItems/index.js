import React, { useState } from 'react';
import * as Icon from '../icon';
import Link from 'gatsby-link';
import styles from './navItems.module.css';

const ConditionalLinkWrapper = ({ children, link }) =>
  link !== undefined ? <Link to={link}>{children}</Link> : children;

export const LargeLink = ({ children, margin, link }) => {
  const [open, setOpen] = useState(false);
  const toggleDropdown = () => {
    setOpen(!open);
  };
  return (
    <>
      <ConditionalLinkWrapper condition={link !== undefined} link={link}>
        {link === undefined ? (
          <input
            type="checkbox"
            className={styles.largeTitleInput}
            onChange={toggleDropdown}
          />
        ) : null}
        <h2
          className={`text-white font-bold tracking-widest ${margin} uppercase text-nav my-15 eight:my-8 w-full ml-6 sm:ml-8 eight:ml-0 z-50`}
        >
          {children}
          <span className="text-yellow">.</span>
          {link === undefined ? (
            <span
              className={`absolute right-0 mr-7 sm:mr-10 mt-4 eight:hidden transform transition duration-300 ${
                open ? 'rotate-90' : null
              }`}
            >
              <Icon.DropdownArrow />
            </span>
          ) : null}
        </h2>
      </ConditionalLinkWrapper>
    </>
  );
};

export const Subtitle = ({ children, margin, link, inactive }) => {
  const [open, setOpen] = useState(false);
  const toggleDropdown = () => {
    setOpen(!open);
  };
  return (
    <>
      <ConditionalLinkWrapper
        condition={link !== undefined || link !== 'inactive'}
        inactive={inactive}
        link={link}
      >
        {!link ? (
          <input
            type="checkbox"
            className={styles.subTitleInput}
            onChange={toggleDropdown}
          />
        ) : null}
        <li className="list-none hidden eight:block">
          <h3
            className={`uppercase text-lg ${margin} tracking-widest mb-12 eight:mb-4 eight:ml-0 sm:ml-15 ml-12`}
          >
            {children}
            {link === undefined && !inactive ? (
              <span
                className={`absolute right-0 mt-4 mr-7 sm:mr-10 pr-2px eight:hidden transform transition duration-300 ${
                  open ? 'rotate-90' : null
                }`}
              >
                <Icon.DropdownArrow />
              </span>
            ) : null}
          </h3>
        </li>
      </ConditionalLinkWrapper>
    </>
  );
};

export const List = ({ children }) => (
  <ul className="eight:max-h-full list-none list-style-none hidden eight:block mt-8 mb-12">
    {children}
  </ul>
);

export const ListLink = ({ children, link }) => (
  <li className="text-base uppercase font-light mb-5 list-none list-style-none eight:mb-3 2xl:mb-4 tracking-wider eight:ml-0 ml-20 tracking-widest">
    <Link to={link}>{children}</Link>
  </li>
);
