import React from 'react';
import { graphql } from 'gatsby';
import Sidebar from '../components/sidebar';
import Image from 'gatsby-image';
import PortableText from '@sanity/block-content-to-react';
import { MobileHeader } from '../components/header';
import { useLayoutQuery } from '../hooks/useLayoutQuery';
import { Footer } from '../components/footer';
import { SEO } from '../components/seo';
import { AlsoRead } from '../components/alsoRead';
import styles from './Blockcontent.module.css';
import { SocialShare } from '../components/socialShare';
import { window } from 'browser-monads';
import { createSlugForEmployee } from '../components/createSlugForEmployee';

// Template for how articles are rendered.
const ArticleTemplate = (props) => {
  const { servicePages, categoryPages } = useLayoutQuery();
  const {
    title,
    author,
    guestAuthor,
    mainImage,
    _rawBody,
    tags,
    description,
    socials,
  } = props.data.sanityArticle;

  const socialObj = socials || {};
  const { socialSubtitle, socialImage, socialTitle } = socialObj;

  const postAuthor =
    author && author.firstname
      ? author
      : guestAuthor
      ? guestAuthor.guestAuthor
      : null;

  let authorSlug;
  let authorFullname;
  if (postAuthor && postAuthor.firstname && postAuthor.lastname) {
    const { firstname, lastname } = postAuthor;
    authorFullname = `${firstname} ${lastname}`;
    authorSlug = createSlugForEmployee(firstname, lastname);
  }

  const socialTags = (tags && tags.map((tag) => tag.tag)) || '';
  const metaImage =
    socials && socials.socialImage
      ? socialImage.asset.fixed.src
      : mainImage.asset.fluid.src;

  return (
    <>
      <SEO
        title={title}
        description={description}
        metaImage={metaImage || ''}
        socialTitle={socialTitle}
        socialSubtitle={socialSubtitle}
        author={authorFullname}
      />
      <span className="lg:block hidden">
        <Sidebar
          {...postAuthor}
          isEmployee={!guestAuthor}
          authorSlug={authorSlug}
          fallbackImg={props.data.fallbackImg.childImageSharp.fluid}
          servicePages={servicePages}
          categoryPages={categoryPages}
        >
          <div
            className="min-h-screen flex flex-col m-15 xl:m-20 xl:mb-15 2xl:m-25 2xl:mb-15 text-navy 2xl:ml-1/2"
            style={{ maxWidth: '770px' }}
          >
            <div className="mb-5">
              <SocialShare
                url={window.location.href}
                title={socialTitle || title}
                subtitle={socialSubtitle || description}
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
            <div className="mt-6 relative z-20">
              <SocialShare
                url={window.location.href}
                title={socialTitle || title}
                subtitle={socialSubtitle || description}
                tags={socialTags}
              />
            </div>
            <AlsoRead
              articles={props.data.articles}
              currentTags={socialTags}
              currentAuthor={authorFullname}
            />
          </div>
        </Sidebar>
      </span>
      <MobileHeader
        viewport="lg"
        servicePages={servicePages}
        categoryPages={categoryPages}
      />
      <div className="lg:hidden">
        <div className="five:mx-10 mx-6 z-10">
          <div className="my-5 relative z-20">
            <SocialShare
              url={window.location.href}
              title={title}
              tags={socialTags}
            />
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
          <div className="flex justify-end items-center mb-8">
            <div className="relative z-20">
              <SocialShare
                url={window.location.href}
                title={title}
                tags={socialTags}
              />
            </div>
          </div>
          <div className="mb-12">
            <AlsoRead
              articles={props.data.articles}
              currentTags={socialTags}
              currentAuthor={authorFullname}
            />
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
        cv {
          asset {
            url
          }
        }
        id
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
      guestAuthor {
        guestAuthor {
          image {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
              url
            }
          }
          firstname
          lastname
          title
          id
        }
      }
      socials {
        socialSubtitle
        socialTitle
        socialImage {
          asset {
            fixed(height: 630, width: 1200) {
              src
            }
          }
        }
      }
    }
    articles: allSanityArticle(sort: { fields: publishedAt }) {
      edges {
        node {
          id
          description
          slug {
            current
          }
          title
          tags {
            tag
          }
          mainImage {
            asset {
              fluid(maxWidth: 800) {
                ...GatsbySanityImageFluid
              }
            }
          }
          author {
            image {
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
            firstname
            lastname
          }
          guestAuthor {
            guestAuthor {
              image {
                asset {
                  fluid {
                    ...GatsbySanityImageFluid
                  }
                  url
                }
              }
              firstname
              lastname
              title
              id
            }
          }
          publishedAt(formatString: "DD MMM, YYYY")
          rawDate: publishedAt
        }
      }
    }
  }
`;
