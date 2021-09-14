import React, { useState, useEffect } from 'react';
import { GridContainer } from '../gridContainer';
import { EmployeeFilter } from '../employeeFilter';

export const EmployeeSection = ({
  allTags,
  allEmployees,
  linkedId,
  fallbackImg,
}) => {
  const [filteredContent, setFilteredContent] = useState(null);
  const [tags, setTags] = useState([]);

  // Filter employees based on active tags
  const filterEmployees = (tags) => {
    if (tags.length === 0) return setFilteredContent(allEmployees);
    const filteredEmployeeArr = allEmployees.filter((employee) => {
      let test;
      employee.tags.forEach((node) =>
        !test ? (test = tags.indexOf(node.tag) > -1) : null
      );
      return test;
    });
    return setFilteredContent(filteredEmployeeArr);
  };

  useEffect(() => {
    filterEmployees(allTags);
    setFilteredContent(allEmployees);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allEmployees]);

  // Add or remove clicked tag from state
  const handleTagClick = (e) => {
    const currentTag = e.target.id;
    let activeTags = tags;
    if (activeTags.indexOf(currentTag) !== -1) {
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
      {filteredContent && (
        <GridContainer
          filteredContent={filteredContent}
          linkedId={linkedId}
          fallbackImg={fallbackImg}
        />
      )}
    </div>
  );
};
