import React from 'react';
import Layout from '../layout';
import { graphql } from 'gatsby';
import { NavyIntro } from '../components/navyIntro';
import { RolesList } from '../components/rolesList';
import { Overview } from '../components/overview';
import { ServicesNav } from '../components/servicesNav';
import { BlogSlider } from '../components/blogSlider';
import { FeaturedTeam } from '../components/featuredTeam';

const Category = ({ data }) => {
  const { sanityCategoryPage } = data;

  const nav = [
    {
      label: sanityCategoryPage.overviewTitle || 'Oversikt',
      id: sanityCategoryPage.overviewTitle || 'oversikt',
    },
    { label: 'Tjenester', id: 'tjenester' },
    { label: 'Konsulenter', id: 'our-team' },
  ];

  const scrollTo = (e) => {
    const element = document.getElementById(e.target.name);
    const top = element && window.scrollY + element.getBoundingClientRect().top;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  const {
    sanityCategoryPage: { pageDescription } = { pageDescription: false },
    sanityCategoryPage: { pageTitle } = { pageTitle: false },
    sanityCategoryPage: { categoryTag } = { categoryTag: '' },
    sanityCategoryPage: { featuredTeam },
  } = data;

  let topFour = data.allSanityEmployee.nodes
    .filter((el) => el.tags.some((el) => el.tag === categoryTag.tag))
    .sort((a, b) => {
      if (a.experience > b.experience) {
        return -1;
      } else {
        return 1;
      }
    });

  topFour = topFour.slice(0, topFour.length > 4 ? 4 : topFour.length);

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
              ? sanityCategoryPage.heroImage.asset.gatsbyImageData
              : null
          }
          blockContent={sanityCategoryPage._rawText || null}
          id={sanityCategoryPage.overviewTitle || 'oversikt'}
        />
        {sanityCategoryPage.servicesListText && (
          <div className="mt-12">
            <RolesList
              text={sanityCategoryPage.servicesListText}
              image={sanityCategoryPage.servicesListImage.asset.gatsbyImageData}
              roles={data.allSanityServices.edges}
            />
          </div>
        )}
        <div className="sm:mt-12 lg:mt-20" />
        <div className="max-w-1200 mx-auto">
          {sanityCategoryPage.featuredTeam && (
            <FeaturedTeam
              team={featuredTeam[0] ? featuredTeam : topFour}
              notransparent
            />
          )}
        </div>
        <BlogSlider blueText color={'navy'} />
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
      categoryTag {
        tag
      }
      heroImage {
        asset {
          gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
          url
        }
      }
      overviewTitle
      featuredTeam {
        firstname
        lastname
        experience
        title
        id
        image {
          asset {
            url
            gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
          }
        }
      }
      servicesListImage {
        asset {
          url
          gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
        }
      }
      servicesListText
      _rawText
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
    allSanityEmployee {
      nodes {
        firstname
        lastname
        experience
        title
        id
        tags {
          tag
        }
        image {
          asset {
            url
            gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;
