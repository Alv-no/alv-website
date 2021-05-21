import React from 'react';
import Image from 'gatsby-image';
import { Title } from '../title';
import { FeaturedVideo } from '../featuredVideo';
import styles from './VideoHero.module.css';

export const VideoHero = ({
  backgroundImage,
  fallbackImg,
  video,
  playlist,
  description,
  title,
}) => {
  return (
    <div className="bg-navy w-full pt-2 twelve:pb-10 -mt-5 mb-30 twelve:mb-0">
      <div className="twelve:grid grid-cols-videos-hero mx-auto twelve:mb-24">
        <div />
        <span
          className={`relative twelve:-ml-20 twelve:pr-40 2xl:ml-0 2xl:pr-0 transform md:translate-x-2/7 twelve:translate-x-0 block ${styles.card}`}
        >
          <Image
            fluid={backgroundImage}
            className={`-mx-12 h-screen lg:mx-0 transform scale-130 twelve:translate-x-10 sm:-translate-y-5  ${styles.bgImage}`}
          />
          <div
            className={`absolute sm:-translate-y-32 w-full -translate-y-12 text-white top-1/2 transform sm:-translate-y-1/2 md:-translate-y-40 md:-translate-x-48 md:m-0 sm:ml-15  ${styles.cta}`}
          >
            <Title classes="sm:text-left text-center w-full">{title}</Title>
            <div className="pt-7 sm:pt-9 sm:ml-10">
              <h2 className="sm:text-blog text-center text-xl sm:text-left mx-auto sm:mx-0 sm:w-100 sm:pr-12 w-5/6 tracking-wider">
                {description}
              </h2>
            </div>
          </div>
          <div className="twelve:absolute hidden twelve:block relative -mt-40 transform translate-x-28 w-7/12 right-40 -translate-y-10">
            <FeaturedVideo
              fallbackImg={fallbackImg}
              video={video}
              playlist={playlist}
            />
          </div>
        </span>
      </div>
      <div className="sm:mx-auto hidden twelve:hidden sm:w-featured mt-8 sm:mt-10 lg:mt-15 sm:w-7/12 w-full">
        <FeaturedVideo video={video} fallbackImg={fallbackImg} />
      </div>
    </div>
  );
};
