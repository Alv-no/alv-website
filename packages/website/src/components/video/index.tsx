import React from 'react';

interface Props {
  videoSrcURL: string;
  videoTitle: string;
};

export const Video : React.FC<Props> = ({ videoSrcURL, videoTitle }) => (
  <div>
  {React.createElement("iframe", {
      src: videoSrcURL,
      title: videoTitle,
      allow: "accelerometer; encrypted-media; gyroscope; picture-in-picture",
      frameBorder: "0",
      webkitallowfullscreen: "true",
      mozallowfullscreen: "true",
      allowFullScreen: "true"
    })}
  </div>
);

export default Video;
