import React from 'react';
import * as Icon from '../icon';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from 'react-share';

export const SocialShare = ({ url, title, tags, subtitle }) => {
  const twitterHandle = 'Alvnoas';
  return (
    <div className="w-full flex justify-end uppercase text-navy text-sm font-semibold items-center">
      Share{' '}
      <span className="ml-3 text-navy filter-invert cursor-pointer transition hover:opacity-75">
        <FacebookShareButton url={url} quote={title} hashtag={tags}>
          <Icon.CircleFacebook />
        </FacebookShareButton>
      </span>
      <span className="ml-3 text-navy filter-invert cursor-pointer transition hover:opacity-75">
        <TwitterShareButton
          url={url}
          title={title}
          via={twitterHandle}
          hashtags={tags}
        >
          <Icon.CircleTwitter />
        </TwitterShareButton>
      </span>
      <span className="ml-3 text-navy filter-invert cursor-pointer transition hover:opacity-75">
        <LinkedinShareButton url={url} summary={subtitle}>
          <Icon.CircleLinkedIn />
        </LinkedinShareButton>
      </span>
    </div>
  );
};

export const SocialLinks = () => (
  <div className="eight:flex hidden">
    <a
      href="https://www.instagram.com/alvnoas/"
      target="_blank"
      rel="noreferrer"
    >
      <Icon.Instagram />
    </a>
    <span className="mr-4 ml-6">
      <a href="https://twitter.com/alvnoas/" target="_blank" rel="noreferrer">
        <Icon.Twitter />
      </a>
    </span>
    <a
      href="https://www.facebook.com/AlvNorge/"
      target="_blank"
      rel="noreferrer"
    >
      <Icon.Facebook />
    </a>
  </div>
);
