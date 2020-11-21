import React, { useState } from 'react';

export const Checkbox = ({
  children,
  updateFilter,
  defaultValue = undefined,
  tag,
}) => {
  const [value, setValue] = useState(true);
  const handleClick = (e) => {
    setValue(!value);
    updateFilter(e);
  };
  if (defaultValue === undefined) defaultValue = value;

  return (
    <label className="cursor-pointer ">
      <input
        type="checkbox"
        defaultChecked={defaultValue}
        value={value}
        onChange={handleClick}
        className="border-white border absolute cursor-pointer -my-2px opacity-0"
        style={{ opacity: 0 }}
        id={tag}
      />
      <span
        className="transform sm:scale-100 scale-90 text-sm min-w-40 border-2 border-yellow sm:border-white rounded-full py-6px px-4 flex items-center focus:outline-none -mr-3 sm:mr-6px mb-2 tracking-wider"
        style={{ opacity: value ? '1' : '0.5' }}
      >
        <span className="transform -translate-y-1px pointer-events-none mx-auto font-bold">
          {children}
        </span>
      </span>
    </label>
  );
};
