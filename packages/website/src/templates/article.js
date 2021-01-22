import React from 'react';
import { graphql } from 'gatsby';
import Sidebar from '../components/sidebar';
import Image from 'gatsby-image';
import PortableText from '@sanity/block-content-to-react';
import { MobileHeader } from '../components/header';
import { Footer } from '../components/footer';
import Link from 'gatsby-link';
import styles from './Article.module.css';
import * as Icon from '../components/icon';
import { SocialShare } from '../components/socialShare';
import { window } from 'browser-monads';

// Template for how articles are rendered.
const ArticleTemplate = (props) => {
  const { title, author, mainImage, _rawBody, tags } = props.data.sanityArticle;
  let authorSlug;
  if (author && author.firstname && author.lastname) {
    authorSlug = author.firstname
      .split(' ')
      .concat(author.lastname.split(' '))
      .map((name) => name.toLowerCase());
    authorSlug = authorSlug.join('-');
  }
  const socialTags = tags.map((tag) => tag.tag);
  return (
    <>
      <span className="lg:block hidden">
        <Sidebar
          {...author}
          authorSlug={authorSlug}
          fallbackImg={props.data.fallbackImg.childImageSharp.fluid}
        >
          <div
            className="min-h-screen flex flex-col m-15 xl:m-20 2xl:m-25 text-navy 2xl:ml-1/2"
            style={{ maxWidth: '770px' }}
          >
            <div className="mb-5">
              <SocialShare
                url={window.location.href}
                title={title}
                tags={socialTags}
              />
            </div>
            <h1 className="text-blog font-bold mb-8">{title}</h1>
            {mainImage && (
              <div className="w-full mb-3">
                <span
                  className={` ${styles.mainImg} relative z-0 fixed opacity-90`}
                >
                  <Image
                    fluid={mainImage.asset.fluid}
                    style={{ zIndex: '0', position: 'relative' }}
                  />
                </span>
              </div>
            )}
            <span className={styles.body}>
              <PortableText
                blocks={_rawBody}
                projectId="mnr37rl0"
                dataset="production"
              />
            </span>
            <div className="mt-6">
              <SocialShare />
            </div>
            <div className="flex justify-between flex-col">
              <div className="flex items-center font-semibold uppercase transform -translate-y-4">
                <Link to="/blogg">Se alle artikler</Link>
                <span className="transform text-navy ml-3">
                  <Icon.Arrow />
                </span>
              </div>
            </div>
          </div>
        </Sidebar>
      </span>
      <MobileHeader viewport="lg" />
      <div className="lg:hidden">
        <div className="five:mx-10 mx-6 z-10">
          <div className="my-5">
            <SocialShare />
          </div>
          <h1 className="text-blog font-bold mb-8">{title}</h1>
          {mainImage && (
            <div className="w-full mb-3">
              <Image fluid={mainImage.asset.fluid} />
            </div>
          )}
          <span className={styles.body}>
            <PortableText
              blocks={_rawBody}
              projectId="mnr37rl0"
              dataset="production"
            />
          </span>
          <div className="flex justify-between items-center mb-12">
            <div className="">
              <SocialShare />
            </div>
            <div className="flex justify-end items-center font-semibold uppercase">
              <Link to="/blogg">Se alle artikler</Link>
              <span className="transform text-navy ml-3">
                <Icon.Arrow />
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ArticleTemplate;

// GraphQL Query for article content
export const query = graphql`
  query($slug: String!) {
    fallbackImg: file(name: { eq: "fallback" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sanityArticle(slug: { current: { eq: $slug } }) {
      title
      publishedAt(formatString: "MMMM Do, YYYY")
      author {
        firstname
        lastname
        id
        pdfLink
        title
        image {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
      _rawBody
      description
      tags {
        tag
      }
      slug {
        current
      }
      mainImage {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
