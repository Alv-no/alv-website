import React, { useState } from "react";
import { playlistItems } from "../youtube-api";
import YouTube from "react-youtube";
import { White } from "../logo";
import CMDK from "../cmdk";
import { Command } from "cmdk";

const Thumbnail = ({ videoID, onClick }) => {
  return (
    <img
      width={500}
      height={300}
      src={`https://img.youtube.com/vi/${videoID}/0.jpg`}
      onClick={onClick}
      alt="Next youtube video"
    />
  );
};

const Home = ({ data }) => {
  const [video, setVideo] = useState(3);
  const total = data.pageInfo.totalResults;

  const previous = () => {
    const prev = video - 1;
    setVideo(prev > 0 ? prev : 0);
  };
  const next = () => {
    const next = video + 1;
    if (next <= total) {
      setVideo(next);
    }
  };

  const onEnd = () => {
    setVideo(video + 1);
  };

  const fullscreen = () => {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE11 */
      elem.msRequestFullscreen();
    }
  };

  const { title, publishedAt, resourceId } = data.items[video].snippet;
  const date = new Date(publishedAt);

  return (
    <div>
      <CMDK>
        <Command.Item onSelect={next}>Next</Command.Item>
        <Command.Item onSelect={previous}>Previous</Command.Item>
        <Command.Item onSelect={fullscreen}>Fullscreen</Command.Item>
      </CMDK>

      <nav>
        <div>
          <h1>{title}</h1>
          <p>
            {" "}
            Publisert{" "}
            {date.toLocaleDateString("no-NO", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
          </p>
        </div>
        <White />
        <h3>
          {" "}
          Video {video} of {total}{" "}
        </h3>
      </nav>
      <YouTube
        className="yt"
        videoId={resourceId.videoId || "w41C6nB_pYM"}
        opts={{
          playerVars: {
            autoplay: 1,
            controls: 0,
            modestbranding: 1,
            rel: 0,
          },
        }}
        onEnd={onEnd}
      />
      <footer>
        <div></div>
        <div>
          <h4>Next up</h4>
          <Thumbnail
            videoID={data.items[video + 1].snippet.resourceId.videoId}
            onClick={next}
          />
        </div>
      </footer>
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  const res = await playlistItems(process.env.YT_API, {
    playlistId: process.env.playlistId || "PL8FLf46zzxQ6Mw5QmOOs_Ttb3dA5YbUsH",
    maxResults: 50,
  });
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
