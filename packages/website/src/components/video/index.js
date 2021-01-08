import React from 'react';
export const Video = ({ videoSrcURL, videoTitle }) => (
  <div>
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
);
export default Video;
