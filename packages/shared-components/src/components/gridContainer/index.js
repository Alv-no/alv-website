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
  showVideo,
  linkedId,
  fallbackImg,
  centerBioText,
  isEnLocale,
  greyCards,
  white,
  config,
}) => {
  const { width } = useWindowDimensions();
  const [columnsNr, setColumnsNr] = useState(null);
  const [rows, setRows] = useState(null);
  const [contentGroups, setContentGroups] = useState([]);
  const [visibleRows, setVisibleRows] = useState(20);
  const bioRefContainer = useRef(null);

  // Set active bio on route update
  const [activeBio, setActiveBio] = useState(() => {
    if (linkedId) {
      const active = filteredContent.filter((el) => el.id === linkedId);
      return active[0];
    }
    return null;
  });

  // Set number of columns based on screen width
  useEffect(() => {
    if (width > 930) {
      setColumnsNr(4);
    } else if (width > 700) {
      setColumnsNr(3);
    } else if (width > 480) {
      setColumnsNr(2);
    } else {
      setColumnsNr(1);
    }
  }, [width]);

  // Set number of rows based on number of columns
  useEffect(() => {
    if (columnsNr) {
      setRows(Math.ceil(filteredContent.length / columnsNr));
    }
  }, [columnsNr, filteredContent]);

  // Group employees based on number of columns
  useEffect(() => {
    if (rows) {
      const groups = [];
      for (let i = 0; i < rows; i++) {
        groups.push(
          filteredContent.slice(i * columnsNr, i * columnsNr + columnsNr)
        );
      }

      setContentGroups(groups);
    }
  }, [rows, columnsNr, filteredContent]);

  // Update active bio on card click
  const updateActiveBio = (bio) => {
    setActiveBio(bio);
  };

  // View more button
  const handleViewMoreClick = () => {
    setVisibleRows(visibleRows + 2);
  };

  return (
    <>
      {Boolean(contentGroups.length) &&
        contentGroups
          .slice(0, visibleRows)
          .filter((group) => Boolean(group.length))
          .map((group) => (
            <EmployeeGroup
              showVideo={showVideo}
              key={contentGroups.indexOf(group)}
              activeBio={activeBio}
              employees={filteredContent}
              updateActiveBio={updateActiveBio}
              group={group}
              fallbackImg={fallbackImg}
              white={white}
              greyCards={greyCards}
              centerBioText={centerBioText}
              config={config}
            />
          ))}
      {/* VIEW MORE BUTTON */}
      <div
        className="max-w-1200 mx-auto flex justify-end sm:mt-15 xs:mt-12 mt-10 twelve:px-6"
        id="container"
      >
        <div
          className="font-bold tracking-wider pr-2px"
          onClick={handleViewMoreClick}
          style={{
            opacity:
              contentGroups && visibleRows > contentGroups.length ? 0 : 1,
          }}
        >
          <div ref={bioRefContainer} />
          <Button.Line navy={white}>
            {isEnLocale ? 'See more' : 'Se Mer'}
          </Button.Line>
        </div>
      </div>
    </>
  );
};
