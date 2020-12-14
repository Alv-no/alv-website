import React, { useState, useEffect } from 'react';
import { window, document } from 'browser-monads';
import * as Button from '../button';
import { EmployeeGroup } from '../employeeGroup';
import useWindowDimensions from '../../hooks/useWindowDimensions';

export const GridContainer = ({ filteredContent, linkedId }) => {
  const { width } = useWindowDimensions();
  const [columnsNr, setColumnsNr] = useState(null);
  const [rows, setRows] = useState(null);
  const [contentGroups, setContentGroups] = useState(null);
  const [visibleRows, setVisibleRows] = useState(3);
  const [cardClick, setCardClick] = useState(false);

  // Set active bio on route update
  const [activeBio, setActiveBio] = useState(() => {
    if (linkedId) {
      const active = filteredContent.filter((el) => el.id === linkedId);
      return active[0];
    }
    return null;
  });

  // Scroll to active bio section on card click
  useEffect(() => {
    if (activeBio && cardClick) {
      let nameSlug = activeBio.firstname
        .split(' ')
        .concat(activeBio.lastname.split(' '))
        .map((name) => name.toLowerCase());
      nameSlug = nameSlug.join('-');
      const element = document.getElementById(nameSlug);
      const top =
        window.scrollY +
        element.getBoundingClientRect().top -
        (width > 1024 ? 430 : width > 500 ? 100 : 0);
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, [activeBio, width, cardClick]);

  useEffect(() => {
    setColumnsNr(width >= 930 ? 4 : width >= 700 ? 3 : width >= 500 ? 2 : 1);
    setRows(Math.ceil(filteredContent.length / columnsNr));
  }, [filteredContent, columnsNr, width]);

  useEffect(() => {
    if (typeof rows == 'number' && rows < 50) {
      setContentGroups(() => {
        const newGroup = [];
        const showEmployees = filteredContent;
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
  }, [rows, filteredContent, columnsNr, visibleRows]);

  const updateActiveBio = (card) => {
    setActiveBio(card);
    if (!cardClick) setCardClick(true);
  };

  const handleViewMoreClick = () => {
    setVisibleRows(visibleRows + 3);
  };

  return (
    <>
      {contentGroups
        ? contentGroups.map((group) => {
            if (group.length > 0) {
              return (
                <EmployeeGroup
                  key={contentGroups.indexOf(group)}
                  activeBio={activeBio}
                  employees={filteredContent}
                  updateActiveBio={updateActiveBio}
                  group={group}
                />
              );
            }
            return null;
          })
        : null}
      {/* VIEW MORE BUTTON */}
      <div
        className="max-w-1200 mx-auto flex justify-between sm:mt-15 xs:mt-12 mt-10 twelve:px-6"
        id="container"
      >
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
