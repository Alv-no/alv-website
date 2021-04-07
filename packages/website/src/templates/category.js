import React from 'react';
import Layout from '../layout';
import { graphql } from 'gatsby';
import { NavyIntro } from '../components/navyIntro';
import { RolesList } from '../components/rolesList';
import { Overview } from '../components/overview';
import { ServicesNav } from '../components/servicesNav';
import { FeaturedTeam } from '../components/featuredTeam';
import { WhatWeDo } from '../components/whatWeDo';

const Category = ({ data }) => {
  const { sanityCategoryPage } = data;

  const nav = [
    { label: 'Oversikt', id: 'oversikt' },
    { label: 'Hva Gjør Vi', id: 'hva-gjor-vi' },
    { label: 'Tjenester', id: 'tjenester' },
    { label: 'Vårt Team', id: 'our-team' },
  ];

  const scrollTo = (e) => {
    const element = document.getElementById(e.target.name);
    const top = element && window.scrollY + element.getBoundingClientRect().top;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  const {
    sanityCategoryPage: { pageDescription } = { pageDescription: false },
    sanityCategoryPage: { pageTitle } = { pageTitle: false },
    sanityCategoryPage: { headingSplit } = { headingSplit: {} },
  } = data;

  const mobileHeading = headingSplit ? headingSplit.split : false;

  return (
    <Layout pageTitle={pageTitle} pageDescription={pageDescription}>
      <NavyIntro
        title={sanityCategoryPage.heroHeading}
        description={sanityCategoryPage.heroDescription}
        button=""
        headingSplit={mobileHeading}
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
        {sanityCategoryPage.servicesListText && (
          <div className="mt-12">
            <RolesList
              text={sanityCategoryPage.servicesListText}
              image={sanityCategoryPage.servicesListImage.asset.fluid}
              roles={data.allSanityServices.edges}
            />
          </div>
        )}
        {sanityCategoryPage.whatWeDo && (
          <WhatWeDo data={sanityCategoryPage.whatWeDo.process} />
        )}
        <div className="sm:mt-12 lg:mt-20" />
        <div className="max-w-1200 mx-auto">
          {sanityCategoryPage.featuredTeam && (
            <FeaturedTeam
              team={sanityCategoryPage.featuredTeam}
              notransparent
            />
          )}
        </div>
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
      headingSplit {
        split
      }
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
      featuredTeam {
        firstname
        lastname
        experience
        title
        id
        image {
          asset {
            url
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
      servicesListImage {
        asset {
          url
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
      servicesListText
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
    allSanityServices(
      filter: { parentPage: { slug: { current: { eq: $slug } } } }
    ) {
      edges {
        node {
          heroHeading
          parentPage {
            slug {
              current
            }
          }
          slug {
            current
          }
        }
      }
    }
  }
`;
