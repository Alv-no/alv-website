import React, { useEffect, useState } from 'react';
import * as Icon from '../icon';
import { EmployeeCard } from '../employeeCard';
import { EmployeeBio } from '../employeeBio';

export const Tags = ({ sanityTags, sanityEmployees }) => {
  const [tags, setTags] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState(sanityEmployees);

  useEffect(() => {
    if (sanityTags !== undefined || sanityTags !== null) {
      const arr = sanityTags.map((sanityTag) => sanityTag.node.tag);
      setTags(arr);
    }
  }, [sanityTags]);

  const filterEmployees = (tags) => {
    const filteredEmployeeArr = sanityEmployees.filter((employee) => {
      let test;
      employee.node.tags.forEach((node) => {
        if (!test) {
          tags.indexOf(node.tag) > -1 ? (test = true) : (test = false);
        }
      });
      return test;
    });
    return setFilteredEmployees(filteredEmployeeArr);
  };

  const handleClick = (e) => {
    const currentTag = e.target.value;
    let activeTags = tags;
    if (activeTags.indexOf(currentTag) > -1) {
      // Remove tag from state
      activeTags = activeTags.filter((tag) => tag !== currentTag);
      e.target.style.opacity = 0.5;
    } else {
      // Add tag to state
      e.target.style.opacity = 1;
      activeTags.push(currentTag);
    }
    setTags(activeTags);
    filterEmployees(activeTags);
  };

  return (
    // FILTER SECTION
    <div className="w-full text-white">
      <div className="mx-auto flex md:flex-row flex-col text-white items-center justify-center px-4 mb-6">
        <div className="flex mr-4 text-base tracking-wider font-bold mb-3">
          Tags{' '}
          <span className="transform scale-10 -translate-y-2px h-5 -mx-32">
            <Icon.Tag />
          </span>
        </div>
        <div className="flex -ml-4 flex-wrap items-center justify-center">
          {sanityTags.map((sanityTag) => {
            return (
              <button
                className="text-sm min-w-40 border border-white rounded-full py-6px px-4 flex items-center focus:outline-none mr-6px mb-2 tracking-wider"
                onClick={handleClick}
                key={sanityTag.node.id}
                value={sanityTag.node.tag}
              >
                <span className="transform -translate-y-1px pointer-events-none mx-auto font-bold">
                  {sanityTag.node.tag}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* EMPLOYEE CARDS */}
      <div className="grid gap-4 justify-center mx-auto sm:grid-cols-employees-sm nine:grid-cols-employees-nine 2xl:grid-cols-employees-lg">
        {filteredEmployees.map((employee) => {
          return <EmployeeCard {...employee.node} />;
        })}
      </div>
      <div className="h-15" />
      <EmployeeBio
        firstname="Marcus Peter"
        lastname="Petterson"
        title="Daglig Leder og Prosjektleder"
        id="123"
        videoEmbed={'https://player.vimeo.com/video/76979871'}
        bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Laboris nisi ut aliquip ex ea commodo consequat."
      />
    </div>
  );
};
