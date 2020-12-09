import React from 'react';
import { graphql } from 'gatsby';
import BlogLayout from '../components/blogLayout';
import Image from 'gatsby-image';
// import PortableText from '@sanity/block-content-to-react';
import imageUrlBuilder from '@sanity/image-url';

// TEMPLATE FOR HOW BLOG POST PAGES ARE DISPLAYED

const ArticleTemplate = (props) => {
  const {
    title,
    description,
    publishedAt,
    author,
    mainImage,
    tags,
  } = props.data.sanityArticle;
  console.log(author);
  return (
    <>
      <BlogLayout {...author}>
        <div
          className="min-h-screen flex flex-col items-center
      justify-center"
        >
          <h1 className="text-3xl font-bold mb-3">{title}</h1>
          <div className="w-100 mb-3">
            <Image fluid={mainImage.asset.fluid} />
          </div>
          <p className="text-lg mb-3">{description}</p>
          <p className="text-lg mb-3">{publishedAt}</p>
          <p className="text-lg">
            {author.firstname} {author.lastname}
          </p>
          <p>
            {tags.forEach((tag) => (
              <div>{tag.tag}</div>
            ))}
          </p>
        </div>
      </BlogLayout>
    </>
  );
};

export default ArticleTemplate;

// Instruct Sanity what project images are being fetched from
const urlFor = (source) =>
  imageUrlBuilder({ projectId: 'mnr37rl0', dataset: 'production' }).image(
    source
  );

// Serializer and styles html content from Sanity backend
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const serializer = {
  types: {
    figure: (props) => (
      <div className="w-full flex justify-center">
        <img
          src={urlFor(props.node.image.asset).width(700).url()}
          alt={props.node.image.alt}
          className="my-12"
        />
      </div>
    ),
    listItem: (props) => (
      <li style={{ paddingBottom: '', marginLeft: '30px', marginTop: '5px' }}>
        {props.children}
      </li>
    ),
  },
};

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
