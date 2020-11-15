import React from 'react';

const Breadcrumb = ({ path }) => (
  <div className="flex space-x-4 text-white">
    {(path || []).map((item, i) => (
      <a key={i} href="/" className="last:font-bold">
        {item}
      </a>
    ))}
  </div>
);

export default Breadcrumb;
