import React from 'react';
import { Title } from '../title';
import { FeaturedVideo } from '../featuredVideo';

export const VideoCategory = ({ title, description, subtitle, thumbnail }) => {
  return (
    <section className="text-white lg:py-10 mb-10 mb-8 xl:pl-5 -mt-4">
      <div className="max-w-1200 mx-auto sm:pl-5">
        <div className="flex lg:flex-row-reverse flex-col sm:px-0">
          <div className="mx-auto flex-1">
            <div className="flex-1 px-5 sm:px-0 sm:hidden">
              {/* ---- Underneath: Visible on Mobile only ---- */}

              <Title align="left mb-5">{title}</Title>
              <h4 className="leading-none mt-8 mb-10 text-blog leading-tight tracking-wider">
                {subtitle}
              </h4>

              <h5 className="text-lg font-thin tracking-wider mb-8">
                {description}
              </h5>
            </div>
            {/* ---- Above: Visible on Mobile only ---- */}
            <div className="sm:h-80 sm:w-140 mb-8 sm:mb-5">
              <FeaturedVideo
                thumbnail={thumbnail}
                title="DataPrat | Kan du stole på en fornøyd kunde? [Episode 4]"
              />
            </div>
          </div>
          <div className="sm:pr-10 xl:pr-20 xl:pl-10">
            <div className="flex-1 px-5 sm:px-0 sm:block hidden sm:text-center lg:text-left">
              <span className="text-center">
                <Title align="left mt-5">{title}</Title>
              </span>
              <h4 className="leading-none mt-8 mb-10 text-blog leading-tight tracking-wider">
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
