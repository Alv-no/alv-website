import React, { useState, useEffect } from 'react';
import { EmployeeGroup } from '../employeeGroup';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import * as Button from '../button';

export const EmployeesContainer = ({ filteredEmployees }) => {
  const { width } = useWindowDimensions();
  const [columnsNr, setColumnsNr] = useState(null);
  const [rows, setRows] = useState(null);
  const [employeeGroups, setEmployeeGroups] = useState(null);
  const [activeBio, setActiveBio] = useState(null);
  const [visibleRows, setVisibleRows] = useState(3);

  useEffect(() => {
    setColumnsNr(width >= 930 ? 4 : width >= 700 ? 3 : width >= 500 ? 2 : 1);
    setRows(Math.ceil(filteredEmployees.length / columnsNr));
  }, [filteredEmployees, columnsNr, width]);

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

  const updateActiveBio = (card) => {
    setActiveBio(card);
  };

  const handleViewMoreClick = () => {
    setVisibleRows(visibleRows + 3);
  };

  return (
    <>
      {employeeGroups
        ? employeeGroups.map((group) => {
            if (group.length > 0) {
              return (
                <EmployeeGroup
                  key={employeeGroups.indexOf(group)}
                  activeBio={activeBio}
                  employees={filteredEmployees}
                  updateActiveBio={updateActiveBio}
                  group={group}
                />
              );
            }
            return null;
          })
        : null}
      {/* VIEW MORE BUTTON */}
      <div className="max-w-1200 mx-auto flex justify-between sm:mt-15 xs:mt-12 mt-10 twelve:px-6">
        <div />
        <div
          className="font-bold tracking-wider pr-2px"
          onClick={handleViewMoreClick}
        >
          <Button.Line>Se Mer</Button.Line>
        </div>
      </div>
    </>
  );
};
