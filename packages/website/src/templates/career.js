import { gql } from '@apollo/client';
import React from 'react';
import { NavyIntro } from '../../../shared-components/src/components/navyIntro';
import Layout from '../components/layout';
import { StyledBlockContent } from '../components/styledBlockContent';
import { useLayoutQuery } from '../hooks/useLayoutQuery';
import { client } from '../server-side/client';
import { createGatsbyImages } from '../server-side/imageCreator';

const Career = ({ serverData }) => {
  const sanityOpenPostionPage = serverData.career;
  const layoutData = useLayoutQuery();

  const { pageDescription, pageTitle } = serverData.career;

  return (
    <Layout
      layoutData={layoutData}
      whiteIcons
      pageTitle={pageTitle}
      pageDescription={pageDescription}
    >
      <div className="bg-navy">
        <NavyIntro
          title={pageTitle}
          description={pageDescription}
          button=""
          image={sanityOpenPostionPage.heroImage.asset.gatsbyImageData}
        />
      </div>
      <div
        className="bg-white max-w-1200 mx-auto lg:grid xl:pl-25 sm:px-12 lg:pr-0 px-5 pt-8 pb-18 gap-x-12"
        style={{ gridTemplateColumns: '60% auto' }}
      >
        <StyledBlockContent blocks={sanityOpenPostionPage._rawJobDescription} />
        <div>
          <div
            className="lg:mt-10 mt-20"
            dangerouslySetInnerHTML={{ __html: sanityOpenPostionPage.embed }}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Career;

async function getPositionDataServerSide(slug) {
  const response = await client.query({
    fetchPolicy: 'no-cache',
    variables: {
      slug,
    },
    query: gql`
      query($slug: String!) {
        allOpenPostionPage(where: { slug: { current: { eq: $slug } } }) {
          id: _id
          _rawJobDescription: jobDescriptionRaw
          slug {
            current
          }
          pageDescription
          pageTitle
          embed
          heroImage {
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
    `,
  });
  const pageData = response.data.allOpenPostionPage[0];

  createGatsbyImages(pageData);
  return pageData;
}

export async function getServerData(context) {
  try {
    const slug = context.pageContext.slug;
    const career = await getPositionDataServerSide(slug);
    return {
      props: {
        career,
      },
      status: 200,
    };
  } catch {
    return {
      status: 500,
    };
  }
}
