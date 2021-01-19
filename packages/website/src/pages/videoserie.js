import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';
import { Subtitle } from '../components/subtitle';
import { VideoCategory } from '../components/videoCategory';
import { useVideoseriesQuery } from '../hooks/useVideoseriesQuery';

const Videoseries = () => {
  const data = useVideoseriesQuery();
  const [videos, setVideos] = useState();

  useEffect(() => {
    const fetchPlaylists = async () => {
      const apiCall = await fetch(
        `https://youtube.googleapis.com/youtube/v3/playlists?part=localizations&maxResults=20&channelId=UCLaJhfc1tFmHzP4usj1LKfA&key=AIzaSyCdzdwlPI-h8ixiUUB8SzzSAk0daQebOgo`
      );
      const list = await apiCall.json();
      Promise.all(
        list.items.map(async (el) => {
          const apiCall = await fetch(
            `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${el.id}&key=AIzaSyCdzdwlPI-h8ixiUUB8SzzSAk0daQebOgo`
          );
          const list = await apiCall.json();
          const formattedItems = await list.items.map((item) => {
            item.snippet.formattedPublishedAt = new Date(
              item.snippet.publishedAt
            ).toUTCString();
            item.snippet.videoId = item.snippet.resourceId.videoId;
            return item.snippet;
          });
          formattedItems.sort((a, b) => (a.position > b.position ? -1 : 1));
          return formattedItems;
        })
      ).then((response) => setVideos(response));
    };
    fetchPlaylists();
  }, []);

  return (
    <Layout>
      <div className="bg-navy text-white seven:px-10 overflow-hidden">
        <div className="max-w-1200 mx-auto">
          {/* <VideoHero
            video={(videos && videos[0]) || null}
            backgroundImage={data.videoserieBg.childImageSharp.fluid}
            fallbackImg={data.fallbackImg.childImageSharp.fluid}
            title="Videoserie"
            description="Culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis mollit"
          /> */}
          <div className="my-10" />
          {(videos || []).map((list, i) => {
            const featuredVideo = list[0];
            // const videolist = list.slice(1);
            return (
              <div key={featuredVideo.videoId}>
                <>
                  {i !== 0 && (
                    <VideoCategory
                      title="Dataprat"
                      subtitle="Culpa qui officia deserunt mollit anim id est laborum."
                      description="Culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis."
                      featuredVideo={featuredVideo}
                      fallbackImg={data.digitaliseringImg.childImageSharp.fluid}
                      playlist={list}
                    />
                  )}
                  <div className="sm:mx-12 md:mx-0">
                    {i === 0 && (
                      <div className="mx-5 sm:mx-0" id="miniserier">
                        <Subtitle>Dataprat</Subtitle>
                      </div>
                    )}
                    {/* <VideoSection
                      videos={videolist}
                      fallbackImg={data.fallbackImg.childImageSharp.fluid}
                    /> */}
                  </div>
                </>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Videoseries;
