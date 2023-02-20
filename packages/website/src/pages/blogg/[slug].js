import { gql } from '@apollo/client';
import { window } from 'browser-monads';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { BlockContent } from 'shared-components';
import { AlsoRead } from '../../../../shared-components/src/components/alsoRead';
import { createSlugForEmployee } from '../../../../shared-components/src/components/createSlugForEmployee';
import { Footer } from '../../../../shared-components/src/components/footer';
import { MobileHeader } from '../../../../shared-components/src/components/header';
import { SEO } from '../../../../shared-components/src/components/seo';
import { SocialShare } from '../../../../shared-components/src/components/socialShare';
import * as Logo from '../../components/logo';
import Sidebar from '../../components/sidebar';
import { getBlogDataServerSide } from '../../hooks/useBlogQueryServerSide';
import { useLayoutQuery } from '../../hooks/useLayoutQuery';
import { client } from '../../server-side/client';
import { createGatsbyImages } from '../../server-side/imageCreator';
import configuration from '../../config';

// Template for how articles are rendered.
const ArticleTemplate = ({ serverData: { article, articles } }) => {
  const { servicePages, categoryPages, companyPages } = useLayoutQuery();
  const {
    title,
    author,
    guestAuthor,
    mainImage,
    _rawBody,
    tags,
    description,
    socials,
  } = article;

  const wrappedArticles = {
    edges: articles.map((article) => ({ node: article })),
  };

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
    socials && socials.socialImage ? socialImage.asset.url : null;

  const metaArr = socialTags;
  const metaLang = { lang: 'no' };
  const metaDescription = description;
  const metaAuthor = authorFullname;
  const metaTitle = title;
  const titleTemplate = `${title} | Alv`;

  const metaData = {
    metaAuthor,
    metaDescription,
    metaTitle,
    metaArr,
    metaLang,
    metaImage,
  };

  const alsoReadText = 'Les også';
  const postPrefix = 'blogg';
  const readMoreText = 'Les mer';

  return (
    <>
      <SEO
        {...metaData}
        titleTemplate={titleTemplate}
        fbPixel="rhudpmoc7esp0y6ydpr6kp0tbuncrg"
      />
      <span className="lg:block hidden">
        <Sidebar
          {...postAuthor}
          isEmployee={!guestAuthor}
          authorSlug={authorSlug}
          servicePages={servicePages}
          categoryPages={categoryPages}
          companyPages={companyPages}
          logo={Logo}
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
                twitterHandle="Alvnoas"
              />
            </div>
            <h1 className="text-4xl font-bold mb-8">{title}</h1>
            {mainImage && (
              <div className="w-full mb-3">
                <span className="relative fixed opacity-90">
                  <GatsbyImage
                    image={mainImage.asset.gatsbyImageData}
                    style={{ zIndex: '0', position: 'relative' }}
                  />
                </span>
              </div>
            )}
            <BlockContent blocks={_rawBody} config={configuration} />
            <div className="mt-6 relative z-20">
              <SocialShare
                url={window.location.href}
                title={socialTitle || title}
                subtitle={socialSubtitle || description}
                tags={socialTags}
              />
            </div>
            <AlsoRead
              articles={wrappedArticles}
              currentTags={socialTags}
              currentAuthor={authorFullname}
              postPrefix={postPrefix}
              readMoreText={readMoreText}
              alsoReadText={alsoReadText}
            />
          </div>
        </Sidebar>
      </span>
      <MobileHeader
        viewport="lg"
        servicePages={servicePages}
        categoryPages={categoryPages}
        companyPages={companyPages}
        logo={Logo}
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
          <BlockContent blocks={_rawBody} config={configuration} />
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
              articles={wrappedArticles}
              currentTags={socialTags}
              currentAuthor={authorFullname}
              postPrefix={postPrefix}
              readMoreText={readMoreText}
              alsoReadText={alsoReadText}
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ArticleTemplate;

export async function getBlogArticleServerSide(slug) {
  const response = await client.query({
    variables: {
      slug,
    },
    fetchPolicy: 'no-cache',
    query: gql`
      query($slug: String!) {
        allArticle(where: { slug: { current: { eq: $slug } } }) {
          title
          description
          author {
            firstname
            lastname
            cv {
              asset {
                url
              }
            }
            id: _id
            title
            image {
              asset {
                id: _id
                metadata {
                  dimensions {
                    height
                    width
                  }
                }
              }
            }
          }
          _rawBody: bodyRaw
          tags {
            tag
          }
          slug {
            current
          }
          mainImage {
            asset {
              id: _id
              metadata {
                dimensions {
                  height
                  width
                }
              }
            }
          }

          guestAuthor {
            guestAuthor {
              image {
                asset {
                  id: _id
                  metadata {
                    dimensions {
                      height
                      width
                    }
                  }
                }
              }
              firstname
              lastname
              title
              id: _id
            }
          }
          socials {
            socialSubtitle
            socialTitle
            socialImage {
              asset {
                id: _id
                url
                metadata {
                  dimensions {
                    height
                    width
                  }
                }
              }
            }
          }
        }
      }
    `,
  });
  const article = response.data.allArticle[0];
  createGatsbyImages(article);
  return article;
}

export async function getServerData(props) {
  const slug = props.params['slug'];
  try {
    const article = await getBlogArticleServerSide(slug);
    const articles = await getBlogDataServerSide();

    const dedupeMap = new Map(
      articles.articles.map((item) => [item.slug.current, item]),
    );

    dedupeMap.delete(article.slug.current);

    const filteredArticles = Array.from(dedupeMap.values());

    return Promise.resolve({
      props: { article, articles: filteredArticles },
      status: 200,
    });
  } catch {
    return {
      status: 500,
    };
  }
}
