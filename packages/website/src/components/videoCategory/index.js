import React, { useEffect, useState } from 'react';
import { Title } from '../title';
import Link from 'gatsby-link';

export const VideoCategory = ({
  title,
  featuredVideo,
  description,
  subtitle,
  playlist,
}) => {
  const [loaded, setLoaded] = useState(false);

  const { thumbnails } = featuredVideo;

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
              <Title classes="text-left mt-10 mb-5">{title}</Title>
              <h4 className="leading-none mt-6 mb-7 text-blog leading-tight tracking-wider">
                {subtitle}
              </h4>

              <h5 className="text-lg font-thin tracking-wider mb-8">
                {description}
              </h5>
            </div>
            {/* ---- Above: Visible on Mobile only ---- */}
            <div className="sm:h-80 sm:w-140 mb-8 sm:mb-5">
              <div className="py-4 bg-black">
                <Link to="/episode" state={{ video: featuredVideo, playlist }}>
                  <div
                    className="xs:block h-featured 2xl:h-featured"
                    style={{
                      backgroundColor:
                        'transparent linear-gradient(180deg, #1E92D000 0%, #061634 100%) 0% 0% no-repeat padding-box',
                      backgroundImage:
                        loaded && `url("${thumbnails.standard.url}")`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <div className="w-full z-50 h-full p-8 flex flex-col justify-between">
                      <div />

                      <div className="flex text-white justify-between tracking-wider">
                        {/* <div className="pl-1">
                      {title && (
                        <>
                          <div className="uppercase sm:block hidden text-base font-bold ">
                            Vår nyeste video
                          </div>
                          <div className="w-12 h-2px sm:block hidden bg-yellow mb-4 mt-3" />
                        </>
                      )}
                      <div className="text-nav font-bold mt-4 mb-3">
                        {title}
                      </div>
                    </div> */}
                        {/* <div className="flex flex-col justify-between">
                      <div />
                      <div className="font-semibold uppercase w-32 flex text-right justify-end items-center">
                        <span className="ml-2">
                          <Icon.VideoPlay color="#fff" />
                        </span>
                      </div>
                    </div> */}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="sm:pr-10 xl:pr-20 xl:pl-10">
            <div className="flex-1 px-5 sm:px-0 sm:block hidden sm:text-center lg:text-left">
              <Title classes="sm:text-center lg:text-left mt-16 sm:mt-15">
                {title}
              </Title>
              <h4 className="leading-none mt-5 mb-8 text-blog leading-tight tracking-wider">
                {subtitle}
              </h4>
              <p className="tracking-wider lg:px-0 sm:px-10 font-light">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
