import React from 'react';
import Link from 'gatsby-link';

const Breadcrumb = ({ path }) => {
  let crumbs = [];
  const filteredPath = path.filter((el) => el.length > 0);
  if (filteredPath) {
    crumbs = filteredPath.map((el) => {
      let formattedEl = el[0].toUpperCase() + el.slice(1);
      if (formattedEl.includes('-')) {
        if (path[0] !== 'vi-tilbyr') {
          formattedEl.length > 35
            ? (formattedEl = ['Blogginnlegg'])
            : (formattedEl = formattedEl.split('-').join(' '));
        } else {
          formattedEl = formattedEl.split('-').join(' ');
        }
      }
      if (el === 'vi-tilbyr') formattedEl = 'Vi tilbyr';
      return formattedEl;
    });
  }
  crumbs.unshift('Hjem');
  return (
    <div className="overflow-hidden">
      {crumbs.length > 1 && (
        <div className="flex space-x-4 text-white -ml-3 tracking-wider relative z-20">
          {(crumbs || []).map((item, i) => {
            let link;
            if (i === 0) {
              link = '/';
            } else {
              link = '/' + path.slice(0, i).join('/');
            }

            return (
              <>
                {link === '/vi-tilbyr' ? (
                  <div key={i} className="last:font-bold font-thin">
                    <span className="mr-3 -ml-1 font-light">/</span>
                    {item}
                  </div>
                ) : (
                  <Link to={link} key={i} className="last:font-bold font-thin">
                    <span className="mr-3 -ml-1 font-light">/</span>
                    {item}
                  </Link>
                )}
              </>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Breadcrumb;
