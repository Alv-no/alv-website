import React, { useMemo } from 'react';
import * as Icon from '../icon';
import Link from 'gatsby-link';
import { isIOS, isSafari } from 'react-device-detect';
import PortableText from '@sanity/block-content-to-react';
import fallback from '../../assets/bioVideoFallback.png';

export const EmployeeBio = ({
  handleCloseClick,
  firstname,
  lastname,
  slug,
  videoLink,
  video,
  cv,
  title,
  _rawBio,
  id,
}) => {
  const webM = useMemo(() => {
    return video ? video.asset.url : false;
  }, [video]);
  const youtube = useMemo(() => {
    return videoLink || false;
  }, [videoLink]);

  const supportWebM = !isIOS && !isSafari;

  const validatedVideo = useMemo(() => {
    return supportWebM && webM ? (
      <Webm src={webM} />
    ) : youtube ? (
      <Youtube src={youtube} title={slug} />
    ) : (
      <Fallback src={fallback} alt={slug} />
    );
  }, [slug, youtube, webM, supportWebM]);

  return (
    <div id={slug.slice(1, slug.length)}>
      <section
        className="bg-darkblue text-white lg:py-18 pb-15 pt-20 xs:-mx-6 sm:mt-12 my-8 sm:px-5 xs:mt-8 -mt-4"
        id={id}
      >
        <div className="max-w-1200 mx-auto sm:px-5">
          <div className="w-full flex flex-end justify-between">
            <div />
            <div>
              <button
                type="button"
                className="transform block focus:outline-none sm:-translate-y-12 sm:-translate-x-8 -translate-y-15  -translate-x-12 scale-60 cursor-pointer absolute"
                onClick={handleCloseClick}
                aria-label="Close"
              >
                <Icon.Cross />
              </button>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col sm:px-0">
            <div className="mx-auto flex-1 lg:pr-15">
              <div className="flex-1 px-5 sm:px-0 sm:hidden">
                {/* ---- Underneath: Visible on Mobile only ---- */}
                <h4 className="text-4xl leading-none font-thin mb-4 uppercase tracking-wider">
                  <span className="font-bold block">{firstname}</span>
                  {lastname}
                </h4>
                <h5 className="text-lg font-thin tracking-wider mb-8">
                  {title}
                </h5>
              </div>
              {/* ---- Above: Visible on Mobile only ---- */}
              <div className="sm:h-80 sm:w-140 mb-8 sm:mb-5">
                {validatedVideo}
              </div>
              <div className="flex justify-between text-base tracking-wider sm:px-0 px-6 mb-5 lg:mb-0">
                {cv !== null && (
                  <a href={cv.asset.url} target="_blank" rel="noreferrer">
                    <div className="flex">
                      <span className="mr-3">
                        <Icon.Cv />
                      </span>
                      <span className="transform -translate-y-2">SE CV</span>
                    </div>
                  </a>
                )}
                <Link to="/kontakt-oss">
                  <div className="flex cursor-pointer">
                    <div className="w-8 h-2px bg-yellow mr-4 transform translate-y-1" />
                    <span className="transform -translate-y-2">
                      GET IN TOUCH
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <p className="tracking-wider font-thin px-6 sm:hidden">
              {_rawBio && (
                <PortableText
                  blocks={_rawBio}
                  projectId="mnr37rl0"
                  dataset="production"
                />
              )}
            </p>
            <div className="flex-1 px-5 sm:px-0 sm:block hidden sm:text-center lg:text-left">
              <h4 className="text-4xl leading-none font-thin mb-4 uppercase tracking-wider">
                <span className="font-bold block">{firstname}</span>
                {lastname}
              </h4>
              <h5 className="text-lg font-thin tracking-wider mb-8">{title}</h5>
              <p className="tracking-wider lg:px-0 sm:px-10">
                {_rawBio && (
                  <PortableText
                    blocks={_rawBio}
                    projectId="mnr37rl0"
                    dataset="production"
                  />
                )}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Webm = ({ src }) => (
  <video
    key={src}
    autoplay="true"
    controls="true"
    className="h-60vw sm:h-80 w-screen sm:w-140 seven:w-140 mr-0 focus:outline-none"
  >
    <source type="video/webm" src={src} />
  </video>
);
const Youtube = ({ src, slug }) => (
  <iframe
    className="h-60vw sm:h-80 w-screen sm:w-140 seven:w-140 mr-0"
    title={slug}
    src={`${src}?autoplay=1&mute=0&enablejsapi=1`}
    frameBorder="0"
    allow="accelerometer; autoplay;"
    allowFullScreen
  />
);
const Fallback = ({ src, slug }) => (
  <img
    className="h-60vw sm:h-80 w-screen sm:w-140 seven:w-140 mr-0"
    alt={slug}
    src={src}
  />
);
