import React from 'react';

export const Checkbox = ({
  children,
  value,
  onChange,
  defaultValue = undefined,
}) => {
  if (defaultValue === undefined) defaultValue = value;

  return (
    <label>
      <input
        type="checkbox"
        defaultChecked={defaultValue}
        value={value}
        onChange={onChange}
        className="border-white border absolute cursor-pointer"
      />
      <span
        className="text-sm min-w-40 border border-white mr-6px rounded-full py-6px px-4 flex items-center focus:outline-none tracking-wider cursor-pointer"
        style={{ opacity: value ? '1' : '0.5' }}
      >
        <span className="transform -translate-y-1px pointer-events-none mx-auto font-bold">
          {children}
        </span>
      </span>
    </label>
  );
};
