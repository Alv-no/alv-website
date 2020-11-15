import React, { useEffect, useState } from 'react';
import * as Icon from '../icon';
import * as Button from '../button';
import { EmployeeCard } from '../employeeCard';
import { EmployeeBio } from '../employeeBio';
import useWindowDimensions from '../../hooks/useWindowDimensions';

export const Tags = ({ sanityTags, sanityEmployees }) => {
  const { width } = useWindowDimensions();
  const [filteredEmployees, setFilteredEmployees] = useState(
    sanityEmployees.map((el) => el.node)
  );
  const [tags, setTags] = useState(null);
  const [columnsNr, setColumnsNr] = useState(null);
  const [rows, setRows] = useState(null);
  const [employeeGroups, setEmployeeGroups] = useState(null);
  const [activeBio, setActiveBio] = useState(null);
  const [visibleRows, setVisibleRows] = useState(3);

  // On window.innerWidth < 1440, update number of grid columns from 4 to 3.
  useEffect(() => {
    setColumnsNr(width >= 1440 ? 4 : 3);
  }, [width]);

  // Update number of rows whenever number of visible employees change, and whenever screen resize lead to columnsNr change.
  useEffect(() => {
    setRows(Math.ceil(filteredEmployees.length / columnsNr));
  }, [filteredEmployees, columnsNr]);

  // Find all employee tags once component has mounted
  useEffect(() => {
    if (sanityTags !== undefined || sanityTags !== null) {
      const arr = sanityTags.map((sanityTag) => sanityTag.node.tag);
      setTags(arr);
    }
  }, [sanityTags]);

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
  const handleClick = (e) => {
    const currentTag = e.target.value;
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
      return setActiveBio(null);
    }
    const currentBio = filteredEmployees.find(
      (employee) => employee.id === e.target.id
    );
    setActiveBio(currentBio);
  };

  // Close button
  const handleCloseClick = () => {
    setActiveBio(null);
  };

  // Increase maximum number of employee groups to be rendered
  const handleViewMoreClick = () => {
    setVisibleRows(visibleRows + 3);
    console.log(`Allowing 3 more rows (total: ${visibleRows})`);
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
      {employeeGroups
        ? employeeGroups.map((group) => {
            if (group.length > 1) {
              return (
                <>
                  <div
                    className="grid gap-4 justify-center mx-auto sm:grid-cols-employees-sm nine:grid-cols-employees-nine 2xl:grid-cols-employees-lg mb-4"
                    key={employeeGroups.indexOf(group)}
                  >
                    {group.map((employee) => (
                      <EmployeeCard
                        {...employee}
                        handleClick={handleCardClick}
                        key={employee.id}
                      />
                    ))}
                  </div>
                  {activeBio && group.some((el) => el.id === activeBio.id) ? (
                    <EmployeeBio
                      {...activeBio}
                      handleCloseClick={handleCloseClick}
                      bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Laboris nisi ut aliquip ex ea commodo consequat."
                    />
                  ) : null}
                </>
              );
            }
            return null;
          })
        : null}
      <div className="max-w-1200 px-5 mx-auto flex justify-between mt-15">
        <div />
        <div className="font-bold tracking-wider" onClick={handleViewMoreClick}>
          <Button.Line>View More</Button.Line>
        </div>
      </div>
    </div>
  );
};
