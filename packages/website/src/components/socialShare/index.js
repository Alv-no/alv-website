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
