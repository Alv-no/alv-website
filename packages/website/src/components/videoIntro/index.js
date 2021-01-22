import React from 'react';
import Fade from 'react-reveal/Fade';

export const VideoIntro = ({ video, children }) => {
  return (
    <div
      className="twelve:pr-12 twelve:grid mx-auto max-w-1440"
      style={{ gridTemplateColumns: '70% auto' }}
    >
      <div className="relative sm:h-550 w-full">
        <video controls autoplay="true" className="h-auto mx-auto" muted>
          <source src={video} type="video/webm" />
        </video>
        <Fade>
          <h2 className="uppercase hidden twelve:block twelve:absolute top-0 right-0 text-slider font-semibold tracking-wider text-white w-4/12 transform translate-x-20 leading-tight -mr-40 mt-40">
            {children}
          </h2>
        </Fade>
      </div>
      <Fade>
        <h2 className="mx-5 sm:mx-16  uppercase block twelve:hidden text-index sm:text-slider font-semibold tracking-wider text-white sm:w-7/12 leading-tight mt-5">
          {children}
        </h2>
      </Fade>
    </div>
  );
};
