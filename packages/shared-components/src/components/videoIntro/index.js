import React from 'react';
import Fade from 'react-reveal/Fade';

export const VideoIntro = ({ videoMp4, videoWebm, children }) => {
  return (
    <div
      className={`lg:pr-12 lg:grid mx-auto max-w-1440 sm:pt-15 text-theme-text`}
      style={{ gridTemplateColumns: '70% auto' }}
    >
      <div className="relative lg:pl-15 lg:pr-4 w-full">
        <video controls autoplay="true" className="h-auto mx-auto" muted>
          <source src={videoWebm} type="video/webm" />
          <source src={videoMp4} type="video/mp4" />
        </video>
        <Fade>
          <h2 className="uppercase hidden lg:block lg:absolute top-0 right-0 text-cta-lg font-semibold tracking-wider w-4/12 transform translate-x-20 leading-tight -mr-40 mt-15 xl:mt-25 2xl:mt-40">
            {children}
          </h2>
        </Fade>
      </div>
      <Fade>
        <h2 className="mx-5 sm:mx-16 uppercase block lg:hidden text-index sm:text-slider font-semibold tracking-wider sm:w-7/12 leading-tight mt-5 sm:mt-10">
          {children}
        </h2>
      </Fade>
    </div>
  );
};
