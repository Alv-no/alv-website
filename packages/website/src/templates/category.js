import { graphql } from 'gatsby';
import React from 'react';
import {
  BlockContent,
  Container,
  FeaturedTeam,
  NavyIntro,
} from 'shared-components';
import { BlogCarousel } from '../components/blogCarousel';
import Layout from '../components/layout';
import { Overview } from '../components/overview';
import { RolesList } from '../components/rolesList';
import { ServicesNav } from '../components/servicesNav';
import TestimonialSlider from '../components/testimonialsSlider';
import { useBlogQueryRecent } from '../hooks/useBlogQueryRecent';
import { useLayoutQuery } from '../hooks/useLayoutQuery';
import configuration from '../config';

const Category = ({ data }) => {
  const { sanityCategoryPage } = data;
  const layoutData = useLayoutQuery();

  const nav = [
    { label: 'Oversikt', id: 'oversikt' },
    { label: 'Tjenester', id: 'tjenester' },
    { label: 'Konsulenter', id: 'konsulentene' },
  ];

  const scrollTo = (e) => {
    const element = document.getElementById(e.target.name);
    const top = element && window.scrollY + element.getBoundingClientRect().top;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  const {
    sanityCategoryPage: { pageDescription } = { pageDescription: false },
    sanityCategoryPage: { pageTitle } = { pageTitle: false },
    sanityCategoryPage: { featuredTeam },
    sanityCategoryPage: { testimonialSlider },
  } = data;

  const recentArticles = useBlogQueryRecent().articles.nodes;

  const blogCarouselArticles =
    data.sanityCategoryPage?.blogCarousel?.selectedArticles || recentArticles;

  return (
    <Layout
      whiteIcons
      layoutData={layoutData}
      pageTitle={pageTitle}
      pageDescription={pageDescription}
    >
      <NavyIntro
        title={sanityCategoryPage.heroHeading}
        description={sanityCategoryPage.heroDescription}
      />
      <Container removePaddingBottom>
        <ServicesNav nav={nav} scrollTo={scrollTo} />
      </Container>
      <Container>
        <Overview
          image={
            sanityCategoryPage.heroImage
              ? sanityCategoryPage.heroImage.asset.gatsbyImageData
              : null
          }
          id="oversikt"
        >
          <BlockContent
            blocks={sanityCategoryPage._rawText || null}
            config={configuration}
          />
        </Overview>
      </Container>
      {sanityCategoryPage.servicesListText && (
        <Container theme="gray">
          <RolesList
            categoryName={sanityCategoryPage.heroHeading}
            image={sanityCategoryPage.servicesListImage.asset.gatsbyImageData}
            roles={data.allSanityServices.edges}
          />
        </Container>
      )}
      {sanityCategoryPage.featuredTeam && (
        <Container>
          <FeaturedTeam team={featuredTeam} notransparent />
        </Container>
      )}

      <BlogCarousel articles={blogCarouselArticles} />
      {testimonialSlider && (
        <Container>
          <TestimonialSlider {...testimonialSlider} />
        </Container>
      )}
    </Layout>
  );
};

export default Category;

// GraphQL Query for article content
export const query = graphql`
  query($slug: String!) {
    sanityCategoryPage(slug: { current: { eq: $slug } }) {
      testimonialSlider {
        heading
        testimonials {
          bio
          company
          name
          _rawBody
          image {
            asset {
              gatsbyImageData
            }
          }
        }
      }
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
      testimonialSlider {
        heading
        testimonials {
          bio
          company
          name
          _rawBody
          image {
            asset {
              gatsbyImageData
            }
          }
        }
      }
      blogCarousel {
        selectedArticles {
          slug {
            current
          }
          id
          title
          mainImage {
            asset {
              url
              gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
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
