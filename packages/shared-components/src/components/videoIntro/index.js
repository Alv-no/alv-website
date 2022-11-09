import React from 'react';
import Fade from 'react-reveal/Fade';

export const VideoIntro = ({ videoMp4, videoWebm, children }) => {
  return (
    <div
      className="lg:grid mx-auto text-theme-text relative justify-center lg:mr-12"
      style={{ gridTemplateColumns: 'minmax(400px, 866px) 167px' }}
    >
      <div className="relative w-full" style={{ maxWidth: '866px' }}>
        <video className="h-auto mx-auto" controls autoPlay={true} muted>
          <source src={videoWebm} type="video/webm" />
          <source src={videoMp4} type="video/mp4" />
        </video>
      </div>
      <Fade>
        <h2
          className="uppercase hidden lg:block top-0 right-0 text-cta-lg font-semibold tracking-wider leading-tight relative -ml-32 top-1/6"
          style={{ width: '334px', top: '23%' }}
        >
          {children}
        </h2>
      </Fade>
      <Fade>
        <h2 className="uppercase block lg:hidden text-index sm:text-slider font-semibold tracking-wider leading-tight mt-5 sm:mt-10">
          {children}
        </h2>
      </Fade>
    </div>
  );
};
