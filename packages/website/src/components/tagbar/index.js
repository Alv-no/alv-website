import React, { useEffect, useState } from 'react';
import { EmployeeGroups } from '../employeeGroups';
import { Checkbox } from '../checkbox';
import * as Icon from '../icon';
import * as Button from '../button';
import useWindowDimensions from '../../hooks/useWindowDimensions';

export const Tags = ({ sanityTags, sanityEmployees }) => {
  const { width } = useWindowDimensions();
  const [filteredEmployees, setFilteredEmployees] = useState(
    sanityEmployees.map((el) => el.node)
  );
  const [tags, setTags] = useState(
    sanityTags.map((sanityTag) => sanityTag.node.tag)
  );
  const [columnsNr, setColumnsNr] = useState(null);
  const [rows, setRows] = useState(null);
  const [employeeGroups, setEmployeeGroups] = useState(null);
  const [activeBio, setActiveBio] = useState(null);
  const [activeElement, setActiveElement] = useState(null);
  const [visibleRows, setVisibleRows] = useState(3);

  // Update number of rows whenever number of visible employees change, and whenever screen resize lead to columnsNr change.
  useEffect(() => {
    setColumnsNr(width >= 930 ? 4 : width >= 700 ? 3 : width >= 500 ? 2 : 1);
    setRows(Math.ceil(filteredEmployees.length / columnsNr));
  }, [filteredEmployees, columnsNr, width]);

  // Render independent rows of employee cards based on window.innerWidth, active tags and visible rows.
  useEffect(() => {
    if (typeof rows == 'number' && rows < 50) {
      setEmployeeGroups(() => {
        const newGroup = [];
        const showEmployees = filteredEmployees;
        let i;
        for (i = 0; i < rows || newGroup.length < visibleRows; i++) {
          const currentGroup = showEmployees.slice(
            i * columnsNr,
            (i + 1) * columnsNr
          );
          showEmployees.slice(0, columnsNr);
          newGroup.push(currentGroup);
        }
        return newGroup;
      });
    }
  }, [rows, filteredEmployees, columnsNr, visibleRows]);

  // Filter employees based on active tags
  const filterEmployees = (tags) => {
    const filteredEmployeeArr = sanityEmployees.filter((employee) => {
      let test;
      employee.node.tags.forEach((node) =>
        !test ? (test = tags.indexOf(node.tag) > -1) : null
      );
      return test;
    });
    return setFilteredEmployees(filteredEmployeeArr.map((el) => el.node));
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

  // Update activeBio state with employee object corresponding to card clicked
  const handleCardClick = (e) => {
    if (activeBio && e.target.id === activeBio.id) {
      e.target.style.filter = '';
      e.target.firstChild.style.opacity = '';
      return setActiveBio(null);
    }
    const currentBio = filteredEmployees.find(
      (employee) => employee.id === e.target.id
    );

    if (activeElement) {
      activeElement.style.filter = '';
      activeElement.firstChild.style.opacity = '';
    }

    e.target.style.filter = 'grayscale(0)';
    e.target.firstChild.style.opacity = 1;

    setActiveBio(currentBio);
    setActiveElement(e.target);
  };

  // Close employee bio section by clearing activeBio state
  const handleCloseClick = () => {
    activeElement.style.filter = '';
    activeElement.firstChild.style.opacity = '';
    setActiveBio(null);
    setActiveElement(null);
  };

  // Increase maximum number of employee groups to be rendered
  const handleViewMoreClick = () => {
    setVisibleRows(visibleRows + 3);
  };

  return (
    // FILTER SECTION
    <div className="w-full text-white xs:px-6 overflow-hidden">
      <div className="mx-auto flex md:flex-row flex-col text-white sm:items-center justify-center px-4 sm:px-4 mb-10">
        <div className="flex mr-4 text-base tracking-wider font-bold mb-5 sm:mb-3">
          Kategorier{' '}
          <span className="transform scale-10 -translate-y-2px h-5 -mx-32">
            <Icon.Tag />
          </span>
        </div>
        <div className="flex -ml-4 flex-wrap items-center">
          {sanityTags.map((sanityTag) => {
            return (
              <Checkbox
                onChange={handleTagClick}
                key={sanityTag.node.id}
                {...sanityTag.node}
              >
                {sanityTag.node.tag}
              </Checkbox>
            );
          })}
        </div>
      </div>

      {/* EMPLOYEE CARDS */}
      <EmployeeGroups
        employeeGroups={employeeGroups}
        activeBio={activeBio}
        handleCardClick={handleCardClick}
        handleCloseClick={handleCloseClick}
      />
      <div className="max-w-1200 mx-auto flex justify-between sm:mt-15 xs:mt-12 mt-10 twelve:px-6">
        <div />
        <div
          className="font-bold tracking-wider pr-2px"
          onClick={handleViewMoreClick}
        >
          <Button.Line>Se Mer</Button.Line>
        </div>
      </div>
    </div>
  );
};
