import React from 'react';
import { graphql } from 'gatsby';
import Sidebar from '../components/sidebar';
import Image from 'gatsby-image';
import PortableText from '@sanity/block-content-to-react';
import Link from 'gatsby-link';
import styles from './Article.module.css';
import * as Icon from '../components/icon';

// Template for how articles are rendered.
const ArticleTemplate = (props) => {
  const { title, author, mainImage, _rawBody } = props.data.sanityArticle;
  let authorSlug = author.firstname
    .split(' ')
    .concat(author.lastname.split(' '))
    .map((name) => name.toLowerCase());
  authorSlug = authorSlug.join('-');
  return (
    <>
      <Sidebar {...author} authorSlug={authorSlug}>
        <div
          className="min-h-screen flex flex-col m-15 xl:m-20 2xl:m-25 text-navy"
          style={{ maxWidth: '770px', marginLeft: '10vw' }}
        >
          <div className="mb-5">
            <ArticleShare />
          </div>
          <h1 className="text-blog font-bold mb-8">{title}</h1>
          <div className="w-full mb-3">
            <Image fluid={mainImage.asset.fluid} />
          </div>
          <span className={styles.body}>
            <PortableText
              blocks={_rawBody}
              projectId="mnr37rl0"
              dataset="production"
            />
          </span>
          <div className="mt-6">
            <ArticleShare />
          </div>
          <div className="flex justify-between mt-8">
            <div className="">
              <div className="uppercase text-xl tracking-wider mb-2 font-semibold">
                Les også
              </div>
              <div className="h-3px w-8 bg-yellow" />
            </div>
            <div className="flex items-center font-semibold uppercase">
              <Link to="/blogg">Se alle artikler</Link>
              <span className="transform text-navy ml-3">
                <Icon.Arrow />
              </span>
            </div>
          </div>
        </div>
      </Sidebar>
    </>
  );
};

export default ArticleTemplate;

const ArticleShare = () => (
  <div className="w-full flex justify-end uppercase text-navy text-sm font-semibold items-center">
    Share{' '}
    <span className="ml-3 text-navy filter-invert cursor-pointer transition hover:opacity-75">
      <Icon.CircleFacebook />
    </span>
    <span className="ml-3 text-navy filter-invert cursor-pointer transition hover:opacity-75">
      <Icon.CircleTwitter />
    </span>
    <span className="ml-3 text-navy filter-invert cursor-pointer transition hover:opacity-75">
      <Icon.CircleLinkedIn />
    </span>
  </div>
);

// GraphQL Query for article content
export const query = graphql`
  query($slug: String!) {
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
