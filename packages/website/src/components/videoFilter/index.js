import React, { useState, useEffect } from 'react';
import { SortField } from '../blogFilter';

export const VideoFilter = ({ seasons, onChange }) => {
  const [sort, setSort] = useState('oldest');
  const [activeSeasonIndex, setActiveSeasonIndex] = useState(
    seasons.length - 1
  );

  useEffect(() => {
    const sortedActive = [...seasons[activeSeasonIndex]];
    if (sort === 'oldest') {
      sortedActive.sort((a, b) => (a.position < b.position ? -1 : 1));
    } else if (sort === 'newest') {
      sortedActive.sort((a, b) => (a.position > b.position ? -1 : 1));
    }

    onChange(sortedActive);

    // Including onChange results in infinite callback loop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort, activeSeasonIndex]);

  const sortClick = (e) => {
    setSort(e.target.id);
  };

  const seasonClick = (e) => {
    setActiveSeasonIndex(Number(e.target.id));
  };

  return (
    <div className="flex sm:flex-row flex-col justify-between sm:items-center sm:mb-10 mb-10 mt-20 mx-5 sm:mx-0">
      {seasons.length > 1 ? (
        <div className="flex tracking-wider items-center h-8 pt-6px sm:my-0 mt-4 mb-5">
          <Seasons
            seasons={seasons}
            activeSeasonIndex={activeSeasonIndex}
            onClick={seasonClick}
          />
        </div>
      ) : (
        <div />
      )}
      <div className="h-10 tracking-wider -ml-4 -mr-2 sm:mx-0">
        <SortField sort={sort} sortClick={sortClick} light />
      </div>
    </div>
  );
};

const Seasons = ({ seasons, onClick, activeSeasonIndex }) => (
  <>
    {seasons.map((season, i) => (
      <button
        className={`font-semibold mr-6 pb-1 border-b-2 focus:outline-none ${
          activeSeasonIndex === i ? 'border-yellow' : 'border-navy'
        } cursor-pointer`}
        onClick={onClick}
        type="button"
        id={i}
      >
        Sesong {i + 1}
      </button>
    ))}
  </>
);
