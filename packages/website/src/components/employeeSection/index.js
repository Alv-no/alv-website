import React, { useState } from 'react';
import { GridContainer } from '../gridContainer';
import { EmployeeFilter } from '../employeeFilter';

export const EmployeeSection = ({
  allTags,
  allEmployees,
  linkedId,
  fallbackImg,
}) => {
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
    } else {
      activeTags.push(currentTag);
    }
    setTags(activeTags);
    filterEmployees(activeTags);
  };

  return (
    <div className="w-full text-white xs:px-6 overflow-hidden">
      <div className="max-w-1440 mx-auto lg:px-10 2xl:px-32">
        <EmployeeFilter allTags={allTags} onChange={handleTagClick} />
      </div>
      <GridContainer
        filteredContent={filteredContent}
        linkedId={linkedId}
        fallbackImg={fallbackImg}
      />
    </div>
  );
};
