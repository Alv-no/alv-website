import React from 'react';
/* import { graphql } from 'gatsby';
import Sidebar from '../components/sidebar';
import Image from 'gatsby-image';
import PortableText from '@sanity/block-content-to-react';
import { MobileHeader } from '../components/header';
import { useLayoutQuery } from '../hooks/useLayoutQuery';
import { Footer } from '../components/footer';
import { SEO } from '../components/seo';
import Link from 'gatsby-link';
import * as Icon from '../components/icon';
import { SocialShare } from '../components/socialShare';
import { window } from 'browser-monads'; */

// Template for how videos are rendered.
const VideoTemplate = (props) => {
  const { title } = props.data.sanityVideo;
  return (
    <>
      <h1>{title}</h1>
    </>
  );
};

export default VideoTemplate;
