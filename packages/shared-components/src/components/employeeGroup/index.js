import React from "react";
import { EmployeeCard } from "../employeeCard";
import { EmployeeBio } from "../employeeBio";
import { window } from "browser-monads";

export const EmployeeGroup = ({
  group,
  activeBio,
  updateActiveBio,
  fallbackImg,
  centerBioText,
  greyCards,
  showVideo,
  employees,
  bioRefContainer,
  children,
  white,
  config,
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
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}#${currentBio.slug}`
    );
  };
  // Close employee bio section by clearing activeBio state
  const handleCloseClick = () => {
    updateActiveBio(null);
  };

  return (
    <>
      <div>
        <div class="md:flex justify-center ">
          <div className="grid gap-4 justify-center five:gap-y-0 xs:mx-auto mb-4 xs:max-w-570 seven:max-w-none nine:max-w-grid grid-cols-employees-xs xs:grid-cols-employees-sm seven:grid-cols-employees-md nine:grid-cols-employees-lg">
            {group.map((employee, i) => (
              <span key={`employee-${i}`}>
                <div>
                  <EmployeeCard
                    {...employee}
                    handleClick={handleCardClick}
                    key={employee.id}
                    activeBio={activeBio}
                    fallbackImg={fallbackImg}
                    white={white}
                    greyCards={greyCards}
                  />
                  <p className="absolute opacity-0 pointer-events-none">
                    {children}
                  </p>
                  {activeBio && window.innerWidth < 480 && (
                    <div>
                      {activeBio.id === employee.id &&
                        group.some((el) => el.id === activeBio.id) && (
                          <EmployeeBio
                            {...activeBio}
                            handleCloseClick={handleCloseClick}
                            bioRefContainer={bioRefContainer}
                            showVideo={showVideo}
                            centerBioText={centerBioText}
                            config={config}
                          />
                        )}
                    </div>
                  )}
                </div>
              </span>
            ))}
          </div>
        </div>

        {window.innerWidth >= 480 && (
          <span>
            {activeBio && group.some((el) => el.id === activeBio.id) ? (
              <EmployeeBio
                {...activeBio}
                centerBioText={centerBioText}
                handleCloseClick={handleCloseClick}
                config={config}
              />
            ) : null}
          </span>
        )}
      </div>
    </>
  );
};
