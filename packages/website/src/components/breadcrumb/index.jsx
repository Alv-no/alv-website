import React from 'react';

const Breadcrumb = ({ path }) => (
  <div className="overflow-hidden">
    <div className="flex space-x-4 text-white -ml-3 tracking-wider">
      {(path || []).map((item, i) => (
        <a key={i} href="/" className="last:font-bold font-thin">
          <span className="mr-3 -ml-1">/</span>
          {item}
        </a>
      ))}
    </div>
  </div>
);

export default Breadcrumb;
