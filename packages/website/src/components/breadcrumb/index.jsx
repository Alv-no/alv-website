import React from 'react';
import Link from 'gatsby-link';

const Breadcrumb = ({ path }) => {
  const formatCrumbs = (crumbs) =>
    crumbs
      .filter((el) => el.length > 0)
      .map((el) => {
        let formattedEl = el[0].toUpperCase() + el.slice(1);
        if (formattedEl.includes('-')) {
          if (crumbs[0] === 'blogg' && formattedEl.length > 35) {
            formattedEl = ['Blogginnlegg'];
          } else {
            formattedEl = formattedEl.split('-').join(' ');
          }
        }
        if (el === 'jobbe-i-alv') formattedEl = 'Jobbe i Alv';
        return formattedEl;
      });

  const filteredPath = path.length ? formatCrumbs(path) : path;
  filteredPath.unshift('Hjem');
  return (
    <div className="overflow-hidden">
      {filteredPath.length > 1 && (
        <div className="flex space-x-4 text-white -ml-3 tracking-wider relative z-20">
          {(filteredPath || []).map((item, i) => {
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
                  {item}
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
