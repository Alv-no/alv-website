import React from 'react';
import Fade from 'react-reveal/Fade';

export const VideoIntro = ({ videoMp4, videoWebm, children }) => {
  return (
    <div
      className="lg:grid mx-auto text-theme-text relative"
      style={{ gridTemplateColumns: '55% auto' }}
    >
      <div className="relative w-full" style={{ maxWidth: '866px' }}>
        <video
          className="h-auto mx-auto"
          controls
          autoplay="true"
          muted
          defaultMuted
        >
          <source src={videoWebm} type="video/webm" />
          <source src={videoMp4} type="video/mp4" />
        </video>
      </div>
      <Fade>
        <div className="flex items-center md:pl-10 xl:pl-20">
          <h2 className="uppercase hidden lg:block top-0 right-0 lg:text-3xl xl:text-cta-lg font-semibold tracking-wider leading-tight lg:w-3/6">
            {children}
          </h2>
        </div>
      </Fade>
      <Fade>
        <h2 className="uppercase block lg:hidden text-index sm:text-slider font-semibold tracking-wider sm:w-7/12 leading-tight mt-5 sm:mt-10">
          {children}
        </h2>
      </Fade>
    </div>
  );
};
