import React from 'react';
import { GridContainer } from '../gridContainer';

export const NoTagsEmployeeSection = ({ allEmployees, linkedId }) => {
  return (
    <div className="w-full text-white xs:px-6 overflow-hidden">
      {allEmployees && (
        <GridContainer filteredContent={allEmployees} linkedId={linkedId} />
      )}
    </div>
  );
};
