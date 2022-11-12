import React, { useState, useEffect } from 'react';
import { SortField } from 'shared-components/src/components/blogFilter';

type Season = any; // TODO

interface SeasonsProps {
  seasons: Season[];
  onClick: any;
  activeSeasonIndex : number;
  seasonTitles: string[];
};

const Seasons : React.FC<SeasonsProps> = ({
  seasons,
  onClick,
  activeSeasonIndex,
  seasonTitles
}) => (
  <>
    {seasons.map((_ : any, i : number) => (
      <button
        className={`font-semibold mr-6 pb-1 border-b-2 focus:outline-none ${
          activeSeasonIndex === i ? 'border-theme-accent' : 'border-navy'
        } cursor-pointer`}
        onClick={onClick}
        type="button"
        id={`season-${i}`}
      >
        {seasonTitles[i]}
      </button>
    ))}
  </>
);

interface VideoFilterProps {
  seasons: Season[];
  onChange: any;
  seasonTitles?: any; // TODO: rewrite this. adding optional here is a hack
};

export const VideoFilter : React.FC<VideoFilterProps> = ({ seasons, onChange, seasonTitles }) => {
  const [sort, setSort] = useState('newest');
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

  const sortClick = (e : any) => {
    setSort(e);
  };

  const seasonClick = (e : any) => {
    setActiveSeasonIndex(Number(e.target.id));
  };

  return (
    <div className="flex sm:flex-row flex-col justify-between sm:items-center sm:mb-10 mb-10 mt-20 mx-5 sm:mx-0">
      {seasons.length > 1 ? (
        <div className="flex tracking-wider items-center h-8 pt-6px sm:my-0 mt-4 mb-5">
          <Seasons
            seasons={seasons}
            seasonTitles={seasonTitles}
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
