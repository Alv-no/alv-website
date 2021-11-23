import React from 'react';
import Link from 'gatsby-link';

export const Breadcrumb = ({ path, white }) => {
  const upperCrumbCharLimit = 35;
  const isEnLocale = path.includes('en');

  const formatCrumbs = (crumbs) =>
    crumbs
      .filter((crumb) => crumb.length > 0)
      .map((crumb) => {
        let formattedEl = crumb[0].toUpperCase() + crumb.slice(1);
        if (formattedEl.includes('-')) {
          if (
            crumbs[0] === 'blogg' &&
            formattedEl.length > upperCrumbCharLimit
          ) {
            formattedEl = ['Blogginnlegg'];
          } else {
            formattedEl = formattedEl
              .split('-')
              .join(' ')
              .replace('%C3%A5', 'å');
          }
        }
        if (crumb === 'jobbe-i-alv') formattedEl = 'Jobbe i Alv';
        return formattedEl;
      });

  const filteredPath = path.length ? formatCrumbs(path) : path;

  if (isEnLocale) {
    filteredPath.splice(0, 1);
    filteredPath.unshift('Home');
  } else {
    filteredPath.unshift('Hjem');
  }
  return (
    <div className="overflow-hidden">
      {filteredPath.length > 1 && (
        <div
          className={`flex space-x-4 text-${
            white ? 'navy' : 'white'
          } -ml-3 tracking-wider relative z-20`}
        >
          {(filteredPath || []).map((text, i) => {
            let link;
            if (i === 0) {
              link = '/';
            } else {
              link = '/' + path.slice(0, i).join('/');
            }
            return (
              <div key={i}>
                <Link to={link} className="last:font-bold font-extralight">
                  <span className="mr-3 -ml-1 font-light">/</span>
                  {text}
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Breadcrumb;
