import { window } from 'browser-monads';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { AlsoRead } from '../../../shared-components/src/components/alsoRead';
import { createSlugForEmployee } from '../../../shared-components/src/components/createSlugForEmployee';
import { Footer } from '../../../shared-components/src/components/footer';
import { SEO } from '../../../shared-components/src/components/seo';
import { SocialShare } from '../../../shared-components/src/components/socialShare';
import { MobileHeader } from '../components/header';
import { useLayoutQuery } from '../components/layout/useLayoutQuery';
import * as Logo from '../components/logo';
import Sidebar from '../components/sidebar';
import { StyledBlockContent } from '../components/styledBlockContent';
import * as styles from '../components/styledBlockContent/StyledBlockContent.module.css';
import config from '../config';

// Template for how articles are rendered.
const ArticleTemplate = (props) => {
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

  const { servicePages, categoryPages } = useLayoutQuery();
  const socialObj = socials || {};
  const { socialSubtitle, socialTitle } = socialObj;

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
  } else {
    authorFullname = 'Alv B';
  }

  const socialTags = (tags && tags.map((tag) => tag.tag)) || '';

  const metaImage = mainImage?.asset?.url || null;
  const metaArr = socialTags;
  const metaLang = { lang: config.LOCALE };
  const metaDescription = description;
  const metaAuthor = authorFullname;
  const metaTitle = title;

  const metaData = {
    metaAuthor,
    metaDescription,
    metaTitle,
    metaArr,
    metaLang,
    metaImage,
  };

  return (
    <>
      <SEO {...metaData} />
      <span className="lg:block hidden">
        <Sidebar
          {...postAuthor}
          isEmployee
          isEnLocale={true}
          authorSlug={authorSlug}
          logo={Logo}
          servicePages={servicePages}
          categoryPages={categoryPages}
          white
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
                  className={`${styles.mainImg} relative z-0 fixed opacity-90`}
                >
                  <GatsbyImage
                    image={mainImage.asset.gatsbyImageData}
                    style={{ zIndex: '0', position: 'relative' }}
                  />
                </span>
              </div>
            )}
            <StyledBlockContent blocks={_rawBody} />
            <div className="mt-6 relative z-20">
              <SocialShare
                url={window.location.href}
                title={socialTitle || title}
                subtitle={socialSubtitle || description}
                tags={socialTags}
              />
            </div>
            <AlsoRead
              isEnLocale
              articles={props.data.articles}
              currentTags={socialTags}
              currentAuthor={authorFullname}
            />
          </div>
        </Sidebar>
      </span>
      <MobileHeader
        viewport="lg"
        logo={Logo}
        categoryPages={categoryPages}
        servicePages={servicePages}
      />
      <div className="lg:hidden">
        <div className="fivefifty:mx-10 mx-6 z-10">
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
              <GatsbyImage image={mainImage.asset.gatsbyImageData} />
            </div>
          )}
          <StyledBlockContent blocks={_rawBody} />
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
              isEnLocale
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
        gatsbyImageData(width: 300, layout: CONSTRAINED)
      }
    }
    sanityArticle(slug: { current: { eq: $slug } }) {
      title
      publishedAt(formatString: "MMMM Do, YYYY")
      author {
        firstname
        lastname
        id
        title
        image {
          asset {
            gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
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
          gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
          url
        }
      }
      socials {
        socialSubtitle
        socialTitle
        socialImage {
          asset {
            gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
            url
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
              gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
            }
          }
          author {
            image {
              asset {
                gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
              }
            }
            firstname
            lastname
          }
          publishedAt(formatString: "DD MMM, YYYY")
          rawDate: publishedAt
        }
      }
    }
  }
`;
