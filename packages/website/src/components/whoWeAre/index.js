import React from 'react';
import Fade from 'react-reveal/Fade';

export const WhoWeAre = ({ title, children }) => {
  return (
    <>
      <div
        className="px-12 grid text-white mt-20 tracking-wider gap-x-10 max-w-1440 mx-auto"
        style={{ gridTemplateColumns: '1fr 1fr' }}
      >
        <div className="flex justify-end w-full">
          <div>
            <h4 className="uppercase font-semibold text-about mt-2">{title}</h4>
            <div className="w-10 h-2px bg-yellow mt-2" />
          </div>
        </div>
        <Fade>
          <div>{children}</div>
        </Fade>
      </div>
    </>
  );
};
