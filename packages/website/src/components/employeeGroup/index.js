import React from 'react';
import { EmployeeCard } from '../employeeCard';
import { EmployeeBio } from '../employeeBio';

export const EmployeeGroup = ({
  group,
  activeBio,
  updateActiveBio,
  employees,
}) => {
  // Update activeBio state with employee object corresponding to card clicked
  const handleCardClick = (e) => {
    if (activeBio && e.target.id === activeBio.id) {
      return updateActiveBio(null);
    }
    const currentBio = employees.find(
      (employee) => employee.id === e.target.id
    );
    updateActiveBio(currentBio);
  };

  // Close employee bio section by clearing activeBio state
  const handleCloseClick = () => {
    updateActiveBio(null);
  };
  return (
    <>
      <div>
        <div className="grid xs:gap-4 justify-center xs:mx-auto mb-4 xs:max-w-570 seven:max-w-none nine:max-w-grid -mx-4 xs:mx-0 grid-cols-employees-xs xs:grid-cols-employees-sm seven:grid-cols-employees-md nine:grid-cols-employees-lg">
          {group.map((employee) => (
            <EmployeeCard
              {...employee}
              handleClick={handleCardClick}
              key={employee.id}
              activeBio={activeBio}
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
      </div>
    </>
  );
};
