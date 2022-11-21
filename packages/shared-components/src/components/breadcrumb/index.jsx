import Link from 'gatsby-link';
import React from 'react';

export const Breadcrumb = ({ path, white, homeCrumb }) => {
  const upperCrumbCharLimit = 35;

  const disabledLinks = ['services'];

  const checkIfDisabledLink = (link) => {
    const linkArr = link.split('/');
    const lastLink = linkArr[linkArr.length - 1];
    if (disabledLinks.includes(lastLink)) {
      return true;
    }
    return false;
  };

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

  filteredPath.unshift(homeCrumb);

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
                <Link
                  to={link}
                  className={`last:font-bold font-extralight ${
                    checkIfDisabledLink(link) ? 'pointer-events-none' : ''
                  }`}
                >
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
