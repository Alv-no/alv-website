import { gql } from '@apollo/client';
import { window } from 'browser-monads';
import { graphql } from 'gatsby';
import React from 'react';
import { LinkableContent } from 'shared-components/src/components/linkableContent';
import { NavyIntroImage } from 'shared-components/src/components/navyIntroImage';
import { BlogCarousel } from '../../components/blogCarousel';
import Layout from '../../components/layout';
import config from '../../config';
import { useBlogQueryRecent } from '../../hooks/useBlogQueryRecent';
import { useLayoutQuery } from '../../hooks/useLayoutQuery';
import useScrollToHeading from '../../hooks/useScrollToHeading';
import { client } from '../../server-side/client';
import { createGatsbyImages } from '../../server-side/imageCreator';

const Company = ({ serverData }) => {
  const layoutData = useLayoutQuery();
  const recentArticles = useBlogQueryRecent().articles.nodes;
  const { handleHeadingClick } = useScrollToHeading(window.location.pathname);

  const blogCarouselArticles =
    serverData.blogCarousel?.selectedArticles || recentArticles;

  return (
    <Layout
      layoutData={layoutData}
      pageTitle={serverData.sanityCompany.pageTitle}
      pageDescription={serverData.sanityCompany.pageDescription}
      whiteIcons
    >
      <div className="z-0 twelve:z-20 relative">
        <NavyIntroImage
          title={serverData.sanityCompany.heroHeading}
          description={serverData.sanityCompany.heroDescription}
          internalLink="/videoserie"
          buttonText="Se videoserien vår"
          image={serverData.sanityCompany.heroImage.asset.gatsbyImageData}
        />
      </div>
      <div className="w-full bg-white tracking-wider z-10 relative">
        <LinkableContent
          heroImage={serverData.sanityCompany.heroImage.asset.gatsbyImageData}
          raw={serverData.sanityCompany._rawBlockText}
          heading={serverData.sanityCompany.blockHeading}
          scrollTo={handleHeadingClick}
          config={config}
        />
        <div className="max-w-1440 mx-auto sm:my-15 mt-10">
          <BlogCarousel articles={blogCarouselArticles} />
        </div>
      </div>
    </Layout>
  );
};

export default Company;

async function getCompanyDataServerSide(slug) {
  const response = await client.query({
    fetchPolicy: 'no-cache',
    variables: {
      slug,
    },
    query: gql`
      query($slug: String!) {
        pageData: allCompany(where: { slug: { current: { eq: $slug } } }) {
          pageTitle
          pageDescription
          id: _id
          heroImage {
            asset {
              url
              id: _id
              metadata {
                dimensions {
                  height
                  width
                }
              }
            }
          }
          slug {
            current
          }
          heroHeading
          heroDescription
          _rawBlockText: blockTextRaw
          blockHeading
          blogCarousel {
            selectedArticles {
              slug {
                current
              }
              id: _id
              title
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
            }
          }
        }
        allCompany {
          heroHeading
          slug {
            current
          }
        }
      }
    `,
  });
  const pageData = response.data;
  createGatsbyImages(pageData);

  return {
    sanityCompany: pageData.pageData[0],
    allSanityCompany: pageData.allCompany,
  };
}

export async function getServerData(context) {
  try {
    const slug = context.params['slug'];
    const companyData = await getCompanyDataServerSide(slug);
    return {
      status: 200,
      props: {
        ...companyData,
      },
    };
  } catch {
    return {
      status: 500,
    };
  }
}

// GraphQL Query for article content
export const query = graphql`
  {
    rolesImg: file(name: { eq: "interview" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    cUtvikler: file(name: { eq: "vitilbyr_header" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
