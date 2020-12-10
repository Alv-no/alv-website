import React, { useState } from 'react';
import * as Icon from '../icon';
import { GridContainer } from '../gridContainer';
import { Checkbox } from '../checkbox';

export const EmployeeSection = ({ allTags, allEmployees, linkedId }) => {
  const [filteredContent, setFilteredContent] = useState(
    allEmployees.map((el) => el.node)
  );

  const [tags, setTags] = useState(allTags.map((tag) => tag.node.tag));

  // Filter employees based on active tags
  const filterEmployees = (tags) => {
    const filteredEmployeeArr = allEmployees.filter((employee) => {
      let test;
      employee.node.tags.forEach((node) =>
        !test ? (test = tags.indexOf(node.tag) > -1) : null
      );
      return test;
    });
    return setFilteredContent(filteredEmployeeArr.map((el) => el.node));
  };

  // Add or remove clicked tag from state
  const handleTagClick = (e) => {
    const currentTag = e.target.id;
    let activeTags = tags;
    if (activeTags.indexOf(currentTag) > -1) {
      activeTags = activeTags.filter((tag) => tag !== currentTag);
      e.target.style.opacity = 0.5;
    } else {
      e.target.style.opacity = 1;
      activeTags.push(currentTag);
    }
    setTags(activeTags);
    filterEmployees(activeTags);
  };

  return (
    <div className="w-full text-white xs:px-6 overflow-hidden">
      <EmployeeFilter allTags={allTags} onChange={handleTagClick} />
      <GridContainer filteredContent={filteredContent} linkedId={linkedId} />
    </div>
  );
};

export const EmployeeFilter = ({ allTags, onChange }) => (
  <div className="mx-auto flex md:flex-row flex-col text-white sm:items-center justify-center px-4 sm:px-4 mb-10">
    <div className="flex mr-4 text-base tracking-wider font-bold mb-5 sm:mb-3">
      Kategorier{' '}
      <span className="transform scale-10 -translate-y-2px h-5 -mx-32">
        <Icon.Tag />
      </span>
    </div>
    <div className="flex -ml-4 flex-wrap items-center">
      {allTags.map((sanityTag) => {
        return (
          <Checkbox
            onChange={onChange}
            key={sanityTag.node.id}
            {...sanityTag.node}
          >
            {sanityTag.node.tag}
          </Checkbox>
        );
      })}
    </div>
  </div>
);
