import React from "react";
import Fade from "react-reveal/Fade";

export const VideoIntro = ({ videoMp4, videoWebm, children }) => {
  return (
    <div
      className="lg:pr-12 lg:grid mx-auto sm:pt-15 text-theme-text items-center"
      style={{ gridTemplateColumns: "70% auto" }}
    >
      <div className="relative lg:pr-4 w-full">
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
        <h2 className="uppercase hidden lg:block top-0 right-0 lg:text-3xl xl:text-cta-lg font-semibold tracking-wider transform translate-x-20 leading-tight mt-15 lg:mt-0 lg:w-5/6 lg:pl-5">
          {children}
        </h2>
      </Fade>
      <Fade>
        <h2 className="uppercase block lg:hidden text-index sm:text-slider font-semibold tracking-wider sm:w-9/12 leading-tight mt-5 sm:mt-10">
          {children}
        </h2>
      </Fade>
    </div>
  );
};
