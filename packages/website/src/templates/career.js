import React from 'react';
import { Layout } from '../components/layout';
import { graphql } from 'gatsby';
import { NavyIntro } from '../../../shared-components/src/components/navyIntro';
import { StyledBlockContent } from '../components/styledBlockContent';

const Career = ({ data }) => {
  const { sanityOpenPostionPage } = data;

  const {
    sanityOpenPostionPage: { pageDescription } = { pageDescription: false },
    sanityOpenPostionPage: { pageTitle } = { pageTitle: false },
  } = data;

  return (
    <Layout whiteIcons pageTitle={pageTitle} pageDescription={pageDescription}>
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

// GraphQL Query for article content
export const query = graphql`
  query($slug: String!) {
    sanityOpenPostionPage(slug: { current: { eq: $slug } }) {
      id
      _rawJobDescription
      slug {
        current
      }
      pageDescription
      pageTitle
      embed
      heroImage {
        asset {
          url
          gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
        }
      }
    }
  }
`;
