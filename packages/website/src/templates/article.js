import React from 'react';
import { graphql } from 'gatsby';
import Sidebar from '../components/sidebar';
import Image from 'gatsby-image';
import PortableText from '@sanity/block-content-to-react';
import styles from './Article.module.css';
import * as Icon from '../components/icon';

// Template for how articles are rendered.
const ArticleTemplate = (props) => {
  const { title, author, mainImage, tags, _rawBody } = props.data.sanityArticle;
  return (
    <>
      <Sidebar {...author}>
        <div
          className="min-h-screen flex flex-col m-15 xl:m-20 2xl:m-25"
          style={{ maxWidth: '770px' }}
        >
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
          <h1 className="text-blog font-bold mb-3">{title}</h1>
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
          <p>
            {tags.forEach((tag) => (
              <div>{tag.tag}</div>
            ))}
          </p>
        </div>
      </Sidebar>
    </>
  );
};

export default ArticleTemplate;

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
            fluid(maxHeight: 100) {
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
