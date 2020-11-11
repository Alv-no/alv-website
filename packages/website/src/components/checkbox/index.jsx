import React from 'react';

const Checkbox = ({ children, value, onChange, defaultValue = undefined }) => {
  if (defaultValue === undefined) defaultValue = value;

  return (
    <label>
      <input
        type="checkbox"
        defaultChecked={defaultValue}
        value={value}
        onChange={onChange}
        className="hidden"
      />
      <span
        className="text-white text-sm min-w-40 cursor-pointer border border-white rounded-full py-6px px-4 flex items-center focus:outline-none mr-6px mb-2 font-bold tracking-wider"
        style={{ opacity: value ? '1' : '0.5' }}
      >
        <span className="transform -translate-y-1px pointer-events-none mx-auto">
          {children}
        </span>
      </span>
    </label>
  );
};

export default Checkbox;
