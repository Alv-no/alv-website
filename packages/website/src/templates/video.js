import React from 'react';
import Link from 'gatsby-link';
import Layout from '../layout';
import { window } from 'browser-monads';
import { SocialShare } from '../components/socialShare';
import { VideoEpisode } from '../components/videoEpisode';

const VideoTemplate = ({ pageContext }) => {
  const { video, season, playlistName } = pageContext;

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
              {...video}
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
            {season && (
              <Sidebar
                playlist={season}
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

const Sidebar = ({ playlist, playlistName }) => (
  <div className="pl-5 pr-10 seven:px-0 mb-10 lg:block sm:grid block grid-cols-sidebar">
    <div className="lg:pl-5">
      <div className="uppercase text-lg tracking-wider font-semibold pb-px">
        Video playlist
      </div>
      <div className="h-3px w-12 bg-yellow mt-2 mb-4" />
      <p className="tracking-widest">{playlistName}</p>
      <div className="tracking-wider opacity-50 mt-2">
        {playlist.length} videoer
      </div>
    </div>
    <div className="mt-10 h-60vh overflow-y-scroll overflow-x-hidden">
      {playlist &&
        playlist.map((el, i) => {
          return (
            <Link
              className="lg:h-20 grid mb-5 lg:mb-2 block grid-cols-2 xs:grid-cols-sidebar-item transform -translate-x-2"
              key={i}
              to={`/videoserie/${el.playlistSlug}/${el.slug}`}
            >
              <div className="h-full flex items-center justify-center xs:flex hidden">
                <div className="lg:-mt-2">{i + 1}</div>
              </div>
              <img src={el.thumbnail} alt={el.title} className="" />
              <div className="pl-3 lg:text-sm tracking-widest">{el.title}</div>
            </Link>
          );
        })}
    </div>
  </div>
);
