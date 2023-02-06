import { gql } from '@apollo/client';
import React from 'react';
import { BlockContent } from 'shared-components';
import { NavyIntro } from '../../../../shared-components/src/components/navyIntro';
import ApplyForm from '../../components/applyForm';
import Layout from '../../components/layout';
import configuration from '../../config';
import { useLayoutQuery } from '../../hooks/useLayoutQuery';
import { client } from '../../server-side/client';
import { createGatsbyImages } from '../../server-side/imageCreator';

const Career = ({ serverData }) => {
  const layoutData = useLayoutQuery();

  const {
    pageTitle,
    pageDescription,
    heroImage,
    formHeader,
    formDescription,
    _rawJobDescription,
  } = serverData;

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
          image={heroImage.asset.gatsbyImageData}
        />
      </div>
      <div
        className="bg-white max-w-1200 mx-auto lg:grid sm:px-12 lg:pr-0 pt-12 lg:pb-18 sm:pb-8 gap-x-12"
        style={{
          gridTemplateColumns: '55% minmax(min-content, 500px)',
        }}
      >
        <div className="px-5">
          <BlockContent blocks={_rawJobDescription} config={configuration} />
        </div>
        <div>
          <div className="tracking-wider py-10 bg-[#fafafb] px-8 mt-6 lg:mt-0">
            <h2 className="text-xl font-bold mb-4 uppercase mb-4">
              {formHeader}
            </h2>
            <p className="mb-6">{formDescription}</p>
            <ApplyForm jobTitle={pageTitle} />
          </div>
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
          formHeader
          formDescription
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
    const slug = context.params['slug'];
    const career = await getPositionDataServerSide(slug);

    return {
      props: career,
      status: 200,
    };
  } catch {
    return {
      status: 500,
    };
  }
}
