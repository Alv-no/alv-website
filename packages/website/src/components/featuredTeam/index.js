import React from 'react';
import { EmployeeCard } from '../employeeCard';
import Link from 'gatsby-link';
import { Title } from '../title';
import * as Button from '../button';

export const FeaturedTeam = ({ team, notitle }) => {
  const handleClick = (e) => {
    return e;
  };
  return (
    <div className="mb-4 mt-10 px-12">
      <div className="max-w-1200 mx-auto">
        {!notitle && (
          <Title underline align="left" color="text-navy">
            Featured Team Members
          </Title>
        )}
        <div className="h-12" />
        <div
          className="grid xs:gap-4 xs:mx-auto mb-10"
          style={{
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          }}
        >
          {team.map((employee) => (
            <Link to="/ansatte">
              <EmployeeCard
                {...employee}
                handleClick={handleClick}
                key={employee.id}
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
