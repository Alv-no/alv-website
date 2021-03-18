import React from 'react';
import Layout from '../layout';
import { graphql } from 'gatsby';
import { NavyIntro } from '../components/navyIntro';
import { Overview } from '../components/overview';
import { ServicesNav } from '../components/servicesNav';
import { WhatWeDo } from '../components/whatWeDo';

const Category = ({ data }) => {
  const nav = [
    { label: 'Oversikt', id: 'oversikt' },
    { label: 'Hva Gjør Vi', id: 'hva-gjor-vi' },
  ];

  const { sanityCategoryPage } = data;

  const scrollTo = (e) => {
    const element = document.getElementById(e.target.name);
    const top = element && window.scrollY + element.getBoundingClientRect().top;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  const {
    sanityCategoryPage: { pageDescription } = { pageDescription: false },
    sanityCategoryPage: { pageTitle } = { pageTitle: false },
  } = data;

  return (
    <Layout pageTitle={pageTitle} pageDescription={pageDescription}>
      <NavyIntro
        title={sanityCategoryPage.heroHeading}
        description={sanityCategoryPage.heroDescription}
        button=""
      />
      <div className="w-full bg-white sm:pb-20 pb-12 overflow-hidden tracking-wider overflow-hidden">
        <ServicesNav nav={nav} scrollTo={scrollTo} />
        <Overview
          image={
            sanityCategoryPage.heroImage
              ? sanityCategoryPage.heroImage.asset.fluid
              : null
          }
          blockContent={sanityCategoryPage._rawText || null}
        />
        {sanityCategoryPage.whatWeDo && (
          <WhatWeDo data={sanityCategoryPage.whatWeDo.process} />
        )}
        <div className="sm:mt-12 lg:mt-20" />
      </div>
    </Layout>
  );
};

export default Category;

// GraphQL Query for article content
export const query = graphql`
  query($slug: String!) {
    sanityCategoryPage(slug: { current: { eq: $slug } }) {
      slug {
        current
      }
      heroDescription
      heroHeading
      pageDescription
      pageTitle
      heroImage {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
          url
        }
      }
      _rawText
      whatWeDo {
        process {
          text
          heroImage {
            asset {
              url
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`;
