import React from 'react';
import { EmployeeCard } from '../employeeCard';
import { EmployeeBio } from '../employeeBio';

export const EmployeeGroup = ({
  group,
  activeBio,
  updateActiveBio,
  fallbackImg,
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
    // eslint-disable-next-line no-self-assign
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
              fallbackImg={fallbackImg}
            />
          ))}
        </div>
        {activeBio && group.some((el) => el.id === activeBio.id) ? (
          <EmployeeBio {...activeBio} handleCloseClick={handleCloseClick} />
        ) : null}
      </div>
    </>
  );
};
