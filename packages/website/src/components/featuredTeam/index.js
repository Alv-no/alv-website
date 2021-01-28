import React from 'react';
import { EmployeeCard } from '../employeeCard';
import Link from 'gatsby-link';
import { Title } from '../title';
import * as Button from '../button';

export const FeaturedTeam = ({ team, notitle, fallbackImg }) => {
  const handleClick = (e) => {
    return e;
  };
  return (
    <div className="mb-4 mt-10 ">
      <div className="max-w-1440 pr-5 sm:px-12 mx-auto">
        {!notitle && (
          <Title underline align="left" color="text-navy">
            Featured Team Members
          </Title>
        )}
        <div className="h-12" />
        <div className="grid xs:gap-4 mb-12 xs:max-w-570 seven:max-w-none grid-cols-employees-xs xs:grid-cols-employees-sm seven:grid-cols-employees-md nine:grid-cols-team-lg nine:justify-between gap-y-6">
          {team.map((employee) => (
            <Link to="/ansatte">
              <EmployeeCard
                {...employee}
                handleClick={handleClick}
                key={employee.id}
                fallbackImg={fallbackImg}
              />
            </Link>
          ))}
        </div>
        <div className="w-full flex justify-end mt-10 font-semibold pr-2">
          <Link to="/ansatte">
            <Button.Line>Se Mer</Button.Line>
          </Link>
        </div>
      </div>
    </div>
  );
};
