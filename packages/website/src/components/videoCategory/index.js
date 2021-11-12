import React, { useEffect, useState } from 'react';
import { Title } from '../../../../shared-components/src/components/title';
import Link from 'gatsby-link';

export const VideoCategory = ({
  title,
  featuredVideo,
  description,
  subtitle,
  playlist,
  slug,
}) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded && featuredVideo) setLoaded(true);
  }, [loaded, featuredVideo]);

  return (
    <section className="text-white lg:py-10 mb-10 mb-8 xl:pl-5 -mt-4">
      <div className="max-w-1200 mx-auto sm:pl-5">
        <div className="flex lg:flex-row-reverse flex-col sm:px-0">
          <div className="mx-auto flex-1">
            <div className="flex-1 px-5 sm:px-0 sm:hidden">
              {/* ---- Underneath: Visible on Mobile only ---- */}
              <Title classes="text-left mb-5 xs:text-blog">{title}</Title>
              <h4 className="leading-none mt-6 mb-7 leading-tight tracking-wider text-xl">
                {subtitle}
              </h4>
              <h5 className="font-extralight tracking-wider mb-8 text-base">
                {description}
              </h5>
            </div>
            {/* ---- Above: Visible on Mobile only ---- */}
            <div className="sm:h-80 sm:w-140 mb-8 sm:mb-5">
              <div className="py-4 bg-black">
                <Link
                  to={`/videoserie/${featuredVideo.playlistSlug}/${featuredVideo.slug}`}
                  state={{ video: featuredVideo, playlist }}
                >
                  <div
                    className="xs:block h-featured 2xl:h-featured"
                    style={{
                      backgroundColor:
                        'transparent linear-gradient(180deg, #1E92D000 0%, #061634 100%) 0% 0% no-repeat padding-box',
                      backgroundImage:
                        loaded && `url("${featuredVideo.thumbnail}")`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <div className="w-full z-50 h-full p-8 flex flex-col justify-between">
                      <div />

                      <div className="flex text-white justify-between tracking-wider"></div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="sm:pr-10 xl:pr-20 xl:pl-10 flex items-center">
            <div className="flex-1 px-5 sm:px-0 sm:block hidden sm:text-center lg:text-left flex-col justify-center flex">
              <Title classes="sm:text-center lg:text-left">{title}</Title>
              <h4 className="leading-none mt-5 mb-8 text-blog leading-tight tracking-wider">
                {subtitle}
              </h4>
              <p className="tracking-wider lg:px-0 sm:px-10 font-light">
                {description}
              </p>
              <div className="mt-10" />
              <div className="tracking-wider uppercase py-2 px-5 border-white border-2 rounded-full inline-block">
                <Link to={`/videoserie/${slug}`}>Se alle</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
