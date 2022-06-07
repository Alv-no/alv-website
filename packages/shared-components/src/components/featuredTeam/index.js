import React from 'react';
import { EmployeeCard } from '../employeeCard';
import Link from 'gatsby-link';
import { Title } from '../title';
import * as Button from '../button';
import { createSlugForEmployee } from '../createSlugForEmployee';

export const FeaturedTeam = ({ team, notitle, fallbackImg, notransparent }) => {
  const handleClick = (e) => {
    return e;
  };
  const linkableTeam = team.map((el) => {
    el.slug = createSlugForEmployee(el.firstname, el.lastname);
    return el;
  });
  return (
    <div id="konsulentene">
      {!notitle && (
        <Title underline align="left" color="text-navy">
          Konsulenter
        </Title>
      )}
      <div className="h-12" />
      <div className="grid xs:gap-4 mb-12 xs:max-w-570 seven:max-w-none grid-cols-employees-xs xs:grid-cols-employees-sm seven:grid-cols-employees-md nine:grid-cols-team-lg nine:justify-between gap-y-6">
        {linkableTeam.map((employee) => (
          <Link
            to={`/ansatte#${employee.slug}`}
            state={{ activeCard: employee.id, employee: employee.slug }}
          >
            <EmployeeCard
              {...employee}
              handleClick={handleClick}
              key={employee.id}
              fallbackImg={fallbackImg}
              notransparent={notransparent}
            />
          </Link>
        ))}
      </div>
      <div className="w-full flex justify-end mt-10 font-semibold pr-2">
        <Link to="/ansatte">
          <Button.Line>Se alle konsulentene</Button.Line>
        </Link>
      </div>
    </div>
  );
};
