import React, { useState } from 'react';
import Layout from '../../layout';
import { VideoCategory } from '../../components/videoCategory';
import { VideoSection } from '../../components/videoSection';
import { VideoHero } from '../../components/videoHero';
import { useVideoseriesQuery } from '../../hooks/useVideoseriesQuery';

const Videoseries = () => {
  const data = useVideoseriesQuery();
  let { playlists } = data;

  const {
    sanityVideoseriesPage: { pageDescription } = { pageDescription: false },
    sanityVideoseriesPage: { pageTitle } = { pageTitle: false },
  } = data;

  const [lists] = useState(playlists);

  playlists = playlists.forEach((list) => {
    list.filter((video) => {
      return video.videoId !== 'gvwW89PV5Jw';
    });
  });

  return (
    <Layout pageTitle={pageTitle} pageDescription={pageDescription}>
      <div className="bg-navy text-white seven:px-10 overflow-hidden">
        <div className="max-w-1200 mx-auto">
          {lists && (
            <VideoHero
              video={lists[0][0]}
              backgroundImage={data.videoserieBg.childImageSharp.fluid}
              fallbackImg={data.fallbackImg.childImageSharp.fluid}
              title=""
              description=""
              playlist={lists[0]}
            />
          )}
          <div className="my-10" />
          {(lists || []).map((list, i) => {
            const featuredVideo = list[0];
            return (
              <div key={featuredVideo.videoId}>
                <>
                  {i !== 0 && (
                    <VideoCategory
                      title={i === 1 ? 'Dataprat' : 'Historie'}
                      subtitle=""
                      description={
                        i === 1
                          ? 'Vi har fem episoder på lager som tar for seg forskjellige sider av hvordan data kan hjelpe deg som person, og bedrift, til å fjerne dine blindsoner!'
                          : 'Vi har laget noen episoder om Alv sin historie. Her får du innblikk i det som har foregått bak fasaden.'
                      }
                      featuredVideo={featuredVideo}
                      fallbackImg={data.digitaliseringImg.childImageSharp.fluid}
                      playlist={list}
                    />
                  )}
                  <div className="sm:mx-12 md:mx-0">
                    {i === 0 && (
                      <div className="mx-5 sm:mx-0" id="miniserier"></div>
                    )}
                    <VideoSection
                      playlist={list}
                      fallbackImg={data.fallbackImg.childImageSharp.fluid}
                    />
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
