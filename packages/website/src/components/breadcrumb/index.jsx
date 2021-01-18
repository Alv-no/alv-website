import React from 'react';
import Link from 'gatsby-link';

const Breadcrumb = ({ path }) => {
  let crumbs = [];
  const filteredPath = path.filter((el) => el.length > 0);
  if (filteredPath) {
    crumbs = filteredPath.map((el) => {
      let formattedEl = el[0].toUpperCase() + el.slice(1);
      if (formattedEl.includes('-')) {
        if (formattedEl.length > 5) {
          formattedEl = ['Blogginnlegg'];
        }
      }

      return formattedEl;
    });
  }
  crumbs.unshift('Hjem');
  return (
    <div className="overflow-hidden">
      {crumbs.length > 1 && (
        <div className="flex space-x-4 text-white -ml-4 tracking-wider">
          {(crumbs || []).map((item, i) => {
            let link;
            if (i === 0) {
              link = '/';
            } else {
              link = '/' + path.slice(0, i).join('/');
            }

            return (
              <Link to={link} key={i} className="last:font-bold font-thin">
                <span className="mr-3 -ml-1 font-light">/</span>
                {item}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Breadcrumb;
