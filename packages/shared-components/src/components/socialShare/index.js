import React from 'react';
import * as Icon from '../icon';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from 'react-share';

export const SocialShare = ({
  url,
  title,
  tags,
  subtitle,
  white,
  twitterHandle,
}) => {
  return (
    <div
      className={`w-full flex justify-end uppercase ${
        white ? 'text-white' : 'text-navy'
      } text-sm font-semibold items-center`}
    >
      Del
      <span className="ml-3 filter-invert cursor-pointer transition hover:opacity-75">
        <FacebookShareButton url={url} quote={title} hashtag={tags}>
          <Icon.CircleFacebook white={white} />
        </FacebookShareButton>
      </span>
      <span className="ml-3 filter-invert cursor-pointer transition hover:opacity-75">
        <TwitterShareButton
          url={url}
          title={title}
          via={twitterHandle || ''}
          hashtags={tags}
        >
          <Icon.CircleTwitter white={white} />
        </TwitterShareButton>
      </span>
      <span className="ml-3 filter-invert cursor-pointer transition hover:opacity-75">
        <LinkedinShareButton url={url} summary={subtitle}>
          <Icon.CircleLinkedIn white={white} />
        </LinkedinShareButton>
      </span>
    </div>
  );
};

export const SocialLinks = ({ blue }) => (
  <div className="eight:flex hidden">
    <a
      href="https://www.instagram.com/alvnoas/"
      target="_blank"
      rel="noreferrer"
    >
      <Icon.Instagram blue={blue} />
    </a>
    <span className="mr-4 ml-5 pl-2px">
      <a
        href="https://www.linkedin.com/company/alvnorge"
        target="_blank"
        rel="noreferrer"
      >
        <Icon.Linkedin blue={blue} />
      </a>
    </span>
    <a
      href="https://www.facebook.com/AlvNorge/"
      target="_blank"
      rel="noreferrer"
    >
      <Icon.Facebook blue={blue} />
    </a>
  </div>
);
