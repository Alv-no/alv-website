import React, { useState } from 'react';
import Layout from '../layout';
import { EpisodeCards } from '../components/episodeCards';
import slugify from 'slugify';

const VideoCategoryTemplate = ({ pageContext }) => {
  const { title, videos, slug } = pageContext;
  const [playlist, setPlaylist] = useState(null);

  useState(() => {
    const formattedVideos = videos.map((video) => {
      video.playlistSlug = slug;
      video.playlistName = title;
      video.slug = slugify(video.title.replace(' |', ''), {
        remove: /[*+~.()|#'"!:@?]/,
        lower: true,
      });
      return video;
    });
    setPlaylist(formattedVideos);
  }, []);

  //

  return (
    <Layout>
      <div className="bg-navy text-white seven:px-10 overflow-hidden">
        <div className="max-w-1200 mx-auto">
          <h1 className="text-3xl text-center my-10">{title}</h1>
          {playlist && <EpisodeCards playlist={playlist} tabs={false} />}
        </div>
      </div>
    </Layout>
  );
};

export default VideoCategoryTemplate;
