import React, { useState, useEffect } from 'react';
import { SortField } from '../blogFilter';

export const VideoFilter = ({ allVideos, tabs }) => {
  const [sort, setSort] = useState(null);
  const [active, setActive] = useState(allVideos);
  const [season, setSeason] = useState('1');

  const updateVideos = (updatedVideos) => {
    setActive(updatedVideos);
  };

  useEffect(() => {
    const sortedActive = [];
    active.forEach((el) => sortedActive.push(el));
    if (sort === 'oldest') {
      sortedActive.sort((a, b) => {
        if (a.publishedAt < b.publishedAt) {
          return -1;
        } else {
          return 1;
        }
      });
    } else if (sort === 'newest') {
      sortedActive.sort((a, b) => {
        if (a.publishedAt > b.publishedAt) {
          return -1;
        } else {
          return 1;
        }
      });
    }
    updateVideos(sortedActive);
    // Including onChange results in infinite callback loop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort, season]);

  const sortClick = (e) => {
    setSort(e.target.id);
  };

  const seasonClick = (e) => {
    setSeason(e.target.id);
  };

  return (
    <div className="flex sm:flex-row flex-col justify-between sm:items-center sm:mb-10 mb-10">
      {tabs ? (
        <div className="flex tracking-wider items-center h-8 pt-6px sm:my-0 mt-4 mb-5">
          {season && (
            <>
              <div
                className={`font-semibold mr-6 pb-1 border-b-2  ${
                  season === '1' ? 'border-yellow' : 'border-navy'
                } cursor-pointer`}
                onClick={seasonClick}
                id="1"
              >
                Sesong 1
              </div>
              <div
                className={`font-semibold mr-6 pb-1 border-b-2 ${
                  season === '2' ? 'border-yellow' : 'border-navy'
                } cursor-pointer`}
                onClick={seasonClick}
                id="2"
              >
                Sesong 2
              </div>
              <div
                className={`font-semibold mr-6 pb-1 border-b-2 ${
                  season === '3' ? 'border-yellow' : 'border-navy'
                } cursor-pointer`}
                onClick={seasonClick}
                id="3"
              >
                Sesong 3
              </div>
            </>
          )}
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
