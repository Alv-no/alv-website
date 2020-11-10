import React from 'react';
import { Tag } from '../icon';

export const Tags = ({ tags }) => {
  const employees = [
    {
      name: 'Martin',
      title: 'Leder',
      xp: '13 år',
      image: 'bilde',
      roles: ['Project management'],
    },
    {
      name: 'Petter',
      title: 'Leder',
      xp: '12 år',
      image: 'bilde',
      roles: ['Development'],
    },
    {
      name: 'Petter',
      title: 'Leder',
      xp: '12 år',
      image: 'bilde',
      roles: ['Develodddpment'],
    },
  ];
  const handleClick = (e) => {
    const currentTag = e.target.firstElementChild.innerHTML;
    if (tags.indexOf(currentTag) > -1) {
      tags = tags.filter((tag) => {
        return tag !== currentTag;
      });
      e.target.style.opacity = 0.5;
    } else {
      tags.push(currentTag);
      e.target.style.opacity = 1;
    }
  };
  return (
    <div className="w-full text-white">
      <div className="mx-auto flex md:flex-row flex-col text-white items-center justify-center px-4z mb-15">
        <div className="flex mr-4 text-base tracking-wider font-bold mb-3">
          Tags{' '}
          <span className="transform scale-10 -translate-y-2px h-5 -mx-32">
            <Tag />
          </span>
        </div>
        <div className="flex -ml-4 flex-wrap items-center justify-center">
          {tags.map((tag) => (
            <button
              className="text-sm min-w-40 border border-white rounded-full py-6px px-4 flex items-center focus:outline-none mr-6px mb-2 font-bold tracking-wider"
              onClick={handleClick}
            >
              <span className="transform -translate-y-1px pointer-events-none mx-auto">
                {tag}
              </span>
            </button>
          ))}
        </div>
      </div>
      <div className="flex justify-center flex-wrap">
        {employees.map((employee) => (
          <div className="">
            <div>{employee.xp}</div>
            <div>
              <div>{employee.name}</div>
              <div>{employee.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Tags.defaultProps = {
  tags: [
    'Data and analytics',
    'Information security',
    'Project management',
    'Development',
  ],
};
