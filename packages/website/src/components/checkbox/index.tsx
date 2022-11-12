import React, { useState } from 'react';

interface Props {
  children?: React.ReactNode;
  onChange: Function;
  tag: string;
  defaultChecked: boolean;
}

export const Checkbox : React.FC<Props> = ({
  children,
  onChange,
  tag,
  defaultChecked
}) => {
  if (defaultChecked === undefined) defaultChecked = false;
  const [value, setValue] = useState(defaultChecked);

  const handleClick = (e : any) => {
    onChange(e);
    setValue(!value);
  };
  return (
    <label className="cursor-pointer">
      <input
        type="checkbox"
        checked={value}
        onChange={handleClick}
        className="absolute invisible"
        id={tag}
      />
      <span
        className="transform sm:scale-100 scale-90 text-sm min-w-40 border-2 border-theme-accent sm:border-white rounded-full py-6px px-4 flex items-center focus:outline-none -mr-3 sm:mr-6px mb-2 tracking-wider"
        style={{ opacity: value ? '1' : '0.5' }}
      >
        <span className="transform -translate-y-1px pointer-events-none mx-auto font-bold">
          {children}
        </span>
      </span>
    </label>
  );
};
