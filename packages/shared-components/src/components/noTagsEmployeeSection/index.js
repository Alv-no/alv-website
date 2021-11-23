import React from 'react';
import { GridContainer } from '../gridContainer';

export const NoTagsEmployeeSection = ({
  allEmployees,
  linkedId,
  isEnLocale,
}) => {
  return (
    <div className="w-full text-white xs:px-6 overflow-hidden">
      {allEmployees && (
        <GridContainer
          white
          filteredContent={allEmployees}
          linkedId={linkedId}
          isEnLocale={isEnLocale}
        />
      )}
    </div>
  );
};
