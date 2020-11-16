import React from 'react';

export const Tag = ({ handleClick, id, tag, children }) => {
  return (
    <button
      className="text-sm min-w-40 border border-white rounded-full py-6px px-4 flex items-center focus:outline-none mr-6px mb-2 tracking-wider"
      onClick={handleClick}
      key={id}
      value={tag}
    >
      <span className="transform -translate-y-1px pointer-events-none mx-auto font-bold">
        {children}
      </span>
    </button>
  );
};
