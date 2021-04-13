import React, { useState } from 'react';
import * as Icon from '../icon';
import Link from 'gatsby-link';
import styles from './navItems.module.css';

export const LargeLink = ({ children, link }) => {
  const [open, setOpen] = useState(false);
  const toggleDropdown = () => {
    setOpen(!open);
  };
  return (
    <>
      {link ? (
        <Link to={link}>
          <h2
            className={`text-white font-bold tracking-widest eight:mt-10 2xl:mt-12 uppercase text-nav my-15 eight:my-8 w-full ml-6 sm:ml-8 eight:ml-0 z-50`}
          >
            {children}
            <span className="text-yellow">.</span>
          </h2>
        </Link>
      ) : (
        <>
          <input
            type="checkbox"
            className={styles.largeTitleInput}
            onChange={toggleDropdown}
          />

          <h2
            className={`text-white font-bold tracking-widest max-w-screen eight:mt-10 2xl:mt-12 uppercase text-nav my-15 eight:my-8 w-full ml-6 sm:ml-8 eight:ml-0 z-50`}
          >
            {children}
            <span className="text-yellow">.</span>
            <Icon.TransitionArrow open={open} />
          </h2>
        </>
      )}
    </>
  );
};

export const Subtitle = ({ children, link }) => {
  const [open, setOpen] = useState(false);
  const toggleDropdown = () => {
    setOpen(!open);
  };
  return (
    <>
      {link ? (
        <Link to={link}>
          <li className="list-none hidden eight:block">
            <h3
              className={`uppercase text-lg tracking-widest mt-8 eight:mt-12 eight:mb-4 eight:ml-0 sm:ml-15 ml-12`}
            >
              {children}
            </h3>
          </li>
        </Link>
      ) : (
        <>
          <input
            type="checkbox"
            className={styles.subTitleInput}
            onChange={toggleDropdown}
          />

          <li className="list-none hidden eight:block">
            <h3
              className={`uppercase text-lg tracking-widest mt-8 eight:mt-12 eight:mb-4 eight:ml-0 sm:ml-15 ml-12`}
            >
              {children}

              <Icon.TransitionArrow open={open} />
            </h3>
          </li>
        </>
      )}
    </>
  );
};

export const List = ({ children }) => (
  <ul className="eight:max-h-full list-none list-style-none hidden eight:block mt-6 eight:mt-8">
    {children}
  </ul>
);

export const ListLink = ({ children, link }) => (
  <li className="text-base uppercase font-light mb-5 list-none list-style-none eight:mb-3 2xl:mb-4 tracking-wider eight:ml-0 ml-20 tracking-widest">
    <Link to={link}>{children}</Link>
  </li>
);
