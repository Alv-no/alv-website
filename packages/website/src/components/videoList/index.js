import React, { useEffect, useState } from "react";
import { BlockContent } from "shared-components";

const VideoList = ({ title, description, list, config }) => {
  return (
    <>
      <div className="text-center pb-20 lg:w-4/6 mx-auto">
        <h2 className="text-[32px] leading-[40px] font-bold mb-5">{title}</h2>
        <p className="text-lg leading-[30px]">{description}</p>
      </div>
      <div className="grid lg:grid-cols-2 gap-y-10 lg:gap-y-20">
        {list.map(({ bodyRaw, video }) => (
          <>
            <Video
              {...video}
              videoWebM={video.videoWebM}
              videoMp4={video.videoMp4}
              configuration={config}
            />
            <div className="lg:pl-16 xl:pl-20 text-lg leading-[32px]">
              <BlockContent blocks={bodyRaw} config={config} />
            </div>
          </>
        ))}
      </div>
    </>
  );
};

const Video = ({ videoWebM, videoMp4 }) => {
  const [isIOS, setIOS] = useState(false);

  useEffect(() => {
    setIOS(navigator.userAgent.match(/(iPhone|iPad)/));
  }, []);

  const videoFormat = isIOS ? "video/mp4" : "video/webm";
  const videoPath = isIOS ? videoMp4.asset.url : videoWebM.asset.url;

  return (
    <div className="aspect-video -mx-5 sm:mx-0">
      <video controls className="w-full " muted>
        <source src={videoPath} type={videoFormat} />
      </video>
    </div>
  );
};

export default VideoList;
