import React, { useState, useEffect, useRef } from 'react';
import * as Button from '../button';
import { EmployeeGroup } from '../employeeGroup';
import { window } from 'browser-monads';

// @deprecated
const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
};

export const GridContainer = ({
  filteredContent,
  linkedId,
  fallbackImg,
  white,
}) => {
  const { width } = useWindowDimensions();
  const [columnsNr, setColumnsNr] = useState(null);
  const [rows, setRows] = useState(null);
  const [contentGroups, setContentGroups] = useState(null);
  const [visibleRows, setVisibleRows] = useState(20);
  const [cardClick, setCardClick] = useState(false);
  const bioRefContainer = useRef(null);

  // Set active bio on route update
  const [activeBio, setActiveBio] = useState(() => {
    if (linkedId) {
      const active = filteredContent.filter((el) => el.id === linkedId);
      return active[0];
    }
    return null;
  });

  useEffect(() => {
    setColumnsNr(width >= 930 ? 4 : width >= 700 ? 3 : width >= 500 ? 2 : 2);
    setRows(Math.ceil(filteredContent.length / columnsNr));
  }, [filteredContent, columnsNr, width]);

  useEffect(() => {
    if (typeof rows == 'number' && rows < 20) {
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
    setVisibleRows(visibleRows + 2);
  };

  return (
    <>
      {contentGroups
        ? contentGroups.slice(0, visibleRows).map((group) => {
            if (group.length > 0) {
              return (
                <EmployeeGroup
                  key={contentGroups.indexOf(group)}
                  activeBio={activeBio}
                  employees={filteredContent}
                  updateActiveBio={updateActiveBio}
                  group={group}
                  fallbackImg={fallbackImg}
                  white={white}
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
          style={{
            opacity:
              contentGroups && visibleRows > contentGroups.length ? 0 : 1,
          }}
        >
          <div ref={bioRefContainer} />
          <Button.Line navy={white}>Se Mer</Button.Line>
        </div>
      </div>
    </>
  );
};
