import React from 'react';
import Image from 'gatsby-image';
import { Title } from '../title';
import { FeaturedVideo } from '../featuredVideo';
import styles from './VideoHero.module.css';

export const VideoHero = ({ backgroundImage, thumbnail }) => {
  return (
    <div className="bg-navy w-full pt-2">
      <div className="twelve:grid grid-cols-videos-hero mx-auto twelve:mb-24">
        <div />
        <span
          className={`relative twelve:-ml-20 twelve:pr-40 2xl:ml-0 2xl:pr-0 transform translate-x-2/7 twelve:translate-x-0 block ${styles.card}`}
        >
          <Image fluid={backgroundImage} className={styles.bgImage} />
          <div
            className={`absolute text-white top-1/2 transform -translate-y-1/2 -translate-x-40 md:m-0 ml-15 ${styles.cta}`}
          >
            <Title align="left">Videoserie</Title>
            <div className="pt-9 ml-10">
              <h2 className="text-blog w-100 pr-12 tracking-wider">
                Culpa qui officia deserunt mollit anim id est laborum. Sed ut
                perspiciatis mollit
              </h2>
            </div>
            <div className="flex mt-12 items-center">
              <span className="mr-4">
                <button className="rounded-full font-semibold tracking-wider text-base py-2 uppercase px-10 focus:outline-none border border-white bg-transparent">
                  Meld deg på
                </button>
              </span>
              <button className="font-semibold tracking-wider text-base uppercase bg-transparent focus:outline-none">
                Se miniserier
              </button>
            </div>
          </div>
          <div className="twelve:absolute hidden twelve:block relative mt-10 twelve:mt-0 bottom-0 right-0 w-7/12 2xl:w-4/6 mr-10 -mb-12 2xl:-mb-32">
            <FeaturedVideo
              thumbnail={thumbnail}
              title="DataPrat | Kan du stole på en fornøyd kunde? [Episode 4]"
            />
          </div>
        </span>
      </div>
      <div className="sm:mx-auto twelve:hidden sm:w-featured mt-10 lg:mt-15 sm:w-7/12 w-full">
        <FeaturedVideo
          thumbnail={thumbnail}
          title="DataPrat | Kan du stole på en fornøyd kunde? [Episode 4]"
        />
      </div>
    </div>
  );
};
