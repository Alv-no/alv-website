import React, { useEffect, useState } from 'react';
import Link from 'gatsby-link';
import Layout from '../layout';
import { window } from 'browser-monads';
import { SocialShare } from '../components/socialShare';
import { VideoEpisode } from '../components/videoEpisode';
import { useVideoseriesQuery } from '../hooks/useVideoseriesQuery';

const VideoTemplate = ({ pageContext }) => {
  const { video, list, playlistName, playlistSlug } = pageContext;
  const [playlist, setPlaylist] = useState(null);
  const data = useVideoseriesQuery();

  useEffect(() => {
    const list = data.playlists.find((list) =>
      list.some((el) => el.playlistSlug === playlistSlug)
    );

    setPlaylist(list);
  }, [data, list, playlistName, playlistSlug]);

  return (
    <Layout>
      <div className="bg-navy text-white seven:px-10 overflow-hidden min-h-screen">
        <div className="max-w-1200 mx-auto">
          <div className="lg:grid gap-y-6 gap-x-2 grid-cols-videos-sidebar">
            <div>
              <span className="lg:block hidden">
                <SocialShare
                  title={video.title}
                  url={window.location.href}
                  white
                />
              </span>
            </div>
            <div className="" />
            <VideoEpisode
              title={video.title}
              subtitle=""
              description=""
              videoId={video.videoId}
            />
            <span className="lg:hidden block px-5">
              <SocialShare
                title={video.title}
                url={window.location.href}
                white
              />
            </span>
            {playlist && (
              <Sidebar
                playlist={playlist}
                playlistName={playlistName}
                video={video}
              />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VideoTemplate;

const Sidebar = ({ playlist }) => (
  <div className="pl-5 pr-10 seven:px-0 mb-10">
    <div className="lg:pl-5">
      <div className="uppercase text-lg tracking-wider font-semibold pb-px">
        Video playlist
      </div>
      <div className="h-3px w-12 bg-yellow mt-2 mb-4" />
      <p className="tracking-widest">
        {playlist.find((el) => el.playlistName).playlistName}
      </p>
      <div className="tracking-wider opacity-50 mt-2">
        {playlist.length} videoer
      </div>
    </div>
    <div className="mt-10 h-60vh overflow-y-scroll overflow-x-hidden">
      {playlist &&
        playlist.map((el, i) => (
          <Link
            className="lg:h-20 grid mb-5 lg:mb-2 block grid-cols-2 xs:grid-cols-sidebar-item transform -translate-x-2"
            key={i}
            to={`/videoserie/${
              el.playlistSlug || 'videoserie'
            }/${el.slug.replace('?', '')}`}
          >
            <div className="h-full flex items-center justify-center xs:flex hidden">
              <div className="lg:-mt-2">{i + 1}</div>
            </div>
            <img src={el.thumbnails.standard.url} alt={el.title} className="" />
            <div className="pl-3 sm:text-lg lg:text-sm tracking-widest">
              {el.title}
            </div>
          </Link>
        ))}
    </div>
  </div>
);
