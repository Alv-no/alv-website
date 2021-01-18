import React from 'react';
import { Title } from '../title';

export const VideoEpisode = ({ title, description, subtitle, videoId }) => {
  return (
    <section className="text-white lg:py-10 mb-5 mb-8 xl:pl-5 -mt-4">
      <div className="max-w-1200 mx-auto sm:pl-5">
        <div className="flex flex-col justify-center items-center sm:px-0">
          <div className="mx-auto flex-1">
            <div className="flex-1 px-5 sm:px-0 sm:hidden flex items-center flex-col">
              {/* ---- Underneath: Visible on Mobile only ---- */}

              <Title align="center">{title}</Title>
              <h4 className="leading-none mt-8 mb-10 text-blog leading-tight tracking-wider">
                {subtitle}
              </h4>

              <h5 className="text-lg font-thin text-center tracking-wider mb-8">
                {description}
              </h5>
            </div>
            {/* ---- Above: Visible on Mobile only ---- */}
            <div className="mb-8 sm:mb-8">
              <iframe
                width="885"
                title="video"
                height="500"
                src={`https://www.youtube.com/embed/${
                  videoId || 'w41C6nB_pYM'
                }?controls=0`}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div className="sm:pr-10 xl:pr-20 xl:pl-10">
            <div className="flex-1 px-5 sm:px-0 sm:block hidden sm:text-center lg:text-left">
              <span className="text-center">
                <Title align="center">{title}</Title>
              </span>
              <h4 className="leading-none mt-4 mb-2 text-blog leading-tight tracking-wider">
                {subtitle}
              </h4>
              <p className="tracking-wider text-center lg:px-0 sm:px-10 font-light">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
